
import {ReactComponent as Star} from '../img/star.svg';
import {ReactComponent as Share} from '../img/share-3-dott.svg';
import { parseMapUrl } from '../functions/parseMapUrl';
import { JsxElement } from 'typescript';
import { useEffect, useState } from 'react';

interface IMap {
    x:string,
    y:string,
}

function MapPicture({x,y}:IMap) {

    const [url, setUrl] = useState('');

    useEffect(() => {
        console.log(url)
        console.log(x,y)
        setUrl(parseMapUrl(x,y));
        console.log(url)
    }, [x,y])

   

  return (
     <>
     {url && <img width="402" src={url} alt="Location" />}
     {!url && <div className='bg-purple-400 animate-pulse h-[300px],w-[500px]'></div>}
     </> 
       
  );
}

export default MapPicture;