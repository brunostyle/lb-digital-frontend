import { BrowserRouter } from "react-router-dom";
import { RouterApp } from "./routes";
import { NextUIProvider } from '@nextui-org/react'
import { darkTheme, lightTheme } from "./assets/themes";
import { useTheme } from "./state";

export const App = () => {
  const { isLight } = useTheme();
  return (
    <BrowserRouter>
      <NextUIProvider theme={isLight ? lightTheme : darkTheme}>
        <RouterApp />
      </NextUIProvider>
    </BrowserRouter>
  )
}