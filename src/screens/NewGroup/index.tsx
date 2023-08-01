import { useState } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";

import { Container, Content, Icon } from "./styles";
import { createGroup } from "@storage/group/createGroup";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

type NewGroupProps = {};

export function NewGroup({}: NewGroupProps) {
  const theme = useTheme();
  const navigation = useNavigation();
  const [newGroupState, setNewGroupState] = useState("");

  const handleNewGroup = async () => {
    try {
      if (newGroupState.trim().length === 0) {
        return Alert.alert("Nova turma", "Informe um nome válido.");
      }

      await createGroup(newGroupState);

      navigation.navigate("players", { group: newGroupState });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova turma", error.message);
      } else {
        Alert.alert("Nova turma", "Não foi possivel criar uma nova turma.");
      }
    }
  };

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon size={56} color={theme.COLORS.GREEN_700} />

        <Highlight
          title="Nova turma"
          subtitle="Crie uma turma para adicionar jogadores"
        />

        <Input
          placeholder="Nome da turma"
          value={newGroupState}
          onChangeText={setNewGroupState}
          style={{
            marginBottom: 16,
          }}
        />

        <Button title="Criar turma" onPress={handleNewGroup} />
      </Content>
    </Container>
  );
}
