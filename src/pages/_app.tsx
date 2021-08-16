import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import store from "../store"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}
export default MyApp
