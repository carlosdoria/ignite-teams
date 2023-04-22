import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

export type ButtonTypeProps = "PRIMARY" | "SECONDARY";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeProps;
};

export function Button({ title, type = "PRIMARY", ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
