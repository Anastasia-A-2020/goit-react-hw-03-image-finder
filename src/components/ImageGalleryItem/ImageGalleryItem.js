import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, imageSrc, tags }) => {
  return (
    <>
      <li key={id} className={ImageGalleryItem}>
        <img src={imageSrc} alt={tags} className={s.ImageGalleryItemImage} />
      </li>
    </>
  );
};

export default ImageGalleryItem;
