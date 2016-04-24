import React from "react";
import FlatButton from "material-ui/lib/flat-button";
import FontIcon from 'material-ui/lib/font-icon';

export default class About extends React.Component {
  render() {
    return(
    <div>
    	<FlatButton 
	    	label="Frontend" 
	    	linkButton={true}
	    	href="https://github.com/asherjames/seikkor-frontend"
	    	secondary={true}
	    	icon={<FontIcon className="muidocs-icon-custom-github" />}
    	/>
    	<FlatButton 
	    	label="Backend" 
	    	linkButton={true}
	    	href="https://github.com/asherjames/seikkor-backend"
	    	secondary={false}
	    	icon={<FontIcon className="muidocs-icon-custom-github" />}
    	/>
    </div>
    );
  }
}