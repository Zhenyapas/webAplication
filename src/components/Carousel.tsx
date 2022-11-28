interface ICarousel {
    pictures:Array<string>
    className?:string
}

const Carousel = ({pictures,className}:ICarousel) => {


    const style = (className) ? className : '' ;


    const picturesArr = pictures.map((elem,index) => {

        return (

            <div key={'img' + index} className={`slider-item md:ml-0 ${(index === 0) && 'ml-12'}`}>
                <img className="w-[100%] " src={elem}></img>
            </div>
        )

    })
    
    console.log(picturesArr);

    return(

            <div className={`slider-container md:flex md:justify-start ${style}`}>
              <div className="slider-wrapper">

                { picturesArr }

              </div>
            </div>

        

    )
}

export default Carousel;