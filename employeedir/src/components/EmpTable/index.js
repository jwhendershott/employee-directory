import React from "react";

function EmpTable(props) {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Picture:</TableCell>
                        <TableCell>First Name:</TableCell>
                        <TableCell>Last Name:</TableCell>
                        <TableCell>Gender:</TableCell>
                        <TableCell>Email:</TableCell>
                        <TableCell>Phone Number:</TableCell>
                        <TableCell>City:</TableCell>
                        <TableCell>State:</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.employees.map(emp => {
                            return <TableRow key={emp.id.value}>
                                <TableCell><img alt={`${emp.name.first} ${emp.name.last}`} src={emp.picture.thumbnail}></img></TableCell>
                                <TableCell>{emp.name.first}</TableCell>
                                <TableCell>{emp.name.last}</TableCell>
                                <TableCell>{emp.gender}</TableCell>
                                <TableCell>{emp.email}</TableCell>
                                <TableCell>{emp.phone}</TableCell>
                                <TableCell>{emp.location.city}</TableCell>
                                <TableCell>{emp.location.state}</TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EmpTable; 