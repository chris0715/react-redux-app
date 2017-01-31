
 function courseReducer(state = [], action){

    switch(action.type)
    {
      case "LOAD_COURSES_SUCCESS":
        return action.course;



      default:
        return state;

    }




}

export default courseReducer;
