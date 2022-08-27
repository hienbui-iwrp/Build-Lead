import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./Pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
