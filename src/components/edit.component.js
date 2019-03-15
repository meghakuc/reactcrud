import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeDepartmentName = this.onChangeDepartmentName.bind(this);
    this.onChangeRollNumber = this.onChangeRollNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      student_name: '',
      department_name: '',
      roll_number:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/student/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                student_name: response.data.student_name, 
                department_name: response.data.department_name,
                roll_number: response.data.roll_number });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeStudentName(e) {
    this.setState({
      student_name: e.target.value
    });
  }
  onChangeDepartmentName(e) {
    this.setState({
      department_name: e.target.value
    })  
  }
  onChangeRollNumber(e) {
    this.setState({
      roll_number: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      student_name: this.state.student_name,
      department_name: this.state.department_name,
      roll_number: this.state.roll_number
    };
    axios.post('http://localhost:4000/student/update/'+this.props.match.params.id, obj)
        .then(res => {
		console.log(res.data);
		this.props.history.push('/home');})
		.catch(function (error) {
          console.log(error);
    });
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Student</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Student Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.student_name}
                      onChange={this.onChangeStudentName}
                      />
                </div>
                <div className="form-group">
                    <label>Department Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.department_name}
                      onChange={this.onChangeDepartmentName}
                      />
                </div>
                <div className="form-group">
                    <label>Roll Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.roll_number}
                      onChange={this.onChangeRollNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Student" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}