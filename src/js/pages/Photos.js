import React from "react";
import { PhotoSwipeGallery } from "react-photoswipe";

import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

export default class Photos extends React.Component {
  constructor() {
    super();
    this.images = {
      items: [
        {
          src: '../../images/1.jpg',
          thumbnail: '../../images/1.jpg',
          w: 4842,
          h: 3648,
          title: 'Image title 1'
        },
        {
          src: '../../images/2.jpg',
          thumbnail: '../../images/2.jpg',
          w: 2810,
          h: 2810,
          title: 'Image title 2'
        }
      ],
      options: {}
    };
  }

  getThumbnailContent = (item) => {
    return (
      <img src={item.thumbnail} width={120} height={90}/>
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