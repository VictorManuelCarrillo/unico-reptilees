// Layout component
import Layout from '../../components/06-layout/user/Layout';
// MUI components
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  } from '@mui/material';
// MUI icons
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
// components
import PrimaryBtn from '../../components/01-inputs/button/PrimaryBtn';

export default function Animal() {

  return (

    <Layout>

      <Box component='section'>

        <Container maxWidth='lg'>

          <Grid container>

            <Grid item xs={12} lg={8}></Grid>
            <Grid item xs={12} lg={4}>

              <Paper elevation={9} sx={{ px: 2, py: 4, color: 'white', bgcolor: 'surface.primary' }}>

                <Typography variant='h6' textTransform='uppercase' fontWeight='bold'>boa esmeralda</Typography>
                <Divider sx={{ mt: 2, mb: 1, borderColor:'white'}}/>

                <Typography>Boa esmeralda adulta reproductora mudando y comiendo a la perfección</Typography>

                <Box component='div' sx={{ my: 6 }}>

                  <Typography variant='body2'><strong>FASE:</strong> nominal HT black</Typography>
                  <Typography variant='body2'><strong>EDAD:</strong> adulta</Typography>
                  <Typography variant='body2'><strong>SEXO:</strong> hembra</Typography>
                </Box>

                <Box>

                  <Typography variant='h2'>$ 3500</Typography>
                  <Typography variant='caption' sx={{ ml: 4, color: '#3deb34' }}>
                    a <strong>12 meses sin intereses</strong>
                  </Typography>

                  <Box component='div' sx={{ display: 'flex', pt: 4, color: '#348feb'}}>
                    <LocalShippingIcon />
                    <Typography sx={{ ml: 1 }}>Envío gratis a todo el país</Typography>
                  </Box>

                  <Box component='div' sx={{ display: 'flex', pt: 2, color: '#348feb'}}>
                    <InventoryIcon />
                    <Typography sx={{ ml: 1 }}>Garantía de llegada en 20 días</Typography>
                  </Box>

                  <Box sx={{ py: 8, display: 'flex', justifyContent: 'center'}}>

                    <PrimaryBtn text='comprar ahora' href='/'/>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}