import { ImageItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
function ImageGalleryItem({ webformatURL, largeImageURL, tags, clickImage }) {
  return (
    <ImageItem>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={tags}
        width="300"
        data-url={largeImageURL}
        onClick={clickImage}
      />
    </ImageItem>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  clickImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
