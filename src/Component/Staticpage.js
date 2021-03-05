import React,{Component} from 'react';
import Aboutus from './Aboutus';
import Crads from './Crads';
import Footer from './Footer';
import Navbar from './Navbar';
import Portfellow from './Portfellow';
import Testimonal from './Testimonal';
class Staticpage extends Component {
    render() { 
        return ( 
            <div>
                 <Navbar/>
                 <Portfellow/>
                 <Crads/>
                 <Aboutus/>
                 <Testimonal/>
                 <Footer/>
            </div>
         );
    }
}
 
export default Staticpage;