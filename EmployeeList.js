import Employee from './Employee';
import classes from './EmployeeList.module.css';

function EmployeeList(props) {
  return (
    <ul className={classes.list}>
      {props.emps.map((emp) => (
        <Employee
          key={emp.id}
          id={emp.id}
          Name={emp.Name}
          Age={emp.Age}
          Department={emp.Department}
          Salary={emp.Salary}
        />
      ))}
    </ul>
  );
}

export default EmployeeList;