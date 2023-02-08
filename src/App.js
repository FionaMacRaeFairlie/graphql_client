import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateBlog from "./createBlog";
import Home from "./home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="create-blog" element={<CreateBlog />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
