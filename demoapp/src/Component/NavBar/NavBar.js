import React, { useState } from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar=() =>{
    const[menu,setMenu]=useState("home");
    return(
        <div className='navbar'>
            <div className='navbar-logo'>
                <p>DEMO APP</p>
            </div>
            <div>
                <ul className='nav-menu'>
                <li><Link to='/' style={{textDecoration:'none'}}>HOME</Link>{menu==='home'?<hr/>:<></>}</li>
                <li><Link to='/aboutus' style={{textDecoration:'none'}}>ABOUT US</Link>{menu==='aboutus'?<hr/>:<></>}</li>
                <li><Link  to='/jobs'  style={{textDecoration:'none'}}>JOBS</Link>{menu==='jobs'?<hr/>:<></>}</li>
                <li><Link to='/Clients' style={{textDecoration:'none'}}>CLIENTS</Link>{menu==='Clients'?<hr/>:<></>}</li>
                <li><Link to='/Employees' style={{textDecoration:'none'}}>EMPLOYEES</Link>{menu==='Employees'?<hr/>:<></>}</li>
                <li><Link to='/Contact' style={{textDecoration:'none'}}>CONTACT US</Link>{menu==='Contact'?<hr/>:<></>}</li>
                </ul>
            </div>

        </div>
    )
}

export default NavBar;