import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { FilterProps } from ".";
import { css } from "styled-components";

type ContainerProps = Pick<FilterProps, "isActive">;

export const Container = styled(TouchableOpacity)<ContainerProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}

  height: 38px;
  width: 70px;
  margin-right: 12px;

  align-items: center;
  justify-content: center;

  border-radius: 4px;
`;

export const Title = styled.Text`
  ${({ theme }) =>
    css`
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.WHITE};
      text-transform: uppercase;
    `}
`;
