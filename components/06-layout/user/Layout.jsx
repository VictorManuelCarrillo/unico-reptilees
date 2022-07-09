// MUI theming
import { createTheme, ThemeProvider } from '@mui/material';
// MUI colors
import {
  red,
  } from '@mui/material/colors'
// Next component
import Head from 'next/head';
// React component
import { Fragment } from 'react';
// components
import NavBar from '../../04-surfaces/user/appbar/NavBar'

const userTheme = createTheme( {

  palette: {

    primary: {

      main: red['A700'],
    },

    secondary: {

      main: red[500],
    },
  }
});
const Layout = ( { children, title, description}) => {

  return (

    <ThemeProvider theme={ userTheme}>

      <Fragment>

  {/* Head component ____________________ */}
        <Head>

          <title>Único Reptiles | { title}</title>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
          <meta name='description' content={ description} />
        </Head>
        <NavBar />
        { children}
      </Fragment>
    </ThemeProvider>
  )
};

export default Layout;

Layout.defaultProps = {

  title: 'Venta legal de especies exóticas en México',
  description: 'Somos una empresa dedicada a la venta legal de especies exóticas en todo México, conócenos y sal de la rutina. Sé diferente, sé original. Séúnico reptiles',
}