import './App.css';
import { useState } from "react";
import CurrentlyRead from './CurrentlyRead';
import WantToRead from './WantToRead';
import Read from './Read';
import { SearchBar } from './SearchBar';
import { SearchResultsList } from './SearchResultList';



function App() {
  const [results, setResults] = useState([]);

  return (
    <>
    <h1 className='headline'>My Reads</h1>
    <SearchBar setResults={setResults} />
    {results && results.length > 0 && <SearchResultsList results={results} />}
    <CurrentlyRead />
    <WantToRead />
    <Read />

    </>
  );
}

export default App;
