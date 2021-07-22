import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className={s.ImageGallery}>
        {images.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem id={id} imageSrc={webformatURL} tags={tags} />
        ))}
      </ul>
    </>
  );
};
export default ImageGallery;
