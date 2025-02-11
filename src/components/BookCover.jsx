/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";

function StarsList({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} style={{ color: i < rating ? "#gold" : "#eaeaea" }}>
        ★
      </span>
    );
  }
  return <div>{stars}</div>;
}

function BookCover({
  book,
  // eslint-disable-next-line no-unused-vars
  children,
  background,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const bookCoverStyle = {
    container: {
      height: "18rem",
      width: "12rem",
      border: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      padding: ".7rem",
      cursor: "pointer",
      transform: isHovered ? "scale(1.0625)" : "scale(1)",
      transition: "transform 0.3s ease",
      backgroundColor: background,
      borderRadius: "0.9rem",
    },
    nameStyle: {
      color: "#eaeaea",
      margin: "0",
      padding: "0",
      fontSize: "1.1rem",
      fontFamily: "Roboto, sans-serif",
    },
    imageStyle: {
      height:"auto",
      width: "100%",
      overflow: "hidden",
      borderRadius: "0.7rem",
    },
    authorStyle: {
      color: "#707070",
      padding: "0",
      fontSize: "0.8rem",
      fontFamily: "Roboto, sans-serif",
      margin: 0,
    },
    description: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "#333",
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
        <StarsList rating={3} />
      </div>
    </div>
  );
}

StarsList.propTypes = {
  rating: PropTypes.number.isRequired,
};

BookCover.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

export { BookCover };
