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
          details={
            "Weather is the state of the atmosphere, describing for example the degree to which it is hot or cold, wet or dry, calm or stormy, clear or cloudy.[1] On Earth, most weather phenomena occur in the lowest layer of the planet's atmosphere, the troposphere,[2][3] just below the stratosphere. Weather refers to day-to-day temperature, precipitation, and other atmospheric conditions, whereas climate is the term for the averaging of atmospheric conditions over longer periods of time.[4] When used without qualification,  is generally understood to mean the weather of Earth."
          }
          to="/Weather"
        />
        <Card
          url="./todolist.jpg"
          details={
            "Clear your mind \n The fastest way to get tasks out of your head.Type just about anything into the task field and Todoist’s one-of-its-kind natural language recognition will instantly fill your to-do list.Focus on what’s importantReach that mental clarity you’ve been longing for.Your tasks are automatically sorted into Today, Upcoming, and custom Filter views to help you prioritize your most important work."
          }
          className="small-card img"
        />
        <Card url="./movies.jpg" details={
            "Clear your mind \n The fastest way to get tasks out of your head.Type just about anything into the task field and Todoist’s one-of-its-kind natural language recognition will instantly fill your to-do list.Focus on what’s importantReach that mental clarity you’ve been longing for.Your tasks are automatically sorted into Today, Upcoming, and custom Filter views to help you prioritize your most important work."
          } />
        <Card url="./book.jpg" details={
            "Clear your mind \n The fastest way to get tasks out of your head.Type just about anything into the task field and Todoist’s one-of-its-kind natural language recognition will instantly fill your to-do list.Focus on what’s importantReach that mental clarity you’ve been longing for.Your tasks are automatically sorted into Today, Upcoming, and custom Filter views to help you prioritize your most important work."
          }
           />
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
              width="10%"
              height="auto"
              alt="loading"
              style={{ margin: "2%" }}
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
