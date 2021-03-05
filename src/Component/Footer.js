import React,{Component} from 'react';
import '../Css/Reactcss.css' 
class Footer extends Component {
    render() { 
        return ( 
            <div className="footers-20">
	<div className="footers20">
		<div className="container">
			<div className=" row">
                <div className="grids-content col-lg-5 col-md-5 col-12 ">
                    <h4 className='fontbeauty'>About Us</h4>
                    <p className="para mt-3 mb-4 fontbeauty">Consectetur adipisicing Lorem ipsum dolor sit amet,elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="buttons-teams">
						<a href="#team"><span className="fa fa-facebook" aria-hidden="true"></span></a>
						<a href="#team"><span className="fa fa-twitter" aria-hidden="true"></span></a>
						<a href="#team"><span className="fa fa-google-plus" aria-hidden="true"></span></a>
					</div>
                </div>
				<div className="grids-content col-lg-3 col-md-3 col-sm-6">
					<h4 className='fontbeauty'>Services</h4>
					<div className="footer-nav">
						<a href="#" className="contact-para3 fontbeauty">Home</a>
						<a href="#" className="contact-para3 fontbeauty">About</a>
						<a href="#" className="contact-para3 fontbeauty">Services</a>
						<a href="#" className="contact-para3 fontbeauty">blog</a>
						<a href="#" className="contact-para3 fontbeauty">Contact</a>
					</div>

				</div>
				<div className="grids-content col-lg-4 col-md-4 col-sm-6">
					<h4 className='fontname fontbeauty'>Contact Information</h4>
					<p className="contact-text-sub contact-para3 fontbeauty">22 Sloan Street, </p>
					<p className="contact-text-sub contact-para3 fontbeauty">Bryanston  Johannesburg - South Africa</p>
					<a href="tel:+7-800-999-800">
						<p className="contact-text-sub contact-para3 fontbeauty">+ 814 251 9872</p>
                    </a>
                    <a href="mailto:hello@example.com">
						<p className="contact-text-sub contact-para3 fontbeauty">info@xtracurriculum.com</p>
					</a>
				
				</div>
				
			</div>
		</div>
    </div>
	</div>
	
	


         );
    }
}
 
export default Footer;