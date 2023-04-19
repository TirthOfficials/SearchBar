import React, { useState } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  handleSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    setShowHistory(true);

    if (newQuery === "") {
      setShowHistory(false);
    }
  };

  const handleSearchClick = () => {
    if (query.trim() !== "") {
      handleSearch(query);
      setHistory((prevHistory) => [query, ...prevHistory]);
      setQuery("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  const handleHistoryItemClick = (historyItem: string) => {
    setQuery(historyItem);
    setShowHistory(false);
  };

  const handleClearHistoryClick = () => {
    setHistory([]);
  };

  return (
    <div className="search-bar-container">
      <h1>Welcome to GritChat!</h1>
      <div className="search-bar-input-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Search GritChat"
        />
        {showHistory && (
          <ul className="search-history-dropdown">
            {history
              .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
              .map((item, index) => (
                <li className="dropdown-item" key={index}>
                  <button
                    className="history-item"
                    onClick={() => handleHistoryItemClick(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            {/* {history.length > 0 && (
              <li className="dropdown-item">
                
              </li>
            )} */}
          </ul>
        )}
      </div>
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
      <button className="clear-history" onClick={handleClearHistoryClick}>
                  Clear history
                </button>
    </div>
  );
};

export default SearchBar;
