import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

import TaskList from "./components/TaskList/TaskList";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <TaskList />
      <Footer />
    </div>
  );
}

export default App;
