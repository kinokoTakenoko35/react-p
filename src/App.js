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
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* Switchで囲むことでその中で設定したRouterのPathは最初に一致したコンポーネントだけルーティングする事ができる */}
      <Switch>
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
    </div>
  );
}

export default App;
