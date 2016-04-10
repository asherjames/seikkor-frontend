import React from "react";
import { PhotoSwipeGallery } from "react-photoswipe";
import queryBackend from "../data/backend";

import "react-photoswipe/dist/photoswipe.css";

export default class Photos extends React.Component {
  constructor() {
    super();
    this.state = { images:[]}
  }

  componentDidMount() {
    
  }

  getFilenames() {
    url = "http://localhost:8080/seikkor/photo/allphotoinfo";
    queryBackend(url).then(createImageInfoArray, () => {
      new Error("Promise error");
    });
  }

  createImageInfoArray(filenames) {

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