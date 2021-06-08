import {ADDTASK,DELETETASK,COMPLETETASK,EDITTASK} from '../constant/ActionTypes'
export const addtask=(payload)=>{
return {
    type:ADDTASK,
    payload
}
}
export const deletetask=(id)=>{
return {
    type:DELETETASK,
    payload:id
}
}
export const completetask=(payload)=>{
    return{
        type:COMPLETETASK,
        payload
    }
}
export const edittask=(payload)=>{
 return {
     type:EDITTASK,
     payload
 }
}