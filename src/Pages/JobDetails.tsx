import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import {ReactComponent as Marker} from '../img/marker.svg'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchUsers } from '../Store/actions/userActions';
  const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

 
  const googleMapkey='AIzaSyAQ_EbCAnxy2fLyqH7UH6Ixjdz0TRrkEQ8&map_id=13b0be2ff57fdaaf';





  const options = {
  method: 'GET',
  url: 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data',
  headers: { Authorization: ` Bearer ${token} `}
  };

  async function getUser(func:Function) {
    try {
      const response = await axios.request(options);
      
      if (!(response.status === 200)) {
        throw new Error("Данные некорректны");
      }
      func(response.data[0].description);

    } catch (error) {
      console.error(error);
      func(false)
  
    }
  }




function JobDetails() {

  const [words,setWords] = React.useState('');
  const dispatch = useAppDispatch();

  const {users,loading} = useAppSelector(state => state.jobs);

  

  React.useEffect(() => {
    setWords(users[0]?.description )
  },[])

 

   const content = (words) ? words.split(/\n/).filter( (e:string) => e &&  e !== '  ') : false;

   

   const [text1,title1,text2,title2,text3] = (content) ? content : ['','','','',''];
  
   console.log(content);
   
   

  return (


    <div  className='container gap-x-[50px] sm:flex sm:flex-row sm:flex-wrap  px-4  mt-[1.5rem] lg:px-12 xl:px-0  '>

      <div className='max-w-[700px] grow '>

        <Header  />


        <div className='max-width-[383px] mt-[34px] md:max-width-[500px]'>
      
          <div className='font-proxima max-width-[363px] text-h2 text-primary'>
            
          </div>

          <div className='flex justify-between items-center '>


                <div className=' text-3 font-thin opacity-60 text-secondary'>
                  Posted 2 days ago
                </div>

                <div className='flex flex-col items-end mt-1.25 '>
                    <div className=' text-4.5 -tracking-[0.56px] text-secondary '>Brutto, per year</div>
                    <div className='font-proxima text-8 -tracking-[0.63px] leading-6  text-primary font-[700]'>€ 54 000—60 000</div>
                </div>


          </div>


          <div className=' text-lg -tracking-[0.63px] mt-[14px] text-secondary font-[400]'>
            {text1}
          </div>


          <div className='font-proxima text-2xl  -tracking-[0.63px] font-[700] mt-[43px] text-primary'>{title1}</div>

          <div className='text-lg -tracking-[0.63px] mt-[14px] text-secondary font-[400]'>
            {text2}
          </div>


          <div className='font-proxima text-2xl -tracking-[0.63px] font-[700] mt-[43px] text-primary'>{title2}</div>

          <ul className='list mt-4'>
         { text3.split('.').filter(el => el).map(elem => <li className='list'>{elem}</li>)} 
          </ul>



        </div>  


        



      </div>


      <div className=' pc:min-width-[402px]  grow  flex '>
        <div className='2xl:max-w-[85px] 2xl:grow'></div>
        <div className=''> 
          <div className='h-[220px] w-[372px]  pc:w-[402px] bg-[#2A3047] rounded-tl-[8px] rounded-tr-[8px] overflow-hidden '>
            <div className='hidden pc:block relative right-[90px]  bottom-[20px] z-10  rounded-[50%] w-[273px] h-[273px] bg-[#202336] '></div> 

           <div className='mt-[31px] ml-[62px]  pc:pcMap'>
            <div className='  font-proxima text-[#f0ede7] text-base  '>
              Departament name. 
            </div>
            <div className=' font-proxima text-base -mt-[4px] text-[#f0ede7]'>University Hospital Giessen.</div>
            <div className='flex items-center mt-[17px]'>
              <Marker className='w-[13px] mr-[8px]' />
              <div className=' text-base -tracking-[0.5px] font-[400] text-[#E7EAF0] pc:text-[#E8EBF3]  '>AKH Wien, 1090 Wien, Währinger</div>
            </div>
            <div className='text-[#f0ede7] text-base font-[400] mt-[3px] -tracking-[0.5px]  '>Gurtel 18-20</div>
            <div className='font-proximaThin pc:font-roboto text-[#FFFFFFAB] pc:text-[#E8EBF3] text-base font-[400] mt-[6px] -tracking-[0.5px] opacity-[70%] pc:opacity-100'>+43 (01) 40400-12090,</div>
            <div className='font-proximaThin pc:font-roboto text-[#FFFFFFAB] pc:text-[#E8EBF3] text-base font-[400] -mt-[2px] -tracking-[0.5px] opacity-[70%] pc:opacity-100'>post_akh_diz@akhwien.at</div>
           </div>
          </div>
          <div className='h-[216px] w-[372px] pc:w-[402px] mb-[20px] rounded-bl-[8px] rounded-br-[8px] overflow-hidden'>
          {/*   <img width="402" src={`https://maps.googleapis.com/maps/api/staticmap?
            &markers=icon:https://i.ibb.co/34Y5mrk/marker-Large.png%7Clabel:%7C${50.48260972276553}%2C${30.4782172456747}
            &zoom=10&scale=2&size=${402}x${258}&maptype=roadmap&format=jpg&key=${googleMapkey}`} alt="Location"  />  */}
          </div>
        </div>
      </div>
       
      
        
         

    </div>
  );
}

export default JobDetails;