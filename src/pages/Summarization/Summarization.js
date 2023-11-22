import React from 'react'
import "../style/Summarization.css"
import Button from 'react-bootstrap/Button';

const Summarization = () => {
  return (
      <div className="summarizeContainer">
          <div className="lessonTitle">
              <b>Lesson Title</b>
          </div>
          <div className="summarizeText">
              <textarea id="summarizeText" rows="20"></textarea>
          </div>
          <div className="downButton">
              <Button className="downloadSummarize" size="lg" variant="success">Download</Button>
          </div>
    </div>
  )
}

export default Summarization