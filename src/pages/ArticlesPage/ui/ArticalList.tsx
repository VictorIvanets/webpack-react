import { useTheme } from "app/Providers/Theme/useTheme";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import className from "shared/lib/helpers/classNames/classNames";
import { Article, ArticleView } from "../articleTypes/articleTypes";
import { $api } from "shared/api/api";
import { useState, useEffect, memo} from "react";
import { PreLoaderGradient } from "widgets/PreLoader/ui/PreloaderGradient";
import ArticalListItem from "./ArticalListItem";


export interface ArticalListProps{
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}


export const ArticalList = memo(({articles, isLoading, view}: ArticalListProps) => {
    const {theme} = useTheme()
    const {t} = useTranslation()



    const renderArticle = (article: Article)=> {
        return (

            <ArticalListItem article = {article} view={view}/>
        )
    }


  
    return (
        <div className={className('ArticalList', {ArticalListdark: (theme === "dark" ? true : false), ArticalListruby: (theme === "ruby" ? true : false)}, [])}>

            {articles ? articles.map(renderArticle) : <PreLoaderGradient/>}

            
        </div>
    );
});

export default ArticalList;
