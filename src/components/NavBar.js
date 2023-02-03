import styles from "./NavBar.module.css"
export default function NavBar(){
    return (
        <nav>
            <h1>
                BlogSpot
            </h1>
            <ul>
                <li>Home</li>
                <li>My Profile</li>
                <li>Trending</li>
            </ul>
        </nav>
    );
}