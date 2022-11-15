import { PayloadPost } from "../Actions/postActions"
interface get {
    type:"GET_POSTS",
    payload: PayloadPost
}
interface close {
    type: "CLOSE_COUNTRY",
    payload:string
}
interface not{
    type: "NO_POST",
    payload:boolean
}
export type Action = get | close | not