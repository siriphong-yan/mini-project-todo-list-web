import { CREATE_TASK_SUCCESS, GETTING_TASK_ALL_SUCCESS, GETTING_TASK_TODAY_SUCCESS } from "@/constasts/appConstats";
import ApiService from "@/services/ApiService";

export const getTaskListAction = () => {
    return (dispatch:any) => {
        return ApiService.getTaskListToday()
            .then(result => dispatch({ type : GETTING_TASK_TODAY_SUCCESS, payload : result }))
            .catch(error => console.log(error));
    }
}

export const getTaskAllAction = () => {
    return (dispatch:any) => {
        return ApiService.getTaskListAll()
            .then(result => dispatch({ type : GETTING_TASK_ALL_SUCCESS, payload : result }))
            .catch(error => console.log(error));
    }
}

export const createTaskAction = (taskName:String, taskDate:String, taskDesc:String, taskBgColor:String) => {
    return async (dispatch:any) => {
        return await ApiService.creatTask(taskName, taskDate, taskDesc, taskBgColor)
            .then(result => dispatch({ type : CREATE_TASK_SUCCESS, payload : result?.message }))
            .catch(error => console.log(error));
    }
}