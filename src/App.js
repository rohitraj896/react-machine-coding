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
          <Link href="/">Home</Link>
          <Link href="/pagination">Pagination</Link>
          <Link href="/progress-bar">Progress-bar</Link>
          <Link href="/todo">Todo</Link>
          <Link href="/type-checking">Type checking</Link>
          <Link href="/star-rating">Star Rating</Link>
          <Link href="/infinite-scroll">Infinite scroll</Link>
          <Link href="/accordion">Accordion</Link>
          <Link href="/modal">Modal</Link>
          <Link href="/counter">Counter</Link>
          <Link href="/carousel">Carousel</Link>
          <Link href="/debounced-input">Debounced-input</Link>
          <Link href="/debounced-api">Debounced-api</Link>
          <Link href="/error-boundary">Error Boundary</Link>
          <Link href="/flight-booking">Flight booking</Link>
          <Link href="/stop-watch">Stop watch</Link>
          <Link href="/traffic-signal">Traffic Signal</Link>
          <Link href="/multi-lang">Multi Lang</Link>
          <Link href="/session-timeout">Session Timeout</Link>
          <Link href="/upload-file-progress">Upload file progress</Link>
          <Link href="/dark-mode">Dark mode</Link>
          <Link href="/dark-mode-capi">Dark mode CAPI</Link>
          <Link href="/forward-ref">Forward Ref</Link>
          <Link href="/hoc">HOC</Link>
          <Link href="/custom-hook">Custom Hook</Link>
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
