import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function EmpTable(props) {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Picture:</TableCell>
                        <TableCell><span onClick={() => props.handleSort('firstName')}>First Name</span></TableCell>
                        <TableCell><span onClick={() => props.handleSort('lastName')}>Last Name</span></TableCell>
                        <TableCell><span onClick={() => props.handleSort('gender')}>Gender</span></TableCell>
                        <TableCell><span onClick={() => props.handleSort('phone')}>Phone Number</span></TableCell>
                        <TableCell><span onClick={() => props.handleSort('city')}>City</span></TableCell>
                        <TableCell><span onClick={() => props.handleSort('state')}>State</span></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.employees.map(emp => {
                            return <TableRow key={emp.id}>
                                <TableCell><img alt={`${emp.firstName} ${emp.lastName}`} src={emp.picture}></img></TableCell>
                                <TableCell>{emp.firstName}</TableCell>
                                <TableCell>{emp.lastName}</TableCell>
                                <TableCell>{emp.gender}</TableCell>
                                <TableCell>{emp.email}</TableCell>
                                <TableCell>{emp.phone}</TableCell>
                                <TableCell>{emp.city}</TableCell>
                                <TableCell>{emp.state}</TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EmpTable; 