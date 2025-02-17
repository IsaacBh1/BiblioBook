import { BookCover } from "./BookCover";
import PropTypes from "prop-types";
function BookList({ books, children }) {
  const BookListStyle = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      margin: "2rem",
    },
    countent: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1.5rem",
      justifyContent: "center",
    },
  };

  return (
    <div style={BookListStyle.container}>
      {children}
      <div style={BookListStyle.countent}>
        {books.map((book) => (
          <BookCover book={book} key={book.id} background={"#fafafa"} />
        ))}
      </div>
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  children: PropTypes.node,
};

export { BookList };
