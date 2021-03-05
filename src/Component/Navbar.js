import React,{Component} from 'react'
import Pin from '../assets/images/logo512.png';
import '../Css/Reactcss.css' 

class Navbar extends Component {
    
    render() { 
        return ( 
            <div>
                <div className="header-4 header-sticky ">
        <div className="absolute-top">
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <h1>
                    <a className="navbar-brand" href="index.html">
                    <img src={Pin} alt="Xtra Curriculum"/>
                </a></h1>
                <button className="navbar-toggler bg-gradient" type="button" data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
          
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav search-righ">
                        <li className="nav-item">
                            <a className="nav-link fontbeauty" href="index.html ">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fontbeauty" href="about.html ">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fontbeauty" href="coures.html ">Coures</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fontbeauty" href="contact.html ">Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ">
                        <li className="nav-item"><a href="#" className="btn logo-button top-margin fontbeauty">Schedule a Demo</a></li>
                        <li className="nav-item" ><a href="#" className="btn login-button top-margin ml-2 fontbeauty" >Login</a></li>
                    </ul>
                    
                </div>
            
  
            </nav>
        </div>
          </div>
    </div>

            </div>

         );
    }
}
 
export default Navbar;