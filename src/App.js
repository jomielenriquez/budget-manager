import logo from './logo.svg';
import './App.css';
import UseGoogleSheets  from 'use-google-sheets';

function App() {
  const { data, loading, error } = UseGoogleSheets({
    apiKey: 'AIzaSyBFIcaHmn63Pfgss3u4aLltaJtDyc3QxN8',
    sheetId: '17eDNmTk4A7ATPmrBBBl15h0IUSZuwdLC6q2x7A2Ya-A',
    sheetsOptions: [{ id: 'Sheet1' }],
  });

  console.log(JSON.stringify(data));

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
