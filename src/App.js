import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import * as Layouts from "./layouts";

import { ModalProvider } from "./modules/modal";

import { NotFound, Profiles } from "./Pages/index";

const Landing = lazy(() => import("./Pages/Landing/Landing"));
const Shop = lazy(() => import("./Pages/Shop/Shop"));
const Home = lazy(() => import("./Pages/Home/Home"));
const Groups = lazy(() => import("./Pages/Groups/Groups"));
const Events = lazy(() => import("./Pages/Events/Events"));
const Ladder = lazy(() => import("./Pages/Ladder/Ladder"));

const App = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Layouts.Core />}>
            <Route
              path=""
              element={
                <Suspense fallback={null}>
                  <Landing />
                </Suspense>
              }
            />
            <Route
              path="home"
              element={
                <Suspense fallback={null}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="premium"
              element={
                <Suspense fallback={null}>
                  <Shop />
                </Suspense>
              }
            />
            <Route
              path="groups"
              element={
                <Suspense fallback={null}>
                  <Groups />
                </Suspense>
              }
            />
            <Route
              path="ladder"
              element={
                <Suspense fallback={null}>
                  <Ladder />
                </Suspense>
              }
            />
            <Route
              path="events"
              element={
                <Suspense fallback={null}>
                  <Events />
                </Suspense>
              }
            />
            <Route
              path="76561198184313278"
              element={
                <Suspense fallback={null}>
                  <Profiles />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={null}>
                  <NotFound />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;
