export interface Tweet{
    id: string,
    userId:
    
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