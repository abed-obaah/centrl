import { useState, useEffect } from "react";

const Image = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);

  // Handle image loading
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Handle image error
  const handleImageError = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setImgSrc(src);
  }, [src]);

  const containerStyle = {
    position: "relative",
    width: width || "100%",
    height: height || "auto",
    overflow: "hidden",
  };

  return (
    <div style={containerStyle}>
      {/* Skeleton loader */}
      {isLoading && (
        <div
          className="absolute inset-0 animate-pulse bg-[#f6f5f5]"
          aria-hidden="true"
        />
      )}

      {/* Actual image */}
      <img
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={className}
        style={{
          display: "block",
          objectFit: "cover",
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
};

export default Image;

// import { useState, useEffect } from "react";

// const Image = ({
//   src,
//   alt,
//   width,
//   height,
//   className = "",
//   placeholderColor = "#f3f4f6",
//   blurAmount = 5,
//   priority = false,
// }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [imgSrc, setImgSrc] = useState(src);

//   // Handle image loading
//   const handleImageLoad = () => {
//     setIsLoading(false);
//   };

//   // Handle image error
//   const handleImageError = () => {
//     setIsLoading(false);
//   };

//   // Reset loading state when src changes
//   useEffect(() => {
//     setIsLoading(true);
//     setImgSrc(src);
//   }, [src]);

//   const containerStyle = {
//     position: "relative",
//     width: width || "100%",
//     height: height || "auto",
//     overflow: "hidden",
//   };

//   const placeholderStyle = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: placeholderColor,
//     filter: `blur(${blurAmount}px)`,
//     transition: "opacity 0.3s ease",
//     opacity: isLoading ? 1 : 0,
//   };

//   // Create image styles
//   const imageStyle = {
//     display: "block",
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     opacity: isLoading ? 0 : 1,
//     transition: "opacity 0.3s ease",
//   };

//   return (
//     <div style={containerStyle} className={className}>
//       <div style={placeholderStyle} aria-hidden="true" />

//       <img
//         src={imgSrc || "/placeholder.svg"}
//         alt={alt}
//         onLoad={handleImageLoad}
//         onError={handleImageError}
//         style={imageStyle}
//         loading={priority ? "eager" : "lazy"}
//       />
//     </div>
//   );
// };

// export default Image;
