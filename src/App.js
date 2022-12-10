import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import AddPost from "./pages/addPost/AddPost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/add" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
