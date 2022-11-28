import StarRating from '../components/StarRating';
import {ReactComponent as Marker} from '../../src/img/marker.svg'
import { ICard } from '../models/models';
import {useState,useEffect} from 'react';
import ButtonPined from '../components/ButtonPined';
import getCountryCoordinates from '../axios/getCountryCoordinates';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { useDateInfo } from '../hooks/useDateInfo';
import Loading from '../components/Loading';










const Card = ({user,key}:ICard) => {


    const {title,name,location,pictures,id} = user;

    const {loading} = useAppSelector(state => state.jobs);

    const x = location.lat;
    const y = location.long

    const avatar = pictures[0];

    const [country,setCountry] = useState('Loading...')
   

    useEffect( () => {
        getCountryCoordinates(setCountry,x,y);
    } ,[country]);

    const whenLoaded = useDateInfo(user);
    const navigate = useNavigate();

    const clickHandler = () => navigate(`/jobdetails/id${id}`);


    if(loading) return <Loading />;


    return (
        
    <div className='bg-[#EFF0F5] shadow-md hover:shadow-primary/20  delay-300 mt-[9px] lg:mt-[29px] rounded-[8px] lg:pl-0  lg:min-h-[164px] flex px-0'>

        <div className='px-4 lg:px-6 flex justify-center'>
            <div className=' mt-[45px] lg:mt-[24px] rounded-[50%] overflow-hidden w-[66px] h-[66px] lg:w-[88px] lg:h-[88px] '>
               <img className='w-[66px] relative  lg:w-[88px]' src={avatar}></img>
            </div>
        </div>

        <div className='grow lg:flex '>

            <div className=' mr-4 mt-3 flex grow lg:order-2 lg:items-end lg: justify-evenly lg:mr-0 lg:mb-0'>

                
                <StarRating  />

                <div className='grow flex justify-end items-center'>
                    <div className='font-proximaThin text-sm text-[#878D9D] tracking-[0.21px] leading-4  lg:mb-6 '>{whenLoaded}</div>
                </div>

             
               <ButtonPined key={'Btn'+ key} user={user}  />



            </div>
         <div className='none lg:flex lg:flex-col lg:w-[600px] xl:w-[712px]'>
            <div className=' mr-4 mt-[14px] flex grow '>

                <div className='grow flex hover:cursor-pointer items-center' onClick={clickHandler}>
                    <div className='font-proximaThin hover:opacity-90   lg:font-proxima text-base xl:text-xl text-primary -tracking-[0.56px] lg:-tracking-[0.63px] leading-6 max-w-[270px] md:max-w-[370px] lg:max-w-[712px] '>
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

            <div className=' mr-4 mt-2 mb-7 lg:mb-6 flex grow  '>

                <div className='grow flex  items-center '>

                    <Marker className='w-[13px] ' /> 

                    <div className='font-proximaThin ml-2 text-base text-[#878D9D] tracking-[0.24px] leading-6  '>
                       {(country === undefined) ? 'Google api has not defined country' : country.split(',').splice(1,2).join()}
                    </div>
                </div>

            </div>   
         </div>

        </div>


        <div className='mt-[40px]'></div>

        


        
    </div>
 )
}

export default Card;