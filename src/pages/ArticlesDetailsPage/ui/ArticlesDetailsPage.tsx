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
import { useEffect, useState } from "react";
import { fetchComments } from "widgets/Comment/model/fetchComments";
import { PreLoaderGradient } from "widgets/PreLoader/ui/PreloaderGradient";



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


    useEffect(()=>{
        dispatchData(fetchComments("1"))
    },[dispatchData, id])
     console.log(id)


    return (
        <DinamicModulLoader reducers={reducer} removeAfterUnmount>
              <div className={className('artidetapage', {artidetapagedark: (theme === "dark" ? true : false), artidetapageruby: (theme === "ruby" ? true : false)}, [])}>
                <div  className="artidetapage__content">
                  <ArticlesDetails id={id}/>
                      <h2 className="mb1">{t("comments")}</h2>
                  {isLoading ? <PreLoaderGradient/> : <CommentList 
                      error = {error}
                      isLoading = {isLoading}
                      comments = {comments}/>}
                </div>
              </div>
        </DinamicModulLoader>
    );
};

export default ArticlesDetailsPage;