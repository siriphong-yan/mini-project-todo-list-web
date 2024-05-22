import * as constants from "@/constasts/appConstats";
import { AuthUser } from "@/constasts/appConstats";

export const userSigninSuccess = (data : AuthUser) => ({
    type : constants.SIGNIN_SUCESS,
    payload : data
});

export const userSignOutSuccess = () => ({
    type : constants.SIGNOUT_SUCESS
})