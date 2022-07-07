import reactLogo from '../src/react_logo.webp'

function Header(){
	return(
		<header>
			<nav className="nav-bar">
			<img src={reactLogo} alt="react-logo" />
			<ul>
				<li><a href="#">Docs</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Download</a></li>
			</ul>
			</nav>
		</header>
	)
}
export default Header