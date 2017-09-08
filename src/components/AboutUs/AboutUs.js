import React from 'react';
import {Link} from 'react-router-dom';
export default class AboutUs extends React.Component{
    render(){
        return(
            <div> This is the About Us page
                <ul>
                    <li><Link to={'/aboutus/profile'}>Profile</Link></li>
                    <li><Link to={'/aboutus/team'}>Team</Link></li>
                    <li><Link to={'/aboutus/contactus'}>Contact Us</Link></li>
                </ul>    
            </div>
        )
    }
}