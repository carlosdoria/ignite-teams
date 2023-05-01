import styled, { css } from "styled-components/native";
import { ButtonIconTypeProps } from ".";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type IconProps = {
  type: ButtonIconTypeProps;
};

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  margin-left: 12px;

  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs<IconProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  })
)``;
