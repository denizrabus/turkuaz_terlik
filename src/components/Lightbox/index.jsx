import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "./ImageLightbox.css";

const ImageLightbox = ({ images, thumbnails, categoryTitle, onOpen, onClose }) => {
  const [index, setIndex] = useState(-1);

  const handleOpen = (imageIndex) => {
    setIndex(imageIndex);
    if (onOpen) onOpen(imageIndex);
  };

  const handleClose = () => {
    setIndex(-1);
    if (onClose) onClose();
  };

  // Lightbox slides oluştur (sadece kategori adı üstte, description yok)
  const slides = images.map((image, idx) => ({
    src: image.src || image,
    title: categoryTitle || "", // Sadece kategori adı
    description: "", // Description boş
    // Thumbnail için küçük görsel
    thumbnail: thumbnails[idx]?.src || thumbnails[idx] || image.src || image,
  }));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {thumbnails.map((thumbnail, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100 aspect-square cursor-pointer group"
            onClick={() => handleOpen(idx)}
          >
            <img
              src={thumbnail.src || thumbnail}
              alt={thumbnail.alt || `Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={handleClose}
        index={index}
        slides={slides}
        plugins={[Thumbnails, Captions]}
        carousel={{ finite: true }}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          border: 0,
          borderRadius: 4,
          padding: 2,
          gap: 4,
          mobileWidth: 60,
          mobileHeight: 45,
          mobileGap: 2,
        }}
        captions={{
          descriptionTextAlign: "center",
          descriptionMaxLines: null, // Sınırsız satır - scroll edilebilir
        }}
      />
    </>
  );
};

export default ImageLightbox;

