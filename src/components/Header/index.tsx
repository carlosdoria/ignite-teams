import { BackButton, BackIcon, Container, Logo } from "./styles";
import { useTheme } from "styled-components/native";

import logoImg from "@assets/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const theme = useTheme();

  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon size={32} color={theme.COLORS.WHITE} />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
