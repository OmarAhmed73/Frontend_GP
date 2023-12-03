import React from "react";
import Card from 'react-bootstrap/Card';
import '../../../pages/style/LessonsCard.css'
import Button from 'react-bootstrap/Button';

const LessonCardTeacher = () => {
  return (
      <div className="col-3 card-lesson">
      <div className="lessonCard py-3">
        <Card className="mainCardTeacher">
          <Card.Img className="card-image" variant="top" src="https://picsum.photos/200"/>
        <Card.Body>
          <Card.Title><b>Lesson Title</b></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="btn mb-1" style={{color:"white"}} size="lg" variant="info" href="/5">Update</Button> 
            <Button className="btn ms-2 mb-1" variant="danger" size="lg" href="/">Delete</Button>
            <Button  variant="success" >Generate Quiz</Button>
        </Card.Body>
      </Card>
      </div>
      </div>
  )
}

export default LessonCardTeacher