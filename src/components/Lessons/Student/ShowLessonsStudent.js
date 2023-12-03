import React, { useState, useEffect} from 'react'
import LessonCardStudent from './LessonCardStudent'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'


const ShowLessonsStudent = () => {

  const [lessons, setLessons] = useState({
    loading: true,
    result: [],
    err: null,
    reload: 0
  })

  useEffect(() => {
    setLessons({ ...lessons, loading: true })
    
    axios.get("http://localhost:4000/lessons")
      .then((resp) => {
        setLessons({ ...lessons, result: resp.data.data.lesson, loading: false, err: null })
        console.log(resp.data.data.lesson)
      })
      .catch((err) => {
        setLessons({ ...lessons, loading: false, err: "something went wrong" })
    })
   }, [])
  
  return (
    <div className="home-container p-3">
      {
        lessons.loading === true && (
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        )
      } 

      {
        lessons.loading === false && lessons.err === null && (
          <div className="row">
            {
              lessons.result.map(lesson => ( 
                <LessonCardStudent 
                  key ={lesson._id}
                  title={lesson.title}
                  description={lesson.description}
                  pdfFile={`src:../../../../../the_learning_picnic_back_end-main/uploads/${lesson.pdfFile}`}
               />  
              ))
            }
        </div>
        )
      }
      
    </div>
  )
}

export default ShowLessonsStudent