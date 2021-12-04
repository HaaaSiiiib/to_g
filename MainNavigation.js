import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Employee Salary Management</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Employee details</Link>
          </li>
          <li>
            <Link to='/add'>Add New Employee</Link>
          </li>
          <li>
            <Link to='/other'>Other</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;