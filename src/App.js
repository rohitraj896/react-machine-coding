import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
import ForwardRef from "./components/ForwardRef/ForwardRef";
import HOC from "./components/HOC/HOC";
import CustomHook from "./components/CustomHook/CustomHook";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="flex flex-wrap gap-2 border border-black bg-green-300">
          <Link to="/">Home</Link>
          <Link to="/pagination">Pagination</Link>
          <Link to="/progress-bar">Progress-bar</Link>
          <Link to="/todo">Todo</Link>
          <Link to="/type-checking">Type checking</Link>
          <Link to="/star-rating">Star Rating</Link>
          <Link to="/infinite-scroll">Infinite scroll</Link>
          <Link to="/accordion">Accordion</Link>
          <Link to="/modal">Modal</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/carousel">Carousel</Link>
          <Link to="/debounced-input">Debounced-input</Link>
          <Link to="/debounced-api">Debounced-api</Link>
          <Link to="/error-boundary">Error Boundary</Link>
          <Link to="/flight-booking">Flight booking</Link>
          <Link to="/stop-watch">Stop watch</Link>
          <Link to="/traffic-signal">Traffic Signal</Link>
          <Link to="/multi-lang">Multi Lang</Link>
          <Link to="/session-timeout">Session Timeout</Link>
          <Link to="/upload-file-progress">Upload file progress</Link>
          <Link to="/dark-mode">Dark mode</Link>
          <Link to="/dark-mode-capi">Dark mode CAPI</Link>
          <Link to="/forward-ref">Forward Ref</Link>
          <Link to="/hoc">HOC</Link>
          <Link to="/custom-hook">Custom Hook</Link>
        </nav>
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
            <Route path="/infinite-scroll" element={<InfiniteScroll />}></Route>
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
            <Route path="/session-timeout" element={<SessionTimeout />}></Route>
            <Route
              path="/upload-file-progress"
              element={<UploadFileProgress />}
            ></Route>
            <Route path="/dark-mode" element={<DarkMode />}></Route>
            <Route path="/dark-mode-capi" element={<DarkModeCAPI />}></Route>
            <Route path="/forward-ref" element={<ForwardRef />}></Route>
            <Route path="/hoc" element={<HOC />}></Route>
            <Route path="/custom-hook" element={<CustomHook />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
