export interface Tweet{
    id:
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