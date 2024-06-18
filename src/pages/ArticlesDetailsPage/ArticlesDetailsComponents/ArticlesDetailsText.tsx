import { useTheme } from "app/Providers/Theme/useTheme";
import { ArticleTextBlock } from "pages/ArticlesPage/articleTypes/articleTypes";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import className from "shared/lib/helpers/classNames/classNames";


export interface ArticlesDetailsTextProps {
    block: ArticleTextBlock
}


const ArticlesDetailsText = memo((props: ArticlesDetailsTextProps) => {
    const {theme} = useTheme()
    const {t} = useTranslation()

    const {block} = props

    return (
        <div className={className('ArticlesDetailsText', {ArticlesDetailsTextdark: (theme === "dark" ? true : false), ArticlesDetailsTextruby: (theme === "ruby" ? true : false)}, [])}>
            {block.title && <h2>{block.title}</h2>}
            {block.paragraphs.map((parag, index)=><p key={index}>{parag}</p>)}
        </div>
    );
});

export default ArticlesDetailsText;