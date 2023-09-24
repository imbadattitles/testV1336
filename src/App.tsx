import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "./components/navbar";
import { getItems } from "./API/api";
import { useAppDispatch } from "./hook";

import {
  setBrigades,
  setConnectionState,
  setDepartments,
  setLoadingBrigades,
  setLoadingConnectionState,
  setLoadingDepartments,
} from "./store/firstPageSlice";
import { setLoadingPoints, setPoints } from "./store/secondPageSlice";

function App() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    getItems(
      "https://v1336-api-test.onrender.com/getBrigadesData",
      dispatch,
      setLoadingBrigades,
      setBrigades
    );
    getItems(
      "https://v1336-api-test.onrender.com/getDepartments",
      dispatch,
      setLoadingDepartments,
      setDepartments
    );
    getItems(
      "https://v1336-api-test.onrender.com/getConnectionState ",
      dispatch,
      setLoadingConnectionState,
      setConnectionState
    );
    getItems(
      "https://v1336-api-test.onrender.com/getPointsFast?points=400",
      dispatch,
      setLoadingPoints,
      setPoints
    );
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            Component={route.component}
            key={route.path}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
