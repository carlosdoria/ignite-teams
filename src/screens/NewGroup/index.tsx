import { useState } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";

import { Container, Content, Icon } from "./styles";

type NewGroupProps = {};

export function NewGroup({}: NewGroupProps) {
  const theme = useTheme();
  const navigation = useNavigation();
  const [newGroupState, setNewGroupState] = useState("");

  const handleNewGroup = () => {
    navigation.navigate("players", { group: newGroupState });
  };

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon size={56} color={theme.COLORS.GREEN_700} />

        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar pessoas"
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
