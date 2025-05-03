import React from "react";
import hero from "../../images/hero.jpg";
import "./AboutUs.scss";

function AboutUs () {
	
		return (
			<div className="about">
				
				<div className="about__container">
					<div className="about__container--img">
						<img className="about__img" alt="scenic" src={hero} />
					</div>
					<div className="about__container--title">
						<div>
							<h1 className="about__title">About The CY Ranch</h1>
						</div>
						<div className="about__container--text">
						<h1 className="about__headings">How the CY Ranch began?</h1>
						<p className="about__text">The CY Ranch brand was established by Leo Theodore Wendling in Trinidad, Colorado in 1916.
						Phil and Darlene Wendling set out to follow in his footsteps by establishing the CY Ranch, near
						Bonham, Texas in 1995. The CY Ranch’s goal is to provide families with high quality custom beef
						products at reasonable prices.</p>
						<h1 className="about__headings">Who we are?</h1>
						<p className="about__text">The CY Ranch is a family owned and operated ranch, primarily ran by Phil and Darlene Wendling
						and their sons and serves the north Texas and southern Oklahoma area. The CY Ranch is located
						approximately 4 miles south of Bonham, Texas.</p>
						<h1 className="about__headings">What does the CY Ranch produce?</h1>
						<p className="about__text">The primary CY Ranch product is grass fed black angus beef. This beef is custom processed beef
						and sold by the pound in either quarter, half or whole cow units. Please contact us at <span className="span">cyranchllc@gmail.com </span>  
						for scheduling, processing information and pricing. Delivery and shipping can be available upon
						request.</p>
						<h1 className="about__headings">Other CY Ranch Services.</h1>
						<p className="about__text">The CY Ranch also offers round bales of hay and does custom hay baling for local owners of 50
						acres or less. Please contact us at <span className="span">cyranchllc@gmail.com</span> to schedule hay baling and pricing.</p>
						<h1 className="about__headings">Why purchase from the CY Ranch?</h1>
						<p className="about__text">The CY Ranch prides itself in producing top quality grass fed black angus beef processed to our
						clients’ specifications on their timeline at a reasonable price.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}


export default AboutUs;
