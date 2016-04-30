import React from "react";
import RaisedButton from "material-ui/lib/raised-button";
import FontIcon from 'material-ui/lib/font-icon'; 

export default class About extends React.Component {
  render() {
  	const buttonStyle = {
  		margin: 12
  	};

    return(
    <div id="about-div">
    	<p id="blurb">My name is Asher James, and I hail from Auckland, New Zealand.
    	<br/>
    	<br/>
    	These photos represent several years of on-and-off shooting, on both digital
    	and film.<br/><br/>
    	Please feel free to download whatever you fancy and please peek at the source
    	on Github:</p>
    	<div id="git-buttons">
			<RaisedButton 
		    	label="Frontend" 
		    	linkButton={true}
		    	href="https://github.com/asherjames/seikkor-frontend"
		    	primary={true}
		    	icon={<FontIcon className="muidocs-icon-custom-github"/>}
		    	style={buttonStyle}
			/>
			<RaisedButton 
		    	label="Backend" 
		    	linkButton={true}
		    	href="https://github.com/asherjames/seikkor-backend"
		    	secondary={true}
		    	icon={<FontIcon className="muidocs-icon-custom-github"/>}
		    	style={buttonStyle}
			/>
		</div>
    </div>
    );
  }
}