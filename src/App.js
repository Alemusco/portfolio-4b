import logo from './logo.svg';
import './App.css';

const TitoloCorso = ({nome,anno})=>{
  console.log('Nome: ',nome);
  console.log('Anno: ',anno);
  return(
    <>
    <h1>{`Corso ${nome} ${anno}`}</h1>
    </>
  )
}

function App() {
  const corsi = [{
    'id': 1,
    'nome': 'React',
    'anno': '2k23'
  },
  {
    'id': 2,
    'nome': 'Flutter',
    'anno': '2k22'
  },
  {
    'id': 3,
    'nome': 'Angular',
    'anno' : '2k24'
  }]

  return (
    <div className="App">
      {
        corsi.map((corso)=>{
          return <TitoloCorso nome={corso.nome} anno ={corso.anno}/> 
        })
      }
      
    </div>
  );
}

export default App;
