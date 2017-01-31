import courseApi from '../api/mockCourseApi';



export function loadCoursesSuccess(course) {
  return { type: 'LOAD_COURSES_SUCCESS', course }
}

export   function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses().then(course=>{dispatch(loadCoursesSuccess(course))})
  }
}
