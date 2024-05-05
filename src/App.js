import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagination from "./components/Pagination/Pagination";
import Home from "./components/Home/Home";
import ProgressBar from "./components/Progressbar/ProgressBar";
import Todo from "./components/ToDo/Todo";

function App() {
  return (
    <div>
      <nav className="flex justify-center gap-2 border border-black bg-green-300">
        <a href="/">Home</a>
        <a href="/pagination">Pagination</a>
        <a href="/progress-bar">Progress-bar</a>
        <a href="/todo">Todo</a>
      </nav>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pagination" element={<Pagination />}></Route>
            <Route path="/progress-bar" element={<ProgressBar />}></Route>
            <Route path="/todo" element={<Todo />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
