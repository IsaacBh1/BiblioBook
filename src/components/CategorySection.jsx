import { BookCover } from "./BookCover";
import PropTypes from "prop-types";


const baseContainerStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "#EAE2C6",
  width: "100%",
  height: "25rem",
};

const descriptionStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4rem",
};

function CategorySection({ books, category = {}, children }) {
  const containerStyle = {
    ...baseContainerStyle,
    backgroundImage: category.image ? `url(${category.image})` : undefined,
  };

  return (
    <div style={containerStyle}>
      <div style={{ height: "40%" }}></div>
      {children}
      <div style={descriptionStyle}>
        {category.name ? (
          <h1>{category.name}</h1>
        ) : (
          books.map((book) => {

            <BookCover
              key={book.id}
              book={book}
              txtcolor="#545050"
            />;
          })
        )}
      </div>
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
