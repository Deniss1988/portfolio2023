import PropTypes from "prop-types";
import "./ImageTextLayout.css";

const ImageTextLayout = ({
  imageSrc,
  text,
  subtitle,
  title,
  isImageOnRight,
}) => {
  return (
    <div
      className={
        isImageOnRight
          ? "image-text-container right"
          : "image-text-container left"
      }
    >
      <div className="image-container">
        <img className="image" src={imageSrc} alt="Image" />
      </div>
      <div className="text-container">
        <h3 className="subtitle">{subtitle}</h3>
        <h2 className="title">{title}</h2>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

ImageTextLayout.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isImageOnRight: PropTypes.bool.isRequired,
};

export default ImageTextLayout;
