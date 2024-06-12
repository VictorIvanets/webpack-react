
export enum Currency {
    UAH = "UAH",
    USD = "USD",
    EUR = "EUR"
}

export enum Country {
    USA = "USA",
    UKRAINE = "UKRAINE",
    FRANCE = "FRANCE"
}

export interface ProfileProps {

    first: string
    lastname: string
    age: string
    currency: Currency
    country: Country
    city: string
    username: string
    avatar: string
}

export interface ProfileSchema {
    data?: ProfileProps
    isLoading: boolean
    error?: string | unknown
    readonly?: boolean
}