import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loaders from "./Components/loaders/Loaders";
import { useDispatch, useSelector } from "react-redux";
import { currentLoader } from "./redux/reducers/loader";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
import { Snackbar } from "./Components/Snackbars/Snackbar";
import PrivateWithOutlet from "./privateRoutes/PrivateWithOutlet";
import PrivateWithSingleCheck from "./privateRoutes/PrivateWithSingleCheck";
import { Home } from "./Components/pages/Home";
import addDeleteGetLocalStorage from "./prototype/addDeleteGetLocalStorage";
import { STORAGE } from "./helpers/LocalVariable";
import { useEffect } from "react";
import { NotFound } from "./Components/pages/NotFound/NotFound";
import { fetchUserProductsCount } from "./redux/reducers/call_api_from_store";

function App() {
  const dispatch = useDispatch();
  //get data from redux store
  const loader = useSelector(currentLoader);

  //session out
  const checkSessionTime = () => {
    const sessionTime = +addDeleteGetLocalStorage(
      STORAGE.SESSION_TIME,
      {},
      "get"
    );
    if (sessionTime) {
      const currentTime = new Date().getTime();
      if (currentTime - sessionTime > 30 * 60 * 1000) {
        localStorage.clear(); //clear local storage
        window.location.href = "/";
      }
    }
  };
  useEffect(() => {
    checkSessionTime();
    setInterval(() => {
      checkSessionTime();
    }, 1000);
  }, []);

  //get initial state from redux
  useEffect(() => {
    //get social media links
    dispatch(fetchUserProductsCount());
  });

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* NORMAL ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />

          {/* PRIVATE ROUTES WITH OUTLET*/}
          <Route element={<PrivateWithOutlet />}>
            <Route path="/private" element={<h1>Private</h1>} />
            <Route path="/private2" element={<h1>Private2</h1>} />
          </Route>

          {/* PRIVATE ROUTES WITH SINGLE CHECK */}
          <Route
            path="/private3"
            element={
              <PrivateWithSingleCheck>
                <h1>Private3</h1>
              </PrivateWithSingleCheck>
            }
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

      {loader ? <Loaders /> : null}
      <Snackbar />
    </>
  );
}

export default App;
