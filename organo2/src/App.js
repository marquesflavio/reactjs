import './App.css';
import Banner from './componentes/Banner';
import Cards from './componentes/Cards';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';



function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
      <Cards 
        cards='Aventura'
        
      />
      <Cards 
      cards='Fantasia'
      
      />
       <Cards 
      cards='Ficção Científica'
      
      />
       <Cards 
        cards='Investigação'
        
      />
      <Cards 
      cards='Suspense'
      
      />
      <Rodape />
    </div>
  );
}

export default App;
