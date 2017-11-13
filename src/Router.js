import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Login" />
            </Scene>

            <Scene key="main" initial>
                <Scene
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    rightTitle="Add"
                    onRight={() => Actions.employeeCreate()}/>

                <Scene
                    key="employeeCreate"
                    title="Create Employee"
                    component={EmployeeCreate} initial/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
