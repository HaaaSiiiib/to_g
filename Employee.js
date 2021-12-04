import Card from '../ui/Card';
import classes from './Employee.module.css';
function Employee(props) {
    return (
      <li className={classes.item}>
        <Card>
        <div className={classes.content}>
          <h3>Name: {props.Name}</h3>
          <h3>Age: {props.Age}</h3>
          <h3>Department: {props.Department}</h3>
          <h3>Salary: {props.Salary}</h3>
        </div>
        </Card>
      </li>
    );
  }

export default Employee;