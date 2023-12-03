import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../../pages/style/Quiz.css';
import { Button } from 'react-bootstrap';


const QuizStudent = () => {
    return ( 

            <div className='card-cont-quiz'>
            <Card>
             <Card.Img className='card-image-quiz'
                variant="top" src="https://picsum.photos/id/14/200/300" />
            <Card.Body> 
                <div className='card-content-quiz'>
                    <Card.Title className='title-quiz'>
                        <h2>Quiz1</h2>
                    </Card.Title>
                <Card.Text>
                    <h4>lesson1</h4>
                </Card.Text>
                <Button variant="primary" className='btn-quiz' style={{display:"inline-block"}} href='/questions'>
                    Show Quiz
                </Button>
                </div>
            </Card.Body>
        </Card>
    </div>
         
    );
};
  export default QuizStudent; 