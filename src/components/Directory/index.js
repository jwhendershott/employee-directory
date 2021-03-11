import React, {Component} from 'react';
import {API} from '../../utils/API';
import EmpTable from '../EmpTable';
import {searchEmployee} from '../../utils/searchEmployee';
import Search from '../Search';

class Directory extends Component {
    state = { employees: [],
        loadedEmployees: [],
        search: ''
    }

    componentDidMount() {
        API.getEmployees()
            .then(response => {
                console.log(response);
                let empData = response.data.results.map(emp => {
                    return {
                        id: emp.id.value,
                        picture: emp.picture.medium,
                        firstName: emp.name.first,
                        lastName: emp.name.last,
                        gender: emp.gender,
                        email: emp.email,
                        phone: emp.phone,
                        city: emp.location.city,
                        state: emp.location.state
                    }
                })
                this.setState({
                    employees: empData,
                    loadedEmployees: empData
                })
            })
            .catch(err => console.log(err));
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
                <Search employees={this.state.employees} handleInputChange={this.handleInputChange} />
                <EmpTable employees={this.state.employees} />           
            </div>
        )
    }
}

export default Directory;