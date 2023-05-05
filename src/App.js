import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./Pages/Sign-in";
import Forgetpassword from "./Pages/Forget-password";
import Resetpassword from "./Pages/Reset-password";
import Signup from "./Pages/Sign-up";
import Registrationone from "./Pages/Registration-1";
import Registrationtwo from "./Pages/Registration-2";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Sign-in" element={<Signin />} />
          <Route exact path="/Sign-up" element={<Signup />} />
          <Route exact path="/Reset-password" element={<Resetpassword />} />
          <Route exact path="/Forget-password" element={<Forgetpassword />} />
          <Route exact path="/Registration-1" element={<Registrationone />} />
          <Route exact path="/Registration-2" element={<Registrationtwo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
