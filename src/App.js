import './App.css';


function Ola(props){
  return <h1>Olá, {props.name}</h1>
}

function App() {
  return (
     <div>
      <Ola name="João"/>
     </div>
  );
}

export default App;
