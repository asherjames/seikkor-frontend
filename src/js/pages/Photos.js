import React from "react";
import { PhotoSwipeGallery } from "react-photoswipe";
import queryBackend from "../data/Backend";
import axios from "axios";

import "react-photoswipe/dist/photoswipe.css";

export default class Photos extends React.Component {  
  constructor() {
    super();
    this.state = {images: []};
    this.baseUrl = "http://seikkor.xyz:8080/";
  }

  componentDidMount() {
    this.getFilenames();
  }

  getFilenames() {
    let url = this.baseUrl + "seikkor/photo/allphotoinfo";
    axios.get(url)
      .then(this.createImageInfoArray.bind(this))
      .catch((err) => {
        throw new Error("Error fetching image data", err);
      });
  }

  createImageInfoArray(filenames) {
    let baseFullsizeUrl = this.baseUrl + "images/fullsize/";
    let baseThumbnailUrl = this.baseUrl + "images/thumbnail/";
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