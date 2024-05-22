import { CREATE_TASK_SUCCESS, GETTING_TASK_ALL_SUCCESS, GETTING_TASK_TODAY_SUCCESS } from "@/constasts/appConstats";

const initialState = {
    option:{
        createTaskStatus:null
    },
    taskTodayList:[],
    taskAllList:[]
};

const tasksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GETTING_TASK_TODAY_SUCCESS :
      return state = {
        ...state,
        taskTodayList: action.payload
      };
    case GETTING_TASK_ALL_SUCCESS :
        return state = {
            ...state,
            taskAllList: action.payload,
            option: {
                ...state.option,
                createTaskStatus : null
            }
        };
    case CREATE_TASK_SUCCESS :
        return state = {
            ...state,
            option: {
                ...state.option,
                createTaskStatus : action.payload
            }
        };
    default: {
      return state;
    }
  }
};

export default tasksReducer;