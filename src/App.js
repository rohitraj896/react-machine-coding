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
import Carousel from "./components/Carousel/Carousel";
import InputSearchDebounce from "./components/InputSearchDebounce/InputSearchDebounce";
import DebouncedApi from "./components/DebouncedAPI/DebouncedApi";
import ErrorBoundaryComponent from "./components/ErrorBoundary/ErrorBoundaryComponent";
import ProtectedRoute from "./components/ProtectedRoute";
import FlightBooking from "./components/FlightBooking/FlightBooking";
import StopWatch from "./components/StopWatch/StopWatch";
import TrafficSignal from "./components/TrafficSignal/TrafficSignal";
import MultiLang from "./components/MultiLang/MultiLang";
import SessionTimeout from "./components/SessionTimeout/SessionTimeout";
import UploadFileProgress from "./components/UploadFileProgress/UploadFileProgress";
import DarkMode from "./components/DarkMode/DarkMode";
import DarkModeCAPI from "./components/DarkMode/DarkModeCAPI/DarkModeCAPI";

function App() {
  return (
    <div>
      <nav className="flex flex-wrap gap-2 border border-black bg-green-300">
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
        <a href="/carousel">Carousel</a>
        <a href="/debounced-input">Debounced-input</a>
        <a href="/debounced-api">Debounced-api</a>
        <a href="/error-boundary">Error Boundary</a>
        <a href="/flight-booking">Flight booking</a>
        <a href="/stop-watch">Stop watch</a>
        <a href="/traffic-signal">Traffic Signal</a>
        <a href="/multi-lang">Multi Lang</a>
        <a href="/session-timeout">Session Timeout</a>
        <a href="/upload-file-progress">Upload file progress</a>
        <a href="/dark-mode">Dark mode</a>
        <a href="dark-mode-capi">Dark mode CAPI</a>
      </nav>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/error-boundary"
              element={<ErrorBoundaryComponent />}
            ></Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/pagination" element={<Pagination />}></Route>
              <Route path="/progress-bar" element={<ProgressBar />}></Route>
              <Route path="/todo" element={<Todo />}></Route>
              <Route path="/type-checking" element={<TypeChecking />}></Route>
              <Route path="/star-rating" element={<StarRating />}></Route>
              <Route
                path="/infinite-scroll"
                element={<InfiniteScroll />}
              ></Route>
              <Route path="/accordion" element={<Accordion />}></Route>
              <Route path="/modal" element={<ModalComponent />}></Route>
              <Route path="/counter" element={<Counter />}></Route>
              <Route path="/carousel" element={<Carousel />}></Route>
              <Route path="/flight-booking" element={<FlightBooking />}></Route>
              <Route
                path="/debounced-input"
                element={<InputSearchDebounce />}
              ></Route>
              <Route path="/debounced-api" element={<DebouncedApi />}></Route>
              <Route path="/stop-watch" element={<StopWatch />}></Route>
              <Route path="/traffic-signal" element={<TrafficSignal />}></Route>
              <Route path="/multi-lang" element={<MultiLang />}></Route>
              <Route
                path="/session-timeout"
                element={<SessionTimeout />}
              ></Route>
              <Route
                path="/upload-file-progress"
                element={<UploadFileProgress />}
              ></Route>
              <Route path="/dark-mode" element={<DarkMode />}></Route>
              <Route path="/dark-mode-capi" element={<DarkModeCAPI />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
