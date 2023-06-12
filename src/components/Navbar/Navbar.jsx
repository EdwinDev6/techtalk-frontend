import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const handleLogout = ()=> {
    localStorage.removeItem("token");
    window.location.reload();
}
 
    

function Navbar() {
   
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
            <h1>Techtalk</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick = {handleLogout}>
            Logout
        </button>
			<nav ref={navRef}>
				<a href="/Homeuser">Home</a>
				<a href="/new">Create Post</a>
				<a href="/home">Admin View</a>
				<a href="/#">About us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;