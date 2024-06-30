import { useTheme } from "app/Providers/Theme/useTheme";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import className from "shared/lib/helpers/classNames/classNames";
import { Article, ArticleView } from "../articleTypes/articleTypes";
import { $api } from "shared/api/api";
import { useState, useEffect, memo, useCallback} from "react";
import {ArticalList} from "../index";
import VievBig from 'shared/assets/viewbig.svg'
import VievSmall from 'shared/assets/viewsmall.svg'



export const ArticlesPage = memo(() => {
    const {theme} = useTheme()
    const {t} = useTranslation()
    const [viewList, setViewList] = useState(
        JSON.parse(localStorage.getItem('view')) 
        || ArticleView.BIG)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const [limitPage, setLimitPage] = useState(
        viewList === 'BIG' ? 3 : 4
        )
    const [isLoading, setisLoading] = useState(false)
    const [allArt, setAllArt] = useState(false)


    const addArticles = useCallback(()=>{
        setLimitPage(limitPage + 1)
        setisLoading(true)
    },[limitPage])

    
    const fethArtical = useCallback(async () => {
        try {
            const {data} = await $api.get<Article[]>(`/news`, {
               params:  { 
                _limit: limitPage,
                // _page: '1'
            }
            })  
            setData(data)
            setisLoading(false)
                
        } catch(e) {
            if (e instanceof AxiosError){
                setError(e.message)
            }
            return
        }}, [limitPage])

  
    useEffect(()=>{
        fethArtical()

        localStorage.setItem('view', JSON.stringify(viewList))

        if (limitPage === data?.length+1){
            
            setAllArt(false)
        } if (limitPage > (viewList === 'BIG' ? 4 : 5) && limitPage !== data?.length+1) {
            setAllArt(true)
            console.log(limitPage)
        }
    }, [viewList, limitPage, allArt])



    const viewWin = useCallback(()=>{
        if (viewList === ArticleView.BIG) {
            setViewList(ArticleView.SMALL)} 
        if (viewList === ArticleView.SMALL) {
            setViewList(ArticleView.BIG)} },[viewList])


    return (
        <div className={className('artipage', {artipagedark: (theme === "dark" ? true : false), artipageruby: (theme === "ruby" ? true : false)}, [])}>
          
            <div className={className('artipage__header', {artipagedark__header: (theme === "dark" ? true : false), artipageruby__header: (theme === "ruby" ? true : false)},  [])}>
                <button onClick={viewWin} className="artipage__header__btn">
                    {viewList === ArticleView.SMALL ? <VievBig className="artpagesvg"/> : <VievSmall className="artpagesvg"/>}
                </button>
                <h1 className='margin1'> {t("ARTICLES")}</h1>
            </div>

            <div className="artipage__content">
                 {error ? <h2>ERROR NETWORK</h2> : <ArticalList 
                    isLoading={isLoading} 
                    articles={data} 
                    view={viewList} 
                    addArticles={addArticles}
                    allArt={allArt}
                    />}
            </div>
            <div className="nextbox">
            </div>


        </div>
    );
});

export default ArticlesPage;
