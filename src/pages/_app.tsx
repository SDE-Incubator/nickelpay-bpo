import type {AppProps} from 'next/app'
import {QueryClient, Hydrate, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {ThemeProvider} from 'styled-components'
import GlobalStyles from '../styles/globalStyles'
import theme from '../styles/theme'
import {SideBar} from '../components/sideBar/sideBar.component'

const queryClient = new QueryClient()

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            {/* <SideBar /> */}
            <Component {...pageProps} />
            <ReactQueryDevtools />
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}
