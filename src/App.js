import NavBar from './components/NavBar';
import './App.css';
import Post from './components/Post';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <div className='MainContainer'>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
    </div>
  );
}

export default App;
