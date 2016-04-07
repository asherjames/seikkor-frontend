import React from "react";
import { PhotoSwipeGallery } from "react-photoswipe";

import "react-photoswipe/dist/photoswipe.css";

export default class Photos extends React.Component {
  constructor() {
    super();
    this.images = {
      items: [
        {
          src: 'http://lorempixel.com/1500/1920/nature',
          thumbnail: 'http://lorempixel.com/150/200/nature',
          w: 1500,
          h: 2000,
          title: 'Image title 1'
        },
        {
          src: 'http://lorempixel.com/1400/1920/nature',
          thumbnail: 'http://lorempixel.com/180/150/nature',
          w: 1500,
          h: 2000,
          title: 'Image title 2'
        },
      ],
      options: {}
    };
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