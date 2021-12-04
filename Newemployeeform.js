import {useRef,useState} from 'react';
import Card from '../ui/Card';
import classes from './Newemployeeform.module.css';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Axios from "axios"

function Newemployeeform() {
    const name_input_ref = useRef();
    const age_input_ref = useRef();
    const department_input_ref = useRef();
    const salary_input_ref = useRef();
    function SubmitHandler(event){
        event.preventDefault();
        const entered_name = name_input_ref.current.value;
        const entered_age = age_input_ref.current.value;
        const entered_department = department_input_ref.current.value;
        const entered_salary = salary_input_ref.current.value;
        const employee_data = {
            name: entered_name,
            age: entered_age,
            department: entered_department,
            salary: entered_salary,
        }
        Axios.post("http://localhost:3001/addnew",employee_data).then(res =>{
          alert(res.data.message);
        })

    }
    return (
      <Card>
        <form className={classes.form} onSubmit = {SubmitHandler} >
          <div className={classes.control}>
            <label htmlFor='Name'>Employee Name</label>
            <input type='text' required id='Name' ref = {name_input_ref} />
          </div>
          <div className={classes.control}>
            <label htmlFor='Age'>Employee Age</label>
            <input type='text' required id='Age' ref = {age_input_ref} />
          </div>
          <div className={classes.control}>
            <label htmlFor='Department'>Employee Department</label>
            <input type='text' required id='Department' ref = {department_input_ref} />
          </div>
          <div className={classes.control}>
            <label htmlFor='Salary'>Employee Salary</label>
            <input type='text' required id='Salary' ref = {salary_input_ref} />
          </div>
          <div className={classes.actions}>
            <button> Add Employee</button>
          </div>
        </form>
      </Card>
    );
  }
  
  export default Newemployeeform;
