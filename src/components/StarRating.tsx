import {ReactComponent as Rate} from '../img/rate.svg';


const StarRating = () => {

    return (

     <div className='flex '>
        <Rate className='w-[10px] ml-[1px] fill-[#D8D8D8]' />
        <Rate className='w-[10px]  ml-[1px] fill-[#D8D8D8]' />
        <Rate className='w-[10px]  ml-[1px] fill-[#D8D8D8]' />
        <Rate className='w-[10px]  ml-[1px] fill-[#D8D8D8]' />
        <Rate className='w-[10px] opacity-30 ml-[1px] fill-[#D8D8D8]' />
     </div>

    )
}

export default StarRating;