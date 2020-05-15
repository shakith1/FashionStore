import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
    return (

        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
            <Link class="navbar-brand" to="/" >Fashion Store</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault" >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/shopping-cart">Shopping Cart</Link>
                    </li>

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Username
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/my/orders">My Orders</Dropdown.Item>
                            <Dropdown.Item href="/admin/orders">Manage Orders</Dropdown.Item>
                            <Dropdown.Item href="/admin/products">Manage Products</Dropdown.Item>
                            <Dropdown.Item>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
            </div>
        </nav>
    )
}

export default Header;