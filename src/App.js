
import './App.css';
import { useState } from 'react';
import SearchBar from "./SearchBar";

function App() {
    
    const [query, setQuery] = useState('');
  const [history, setHistory] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      setHistory((prevHistory) => [query.trim(), ...prevHistory]);
      setQuery('');
      
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
  };
    return (
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
       >
        
            <SearchBar
        query={query}
        history={history}
        handleInputChange={handleInputChange}
        handleKeyPress={handleKeyPress}
        handleSearch={handleSearch}
        handleClearHistory={handleClearHistory}
      />
        </div>
        
        
    );
}



export default App;