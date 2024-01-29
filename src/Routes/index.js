import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoutes";

import DefaultLayout from "../Layouts/DefaultLayout";

const LandingPage = lazy(() => import("../Pages/LandingPage"));
const LoginForm = lazy(() => import("../Pages/LoninForm"));
const CustomerServey = lazy(() => import("../Pages/CustomerServey"));
const SelectComplantCategory = lazy(() =>
  import("../Pages/SelectComplantCategory")
);
const LeaveFeedback = lazy(() => import("../Pages/LeaveFeedback"));
const LoginWith = lazy(() => import("../Pages/LoginWith"));

function RoutesComponent() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute component={LandingPage} layout={DefaultLayout} />
            }
          />
          <Route
            path="/CustomerServey"
            element={
              <PrivateRoute component={CustomerServey} layout={DefaultLayout} />
            }
          />

          <Route
            path="/LoginWith"
            element={
              <PrivateRoute component={LoginWith} layout={DefaultLayout} />
            }
          />
          <Route
            path="/LoginForm"
            element={
              <PrivateRoute component={LoginForm} layout={DefaultLayout} />
            }
          />

          <Route
            path="/ChooseCategory"
            element={
              <PrivateRoute
                component={SelectComplantCategory}
                layout={DefaultLayout}
              />
            }
          />
          <Route
            path="/LeaveFeedback"
            element={
              <PrivateRoute component={LeaveFeedback} layout={DefaultLayout} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesComponent;
