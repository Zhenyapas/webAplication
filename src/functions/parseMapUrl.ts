export const parseMapUrl = (lat:string, long:string,):string => {
    
    
    const key = '&key=AIzaSyAQ_EbCAnxy2fLyqH7UH6Ixjdz0TRrkEQ8'
      const baseUrl = 'https://maps.googleapis.com/maps/api/staticmap?&markers';
      const marker = `&markers=icon:${'https://i.ibb.co/34Y5mrk/marker-Large.png'}`;

      const coordinates = `%7Clabel:%7C${lat}%2C${long}`

      const mapStyle = '&map_id=13b0be2ff57fdaaf';
      const sizeOptions =`&zoom=2&scale=1&size=${402}x${258}`
      const languageFormat = `&language=en&maptype=roadmap&format=jpg`

      return  baseUrl+ marker+coordinates+sizeOptions+languageFormat+key+mapStyle
  }