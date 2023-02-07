import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import './App.css';
import Post from './components/Post';
import MyProfile from './pages/MyProfile';
import Feed from "./pages/Feed";

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path='/myProfile' element={<MyProfile/>}/>
      <Route path='/myFeed' element={<Feed/>}/>
    </Routes>
    </div>
  );
}


export default App;
