import React from 'react';
import CourseListRow from './CourseListRow'

const CourseList  = ({course}) =>{

  return <div>

    <table className="table table-striped">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {course.map((coursez)=>{
        return <CourseListRow course={coursez} key={coursez.id}/>
      })}

      </tbody>

    </table>

  </div>

}

export default CourseList;
