import React from 'react';
import Table from 'react-bootstrap/Table';
import '../style/report.css';


const TeacherReport = () => {
    return (
     <div className='reports p-5'> 
      <div className="header d-flex justify-content-between mb-5">
       <h3 className='title-teacher-report'>Reports</h3>
     </div>
       <Table striped="columns">
      <thead>
        <tr className='head'>
          <th>Student Name</th>
          <th>Quiz1</th>
          <th>Quiz2</th>
          <th>Quiz3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AA</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        <tr>
          <td>BB</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        <tr>
          <td>CC</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        <tr>
          <td>DD</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        <tr>
          <td>EE</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        
      </tbody>
    </Table>
        </div>
    );
  };
  export default TeacherReport;