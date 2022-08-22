import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "../contexts/userContext";
import Home from "../templates/Home";
import Signin from "../templates/SignIn";
import Signup from "../templates/SignUp";
import Schedule from "../templates/Schedule";
import Gallery from "../templates/Gallery";
import About from "../templates/About";
import Historic from "../templates/Historic";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/budget/user/:id" element={<Historic />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
