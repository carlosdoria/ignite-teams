import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";

type PlayersProps = {};
type IRouteParams = {
  group: string;
};

export function Players({}: PlayersProps) {
  const route = useRoute();
  const { group } = route?.params as IRouteParams;

  const [selectedTeam, setSelectedTeam] = useState("Time A");
  const [filters, setFilters] = useState(["Time A", "Time B"]);
  const [players, setPlayerss] = useState(["Rodrigo ", "Vini"]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={group}
        subtitle="adicionar a galera e separa os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={filters}
          horizontal
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === selectedTeam}
              onPress={() => setSelectedTeam(item)}
            />
          )}
        />

        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length >= 0 && { flex: 1 },
        ]}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
}
