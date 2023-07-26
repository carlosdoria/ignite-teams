import { BackButton, BackIcon, Container, Logo } from "./styles";
import { useTheme } from "styled-components/native";

import logoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("groups");
  };

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon size={32} color={theme.COLORS.WHITE} />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
