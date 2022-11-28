import {ReactComponent as Rate} from '../img/rate.svg';


const StarRating = () => {



    
    const raiting = Math.floor(Math.random() * 6);
    let arr = []

   for(let i=0;i<raiting;i++){
    arr.push(<Rate className='w-[10px] lg:w-[19px] ml-[1px] fill-[#384564]/80  lg:fill-[#38415D]'></Rate>)
   };

   const rest = 5 - raiting;

   for(let i=0;i<rest;i++){
    arr.push(<Rate className='w-[10px] lg:w-[19px]  ml-[1px] fill-[#384564]/80 opacity-70  lg:fill-[#38415D]' />)
   };


     return (
        <div className='flex lg:self-center lg:ml-8  lg:mb-6 xl:ml-28'>
            {arr}
        </div>
    )

}

export default StarRating;