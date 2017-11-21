import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeeFetch } from '../actions/index.js';
import ListItem from './ListItem';

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeeFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of Props this component will be rendered with.
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees)
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        return(
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}

            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return {employees};
};

export default connect(mapStateToProps, { employeeFetch }) (EmployeeList);
