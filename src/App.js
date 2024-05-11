import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagination from "./components/Pagination/Pagination";
import Home from "./components/Home/Home";
import ProgressBar from "./components/Progressbar/ProgressBar";
import Todo from "./components/ToDo/Todo";
import TypeChecking from "./components/TypeChecking/TypeChecking";
import StarRating from "./components/StarRating/StarRating";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";
import Accordion from "./components/Accordion/Accordion";
import ModalComponent from "./components/ModalComponent/ModalComponent";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div>
      <nav className="flex justify-center gap-2 border border-black bg-green-300 h-auto">
        <a href="/">Home</a>
        <a href="/pagination">Pagination</a>
        <a href="/progress-bar">Progress-bar</a>
        <a href="/todo">Todo</a>
        <a href="/type-checking">Type checking</a>
        <a href="/star-rating">Star Rating</a>
        <a href="/infinite-scroll">Infinite scroll</a>
        <a href="/accordion">Accordion</a>
        <a href="/modal">Modal</a>
        <a href="/counter">Counter</a>
      </nav>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pagination" element={<Pagination />}></Route>
            <Route path="/progress-bar" element={<ProgressBar />}></Route>
            <Route path="/todo" element={<Todo />}></Route>
            <Route path="/type-checking" element={<TypeChecking />}></Route>
            <Route path="/star-rating" element={<StarRating />}></Route>
            <Route path="/infinite-scroll" element={<InfiniteScroll />}></Route>
            <Route path="/accordion" element={<Accordion />}></Route>
            <Route path="/modal" element={<ModalComponent />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
