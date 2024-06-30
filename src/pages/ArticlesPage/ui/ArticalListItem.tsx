import { useTheme } from "app/Providers/Theme/useTheme";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import className from "shared/lib/helpers/classNames/classNames";
import { Article, ArticleBlockType, ArticleView } from "../articleTypes/articleTypes";
import {memo} from "react";


export interface ArticalListItemProps{
    article: Article
    view: ArticleView
    ref: any
}


export const ArticalListItem = memo(({article, view, ref}:ArticalListItemProps) => {
    const {theme} = useTheme()
    const {t} = useTranslation()

    let selector = ''
    if(view === "BIG") {
        selector = "ArticalListItem"
    }  
    if (view === "SMALL"){
        selector = "ArticalListItemSmall"
    }

    const textBlock = article.blocks.filter(block => block.type === ArticleBlockType.TEXT).map((i)=>i.paragraphs[0])

    return (
        
        <div className={className(`${selector}`, {
            ArticalListItemdark: (theme === "dark" ? true : false), 
            ArticalListItemruby: (theme === "ruby" ? true : false), 
            }, [])} >
            <Link className="active" key={article.id} to={`/article_datails/${article.  id}`}>
                    <div className={`${selector}__imgbox`}>
                        <img className={`${selector}__img`} src={article.img} alt="img"/>
                    </div>
            </Link>
            <div className={`${selector}__data`}>
                <h2>{article.title}</h2>
                <h3> Створено: {article.createdAt}</h3>
                <h3> Переглядів: {article.views}</h3>
                <p className="mb1">{article.subtitle}</p>
                <p className="mb1">{article.type.join(', ')}</p>
                <p className="mb1 fontsize1rem">{textBlock[0]}</p>
                <p ref = {ref}></p>
            </div>
         
        </div>
        
    );
});

export default ArticalListItem;
