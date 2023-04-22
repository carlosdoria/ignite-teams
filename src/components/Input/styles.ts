import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  min-height: 56px;
  max-height: 56px;

  flex: 1;

  padding: 16px;

  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
