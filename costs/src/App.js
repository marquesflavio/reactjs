import './App.css';
import HelloWord from './components/HelloWord';
import Frase from './components/Frase'
import Pessoa from './components/Pessoa';
import Pessoa2 from './components/Pessoa2';


function App() {
  const name = 'Flávio'

  function sum(a,b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Introdução ao JSX</h1>
      <p>Olá, {name}</p>
      <p>Soma: {sum(3,8)}</p>
      <img src={url} alt='Minha Imagem' />
      
      <HelloWord />
      <Frase qualquercoisa='Fulano' />
      <Frase qualquercoisa='Flávio'/> {/*O "qualquercoisa" serve de propriedade para o props */}
      <Frase qualquercoisa='Nome' />

      <Pessoa 
        nome='Flávio'
        idade='30'
        profissao='programador'
        foto='https://via.placeholder.com/150'
        />

      <Pessoa2 
        nome='Flávio'
        idade='30'
        profissao='Programador'
        foto='https://via.placeholder.com/150' 
        />
    </div>

  );
}

export default App;
