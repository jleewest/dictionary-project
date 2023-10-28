import dictionary from './dictionary.jpg';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header className='App-header'>
          <img src={dictionary} className='header-image img-fluid' />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className='text-center'>
          <a
            href='https://github.com/jleewest/weather-app-react-project'
            target='_blank'
            className='code-link'
            rel='noreferrer'
          >
            Open source code
          </a>{' '}
          by Jenna Westendorf
        </footer>
      </div>
    </div>
  );
}

export default App;
