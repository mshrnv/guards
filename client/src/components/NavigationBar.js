import React from 'react';
import {Navbar} from "flowbite-react";
import {Link} from "react-router-dom";

const NavigationBar = () => {
    return (
        <Navbar fluid={true} >
            <Navbar.Brand>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">👮‍♂️ Guards</span>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Navbar.Link>
                    <Link to="/guards">
                        Наряды
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to="/students">
                        Студенты
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;