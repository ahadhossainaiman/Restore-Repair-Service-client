import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddAdmin from './Component/Admin/AddAdmin/AddAdmin';
import AddServices from './Component/Admin/AddServices/AddServices';
import AllOrder from './Component/Admin/AllOrder/AllOrder';
import ManageServices from './Component/Admin/ManageServices/ManageServices';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';
import PrivateRouter from './Component/PrivateRouter/PrivateRouter';
import Dashboard from './Component/User/Dashboard/Dashboard';
import Order from './Component/User/Order/Order';
import Review from './Component/User/Review/Review';
export const UserContext = createContext();
export const idContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [serviceId,setServiceId]= useState('');
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <idContext.Provider value={[serviceId,setServiceId]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/dashboard/appointment">
            
          </Route>
          <PrivateRouter path="/servicelist">
              <Dashboard></Dashboard>
            </PrivateRouter>
            <PrivateRouter path="/allorder">
              <AllOrder></AllOrder>
            </PrivateRouter>
            <PrivateRouter path="/makeadmin">
              <AddAdmin></AddAdmin>
            </PrivateRouter>
            <PrivateRouter path="/manageService">
              <ManageServices></ManageServices>
            </PrivateRouter>
            <PrivateRouter path="/order">
              <Order></Order>
            </PrivateRouter>
            <PrivateRouter path="/addService">
              <AddServices></AddServices>
            </PrivateRouter>
            <PrivateRouter path="/review">
              <Review></Review>
            </PrivateRouter>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </idContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
