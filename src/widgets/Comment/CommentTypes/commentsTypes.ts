import { User } from "entities/UserSlise"

export interface Comment {
    id: string
    text: string
    user?: User
    articleId?: string
    userId?: string
}


export interface CommentProfileProps {
    id?: string,
    first?: string
    lastname?: string
    age?: string
    country?: string
    city?: string
    username?: string
    avatar?: string
}

export interface CommentProfileSchema {
    data?: CommentProfileProps
    isLoading: boolean
    error?: string | string[] | unknown
}

export interface addCommentType {
    id?: string
    text?: string
    articleId?: string
    userId?: string
}
export interface addCommentSchema {
    data?: addCommentType
    isLoading?: boolean
    error?: string | string[] | unknown
}




