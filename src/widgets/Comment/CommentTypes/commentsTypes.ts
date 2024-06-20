import { User } from "entities/UserSlise"

export interface Comment {
    id: string
    text: string
    user: User
    articleId?: string
    userId?: string
}