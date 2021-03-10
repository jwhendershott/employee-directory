import React, { Component } from "react";
import {API} from '../../utils/API';
import EmpTable from '../EmpTable';


class Directory extends Component {
    state = { employees: [] };

    componentMount() {
        API.getEmployees()
            .then(response => {
                this.setState({
                    employees: response.data.results
                })
            })
            .catch(err);
    }


    render() {
        return (
            <div>
                <h1>Employee Directory</h1>
                <EmpTable employees={this.state.employees} />
            </div>
        )
    }
}

export default Directory;