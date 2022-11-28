import { AppStore, RootState } from "../Store";
import { userData } from "../Store/slices/userSlice";





const Error = ({error}:any) => {

    return(

        <div className='absolute w-[100%] h-[100%] animate-pulse  bg-[#E6E9F2] opacity-15 flex flex-col items-center justify-start  pt-20'>
            
            <div role="status z-100  ">
                {error}
            </div>
        </div>
    )
}

export default Error;