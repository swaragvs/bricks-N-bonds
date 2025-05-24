import './App.css';

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        border: '2px solid green',
        margin: '0vh auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontFamily: 'Google Sans, sans-serif', fontSize: '3rem', color: 'rgb(0, 255, 221)' }}>
        Notebook
      </h1>
      <input className="open-book-input" type="text" placeholder="Open Book !" />
      <button className='go-button'>Go</button>
    </div>
  );
}


export default App;
