import React from 'react';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Products from "./Pages/Products";
import UserInfo from "./Pages/UserInfo";
import ItemList from './Lists/ItemList';
import PageCom from './Pages/Products';
import Navbar from './Components/Navbar';



function App() {
  return (
    <div>
    <Router>
  <Navbar></Navbar>



    {/*         
    
      router - AppLayout component 
            
      <switch> 
      all the pages are inside the switch Tag 

      </switch>
  
        </appLayoutComponet>
        </router>
  
    */}


<Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/products' component={Products} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/userinfo" component={UserInfo} />
          </Switch>




     {/* <PageCom></PageCom> */}
     </Router>
     </div>
     
  );
}

export default App;
