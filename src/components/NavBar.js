import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
export default function NavBar(){
    const [navBarCollapsed, openNavBar] = useState(false);
    function toggleNavBar(){
        openNavBar(!navBarCollapsed);
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 800) {
                openNavBar(false);
            }
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [openNavBar]);

    return (
        <nav>
            <h1>
                BlogSpot
            </h1>
            <ul className={navBarCollapsed ? styles.navOpen : null}>
                <li><Link to="/myFeed">Home</Link></li>
                <li><Link to="/myProfile">My Profile</Link></li>
                <li>Trending</li>
            </ul>
            <svg onClick={toggleNavBar} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </nav>
    );
}