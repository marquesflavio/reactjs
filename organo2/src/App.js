
import './App.css';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';


function App() {

  // const cards = [
  //   {
  //     nome: 'Aventura',
  //     corPrimaria: '#57C278',
  //     corSecundaria: '#D9F7E9'
  //   }, 
  //   {
  //     nome: 'Fantasia',
  //     corPrimaria: '#82CFFA',
  //     corSecundaria: '#E8F8FF'
  //   }, 
  //   {
  //     nome: 'Ficção Científica',
  //     corPrimaria: '#A6D157',
  //     corSecundaria: '#F0F8E2'
  //   }, 
  //   {
  //     nome: 'Investigação',
  //     corPrimaria: '#E06B69',
  //     corSecundaria: '#FDE7E8'
  //   }, 
  //   {
  //     nome: 'Suspense',
  //     corPrimaria: '#DB6EBF',
  //     corSecundaria: '#FAE9F5'
  //   }
  // ]

  return(
    <div>
      <Banner />
      <Formulario />
    </div>

  )
    
}

export default App;
