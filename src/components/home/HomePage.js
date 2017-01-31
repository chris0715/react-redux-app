import React from 'react';
import {Link} from 'react-router'


class HomePage extends React.Component{
    render(){
        return(
            <div className=' container jumbotron'>
                <h1>Plurgasight</h1>
                <p>Reat redux</p>
                <Link to='about' className='btn btn-default'>Learn More</Link>
            </div>
        )
    }
}


export default HomePage;