import React from "react";
import QuizStudent from "./QuizStudent";
import QuizTeacher from "./QuizTeacher"



const ShowQuizPage = () => {

    const quizTeacher = false

    if (quizTeacher === true) {
      return <QuizTeacher/>
    } else {
        return <QuizStudent/>
  }
}

export default ShowQuizPage