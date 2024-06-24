import { useTheme } from "app/Providers/Theme/useTheme";
import { useTranslation } from "react-i18next";
import className from "shared/lib/helpers/classNames/classNames";
import CommentCard from "./CommentCard";
import {CommentAdd} from "../index";
import { memo } from "react";
import { Comment } from "../CommentTypes/commentsTypes";
import { PreLoaderGradient } from "widgets/PreLoader/ui/PreloaderGradient";


export interface CommentListProps {
    comments: Comment[]
    isLoading?: boolean
    error?: string | unknown
}



export const CommentList = memo(({comments, isLoading, error}: CommentListProps) => {
    const {theme} = useTheme()
    const {t} = useTranslation()





    return (
        <div className={className('commentlist', {commentlistdark: (theme === "dark" ? true : false), commentlistruby: (theme === "ruby" ? true : false)}, [])}>
            
            <CommentAdd/>
            {
            comments?.length 
            ?   comments?.map(item => <CommentCard 
                comments ={item}
                key={item.id}
            />) 
            : error 
            ? <h2>{error.toString()}</h2>
            : <h2>No comments</h2>}
        </div>
    );
});

export default CommentList;