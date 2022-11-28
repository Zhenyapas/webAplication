


interface IDescriptionBlock {
    className?:string,
    children?:any;
 
}

const DescriptionBlock = ({children,className}:IDescriptionBlock) => {

    if(typeof(children) === 'string') return  (<div className={'btnEmployment ' + className}>{children.toUpperCase()}</div>)

    return (
        <>

        {children.map((elem:string,index:string) => {

             return <div key={'block'+index} className={'btnEmployment ' + className}>{elem.toUpperCase()}</div>
        }) }
        </> 
 
    ) 
}

export default DescriptionBlock;