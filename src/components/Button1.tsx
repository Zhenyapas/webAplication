import { useAppDispatch } from "../hooks/redux";
import { applyNow } from "../Store/actions/userActions";

interface IButton {
    className?:string,
    children?:string;
    id:string;
 
}



const Button1 = (props:IButton) => {

    const dispatch = useAppDispatch()

    const clickHandler = () => {

        dispatch(applyNow(props.id));
    }

    return (
        <>
             <div onClick={clickHandler} className={'btnBlock  bg-[#384564] rounded-[8px] text-[#ffff] text-xs hover:opacity-90 hover:shadow-indigo-500/4 hover:cursor-pointer s' + props.className}>{props.children}</div>
        </> 
 
    ) 
}

export default Button1;