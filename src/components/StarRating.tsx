import {ReactComponent as Rate} from '../img/rate.svg';


const StarRating = () => {

    return (

     <div className='flex lg:self-center lg:ml-8  lg:mb-6 xl:ml-28'>
        <Rate className='w-[10px] lg:w-[19px] ml-[1px] fill-[#384564]  lg:fill-[#38415D]' />
        <Rate className='w-[10px] lg:w-[19px] fill-[#384564] lg:fill-[#38415D]' />
        <Rate className='w-[10px] lg:w-[19px] fill-[#384564] lg:fill-[#38415D]'  />
        <Rate className='w-[10px] lg:w-[19px] fill-[#384564] lg:fill-[#38415D]' />
        <Rate className='w-[10px] lg:w-[19px]  ml-[1px] fill-[#384564] opacity-70  lg:fill-[#38415D]' />
     </div>

    )
}

export default StarRating;