import React from "react";
import { WelcomeScreen } from "../../packages/excalidraw/index";

export const AppWelcomeScreen: React.FC<{
  setCollabDialogShown: (toggle: boolean) => any;
  isCollabEnabled: boolean;
}> = React.memo((props) => {
  return (
    <WelcomeScreen>
      <WelcomeScreen.Center>
        <span></span>
      </WelcomeScreen.Center>
    </WelcomeScreen>
  );
});
