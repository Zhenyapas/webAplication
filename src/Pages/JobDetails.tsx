import React, { useEffect} from 'react';
import Header from '../components/Header';
import { useAppSelector } from '../hooks/redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useDateInfo } from '../hooks/useDateInfo';
import { useSalaryParse } from '../hooks/useSalaryParse';
import Contacts from '../components/Contacts';
import DescriptionBlock from '../components/DescriptionBlock';
import TitleLine from '../components/TitleLine';
import Button1 from '../components/Button1';
import Carousel from '../components/Carousel';
import ButtonIcon from '../components/ButtonIcon';
import Loading from '../components/Loading';



  const x=50.48260972276553;
  const y=30.4782172456747;



function JobDetails() {


    const {users,loading} = useAppSelector(state => state.jobs);

    

    useEffect(() => window.scrollTo(0,0));

  

    const navigate = useNavigate();

  
    

    const params = useParams<'id'>()

    const paramsById = users.findIndex((e) =>  'id' + e.id == params.id);

    const user = users[paramsById];


       
    const page = (paramsById <= 5) ? 1 : Math.ceil(paramsById/ 5);
    const clickHandler = () => navigate(`/${page}`);

    

    const whenLoaded = useDateInfo(user);
    const salary = useSalaryParse(user);

 

    const content = (user?.description) ? user.description.split(/\n/).filter( (e:string) => e &&  e !== '  ') : false;

    const [text1,title1,text2,title2,text3] = (content) ? content : ['','','','',''];
  
    if(loading) return <Loading />;
    


    return (

  
        <div  className='container gap-x-[50px] sm:flex sm:flex-col lg:flex-row  px-4  mt-[1.5rem] lg:px-12 xl:px-0  '>

          <div className='max-w-[700px] grow  '>

            <Header title={'Job Details'} user={user} />


            
            <div className='hidden lg:flex justify-center sm:justify-start items-center mt-10 mb-10 '>
                <Button1 className='' id={user?.id}>Apply now</Button1>
            </div>


            <div className='max-width-[383px] mt-[34px] md:max-width-[500px]'>
          
              <div className='font-proxima max-width-[363px] text-h2 text-primary'>
                {(user?.title) && user?.title}
              </div>

              <div className='flex justify-between items-center '>


                    <div className=' text-3 font-thin opacity-60 text-secondary'>
                      {whenLoaded} 
                    </div>

                    <div className='flex flex-col items-end mt-1.25 '>
                        <div className=' text-4.5 -tracking-[0.56px] text-secondary '>Brutto, per year</div>
                        <div className='font-proxima text-8 -tracking-[0.63px] leading-6  text-primary font-[700]'>{salary}</div>
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
                {text3.split('.').filter(el => el).map((elem,i) => <li key={'benefit' + i} className='list'>{elem}</li>)} 
              </ul>

              <div className='flex justify-center sm:justify-start items-center mt-10 mb-10 '>
                <Button1 className='' id={user?.id}>Apply now</Button1>
              </div>


            <div className='flex flex-col'>
              {user?.pictures && 
              <div className='lg:order-last'>
                <TitleLine className='mb-[25px]'>Attached images</TitleLine>
                <Carousel pictures={user.pictures} />
              </div>

              }

              <TitleLine className='mb-[15px]'>Aditional Info</TitleLine>

              { (user?.employment_type) && 

                <>
                    <div className='text-lg text-[#38415D] opacity-[82%]'>Employment type</div>
                    <div className='flex justify-start  items-center mt-[10px]  '>
                      <DescriptionBlock className=' lg:w-[222px] bg-[#0000001F]/[12%] border-[#0000001F]/[12%] text-[#55699E]'>{user?.employment_type}</DescriptionBlock>
                    </div>
                </>
              }


              { (user?.benefits) && 

                <>
                    <div className='text-lg text-[#38415D] opacity-[82%] mt-[22px] '>Benefits</div>
                    <div className='flex justify-start  items-center mt-[10px] mb-10  '>
                      <DescriptionBlock className=' lg:w-[222px] bg-[#FFCF00]/[12%] border-[#FFCF00]/[12%] text-[#988B49]'>{user?.benefits}</DescriptionBlock>
                    </div>
                </>
              }

            </div>


            </div>  



            <TitleLine className='md:hidden mb-[21px]'>Contacts</TitleLine>


            <div className='hidden lg:flex xl:relative xl:right-[70px] justify-start lg:max-w-[12] '>
              <ButtonIcon onClick={clickHandler} className='mb-10 min-w-[223px]' title={'RETURN TO JOB BOARD'} icon={'arrow'} />
            </div>

          </div>


          

          <div className=' pc:min-width-[402px] grow flex flex-col gap-4  '>
            <Contacts  user={user} key={user?.id} />

            <div className='flex  justify-start lg:hidden '>
              <ButtonIcon onClick={clickHandler} className='mb-10 min-w-[223px]' title={'RETURN TO JOB BOARD'} icon={'arrow'} />
            </div> 

          </div>


        </div>

  );
}

export default JobDetails;