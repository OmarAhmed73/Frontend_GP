import React from "react";
import ParentReport from "./parentReport";
import StudentReport from "./studentReport";
import TeacherReport from "./teacherReport";

const ShowReport = () => {
    
    const reportDisplayed = "parent"

    if (reportDisplayed === "parent") {
        return <ParentReport/>
    } else if (reportDisplayed === "student") {
        return <StudentReport/>
    } else {
        return <TeacherReport/>
    }

}

export default ShowReport