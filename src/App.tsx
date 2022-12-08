import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterApp } from "./routes";
import { NextUIProvider } from '@nextui-org/react'
import { darkTheme, lightTheme } from "./assets/themes";
import { useTheme } from "./state";
import { LayoutMain, Toast } from "./components";
import { client } from './assets/query-client';

export const App = () => {
  const { isLight } = useTheme();

  return (
    <QueryClientProvider client={client}>
      <NextUIProvider theme={isLight ? lightTheme : darkTheme}>
        <LayoutMain>
          <RouterApp />
        </LayoutMain>
        <Toast />
      </NextUIProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}