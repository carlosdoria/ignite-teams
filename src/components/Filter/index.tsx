import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

export type FilterProps = TouchableOpacityProps & {
  title: string;
  isActive?: boolean;
};

export function Filter({ title, isActive, ...props }: FilterProps) {
  return (
    <Container isActive={isActive} {...props}>
      <Title>{title}</Title>
    </Container>
  );
}
