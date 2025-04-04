import { useState, useEffect, useRef } from "react";

const Image = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  placeholder = "empty",
  blurDataURL,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    if (imgRef.current.complete) {
      handleImageLoaded();
    }
  }, []);

  const handleImageLoaded = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleImageError = () => {
    setIsLoading(false);
    setError(true);
    onError?.();
  };

  // const isLocalImage = src.startsWith("/");

  const imageSrc = src;

  const blurStyle =
    placeholder === "blur" && isLoading
      ? {
          filter: "blur(60px)",
          backgroundSize: "cover",
          backgroundImage: `url(${blurDataURL || src})`,
        }
      : {};

  return (
    <div className={`relative`}>
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoaded}
        onError={handleImageError}
        className={`object-cover ${isLoading ? "opacity-70" : "opacity-100"} transition-opacity duration-200 ${error ? "hidden" : "block"} ${className}`}
        loading={priority ? "eager" : "lazy"}
        {...props}
      />

      {isLoading && placeholder === "blur" && (
        <div className="absolute inset-0" style={blurStyle} />
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#e8e4e4] text-black">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default Image;
