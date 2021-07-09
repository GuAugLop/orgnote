import React, { ReactNode } from "react";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = RectButtonProps & {
  children: ReactNode;
  saved?: boolean;
};

export const Button = ({ children, saved = false, ...rest }: Props) => {
  return (
    <RectButton
      style={[
        styles.container,
        {
          backgroundColor: saved
            ? theme.colors.primary
            : theme.colors.secondary,
        },
      ]}
      {...rest}
    >
      {children}
    </RectButton>
  );
};
