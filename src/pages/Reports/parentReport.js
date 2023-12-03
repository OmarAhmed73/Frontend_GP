import React from 'react';
import Table from 'react-bootstrap/Table';
import '../style/report.css';


const ParentReport = () => {
    return (
     <div className='reports p-5'> 
      <div className="header d-flex justify-content-between mb-5">
       <h3 className='title-teacher-report'>Your child's grades</h3>
     </div>
     <div class="row-report">
                <div class="col-sm-3" id='title-student-report'>
                  <p >Full Name:</p>
                </div>
                <div class="col-sm-6" >
                  <p >AAA</p>
                </div>
              </div>
              <div class="row-report">
                <div class="col-sm-3" id='title-student-report'>
                  <p >ID:</p>
                </div>
                <div class="col-sm-6">
                  <p >123</p>
                </div>
              </div>
       <Table id='table-student-report' striped="columns">
      <thead>
        <tr className='head'>
          <th>Quiz</th>
          <th>Grade</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Quiz1</td>
          <td>6</td>
         
        </tr>
        
        <tr>
          <td>Quiz2</td>
          <td>7</td>
         
        </tr>
        <tr>
          <td>Quiz3</td>
          <td>8</td>
         
        </tr>
        <tr>
          <td>Quiz4</td>
          <td>9</td>
         
        </tr>
        <tr>
          <td>Quiz5</td>
          <td>10</td>
         
        </tr>
      </tbody>
    </Table>
        </div>
    );
  };
  export default ParentReport;