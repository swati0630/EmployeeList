import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EmployeeList from './component/EmployeeList';
import AddEmployee from './component/AddEmployee';


function App() {   

  return (
      <div className="container">
          <Router>
              <div className="col-md-12">
                  <h1 className="text-center" style={style}></h1>
                  <Switch>
                      <Route path="/" exact component={EmployeeList} />
                      <Route path="/employeeList" component={EmployeeList} />
                      <Route path="/addEmployee" component={AddEmployee} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
