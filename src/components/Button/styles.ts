import styled from "styled-components/native";
import { ButtonTypeProps } from ".";
import { TouchableOpacity } from "react-native";

type ContainerProps = {
  type: ButtonTypeProps;
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  max-height: 56px;
  min-height: 56px;

  flex: 1;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  background-color: ${({ theme, type }) =>
    type == "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
