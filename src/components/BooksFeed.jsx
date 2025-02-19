import PropTypes from "prop-types";

const BooksFeed = ({ books }) => {
  const styles = {
    booksFeed: {
      marginTop: "2rem",
    },
    bookCard: {
      display: "flex",
      background: "white",
      padding: "1.5rem",
      borderRadius: "15px",
      marginBottom: "1rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    },
    bookCover: {
      width: "80px",
      height: "100px",
      background: "#f8f9fa",
      borderRadius: "8px",
      marginRight: "1.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2rem",
    },
  };

  return (
    <div style={styles.booksFeed}>
      <h2 style={{ color: "#2d3436", marginBottom: "1.5rem" }}>
        Published Works ({books.length})
      </h2>

      {books.length === 0 ? (
        <p style={{ textAlign: "center", color: "#636e72", padding: "2rem" }}>
          No books published yet. Start writing!
        </p>
      ) : (
        books.map((book, index) => (
          <div key={index} style={styles.bookCard}>
            <div style={styles.bookCover}>
              <div>📖</div>
            </div>
            <div>
              <h3 style={{ margin: "0 0 0.5rem", color: "#2d3436" }}>
                {book.title}
              </h3>
              <p style={{ color: "#636e72", fontSize: "0.9rem" }}>
                Published on {book.date}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
BooksFeed.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { BooksFeed };
