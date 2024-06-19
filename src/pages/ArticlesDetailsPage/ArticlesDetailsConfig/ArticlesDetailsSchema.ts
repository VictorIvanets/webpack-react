import { Article } from "pages/ArticlesPage/articleTypes/articleTypes"

export interface ArticlesDetailsSchema {
    isLoading: boolean
    error?: string | unknown
    data?: Article

}