import './App.css';
import Banner from './componentes/Banner';
import Cards from './componentes/Cards';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';



function App() {

  const cards = [
    {
      nome: 'Aventura',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    }, 
    {
      nome: 'Fantasia',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    }, 
    {
      nome: 'Ficção Científica',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    }, 
    {
      nome: 'Investigação',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }, 
    {
      nome: 'Suspense',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    }
  ]

  return (
    <div className="App">
      <Banner />
      <Formulario />
      
      {cards.map(card => <Cards 
        cards={cards.nome} 
        corPrimaria={cards.corPrimaria}
        corSecundaria={cards.corSecundaria}
        key={card.nome}
      />)}
      
      <Rodape />
    </div>
  );
}

export default App;
