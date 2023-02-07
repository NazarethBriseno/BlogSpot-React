import NavBar from '../components/NavBar';
import Post from '../components/Post';
import '../styles/Feed.css';
export default function Feed(){
    return (
        <div>
        
            <div className='MainContainer'>
               <Post/>
            <Post/>
            <Post/>
            <Post/> 
            </div>
            
        </div>
    )
}