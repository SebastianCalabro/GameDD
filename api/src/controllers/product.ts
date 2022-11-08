import { Request, Response } from "express"


export const getProducts = (req : Request, res : Response) => {
 res.json({
    msg: "get products"
 })
}

export const getProduct = (req : Request, res : Response) => {
    res.json({
       msg: "morty"
    })
   }