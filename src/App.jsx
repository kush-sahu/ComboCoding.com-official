// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Navbar from './Navbar';
// import LeetCode from './LeetCode';
// import HackerRank from './HackerRank';
// import CodingNinja from './CodingNinja';
// import Gfg from './Gfg';
// import Home from './Home'; // Import a component to render for the home route

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/leetcode" element={<LeetCode/>} />
//           <Route path="/hackerrank" element={<HackerRank/>} />
//           <Route path="/codingninja" element={<CodingNinja/>} />
//           <Route exact path="/Gfg" element={<Gfg/>} />
//           {/* <Route exact path="/Home" component={Home} /> Use exact to match only the root route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './Navbar';
import LeetCode from './LeetCode';
import HackerRank from './HackerRank';
import CodingNinja from './CodingNinja';
import Gfg from './Gfg';
import Footers from './Footers';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/leetcode" element={<LeetCode />} />
          <Route path="/hackerrank" element={<HackerRank />} />
          <Route path="/codingninja" element={<CodingNinja />} />
          <Route path="/gfg" element={<Gfg />} />
          {/* Redirect root path to /gfg */}
          <Route path="/" element={<Navigate replace to="/gfg" />} />
        </Routes>
        <Footers />
      </div>
    </Router>
  );
}

export default App;

