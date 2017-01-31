import React from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) =>{

  return <tr>
    <td></td>
    <td><Link to={"/courses/"+course.id}>{course.title}</Link></td>
    <td>{course.authorId}</td>
    <td>{course.category}</td>
    <td>{course.length}</td>
    <td></td>
  </tr>
}


export  default CourseListRow;
