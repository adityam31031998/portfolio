import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Weather from "./Weather/Wet";
import TodoList from "./TodoList/TodoList";
import Movies from "./Movies/Movies";
import "./App.css";

const Layout = ({ children }) => {
  return (
    <div className="bg1">
      <div className="wrapper1">
        <Link className="link1" to="/Weather">
          <div className="card1" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/weather.jpg)`, backgroundSize: "cover" }}>
            <div className="info1">
              <h3 style={{ backgroundImage: "none" }}>Check Weather</h3>
            </div>
          </div>
        </Link>

        <Link className="link1" to="/TodoList">
          <div className="card1" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/todolist.jpg)`, backgroundSize: "100% 100%" }}>
            <div className="info1">
              <h3 style={{ backgroundImage: "none" }}>Check TodoList</h3>
            </div>
          </div>
        </Link>

        <Link className="link1" to="/Movies">
          <div className="card1" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/movies.jpg)`, backgroundSize: "105% 105%"  }}>
            <div className="info1">
              <h3 style={{ backgroundImage: "none" }}>Check Movies</h3>
            </div>
          </div>
        </Link>

        <Link className="link1" to="/Books">
          <div className="card1" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/book2.jpg)`,  backgroundSize: "cover" }}>
            <div className="info1">
              <h3 style={{ backgroundImage: "none" }}>Check Books</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
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
    <Router>
      <div>
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Weather" element={<Wet />} />
        <Route path="/TodoList" element={<Todo />} />
        <Route path="/Movies" element={<Mov />} />
      </Routes>
    </Router>
  );
}

export default App;
