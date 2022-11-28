
interface ITitle {
    className?:string,
    children:string,
}

const TitleLine = ({className,children}:ITitle) => {
    
    const style = className;
    return(

        <div className={`flex flex-col sm:flex-row sm:items-center sm:border-b-[1px] sm:border-[#3A4562]/[.13] ${style}`} >
            
            <div className='font-proxima text-h1 text-primary md:mb-4 '>{children}</div>
            <div className='h-[1px] bg-secondary  opacity-10 mt-[4px] '></div> 

        </div>

    )
}
export default TitleLine;