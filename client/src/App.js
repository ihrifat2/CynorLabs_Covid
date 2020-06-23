import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Manager from './components/Manager';
import Doctor from './components/Doctor';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'
import Dashboard from './components/Dashboard';
import ModifyForm from './components/ModifyForm';

function App() {
    return (
        <Router>
            <div className="App">
                <AppNavbar />
                <div>
                    <Switch>
                        <Route exact path='/' component={Doctor} />
                        <Route exact path='/manager' component={Manager} />
                        <Route exact path='/form/:id' component={Form} />
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route exact path='/edit/:id' component={ModifyForm} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
