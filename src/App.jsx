import { CategorySection } from "./components/CategorySection.jsx";
import { Navbar } from "./layouts/NavBar.jsx";
import { books } from "./api/fakeData.js";
import { BookList } from "./components/BookList.jsx";
// import {CardCarousel} from "./components/CardCarousel.jsx"
// import { Sidebar } from "./components/Sidebar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <CategorySection books={books}>
        <h2
          style={{
            position: "absolute",
            left: "2rem",
            top: "3rem",
            color: "#505050",
          }}
        >
          for you
        </h2>
      </CategorySection>
      <BookList books={books}>
        <h2 style={{color:"black"}}>All</h2>
      </BookList>
      {/* <Sidebar /> */}
/    </div>
  );
}

export default App;
