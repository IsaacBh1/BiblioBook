// import { BookCover } from "./BookCover";
import PropTypes from "prop-types";
import { CardCarousel } from "./CardCarousel";

const baseContainerStyle = {
  display: "flex",
  justifyContent: "center",
 
  background: "linear-gradient(#FFDAB3,#f1f1f1 )",
  width: "100%",
  height: "27rem",
  marginTop: "3rem",
};

const descriptionStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4rem",
};

function CategorySection({ books, children }) {
  const containerStyle = {
    ...baseContainerStyle,
    // backgroundImage: category.image ? `url(${category.image})` : undefined,
  };

  return (
    <div style={containerStyle}>
      {children}
      <div style={descriptionStyle}>{<CardCarousel books={books} />}</div>
    </div>
  );
}

CategorySection.propTypes = {
  books: PropTypes.array,
  category: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
  children: PropTypes.node,
};

export { CategorySection };
