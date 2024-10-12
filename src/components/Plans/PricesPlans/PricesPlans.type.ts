export type PricesPlansData = {
    id: number,
    name: string,
    description: string,
    primary: boolean,
    prices: {
        id:number,
        name:string,
        prices:string
    }[],
    features:{
        id:number,
        name:string,
        active: boolean
    }[],
}[];

export type PricesPlansProps = {
    isMontly: boolean
}