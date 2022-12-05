import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/Home/About";
import AddPost from "./pages/addPost/AddPost";
import EditPost from "./pages/editPost/EditPost";
// import AddUser from "./pages/Home/AddPost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/post/add" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
