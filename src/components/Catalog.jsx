import { CategorySection } from "./CategorySection.jsx";
import { Navbar } from "../layouts/NavBar.jsx";
import { books } from ".././api/fakeData.js";
import { BookList } from "./BookList.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { useState } from "react";
import { CategoryCover } from "./CategoryCover.jsx";
import { categories } from "../api/fakeData.js";

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
            top: "4rem",
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
    </div>
  );
}

export { Catalog };
