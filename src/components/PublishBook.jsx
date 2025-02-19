import { useState } from "react";
import PropTypes from "prop-types";


const PublishBook = ({ newBook, setNewBook, handlePublish }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    publishBox: {
      background: "white",
      padding: "1.5rem",
      borderRadius: "15px",
      marginBottom: "2rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    textarea: {
      width: "100%",
      border: "1px solid rgb(0, 0, 0)",
      borderRadius: "8px",
      padding: "1rem",
      fontSize: "1rem",
      marginBottom: "1rem",
      resize: "vertical",
      minHeight: "100px",
      backgroundColor:"#fafafa", 
      color :"#252525"
    },
    button: {
      background: isHovered ? "#0767b1" : "#0984e3",
      color: "white",
      border: "none",
      padding: "0.8rem 2rem",
      borderRadius: "25px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
  };

  return (
    <div style={styles.publishBox}>
      <textarea
        value={newBook}
        onChange={(e) => setNewBook(e.target.value)}
        placeholder="What book are you working on?"
        style={styles.textarea}
      />
      <button
        style={styles.button}
        onClick={handlePublish}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Publish Book
      </button>
    </div>
  );
};

PublishBook.propTypes = {
  newBook: PropTypes.string.isRequired,
  setNewBook: PropTypes.func.isRequired,
  handlePublish: PropTypes.func.isRequired,
};

export { PublishBook };
