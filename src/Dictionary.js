import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';
import Results from './Results';
import Photos from './Photos';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      'zU0pdCSSwxdRsuxhpPmK1eVFsdcj4ZhAY2KmdMIvKqVGC4GRzcXhNOYE';
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </section>
    </div>
  );
}
