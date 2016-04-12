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
    this.getFilenames();
  }

  getFilenames() {
    let url = "http://localhost:8080/seikkor/photo/allphotoinfo";
    queryBackend(url).then(this.createImageInfoArray, () => {
      new Error("Promise error");
    });
  }

  createImageInfoArray(filenames) {
    console.log(filenames);
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
    	   <PhotoSwipeGallery items={this.state.images} thumbnailContent={this.getThumbnailContent}/>
      </div>
    );
  }
}