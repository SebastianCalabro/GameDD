import axios from "axios";
import { Dispatch } from "redux"
import { Action } from "../Reducer/actionLogic";
export interface PayloadPost {
    title:string,
    image:string,
    description:string,
}

const action = {
    getPosts: function(post:string){
        return async function(dispatch: Dispatch<Action>){
            await axios.get("http://localhost:3001/api/post/")
            .then(data => {return dispatch({
                type:"GET_POSTS",
                payload: {
                    title:data.data.title,
                    image:data.data.image,
                    description:data.data.description
                }
            })})
            .catch(e => dispatch({
                type:"NO_POST",
                payload:true
            }))
        }
    }
}
export default action
