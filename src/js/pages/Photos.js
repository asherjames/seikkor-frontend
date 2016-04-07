import React from "react";
import { PhotoSwipeGallery } from "react-photoswipe";
import RSVP from "rsvp";

import "react-photoswipe/dist/photoswipe.css";

export default class Photos extends React.Component {
  constructor() {
    super();
    this.state = { images:[]}
  }

  componentDidMount() {
    
  }

  getImageInfo() {
    url = "http://localhost:8080/seikkor/photo/allphotoinfo";
    let promise = new RSVP.Promise((resolve, reject) => {
      let client = new XMLHttpRequest();
      client.open("GET", url);
      client.onreadystatechange = handler;
      client.responseType = "json";
      client.setRequestHeader("Accept", "application/json");
      client.send();
    })
  }

  getThumbnailContent = (item) => {
    return (
      <img src={item.thumbnail}/>
    );
  }

  render() {
    return(
      <div>
         <h2>Photos</h2>
    	   <PhotoSwipeGallery items={this.images.items} thumbnailContent={this.getThumbnailContent}/>
      </div>
    );
  }
}