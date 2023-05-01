import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

type PlayersProps = {};

export function Players({}: PlayersProps) {
  return (
    <Container>
      <Header />

      <Highlight
        title="Nome da turma"
        subtitle="adicionar a galera e separa os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </Form>
    </Container>
  );
}
