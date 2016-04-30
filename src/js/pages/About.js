import React from "react";
import FlatButton from "material-ui/lib/flat-button";
import FontIcon from 'material-ui/lib/font-icon'; 

export default class About extends React.Component {
  render() {
    return(
    <div id="about-div">
    	<p id="blurb">My name is Asher James, and I hail from Auckland, New Zealand.
    	<br/>
    	<br/>
    	These photos represent several years of on-and-off shooting, on both digital
    	and film.<br/><br/>
    	Please feel free to both download whatever you fancy and please peek at the source
    	on Github:</p>
		<FlatButton 
	    	label="Frontend" 
	    	linkButton={true}
	    	href="https://github.com/asherjames/seikkor-frontend"
	    	secondary={true}
	    	icon={<FontIcon className="muidocs-icon-custom-github"/>}
		/>
		<FlatButton 
	    	label="Backend" 
	    	linkButton={true}
	    	href="https://github.com/asherjames/seikkor-backend"
	    	secondary={false}
	    	icon={<FontIcon className="muidocs-icon-custom-github"/>}
		/>
		<p id="contact-info-link"><a href="mailto:asherjames.nz@gmail.com">Contact me</a></p>
    </div>
    );
  }
}