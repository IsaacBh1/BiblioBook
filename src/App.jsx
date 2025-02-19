import { CategorySection } from "./components/CategorySection.jsx";
import { Navbar } from "./layouts/NavBar.jsx";
import { books } from "./api/fakeData.js";
import { BookList } from "./components/BookList.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { useState } from "react";
import { CategoryCover } from "./components/CategoryCover.jsx";
import { categories } from "./api/fakeData.js";
import { ProfileHeader } from "./components/ProfileHeader.jsx";
import { PublishBook } from "./components/PublishBook.jsx";
import { BooksFeed } from "./components/BooksFeed.jsx";

function Catalog() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div>
      <Navbar openSideBarClickHandler={setOpenSideBar} />
      <CategorySection books={books}>
        <h2
          style={{
            position: "absolute",
            left: "2rem",
            top: "3rem",
            color: "#252525",
          }}
        >
          for you
        </h2>
      </CategorySection>
      <BookList books={books}>
        <h2 style={{ color: "black" }}>All</h2>
      </BookList>
      {openSideBar && <Sidebar CloseSideBarHandler={setOpenSideBar} />}
      <div
        style={{
          margin: "2rem",
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
        }}
      >
        <h2 style={{ color: "#252525" }}>Categories</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          {categories.map((c, i) => (
            <CategoryCover name={c.name} img={c.image} key={i} />
          ))}
        </div>
      </div>
      /{" "}
    </div>
  );
}

const App = () => {
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
};

export default App;
