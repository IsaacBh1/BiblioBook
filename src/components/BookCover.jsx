/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";
function BookCover({
  book,
  // eslint-disable-next-line no-unused-vars
  children,
  margin = 0,
  background,
  txtcolor = "#f1f1f1",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const bookCoverStyle = {
    container: {
      height: "17rem",
      width: "10rem",
      border: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: margin,
      cursor: "pointer",
      transform: isHovered ? "scale(1.0625)" : "scale(1)",
      transition: "transform 0.3s ease",
    },
    nameStyle: {
      color: txtcolor,
      margin: "0",
      padding: "0",
      fontSize: "1.3rem",
      fontFamily: "Roboto, sans-serif",
    },
    imageStyle: {
      height: "13rem",
      width: "100%",
      overflow: "hidden",
      borderRadius: "0.7rem 0.7rem 0 0",
    },
    authorStyle: {
      color: "#707070",
      padding: "0",
      fontSize: "1rem",
      fontFamily: "Roboto, sans-serif",
      margin: 0,
    },
    description: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "#333",
      backgroundColor: background,
      width: "100%",
      padding: "0.3rem 0.5rem",
      borderRadius: "0 0 0.7rem 0.7rem",
    },
  };

  return (
    <div
      style={bookCoverStyle.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={book.image} alt={book.name} style={bookCoverStyle.imageStyle} />
      <div style={bookCoverStyle.description}>
        <h2 style={bookCoverStyle.nameStyle}>{book.name}</h2>
        <p style={bookCoverStyle.authorStyle}>{book.author}</p>
      </div>
    </div>
  );
}

BookCover.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

export { BookCover };
