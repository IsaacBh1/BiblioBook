import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Catalog } from "./components/Catalog";
import { UserProfile } from "./components/UserProfile";

const App = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
