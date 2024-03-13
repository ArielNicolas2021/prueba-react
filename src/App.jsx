import { useFetch } from "./useFetch"
import './App.css'

function App() {
  const { data } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
  return(
    <div className="container">
      <h1>PokeDex!</h1>
      <div className="content">
        <p> {data[0].name} </p>
      </div>
    </div>
  )
}

export default App
