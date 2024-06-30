import { useTheme } from "app/Providers/Theme/useTheme";
import { useTranslation } from "react-i18next";
import className from "shared/lib/helpers/classNames/classNames";
import ArticlesDetails from "../ArticlesDetailsComponents/ArticlesDetails";
import { useParams } from "react-router-dom";
import { CommentList } from "widgets/Comment";
import { StateSchema } from "app/Providers/StoreProvider/config/StateSchema";
import { useDispatch, useSelector } from "react-redux";
import DinamicModulLoader, { ReducerList } from "shared/lib/DinamicModulLoader/DinamicModulLoader";
import { commentSliceReduser, getComments } from "widgets/Comment/model/CommentSlice";
import { AppThunkDispatchData } from "shared/lib/helpers/AppDispatch/AppDispath";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { fetchComments } from "widgets/Comment/model/fetchComments";
import { PreLoaderGradient } from "widgets/PreLoader/ui/PreloaderGradient";
import { UseInfiniteScroll } from "shared/lib/useInfiniteScroll/useInfiniteScroll";



interface ArticlesDetailsPageProps {

}

const reducer: ReducerList = {
    Comments: commentSliceReduser
}


export const ArticlesDetailsPage = (props:ArticlesDetailsPageProps) => {
    const {theme} = useTheme()
    const {t} = useTranslation()
    const {id} = useParams<{id: string}>()
    const comments = useSelector(getComments.selectAll)
    const isLoading = useSelector((state: StateSchema) => state?.Comments?.isLoading || undefined)
    const error = useSelector((state: StateSchema) => state?.Comments?.error || undefined)
    const dispatchData = useDispatch<AppThunkDispatchData>();
    const updateComments = useSelector((state: StateSchema) => state?.addCommentUser?.isLoading)
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const [viewComments, setViewComments] = useState(false)

    UseInfiniteScroll ({
        triggerRef,
        wrapperRef,
        callback: ()=>{
            setViewComments(true)
            console.log('COMMENTS')
        }
    })



    useEffect(()=>{ 
            dispatchData(fetchComments(id))
    },[viewComments, dispatchData, id, updateComments === true])


    return (
        <DinamicModulLoader reducers={reducer} removeAfterUnmount>
              <div className={className('artidetapage', {artidetapagedark: (theme === "dark" ? true : false), artidetapageruby: (theme === "ruby" ? true : false)}, [])}>
                <div ref={wrapperRef}  className="artidetapage__content">
                  <ArticlesDetails id={id}/>
                    <div ref={triggerRef}></div>
                    <h2 className="mb1">{t("comments")}</h2>
                      
                    {viewComments ? 
                     <>
                      {isLoading ? <PreLoaderGradient/> : <CommentList 
                      error = {error}
                      isLoading = {isLoading}
                      comments = {comments}/>}
                    </>
                     : ''}
                </div>
              </div>
        </DinamicModulLoader>
      
    );
};

export default ArticlesDetailsPage;