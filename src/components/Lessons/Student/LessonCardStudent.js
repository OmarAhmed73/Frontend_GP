import React from "react";
import Card from 'react-bootstrap/Card';
import '../../../pages/style/LessonsCard.css' 
import Button from 'react-bootstrap/Button';
import pdf from '../../../assets/test.pdf'

const LessonCardStudent = () => {

  function openPdf() {
    window.open(pdf);
  }


  return (
      <div className="col-3 card-lesson">
      <div className="lessonCard py-3">
        <Card className="mainCardStudent">
          <Card.Img className="card-image" variant="top" src="https://picsum.photos/200"/>
        <Card.Body className="cardBodyStudent">
          <Card.Title className="cardTitleStudent"><b>Lesson Title</b></Card.Title>
          <Card.Text className="cardText">Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="btn btn-primary me-2 mb-2 showLesson" size="lg" onClick={openPdf}>Show Lesson</Button> 
          <Button className="btn btn-primary me-2 mb-2 summarize" size="lg" href="/Summarization">Summarize</Button>
        </Card.Body>
      </Card>
      </div>
      </div>
      
  )
}

export default LessonCardStudent