import React from 'react';
import {Link, IndexLink} from 'react-router';


class Header extends React.Component{

    render(){
        return(<nav className="navbar navbar-default ">
                <ul className="nav navbar-nav">
                    <li><IndexLink to="/">Home</IndexLink></li>

                    <li><Link to="/about">About</Link></li>

                    <li><Link to="/courses">Courses</Link></li>

               </ul>
               </nav>);
    }
}

export default Header;
