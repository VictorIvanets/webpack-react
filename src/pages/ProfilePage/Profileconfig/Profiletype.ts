
export enum Currency {
    UAH = "UAH",
    USD = "USD",
    EUR = "EUR"
}


export enum ValidateProfileError {
    INCORRECT_USER_DATA = "Введіть Ім'я та Прізвище",
    INCORRECT_USER_EGE = "Введіть вірно вік",
    INCORRECT_USER_COUNTRY = "Введіть назву країни",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR"
}


export interface ProfileProps {
    id?: string,
    first?: string
    lastname?: string
    age?: string
    currency?: Currency
    country?: string
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    form?: ProfileProps
    data?: ProfileProps
    isLoading: boolean
    error?: string | string[] | unknown
    readonly?: boolean
    validateErrors?: ValidateProfileError[]
}

export interface ProfileCardProps {
    data?: ProfileProps
    isLoading?: boolean
    error?: unknown
    readonly?: boolean
    onCangeFLastname?: ()=>void
    onCangeFirstname?: ()=>void
    onCangeUsername?: ()=>void
    onCangeAge?: ()=>void
    onCangeCyty?: ()=>void
    onCangeCountry?: ()=>void
    onCangeCurrency?: (currency: Currency)=>void
}