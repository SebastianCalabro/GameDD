import { PayloadPost } from "../Actions/postActions"
interface get {
    type:"GET_COUNTRY",
    payload: PayloadPost
}
interface close {
    type: "CLOSE_COUNTRY",
    payload:string
}
interface not{
    type: "NO_COUNTRY",
    payload:boolean
}
export type Action = get | close | not