import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, imageSrc, tags, largeImageURL }) => {
  return (
    <>
      <li className={s.ImageGalleryItem}>
        <img
          src={imageSrc}
          alt={tags}
          // largeImageURL={largeImageURL}
          className={s.ImageGalleryItemImage}
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;
