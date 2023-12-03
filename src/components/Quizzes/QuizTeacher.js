import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../../pages/style/Quiz.css';

const QuizTeacher = () => {
    return (
        <div className='card-cont-quiz'>
        <Card>
         <Card.Img className='card-image'
            variant="top" src="https://picsum.photos/id/14/200/300" />
        <Card.Body>
           <div className='card-content-quiz'>
               <Card.Title className='title'>
                   <h2>Quiz1</h2>
               </Card.Title>
           <Card.Text>
               <h4>lesson1</h4>
           </Card.Text>
           
            <Button  className='button-quiz-teacher' variant="danger" >
                Delete
            </Button>
      
           </div>
       </Card.Body>
   </Card>

</div>
    );
  }
  export default QuizTeacher;