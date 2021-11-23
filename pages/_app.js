import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Container from '@mui/material/Container';
import { orange, white, darkBlue, mediumWhite } from '@themes/colors'
import Header from '@components/commons/Header'
import { storeWrapper } from '../store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: Montserrat;
    background: ${mediumWhite};

    main {
      display: flex;
      flex-direction: column;
      margin-bottom: 3rem;
    }
  }
`

const theme = {
  colors: {
    primary: darkBlue,
    secondary: orange,
    background: {
      default: mediumWhite,
    },
  },
}

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth="xl">
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </>
  )
}

export default storeWrapper.withRedux(App);
