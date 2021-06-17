
import './App.scss';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import React from 'react'
import HomePage from './pages/HomePage';
import page_not_found from './pages/page_not_found';



function App() {
  return (
    <>
    <div className="App">
  
<Router>
<Switch>
  <Route path='/' exact component={HomePage} />
  <Route path="*" component={page_not_found}/>
</Switch>


</Router>


    </div>
    </>
  );
}


export default App;

