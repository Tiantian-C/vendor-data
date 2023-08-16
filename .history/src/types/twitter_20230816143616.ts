export interface Tweet{
    id: string,
    userId: string,
    userName: string,
    tset: string,
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