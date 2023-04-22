import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { useTheme } from "styled-components";

type NewGroupProps = {};

export function NewGroup({}: NewGroupProps) {
  const theme = useTheme();

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon size={56} color={theme.COLORS.GREEN_700} />

        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar pessoas"
        />

        <Button title="Criar turma" />
      </Content>
    </Container>
  );
}
