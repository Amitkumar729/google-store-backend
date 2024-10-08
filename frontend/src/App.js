import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navbar = lazy(() => import("./components/navbar/navbar"));
const HomePage = lazy(() => import("./pages/home/home"));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallbacl={<div>...Loading</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
