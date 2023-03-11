import './App.css';
import HelloWord from './components/HelloWord';
import Frase from './components/Frase'
import Pessoa from './components/Pessoa';
import Pessoa2 from './components/Pessoa2';
import Fragmentos from './components/Fragmentos';
import List from './components/List';
import Evento from './components/Evento';
import EventoForm from './components/EventoForm';


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
        idade={30} // passando number, tem que ser nessa sintaxe
        profissao='programador'
        foto='https://via.placeholder.com/150'
        />

      <Pessoa2 
        nome='Flávio'
        idade={30}
        profissao='Programador'
        foto='https://via.placeholder.com/150' 
        />
      <Fragmentos />
      <List />

      <Evento numero='1' />
      <Evento numero='2' />
      <EventoForm />
    </div>

  );
}

export default App;
