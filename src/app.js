import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from './Home';
// import Profile from './Profile';
const Home = lazy(() => import('./Home'));
const Profile = lazy(() => import("./Profile"));
const App = () => {
  return (<Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Suspense>
  </Router>);
} 
ReactDOM.render(<App />, document.getElementById('root'));
