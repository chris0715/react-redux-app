import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseAction';
import AddCourse from './addCourse'
import courseApi  from '../../api/mockCourseApi';
import CourseList from './CourseList';

class CoursesPage extends React.Component{
    constructor(){
        super();

    }
    onTitleChange(event){
        const Course = this.state.course;
        Course.title = event.target.value;
        this.setState({course: Course});
    }
    onClickSave(){

      this.props.actions.create(this.state.course);

    }

  courseRow(course, index){
    return( <div key={index}>
      {course.title}
    </div>);

  }
    render(){
        return(
            <div>
              <h1> courses </h1>
              <CourseList course={this.props.courses}/>

            <AddCourse  change={this.onTitleChange.bind(this)} save={this.onClickSave.bind(this)}/>


            </div>
        );
    }
}

function MapStateToProps(state) {
  return {
    courses: state.courseReducer
};
}
function MapDispatchToProps(dispatch) {
  return { actions : bindActionCreators(courseAction, dispatch)}
}
export default connect(MapStateToProps, MapDispatchToProps)(CoursesPage);
