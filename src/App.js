import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./layouts/Home";
import NavbarNew from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
      <Router>
        <div>
            <NavbarNew/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
              <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

// You can think of these components as "pages"
// in your app.

// function Home() {
//   return (
//       <div>
//         <h2>Home</h2>
//       </div>
//   );
// }

function About() {
  return (
      <div>
        <h2>About</h2>
      </div>
  );
}

function Dashboard() {
  return (
      <div>
        <h2>Dashboard</h2>
      </div>
  );
}

function Cart() {
  return (
      <div>
        <h2>Cart</h2>
      </div>
  );
}