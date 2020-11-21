import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Each Styles
import Nav from "./components/Nav";
//Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* Animation detouch and finish detouch then start next animation */}
      <AnimatePresence exitBeforeEnter>
        {/* Switchで囲むことでその中で設定したRouterのPathは最初に一致したコンポーネントだけルーティングする事ができる */}
        <Switch location={location} key={location.pathname}>
          {/* exactを付けることでパスが完全一致している場合表示させることができる */}
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route exact path="/work">
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
