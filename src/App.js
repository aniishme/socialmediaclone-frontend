//Packages
import { Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

//Routes
import ProtectedRoute from "./components/ProtectedRoute";
import CustomRoutes from "./components/CustomRoutes";

//Pages
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Message from "./pages/Message";
import Notification from "./pages/Notification";
import { useEffect } from "react";
import { getPostHandler } from "./store/actions/posts/postAction";

function App() {
  const authState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  console.log(process.env.REACT_APP_BASE_URL);
  useEffect(() => {
    axios.interceptors.request.use((request) => {
      // add auth header with jwt if account is logged in and request is to the api url
      const token = `${authState.token && authState.token.accessToken}`;

      if (token) {
        request.headers.common.Authorization = `Bearer ${token}`;
      }

      return request;
    });
    if (authState.token) {
      dispatch(getPostHandler());
    }
  }, [authState]);

  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />

      <CustomRoutes>
        <Route exact path="/" element={authState.auth ? <Home /> : <Login />} />
        {/* <Route exact path="/" element={<Home />}></Route> */}
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path="/notifications" element={<Notification />} />
          <Route exact path="messages" element={<Message />} />
          <Route exact path="/user/:userId" element={<Profile />} />
        </Route>
      </CustomRoutes>
    </div>
  );
}

export default App;
