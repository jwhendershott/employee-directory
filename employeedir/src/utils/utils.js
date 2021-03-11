const util = {
    searchEmp: (value, empArr) => {
        let filteredEmps = empArr.filter((emp) => {
            return emp.firstName.toLowerCase().includes(value.toLowerCase()) ||
                emp.lastName.toLowerCase().includes(value.toLowerCase()) ||
                emp.email.toLowerCase().includes(value.toLowerCase()) ||
                emp.phone.toLowerCase().includes(value.toLowerCase()) ||
                emp.city.toLowerCase().includes(value.toLowerCase()) ||
                emp.state.toLowerCase().includes(value.toLowerCase())
        })
        return filteredEmps;
    },

    compareValues: (key, order = 'asc') => {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return 0;
            }
            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];

            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];
            let comparison = 0;
            if (varA > varB) {
                comparison = 1;

            } else if (varA < varB) {
                comparison = -1;
            }

            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    }
}
export { util }