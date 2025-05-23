import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div
      style={{
        width: '97vw',
        height: '90vh',
        backgroundColor: 'black',
        border: '2px solid green',
        margin: '5vh auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontFamily: 'Google Sans, sans-serif', fontSize: '3rem', color: 'white' }}>
        Notebook
      </h1>
      <input type="text" placeholder="Search box" />
      <button>Go</button>
    </div>
  );
}


export default App;
