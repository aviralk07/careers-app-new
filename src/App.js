import * as React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Experiences from "./Components/Body/Experiences";
import Home from "./Components/Home";
import Manager from "./Components/Body/Manager";

function App() {
  return (
    <>
      {/* <Route exact path="/" element={<Home/>}/> */}
      {/* <Router exact path="/BodyJob" element={<BodyJob/>}/> */}
      {/* <Route exact path="/upcoming/:user" element={<Upcoming/>}/>
          <Route exact path="/record/:user" element={<Record/>}/>
          <Route path="*" element={<NotFound/>}/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/manager" element={<Manager />} />
        </Routes>
      </Router>
    </>
    // Body -> Router changes based on page
    // 1. Banner
    // 2. Description
    // 3. Gallery
    // 3.1 GalleryWidget
    //4. Benifits
    // 4.1 Benifits Widget
    // 5. Video Section
    // 5.1 Video Widget
    // 6. Careers
    // 6.1 Filters
    // 6.2 Job Widget
    // 7. Footer Description
    // Footer Component
  );
}
export default App;
