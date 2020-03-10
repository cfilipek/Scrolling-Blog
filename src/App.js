import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Home from './components/homepage/Home';
import BlogPost from './components/firstblogpost/BlogPost';

const App = () => {


  return (
    <Router>
      <Navbar/>
       <Route exact path="/" component={Home} />
       <Route path="/my-first-month-as-a-jr-developer" component={BlogPost} />
    </Router>
  );
}

export default App;
