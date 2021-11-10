import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';

class TopBar extends React.Component {
    render = () => {
        return (
            <Navbar className = "top-bar">
                <Container>
                    <Navbar.Brand> Auto-CT </Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}
export default TopBar;