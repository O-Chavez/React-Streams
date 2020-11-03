import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const PageOne = () => {
  return <div>
  <Link to="/pagetwo">Go to Page 2</Link>
  PageOne</div>
};
const PageTwo = () => {
  return <div>
  <Link to="/">Go to Page 1</Link>
  <button>Click Me!</button>
  PageTwo</div>
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;