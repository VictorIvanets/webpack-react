import { EntityState } from "@reduxjs/toolkit"
import { Comment } from "../CommentTypes/commentsTypes"

export interface CommentSchema {
    isLoading?: boolean
    error?: string | unknown
    ids: string[],
    entities: Record<any, any>
    // data?: Comment[]
}