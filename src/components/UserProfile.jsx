import { useState } from "react";
import { ProfileHeader } from "./ProfileHeader.jsx";
import { PublishBook } from "./PublishBook.jsx";
import { BooksFeed } from "./BooksFeed.jsx";


function UserProfile() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState("");

  const user = {
    name: "Book Author",
    profilePic:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
    bio: "Professional Book Writer | Fantasy & Fiction",
    location: "London, UK",
    website: "www.authorwebsite.com",
  };

  const handlePublish = () => {
    if (newBook.trim()) {
      setBooks([
        { title: newBook, date: new Date().toLocaleDateString() },
        ...books,
      ]);
      setNewBook("");
    }
  };

  const containerStyle = {
    maxWidth: "70vw",
    margin: "2rem auto",
    padding: "0 1rem",
  };

  return (
    <div style={containerStyle}>
      <ProfileHeader user={user} />
      <PublishBook
        newBook={newBook}
        setNewBook={setNewBook}
        handlePublish={handlePublish}
      />
      <BooksFeed books={books} />
    </div>
  );
}

export {UserProfile}