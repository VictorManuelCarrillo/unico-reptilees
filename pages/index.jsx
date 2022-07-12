// Layout component
import Layout from '../components/06-layout/user/Layout'
// MUI components
import {
  Box,
  Grid,
  Typography,
  useTheme,
  } from '@mui/material';
// Next components
import Image from 'next/image';

export default function Home() {

  // useTheme function
  const theme = useTheme();

  return (
    <Layout>

  {/* Banner section ____________________ */}
      <Box component='section'>

        <Grid container>

          {/* Banner image & logo __________ */}
          <Grid item xs={12} lg={5}
            sx={{ minHeight: '50vh'}}>

            <Image
              src='/images/home/logo.png'
              alt='unico reptiles venta legal de especies exóticas en mexico guadalajara jalisco'
              width={960}
              height={960}
              layout='responsive'/>
          </Grid>

          {/* Banner Text __________ */}
          <Grid item xs={12} lg={7}>

            <Box sx={{ display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              minHeight: '50vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: `url('/images/home/banner.png')`}}>

              <Typography variant='h5' color='textPrimary' fontWeight='bold' textAlign='center' sx={{ mb: 4 }}>
                CON NOSOTROS SÉ DIFERENTE,
                <br />
                SE ORIGINAL SÉ ...
              </Typography>
              <Typography variant='h1' color='textPrimary' fontWeight='bold' textAlign='center'>
                ÚNICO REPTILES
              </Typography>
              <Typography variant='caption' color='textPrimary' textAlign='center'>
                comercializadora de fáuna exótica legal abalada por SEMARNAT
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </Layout>
  )
}
