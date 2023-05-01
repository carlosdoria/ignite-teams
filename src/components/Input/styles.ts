import styled from "styled-components/native";
import { TextInput } from "react-native";
import { css } from "styled-components";

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    min-height: 56px;
    max-height: 56px;

    padding: 16px;
    flex: 1;

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};

    border-radius: 6px;
    background-color: ${theme.COLORS.GRAY_700};
  `}
`;
