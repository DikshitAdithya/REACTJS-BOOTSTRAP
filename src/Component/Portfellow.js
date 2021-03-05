import React,{Component} from 'react';
import '../Css/Reactcss.css' 
import Pin1 from '../assets/images/bb2.png'
class Portfellow extends Component {
    
    render() { 
        return ( 

                <div class="hero-headers-9">
    <div class="slide slide-one">
      <div class="container ">
        {/* <!-- <div class="row"> --> */}
          <div class="row pt-5 mt-5">
        <div class="banner-text col-lg-6 pt-5 mt-5 mgb">
           <span  style={{ color:'#fff' , fontSize:'50px' , fontFamily:'inherit'}}>I am Looking for </span><div class="dropdown">
  <button  class="dropbtn btn btn-secondary dropdown-toggle color-btn fontbeauty mt ">Select Course</button>
  <div id="myDropdown" class="dropdown-content color-btn">
    
    
  </div>
</div>

          <p className='fontbeauty'>Xtra Curriculum is an online training academy providing technical 
            education from children to highly experience professionals.</p>
            
          <a href="#" class="btn logo-button top-margin fontbeauty">Our Service</a>
          <a href="#" class="btn trial-button top-margin lsp fontbeauty">Trial Register</a>
        </div>
        <div class="image-postion col-lg-6">
          <img src={Pin1} alt="product" class="img-responsive banner-images lsp lm"/>
        </div>
        
      </div>
      {/* <!-- </div> --> */}
    </div>
    </div>
  </div>
 

            
         );
    }
}
 
export default Portfellow;