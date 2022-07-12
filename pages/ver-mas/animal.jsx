// Layout component
import Layout from '../../components/06-layout/user/Layout';
// MUI components
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  Card,
  CardMedia,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  Breadcrumbs,
  Link,
  } from '@mui/material';
import { styled } from '@mui/material/styles';
// MUI icons
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// Next component
import Image from 'next/image';
// components
import PrimaryBtn from '../../components/01-inputs/button/PrimaryBtn';
import SecondaryBtn from '../../components/01-inputs/button/SecondaryBtn';
import ShareBtn from '../../components/01-inputs/button/ShareBtn';

const StyledTableRow = styled( TableRow)( ( { theme}) => ({
  backgroundColor: theme.palette.surface.tertiary,
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.surface.secondary,
  },
}));

const StyledTableCell = styled( TableCell)( {

  color:'white',
  border: 0,
});

export default function Animal() {

  return (

    <Layout>

      <Box component='section'>

        <Container maxWidth='lg'>

          <Grid container spacing={2} sx={{ py: 4 }}>

            <Grid item xs={12} lg={12}>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

  {/* Breadbrumbs ____________________ */}
                <Box>

                  <Link underline='hover' sx={{ color: 'white', cursor: 'pointer', mr: 2 }}>Volver a Disponibles</Link>

                  <Breadcrumbs aria-label='breadcrumb' separator='/' sx={{ color: 'buttons.link.main', '& .MuiBreadcrumbs-separator': {color: 'white'} }}>

                    <Link underline='hover' color='inherit' href='/'>Dsiponible</Link>
                    <Link underline='hover' color='inherit' href='/'>Serpientes</Link>
                    <Link underline='hover' color='inherit' href='/'>Boas</Link>
                  </Breadcrumbs>
                </Box>

  {/* Share button ____________________ */}
                <Box>

                  <ShareBtn />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} lg={8}>

              <Card elevation={9}>

                <CardMedia
                  component='img'
                  image='/images/1.jpg'/>
              </Card>

              <Paper elevation={9} sx={{ mt: 2, px: 2, py: 4, color: 'white', bgcolor: 'surface.primary' }}>

                <Typography variant='subtitle1' sx={{ my: 2 }}><strong>Características principales</strong></Typography>

  {/* Table ____________________ */}
                <TableContainer component={Paper}>

                  <Table>

                    <TableBody>

                      <StyledTableRow>

                        <StyledTableCell><strong>Animal</strong></StyledTableCell>
                        <StyledTableCell sx={{ width: '70%'}}>Boa Esmeralda</StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>

                        <StyledTableCell><strong>Categoria</strong></StyledTableCell>
                        <StyledTableCell>Serpientes</StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>

                        <StyledTableCell><strong>Subcategoría</strong></StyledTableCell>
                        <StyledTableCell>Boas</StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>

                        <StyledTableCell><strong>Fase</strong></StyledTableCell>
                        <StyledTableCell>Nominal HT. black</StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>

                        <StyledTableCell><strong>Edad</strong></StyledTableCell>
                        <StyledTableCell>Adulta</StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>

                        <StyledTableCell><strong>Sexo</strong></StyledTableCell>
                        <StyledTableCell>Hembra</StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>

                        <StyledTableCell><strong>Alimentación</strong></StyledTableCell>
                        <StyledTableCell>Carnívoro</StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>

                        <StyledTableCell><strong>Humedad necesria</strong></StyledTableCell>
                        <StyledTableCell>60% - 90%</StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>

                        <StyledTableCell><strong>Calor necesrio</strong></StyledTableCell>
                        <StyledTableCell>29° - 32°</StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>

                        <StyledTableCell><strong>tamaño máximo</strong></StyledTableCell>
                        <StyledTableCell>2m - 2.5m</StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>

  {/* Card Information ____________________ */}
            <Grid item xs={12} lg={4}>

              <Paper elevation={9} sx={{ px: 2, py: 4, color: 'white', bgcolor: 'surface.primary' }}>

  {/* Information ____________________ */}
                <Typography variant='h6' textTransform='uppercase' fontWeight='bold'>boa esmeralda</Typography>
                <Divider sx={{ mt: 2, mb: 1, borderColor:'white'}}/>

                <Typography>Boa esmeralda adulta reproductora mudando y comiendo a la perfección</Typography>

                <Box component='div' sx={{ my: 2 }}>

                  <Typography variant='body2'><strong>FASE:</strong> nominal HT black</Typography>
                  <Typography variant='body2'><strong>EDAD:</strong> adulta</Typography>
                  <Typography variant='body2'><strong>SEXO:</strong> hembra</Typography>
                </Box>

  {/* Price ____________________ */}
                <Box>

                  <Typography variant='h2'>$ 3500</Typography>
                  <Typography variant='caption' sx={{ ml: 4, color: '#3deb34' }}>
                    a <strong>12 meses sin intereses</strong>
                  </Typography>

  {/* Shipping ____________________ */}
                  <Box component='div' sx={{ display: 'flex', pt: 4, color: '#348feb'}}>
                    <LocalShippingIcon />
                    <Typography sx={{ ml: 1 }}>Envío gratis a todo el país</Typography>
                  </Box>

                  <Box component='div' sx={{ display: 'flex', pt: 2, color: '#348feb'}}>
                    <InventoryIcon />
                    <Typography sx={{ ml: 1 }}>Garantía de llegada en 20 días</Typography>
                  </Box>

  {/* Actions buttons ____________________ */}
                  <Box sx={{ pt: 4, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column' }}>

                    <PrimaryBtn text='comprar ahora' size='large' href='/'/>
                    <br />
                    <SecondaryBtn text='pídenos informes' endIcon={ <WhatsAppIcon />} href='/'/>
                  </Box>

                  <Divider sx={{ mt: 2, mb: 1, borderColor:'white'}}/>

  {/* Garanty ____________________ */}
                  <Box component='div' sx={{ py: 2 }}>

                    <Typography variant='h5'>Garantía</Typography>
                    <br />
                    <br />
                    <Typography>Garantía de vida</Typography>
                    <Typography variant='body2'>Garantía de vida del ejemplar de 5 meses</Typography>
                    <br />
                    <br />
                    <Typography>Garantía de de entrega</Typography>
                    <Typography variant='body2'>Recibe ell ejemplar en buenas condiciones y bajo los parámetros adecuados</Typography>

                    <Button
                      variant='text'
                      sx={{
                        mt: 4,
                        color: '#348feb',
                        fontSize: '0.6em',
                        '&:hover': {
                          bgcolor: 'transparent'
                        }}}>
                      Conoce más sobre la garantía
                    </Button>
                  </Box>

                  <Divider sx={{ borderColor:'white'}}/>

  {/* Medios de pago ____________________ */}
                  <Box component='div' sx={{ py: 2 }}>

                    <Typography variant='h5'>Medios de pago</Typography>

                    <Typography variant='caption'>tarjetas de débito</Typography>
                    <br />
                    <br />
  {/* Images medios de pago ____________________ */}
                    <Grid container spacing={2} sx={{ px: 2 }}>

                      <Grid item lg={2}>

                        <Image
                          src='/images/pago/clip.png'
                          alt='mercado pago'
                          width={300}
                          height={300}
                          layout='responsive'/>
                      </Grid>

                      <Grid item lg={2}>

                        <Image
                          src='/images/pago/american-express.png'
                          alt='mercado pago'
                          width={2052}
                          height={2048}
                          layout='responsive'/>
                      </Grid>

                      <Grid item lg={2}>

                        <Image
                          src='/images/pago/mercado-pago.png'
                          alt='mercado pago'
                          width={840}
                          height={259}
                          layout='responsive'/>
                      </Grid>

                      <Grid item lg={2}>

                        <Image
                          src='/images/pago/master-card.png'
                          alt='mercado pago'
                          width={920}
                          height={480}
                          layout='responsive'/>
                      </Grid>

                      <Grid item lg={2}>

                        <Image
                          src='/images/pago/visa.png'
                          alt='mercado pago'
                          width={1280}
                          height={720}
                          layout='responsive'/>
                      </Grid>
                    </Grid>

                    <Typography variant='caption'>tarjetas de crédito</Typography>
                    <br />
                    <br />
                    <Grid container spacing={2} sx={{ px: 2 }}>

                      <Grid item lg={2}>

                        <Image
                          src='/images/pago/clip.png'
                          alt='mercado pago'
                          width={300}
                          height={300}
                          layout='responsive'/>
                      </Grid>

                      <Grid item lg={2}>

                        <Image
                          src='/images/pago/american-express.png'
                          alt='mercado pago'
                          width={2052}
                          height={2048}
                          layout='responsive'/>
                      </Grid>

                      <Grid item lg={2}>

                        <Image
                          src='/images/pago/mercado-pago.png'
                          alt='mercado pago'
                          width={840}
                          height={259}
                          layout='responsive'/>
                      </Grid>

                      <Grid item lg={2}>

                        <Image
                          src='/images/pago/master-card.png'
                          alt='mercado pago'
                          width={920}
                          height={480}
                          layout='responsive'/>
                      </Grid>

                      <Grid item lg={2}>

                        <Image
                          src='/images/pago/visa.png'
                          alt='mercado pago'
                          width={1280}
                          height={720}
                          layout='responsive'/>
                      </Grid>
                    </Grid>
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