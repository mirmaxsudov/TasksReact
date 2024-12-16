import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import Task4 from "./pages/Task4";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
      </Routes>
    </Router>
  );
}

function Header() {
  return (
    <header className="header w-100 h-100">
      <h1 className="text-center my-5">Abdurahmon Mirmaxsudov's HWs</h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Card title="Task 1" text="User balance" link="/task1" />
          </div>
          <div className="col-3">
            <Card title="Task 2" text="User balance" link="/task2" />
          </div>
          <div className="col-3">
            <Card title="Task 3" text="User balance" link="/task3" />
          </div>
          <div className="col-3">
            <Card title="Task 4" text="User balance" link="/task4" />
          </div>
        </div>
      </div>
    </header>
  );
}

function Card(props) {
  return (
    <div className="card w-100" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <Link to={props.link} className="btn btn-primary">
          Go to {props.title}
        </Link>
      </div>
    </div>
  );
}

export default App;
