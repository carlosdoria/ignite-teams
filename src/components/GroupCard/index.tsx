import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Icon, Title } from "./styles";

type HighlightProps = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: HighlightProps) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <Icon size={32} color={theme.COLORS.GREEN_500} weight="fill" />

      <Title>{title}</Title>
    </Container>
  );
}
