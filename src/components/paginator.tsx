import { useNavigate } from 'react-router-dom';
import {ReactComponent as Arrow2} from '../img/arrow2.svg';


interface IPaginator  {
    currentPage:number|string,
    paramsPage:string|undefined,
    pageCount?:number
}



const Paginator = ({currentPage,paramsPage,pageCount=6}:IPaginator) => {


    const navigate = useNavigate();

    
    const setPages = (p:any) => {

        let arr=[];
        for(let i=0;i<4;i++){
        
            arr.push(p-2+i);
        }

   
        if(p>3 && p<pageCount - 1 ){
        let  arrPages = [1,'...',...arr,'...',pageCount];
        return arrPages
        } 
        if( p === pageCount || p > pageCount - 2) {
            return [1,'...',pageCount - 2 , pageCount - 1 , pageCount];
        } else {
        return [1,2,3,'...',pageCount] ;
        }
    }


  const pages = setPages(paramsPage)

    return (

        <>
            <div className='bg-[#F9FAFD] rounded-[8px] w-[396px] lg:w-[515px] h-[40px] lg:h-[52px] flex justify-around items-center'> 
          
          <Arrow2 onClick={() => navigate(`/${+currentPage - 1}`)} className='fill-[#FFFFFF] lg:fill-[#7D859C] w-[12px] h-[14px] cursor-pointer hover:fill-[#55699E]/70' />
          <div className='w-[1px] h-[24px] bg-[#38415D0D]/[0.13]'></div>

          <div className='h-[100%] min-w-[204px] text-base lg:text-[20px] flex justify-center gap-1 lg:gap-2 items-center'>

              {pages.map( (e) => (e !== '...') ? <div onClick={() => navigate(`/${e}`)} key={e} className={ (e == paramsPage) ? 'paginator_item_active' : 'paginator_item'  }>{e}</div> 

              :  <div key={e} className={  'paginator_item'  }>{e}</div>

              )}

          </div>

          <div className='w-[1px] h-[24px] bg-[#38415D0D]/[0.13]'></div>
          <Arrow2 onClick={() => navigate(`/${+currentPage + 1}`)} className='fill-[#FFFFFF] lg:fill-[#7D859C] w-[12px] rotate-180 h-[14px] cursor-pointer hover:fill-[#55699E]/70' />

        </div>
        </>

    )
}

export default Paginator;