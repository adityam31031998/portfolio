import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Weather from "./Weather/Wet";
import TodoList from "./TodoList/TodoList";
import Movies from "./Movies/Movies";
import "./App.css";
import Card from "./Card";

const Layout = ({ children }) => {
  return (
    <div className="bg">
      {/* <div> */}
      <div className="gallary">
        <Card
          url="./weather.jpg"
          heading="Check Weather"
          details={"Weather is the state of the atmosphere, describing for example the degree to which it is hot or cold, wet or dry, calm or stormy, clear or cloudy.[1] On Earth, most weather phenomena occur in the lowest layer of the planet's atmosphere, the troposphere,[2][3] just below the stratosphere. Weather refers to day-to-day temperature, precipitation, and other atmospheric conditions, whereas climate is the term for the averaging of atmospheric conditions over longer periods of time.[4] When used without qualification,  is generally understood to mean the weather of Earth."}
          to="/Weather"
        />
        <Card url="./todolist.jpg" className="small-card img" />
        <Card url="./movies.jpg" />
        <Card url="./book.jpg" />
      </div>
    </div>
    // </div>
  );
};


const Wet = () => {
  return <Weather />;
};

const Todo = () => {
  return <TodoList />;
};

const Mov = () => {
  return <Movies />;
};

function App() {
  return (
    <div className="bg">
      <Router>
        <div>
          <Link to="/">
            <img
              width="50px"
              alt="loading"
              style={{ backgroundColor: "white", marginBottom: "3%" }}
              src="./home.png"
            />
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Weather" element={<Wet />} />
          <Route path="/TodoList" element={<Todo />} />
          <Route path="/Movies" element={<Mov />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
