import { useAppDispatch } from "../hooks/redux";
import { applyNow } from "../Store/actions/userActions";
import {ReactComponent as Arrow} from '../img/arrow.svg';
import { AppDispatch } from "../Store/index";
import { JsxElement } from "typescript";
import { ReactEventHandler } from "react";



interface IButton {
    className?:string,
    id?:string;
    icon:'arrow';
    title:string;
    onClick:ReactEventHandler
}


const ButtonIcon = (props:IButton) => {

    const style = (props.className) ? props.className : '' ;

    return (
        <>
             <div onClick={props.onClick} className={'btnBlock px-[24px]  bg-[#384564]/[13%] rounded-[8px]  hover:opacity-90 hover:shadow-indigo-500/4 hover:cursor-pointer ' + style}>
                
               {(props.icon === 'arrow') && <Arrow className="w-[10px] mb-[2px] mr-[19px] fill-[#384564] " />}
               
               <div className="font-proxima  text-[#3A4562] text-xs">{props.title}</div>
            
              
            </div>
        </> 
 
    ) 
}

export default ButtonIcon;