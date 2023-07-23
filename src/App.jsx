import { Route, Routes } from "react-router";
import { Header } from "./components/Header/Header";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Header/>}>
          <Route path="/" element={<Home/>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
