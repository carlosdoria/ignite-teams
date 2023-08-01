import React, { useState } from "react";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { Container } from "./styles";
import { getAllGroups } from "@storage/group/getAllGroups";
import { Loading } from "@components/Loading";
export function Groups() {
  const navigation = useNavigation();

  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

  const fetchGroups = async () => {
    try {
      setIsLoading(true);
      const storaredGroups = await getAllGroups();
      setGroups(storaredGroups);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenGroup = (group: string) => {
    navigation.navigate("players", { group });
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
          <FlatList
            data={groups}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
            )}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            ListEmptyComponent={
              <ListEmpty message="Cadraste a primeira turma" />
            }
          />

          <Button title="Criar nova turma" onPress={handleNewGroup} />
        </>
      )}
    </Container>
  );
}
