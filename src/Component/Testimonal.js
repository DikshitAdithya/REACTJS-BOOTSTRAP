import React,{Component} from 'react'; 
import '../Css/Reactcss.css' 
import Photo2 from '../assets/images/img-c1.png'
class Testimonal extends Component {
    
    render() { 
        return ( 
            
                <div className="clients">
                    <div className="main-w3 hh14-info">
                        <div className="container">
            {/* <!-- main-slider --> */}
            <div className="row">
                <div className="col-lg-4 col-md-4 hh14-text margin-bottom">
                    <div >
                        <img src={Photo2} alt="product" className="img-responsive "/>
                    </div>
                </div>

                    <div className="col-lg-8 col-md-8 hh14-text">
                        <div className="pt-5 mt-5">
                            <h4 className='fontbeauty'>Xtra Curriculum is an online training academy</h4>
                            <p className="para mt-3 fontbeauty">“We wanted to add a extra value to your curriculum with 
                                quality and promise”</p>
                                <a href="#" className="btn bcourse-button top-margin mt-3 fontbeauty">Buy a Course</a>
                            
                        </div>
                    </div>
                </div>
        </div>
    </div>

            </div>
         );
    }
}
 
export default Testimonal;