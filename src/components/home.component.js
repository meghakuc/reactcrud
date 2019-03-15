import React, { Component } from 'react';
import axios from 'axios';
import TableData from './TableData';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  constructor(props) {
      super(props);
      this.state = {student: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/student')
        .then(response => {
          this.setState({ student: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabData(){
      return this.state.student.map(function(object, i){
          return <TableData obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
		  <Link to={'/create'} className="btn btn-primary">Create</Link>
          <h3 align="center">Students List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Department Name</th>
                <th>Roll Number</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabData() }
            </tbody>
          </table>
        </div>
      );
    }
  }