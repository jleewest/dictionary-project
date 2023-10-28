import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';
import Results from './Results';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className='Dictionary'>
      <section>
        <h1>What would you like to look up?</h1>
        <form onSubmit={search}>
          <input
            type='search'
            onChange={handleKeywordChange}
            placeholder='Suggestions: sunset, rafting, yoga, coding'
          />
        </form>
        <Results results={results} />
      </section>
    </div>
  );
}
