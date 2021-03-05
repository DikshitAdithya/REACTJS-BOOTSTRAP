import React,{Component} from 'react';
import '../Css/Reactcss.css' 
import Photo from '../assets/images/mathematics.png'
import Photo11 from '../assets/images/cord-img.png'
import Photo12 from '../assets/images/english.png'
class Crads extends Component {
    render() { 
        return ( 
            <div>
                <div className="specification-6">
    <div className="specification-layout">
        <div className="container">
            <div className="main-titles-head">
                <h3 className="header-name fontbeauty">Course categories</h3>
                <p className="para text-center fontbeauty">Xtra Curriculum is an online training academy</p>
              
            </div>
            <div className="specification-effect row text-center">
                <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                    
                    <div className="back-color">
                    <span aria-hidden="true">
                        <img src={Photo11}/>
                    </span>
                    <h4><a href="#" className="title-head pt-3 fontbeauty">Coding</a></h4>
                    <p className="para fontbeauty">Xtra Curriculum is an online training academy providing technical education from children to highly experience professionals.</p>
                </div>
            </div>
                <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                    <div className="back-color">
                        <span aria-hidden="true">
                            <img src={Photo}/>
                        </span>
                    <h4><a href="#" className="title-head pt-3 fontbeauty">Mathematics</a></h4>
                    <p className="para fontbeauty">Xtra Curriculum is an online training academy providing technical education from children to highly experience professionals.</p>
                    </div>
                </div>
                <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                    <div className="back-color">
                        <span aria-hidden="true">
                            <img src={Photo12}/>
                        </span>
                    <h4><a href="#" className="title-head pt-3 fontbeauty">English</a></h4>
                    <p className="para fontbeauty">Xtra Curriculum is an online training academy providing technical education from children to highly experience professionals.</p>
                </div>
            </div>
              
               
        </div>
        </div>
    </div>
</div>
            </div>
         );
    }
}
 
export default Crads;