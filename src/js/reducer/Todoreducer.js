import {ADDTASK,DELETETASK,COMPLETETASK,EDITTASK} from '../constant/ActionTypes'
const initialState=[{task:"task",id:Math.random(),isDone:false}]
const Todoreducer = (state=initialState,{type,payload}) => {
 switch (type) {
     case ADDTASK : return [...state,payload]
     case DELETETASK: return state.filter(el=>el.id!==payload)
     case COMPLETETASK: return state.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)
     case EDITTASK: return state.map(el=>el.id===payload.id?{...el,task:payload.taskmodified}:el)
     
         
      default: return state;
 }
}
 
export default Todoreducer;
