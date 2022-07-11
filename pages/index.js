// Layout component
import Layout from '../components/06-layout/user/Layout'

import CardComplex from '../components/04-surfaces/user/card/CardComplex'
import PrimaryBtn from '../components/01-inputs/button/PrimaryBtn'
import SecondaryBtn from '../components/01-inputs/button/SecondaryBtn'
export default function Home() {

  return (
    <Layout>

      <div>ola</div>
      <CardComplex
        title='boa esmeralda'
        category='serpientes'
        subcategory='boas'
        subheader='serpientes'
        image='/images/1.jpg'
        morph='nominal HT. black'
        age='adulta'
        gender='macho'
        price='3500'
        description='boa esmeralda adulta reproductora en buen estado, comiendo y mudando en perfectas condiciones'
        href='/'/>
        
        <div style={{ margin: 8}}>
          <PrimaryBtn href= '/' text='primary button'/>
          <SecondaryBtn href= '/' text='primary button'/>
        </div>
    </Layout>
  )
}
