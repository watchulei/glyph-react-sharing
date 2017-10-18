import React from 'react';
import {Route, Link} from 'react-router-dom';
import Home from './Home';
import ClassDemo from './ClassDemo';
import User from './User';

const App = () => {
  return (
    <div>
      <div>
        <span><Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;</span>
        <span><Link to='/classdemo'>Class Demo</Link>&nbsp;&nbsp;&nbsp;</span>
        <Link to='/user/nyeam'>User</Link>

        <Route path='/' exact component={Home} />
        <Route path='/classdemo' component={ClassDemo} />
        <Route path='/user/:name' component={User}/>
      </div>
    </div>
  );
};

export default App;
