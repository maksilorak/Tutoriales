import './Header.css';

const Header =() =>{
    return(
        <div className = "hero">
            <nav>
                <h2 className="logo">Portfo<span>lio</span></h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    <a href="#" className="btn">Subscribe</a>
            </nav>
        </div>
    )

}

export default Header;