


<<<<<<< HEAD
=======
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// import Navbar from './Navbar';
// import LeetCode from './LeetCode';
// import HackerRank from './HackerRank';
// import CodingNinja from './CodingNinja';
// import Gfg from './Gfg';
// import Footers from './Footers';
// // Home import removed since you want Gfg as home

// function App() {
//   return (
//     <Router>
//       <div>
//       <Navbar />
//         <Routes>
//           <Route path="/leetcode" element={<LeetCode />} />
//           <Route path="/hackerrank" element={<HackerRank />} />
//           <Route path="/codingninja" element={<CodingNinja />} />
//           <Route path="/gfg" element={<Gfg />} />
//           {/* Redirect root path to Gfg. No need for exact, as Routes chooses the first matching route */}
//           <Route path="/" element={<Navigate replace to="/gfg" />} />
//           {/* Optionally, if you want to still have a Home route, you can include it with its path */}
//           {/* <Route path="/home" element={<Home />} /> */}
//         </Routes>
//       <Footers/>
        
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Navbar from './Navbar';
// import LeetCode from './LeetCode';
// import HackerRank from './HackerRank';
// import CodingNinja from './CodingNinja';
// import Gfg from './Gfg';
// import Footers from './Footers';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/leetcode" element={<LeetCode />} />
//           <Route path="/hackerrank" element={<HackerRank />} />
//           <Route path="/codingninja" element={<CodingNinja />} />
//           <Route path="/gfg" element={<Gfg />} />
//                 <Route path="/" element={<Navigate replace to="/Gfg" />}
//           {/* Redirect the root to one of the pages if desired */}
//           {/* <Route path="/" element={<Navigate replace to="/leetcode" />} /> */}
//         </Routes>
//         <Footers />
//       </div>
//     </Router>
//   );
// }

// export default App;




>>>>>>> 6919ae66c1e8bea2645ba0630e9a66a22d53de46
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './Navbar';
import LeetCode from './LeetCode';
import HackerRank from './HackerRank';
import CodingNinja from './CodingNinja';
import Gfg from './Gfg';
import Footers from './Footers';
// Home import removed since you want Gfg as home

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
          {/* Redirect root path to Gfg. No need for exact, as Routes chooses the first matching route */}
          <Route path="/" element={<Navigate replace to="/gfg" />} />
          {/* Optionally, if you want to still have a Home route, you can include it with its path */}
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
      <Footers/>
        
      </div>
    </Router>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Navbar from './Navbar';
// import LeetCode from './LeetCode';
// import HackerRank from './HackerRank';
// import CodingNinja from './CodingNinja';
// import Gfg from './Gfg';
// import Footers from './Footers';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/leetcode" element={<LeetCode />} />
//           <Route path="/hackerrank" element={<HackerRank />} />
//           <Route path="/codingninja" element={<CodingNinja />} />
//           <Route path="/gfg" element={<Gfg />} />
//           {/* Redirect the root to one of the pages if desired */}
//           <Route path="/" element={<Navigate replace to="/gfg" />} />
//         </Routes>
//         <Footers />
//       </div>
//     </Router>
//   );
// }

// export default App;





