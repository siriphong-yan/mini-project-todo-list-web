import dayjs from "dayjs";

export const SIGNIN_SUCESS = "SIGNIN_SUCESS";
export const SIGNOUT_SUCESS = "SIGNOUT_SUCESS";

export const GETTING_TASK_TODAY_SUCCESS = "GETTING_TASK_TODAY_SUCCESS";
export const GETTING_TASK_ALL_SUCCESS = "GETTING_TASK_ALL_SUCCESS";
export const CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS";

export interface AuthUser {
    displayName: String;
    email: String;
    about: String;
}

export const TEXT_COLOR = "#696969";
export const TEXT_GRAY_NO1 = "#808080";
export const TEXT_GRAY_NO2 = "#9C9C9C";

export const dateFormated = (date:string) => {
    if(date == ""){
        return "";
    }

    return dayjs(date).format("DD/MM/YYYY");
}