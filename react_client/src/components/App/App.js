import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "../streams/StreamCreate";
import StreamDelete from "../streams/StreamDelete";
import StreamEdit from "../streams/StreamEdit";
import StreamList from "../streams/StreamList";
import StreamShow from "../streams/StreamShow";
import Header from "../Header/Header";
import history from "../../history";

const App = () => {
  return (
    <div className="ui container">
      {/* cambio BrowserRouter por Router (plain router), y le paso como prop el history
      BrowserRouter crea su history interno (creado por defecto)  */}
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          {/* pongo path="/streams/edit/:id", con :id, para indicar que el id es una variable!!
          el nombre (id) puede ser cualquiera, lo que importa son : !! (lo que indica que es una var)  */}
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show/:id" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
