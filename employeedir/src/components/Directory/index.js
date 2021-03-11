import React, { Component } from "react";
import {API} from '../../utils/API';
import EmpTable from '../EmpTable';
import { searchEmployee } from "../../utils/searchEmployee";
import Search from "../Search";

class Directory extends Component {
    state = { employees: [],
        loadedEmployees: [],
        search: ''
    }

    componentMount() {
        API.getEmployees()
            .then(response => {
                this.setState({
                    employees: response.data.results
                })
            })
            .catch(err);
            let empData = response.data.results.map(emp => {
                return {
                    id: emp.id.value,
                    picture: emp.picture.thumbnail,
                    firstName: emp.name.first,
                    lastName: emp.name.last,
                    gender: emp.gender,
                    email: emp.email,
                    phone: emp.phone,
                    city: emp.location.city,
                    state: emp.location.state
                }
            });
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        }, () => {
            if (this.state.search) {
                let filteredEmps = searchEmployee.searchEmployee(this.state.search, this.state.loadedEmployees);
                this.setState({
                    employees: filteredEmps
                })
            } else {
                this.setState({
                    employees: this.state.loadedEmployees
                })
            }
        });
    };

    render() {
        return (
            <div>
                <h1>Employee Directory</h1>
                <EmpTable employees={this.state.employees} />
                <Search employees={this.state.employees} handleInputChange={this.handleInputChange} />
            </div>
        )
    }
}

export default Directory;