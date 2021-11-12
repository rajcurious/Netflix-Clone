import React ,{useState,useEffect} from  'react'
import {Link} from 'react-router-dom';
import './Nav.css'

function Navbar() {
    const [show,handeShow]= useState(false);

    useEffect(()=>{

        window.addEventListener("scroll",()=>{
                if(window.scrollY > 100){
                    handeShow(true);
                }
                else handeShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }

    },[]);
    
    return (
        <div className={`nav ${show && "nav__black"}`}>
            
            <img className="nav__logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix logo" />
            
            <Link to='/register'>register</Link>
            <img className="nav__avatar" src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="Nav logo"  />
        </div>
        

        
    );
}

export default Navbar
