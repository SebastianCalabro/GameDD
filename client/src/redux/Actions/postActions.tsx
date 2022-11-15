import axios from "axios";
import { Dispatch } from "redux"
import { Action } from "../Reducer/actionLogic";
export interface PayloadPost {
    name:string,
    max:string,
    min:string,
    weather:string,
    id:number
}

const action = {
    getPosts: function(post:string){
        return async function(dispatch: Dispatch<Action>){
            await axios.get("http://localhost:3001/api/post/")
        }
    }
}
export default action
