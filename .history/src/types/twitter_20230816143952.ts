export interface Geotag{
    id: string,
    name: string,
    place_type: string,
    full_name: string,
    country: string,
    coordinates:{}
    
}





export interface Tweet{
    id: string,
    userId: string,
    userName: string,
    text: string,
    data: string,
    geo:Geotag
}



export interface Vendor{
    name: string,
    image: string,
    description: string,
    twitterId: string,
    tweets: Tweet[],
    created: number,
    updated:number, 
}