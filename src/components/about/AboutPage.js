import React from 'react';
import {Link} from 'react-router'


class AboutPage extends React.Component{
    render(){
        return(
            <div className='jumbotron'>
                <h1>Plurgasight</h1>
                <p>Reat redux</p>
                <Link to='about' className='btn'>Learn More</Link>
            </div>
        )
    }
}


export default AboutPage;