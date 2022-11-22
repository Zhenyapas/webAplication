import StarRating from '../../components/StarRating';
import {ReactComponent as Marker} from '../../img/marker.svg'
import { IUser } from '../../models/models';
import {useState,useEffect} from 'react';
import axios from 'axios';

interface ICard {
  user: IUser
  key:string
}

interface IAdress{
    "compound_code" : string;
}
interface ILocationResponse {
    'plus_code': IAdress
}
     const func = async (func:Function,x:number,y:number) => {
        const res = await axios.get<ILocationResponse>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${x},${y}&language=en&key=AIzaSyAQ_EbCAnxy2fLyqH7UH6Ixjdz0TRrkEQ8`);
        const adress = res.data.plus_code.compound_code;
        func(adress);
      }
const Card = ({user}:ICard) => {


    const {title,name,location} = user;

    const x = location.lat;
    const y = location.long

    const [country,setCountry] = useState('Loading...')

   useEffect( () => {
    func(setCountry,x,y);
    console.log(country);
   } ,[country])



   console.log(country);
   

 return (
        
    <div className='bg-[#EFF0F5] shadow-md mt-[9px] lg:mt-[29px] rounded-[8px]  lg:min-h-[164px] flex px-0'>

        <div className='px-4 lg:px-6 flex justify-center'>
            <div className=' mt-[45px] lg:mt-[24px] rounded-[50%] overflow-hidden w-[66px] h-[66px] lg:w-[88px] lg:h-[88px] bg-orange-500'>
               <img></img>
            </div>
        </div>

        <div className='grow '>

            <div className=' mr-4 mt-3 flex grow'>

                <StarRating />

                <div className='grow flex justify-end items-center'>
                    <div className='font-proximaThin text-sm text-[#878D9D] tracking-[0.21px] leading-4  '>Posted 2 days ago</div>
                </div>

            </div>

            <div className=' mr-4 mt-[14px] flex grow '>

                <div className='grow flex  items-center'>
                    <div className='font-proximaThin  text-base text-primary -tracking-[0.56px] leading-6 max-w-[270px] md:max-w-[370px] lg:max-w-[712px] '>
                        {title}
                    </div>
                </div>

            </div> 
                               
            <div className=' mr-4 mt-[5px] flex grow '>

                <div className='grow flex  items-center'>
                    <div className='font-proximaThin text-base text-[#878D9D] tracking-[0.24px] leading-6  '>
                      Department name • {name}
                    </div>
                </div>

            </div>   

            <div className=' mr-4 mt-2 mb-7 lg:mb-0 flex grow  '>

                <div className='grow flex  items-center'>

                    <Marker className='w-[13px] ' /> 

                    <div className='font-proximaThin ml-2 text-base text-[#878D9D] tracking-[0.24px] leading-6  '>
                       {(country === undefined) ? 'Google api has not defined country' : country.split(',').splice(1,2).join()}
                    </div>
                </div>

            </div>   
           

        </div>

        


        
    </div>
 )
}

export default Card;