import axios from "axios";

class ApiService{

    private storehubEndpointService:String;

    constructor(){
        this.storehubEndpointService = "http://localhost:3001/api";
    }
    
    async getTaskListToday(){
        try{
            const uri = "/task?today=1"
            let config = {
                method: "GET",
                url: `${this.storehubEndpointService}${uri}`
            };

            const response = await axios(config);
            if(response.status == 200){
                return response.data;
            }else{
                throw response.data;
            }
        }catch(err:any){
            throw err?.response?.data;
        }
    }

    async getTaskListAll(){
        try{
            const uri = "/task"
            let config = {
                method: "GET",
                url: `${this.storehubEndpointService}${uri}`
            };

            const response = await axios(config);
            if(response.status == 200){
                return response.data;
            }else{
                throw response.data;
            }
        }catch(err:any){
            throw err?.response?.data;
        }
    }

    async creatTask(taskName:String, taskDate:String, taskDesc:String, taskBgColor:String){
        try{
            const uri = "/create-task"
            let config = {
                method: "POST",
                url: `${this.storehubEndpointService}${uri}`,
                data: {
                    taskName,
                    taskDate,
                    taskDesc,
                    taskBgColor
                }
            };

            const response = await axios(config);
            if(response.status == 200){
                return response.data;
            }else{
                throw response.data;
            }
        }catch(err:any){
            throw err?.response?.data;
        }
    }
}

export default new ApiService();