import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar></Navbar>

      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header></Header>

        <hr className="mt-4" />

        <TodoList></TodoList>

        <hr className="mt-4" />

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
