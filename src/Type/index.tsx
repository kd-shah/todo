import { MutableRefObject } from "react"



interface tasks {
    id : number,
    item : string | undefined,
    isActive : boolean,
    isEditing : boolean
}

interface inputView {
    value? : string
    placeholder?: string
    refer?: MutableRefObject<HTMLInputElement | null>  
}

interface taskfunctions{
  todos : tasks[]
  down: (id : number) => void  
  clear : (id : number) => void
  up : (id : number) => void 
  edit : (id : number) => void 
  onChangeCheckBox : (id : number) => void 
  cancelEdit : (id : number) => void 
  saveTask : (id : number) => void 
  editTaskRef :  MutableRefObject<HTMLInputElement | null>

}

interface todoItem{
    onChange : () => void
    checked : boolean
    value?: string
}

interface iconButton{
    onClick : () => void
    disabled? : boolean 
    title : string
    icon : any
}

interface button {
    onClick : () => void 
    name : string
}
export { tasks, inputView , taskfunctions , todoItem , iconButton, button }