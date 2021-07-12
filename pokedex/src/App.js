import { useEffect, useState } from "react"


function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=200')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    console.log(data)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])



  return (
    <div className="app-container">
        <h1>Feirão do Pokemon</h1>
        <div className="pokemon-container">
          <div className="all-container">

          </div>
          <button className="load-more">Load more</button>
        </div>
    </div>
  );
}

export default App;
