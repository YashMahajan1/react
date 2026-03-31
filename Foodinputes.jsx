import css from "./Foodinputes.module.css"
const Input = function({onKeyDown}){
    return <input
     type="text"placeholder="Enter Food Item " 
     className={css.input} 
     onKeyDown={onKeyDown}
    />

}
export default Input;
