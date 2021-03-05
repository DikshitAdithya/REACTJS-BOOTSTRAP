import React,{Component} from 'react';
import '../Css/Reactcss.css' 
import Photo1 from '../assets/images/b11.png';
class Aboutus extends Component {
    render(){ 
        return( 
            <div class="teams-15">
	<div class="team-single-main mt-5">
		<div class="container">
			<div class=" grid grid-column-2 row">
				<div class="column1 col-lg-6">
					<img src={Photo1} alt="product" class="img-responsive "/>
				</div>
				<div class="column2 col-lg-6 lmm">
					<h3 class="team-head fontbeauty">About Us</h3>
					
						<p class="para mt-2 dis-none fontbeauty">
                            We wanted to add a extra value to your curriculum with 
                            quality and promise Deleniti possimus culpa nemo asperiores aperiam
						mollitia, maiores
                        </p>
                        <div class="grids-1 grids-effect-2 pt-4">
                            <h4 className='fontbeauty'>Who we are</h4>
                            <p className="para fontbeauty">Xtra Curriculum is an online training academy providing technical education from children to highly experience professionals. </p>
                        </div>
                        <div class="grids-1 grids-effect-2 pt-4">
                            <h4 className='fontbeauty'>What we do</h4>
                            <p className="para fontbeauty">Xtra Curriculum is an online training academy providing technical education from children to highly experience professionals. </p>
                        </div>
				</div>
			</div>
		</div>
	</div>
</div>
         );
    }
}
 
export default Aboutus;
