import { useState, useEffect } from 'react';
import { 
    Navbar, 
    NavbarBrand, 
    NavItem, 
    NavLink,
    NavbarToggler,
    Nav,
    Collapse
} from 'reactstrap';

const Navigation = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [navColor, setNavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavColor("#fff") : setNavColor("transparent");
    }
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <header>
            <Navbar {...args} 
            style={{
                backgroundColor: navColor, 
                transition: "all 1s"
                }} 
            fixed="top"
            expand="lg">
                <NavbarBrand 
                    className="ms" 
                    href="/" 
                    style={{ 
                        color: "#0a8789",
                        fontWeight: 700,
                        textShadow: ".063rem .063rem .063rem #fff",
                        fontSize:"1.875rem"
                    }}> 
                    St. John
                </NavbarBrand>
                <NavbarToggler 
                    onClick={toggle} 
                    style={{
                        color: "transparent",
                        border: ".125rem solid #5e6060",
        
                            
                    }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                    <NavItem>
                    <NavLink className="nav-link" href="#explore">Explore</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className="nav-link" href="#travel">Travel</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className="nav-link" href="#blog">Discover</NavLink>
                    </NavItem>
                    <NavLink className="nav-link" href="#contact">Contact</NavLink>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    )
}

export default Navigation;