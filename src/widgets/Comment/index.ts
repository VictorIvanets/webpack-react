import { lazy } from 'react';
export {Comment} from './CommentTypes/commentsTypes'
export {CommentSchema} from './model/CommentSchema'

export const CommentList = lazy(() => import('./ui/CommentList'));
export const CommentAdd = lazy(() => import('./ui/CommentAdd'));
