import React from "react";
import { PhotoSwipeGallery } from "react-photoswipe";
import queryBackend from "../data/Backend";

import "react-photoswipe/dist/photoswipe.css";

export default class Photos extends React.Component {  
  constructor() {
    super();
    this.state = {images: []};
  }

  componentDidMount() {
    this.getFilenames();
  }

  getFilenames() {
    let url = "http://seikkor:8080/seikkor/photo/allphotoinfo";
    queryBackend(url).then(this.createImageInfoArray.bind(this), () => {
      new Error("Promise error");
    });
  }

  createImageInfoArray(filenames) {
    let baseFullsizeUrl = "http://seikkor:8080/images/fullsize/";
    let baseThumbnailUrl = "http://seikkor:8080/images/thumbnail/";
    filenames.map(p => p.src = baseFullsizeUrl.concat(p.src));
    filenames.map(p => p.thumbnail = baseThumbnailUrl.concat(p.thumbnail));
    this.setState({images: filenames});
  }

  getThumbnailContent(item) {
    return (
      <img src={item.thumbnail} width={item.thumbW} height={item.thumbH}/>
    );
  }

  render() {
    return(
      <div id="images-div">
    	   <PhotoSwipeGallery items={this.state.images} thumbnailContent={this.getThumbnailContent}/>
      </div>
    );
  }
}