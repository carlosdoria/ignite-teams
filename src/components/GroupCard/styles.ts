import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { UsersThree } from "phosphor-react-native";
import { css } from "styled-components";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  margin-bottom: 12px;
  padding: 24px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    text-align: center;

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Icon = styled(UsersThree)`
  margin-right: 20px;
`;
