import { Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import { useSelector } from "react-redux";

import Home from "./pages/Home";

import ProtectedRoute from "./components/ProtectedRoute";
import CustomRoutes from "./components/CustomRoutes";

import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  const token = localStorage.getItem("token");
  const authState = useSelector((state) => state.authReducer);

  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />

      <CustomRoutes>
        <Route exact path="/" element={authState.auth ? <Home /> : <Login />} />
        {/* <Route exact path="/" element={<Home />}></Route> */}
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path="/profile" element={<Profile />} />
        </Route>
      </CustomRoutes>
    </div>
  );
}

export default App;
