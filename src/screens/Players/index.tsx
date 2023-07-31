import { useEffect, useState, useRef } from "react";
import { FlatList, Alert, TextInput } from "react-native";
import { useRoute } from "@react-navigation/native";

import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { addPlayerStorage } from "@storage/player/addPlayerByGroup";
import { getPlayerByGroupAndTeam } from "@storage/player/getPlayerByGroupAndTeam";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { AppError } from "@utils/AppError";

import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";

type PlayersProps = {};
type IRouteParams = {
  group: string;
};

export function Players({}: PlayersProps) {
  const route = useRoute();
  const { group } = route?.params as IRouteParams;

  const [selectedTeamState, setSelectedTeamState] = useState("Time A");
  const [filters, setFilters] = useState(["Time A", "Time B"]);
  const [playersState, setPlayersState] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerState, setNewPlayerState] = useState("");

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const handleAddPlayer = async () => {
    try {
      if (newPlayerState.trim().length === 0) {
        return Alert.alert("Novo player", "Informe um nome válido.");
      }

      const newPlayer = {
        name: newPlayerState,
        team: selectedTeamState,
      };

      await addPlayerStorage(newPlayer, group);

      newPlayerNameInputRef.current?.blur();

      setNewPlayerState("");
      fetchGetPlayerByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo player", error.message);
      } else {
        Alert.alert("Novo player", "Não foi possivel cadastrar o jogador.");
      }
    }
  };

  const fetchGetPlayerByTeam = async () => {
    try {
      const storagedPlayers = await getPlayerByGroupAndTeam(
        group,
        selectedTeamState
      );

      setPlayersState(storagedPlayers);
    } catch (error) {
      Alert.alert("Jogador", "Não foi possivel cadastrar o jogador no time.");
    }
  };

  useEffect(() => {
    fetchGetPlayerByTeam();
  }, [selectedTeamState]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={group}
        subtitle="adicionar a galera e separa os times"
      />

      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={newPlayerState}
          onChangeText={setNewPlayerState}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={filters}
          horizontal
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === selectedTeamState}
              onPress={() => setSelectedTeamState(item)}
            />
          )}
        />

        <NumbersOfPlayers>{playersState?.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={playersState}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator
        contentContainerStyle={[
          { paddingBottom: 100 },
          playersState?.length >= 0 && { flex: 1 },
        ]}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
}
