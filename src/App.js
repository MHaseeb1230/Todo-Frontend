import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../src/pages/home";
import Login from "../src/pages/login";
import SignUp from "../src/pages/signup";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./helper/ProtectedRoute";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setAuthToken } from "./helper/AuthHelper";

function App() {
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      // If the token exists in Redux state (persisted after refresh), set it to Axios headers
      setAuthToken(token);
    }
  }, [token]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
