import { BookCover } from "./BookCover";
import PropTypes from "prop-types";

function CategorySection({ books, category = "", children }) {
  const marginList = ["-8rem", "-5rem", "0", "-5rem", "-8rem"];
  const CategorySectionStyle = {
    constainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      padding: "1rem",
      borderBottomLeftRadius: "50%",
      borderBottomRightRadius: "50%",
      backgroundColor: "#4FDFE2",
      backgroundImage: category?.image,
      width: "100%",
      height: "35rem",
      marginTop: "-5rem",
    },
    description: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "2rem",
    },
  };

  return (
    <div style={CategorySectionStyle.constainer}>
      <div style={{ height: "40%" }}></div>
      {children}
      <div style={CategorySectionStyle.description}>
        {category !== "" ? (
          <h1>category.name</h1>
        ) : (
          books.map((book, i) => (
            <BookCover key={book.id} book={book} margin={marginList[i]} txtcolor="#545050" />
          ))
        )}
      </div>
    </div>
  );
}

CategorySection.propTypes = {
  books: PropTypes.array,
  category: PropTypes.object,
  children: PropTypes.node,
};

export { CategorySection };
