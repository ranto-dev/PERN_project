import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dash from "./components/custom/Dash";
import Header from "./components/custom/Header";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dash />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
