import React from 'react';
// Add router from react-router-dom!!
/* BrowserRouter, Route = componentes, se usan para el rounting
Link se usa en lugar del a del html!! */
import {BrowserRouter, Route, Link} from 'react-router-dom';

const PageOne = () => {
  return <div>Page one
  {/* BAD!! NO SE HACE ASÍ EN REACT ROUTER!!! */}
    {/* <a href="/pagetwo">Navigate to page two</a> */}

    {/* GOOD!! SE HACE ASÍ, CON Link to!!! */}
    <Link to="/pagetwo">Navigate to page two</Link>
  </div>;
}

const PageTwo = () => {
  return <div>Page two
    {/* BAD!! NO SE HACE ASÍ EN REACT ROUTER!!! */}
    {/* <a href="/">Navigate to page one</a> */}

    {/* GOOD!! SE HACE ASÍ, CON Link to!!! */}
    <Link to="/">Navigate to page one</Link>
  </div>;
}

const App = () => {
  return (
    <div className="App">
    {/* react router only cares about all the characters that are listed AFTER THE domain (localhost:3000, ....) */}
      <BrowserRouter>
        <div>
        {/* Si hay dos Routes con el  mismo path, se mostrarán los dos componentes, de arriba abajo!!! */}
          <Route path="/" exact component={PageOne}/>
          {/* Si no pongo exact, en la página se renderizarán los dos componentes, porque se comprueba que 
          el ExtractedPath (/pagetwo) contenga el path (/, /pagetwo), y en este caso, contiene los dos !!! 
          Con exact, comprueba que ExtractedPath (/pagetwo) === path (/, /pagetwo) !!! */}

          {/* <Route path="/" exact component={PageTwo}/> */}
          <Route path="/pagetwo" component={PageTwo}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
