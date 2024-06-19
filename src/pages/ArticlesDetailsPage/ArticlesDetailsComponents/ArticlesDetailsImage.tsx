import { useTheme } from "app/Providers/Theme/useTheme";
import { ArticleImageBlock } from "pages/ArticlesPage/articleTypes/articleTypes";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import className from "shared/lib/helpers/classNames/classNames";

export interface ArticlesDetailsImageProps {
    block: ArticleImageBlock
}


const ArticlesDetailsImage = memo(( props: ArticlesDetailsImageProps) => {
    const {theme} = useTheme()
    const {t} = useTranslation()

    const {block} = props

    return (
        <div className={className('ArticlesDetailsImage', {ArticlesDetailsImagedark: (theme === "dark" ? true : false), ArticlesDetailsImageruby: (theme === "ruby" ? true : false)}, [])}>
            <img className="ArticlesDetailsImage__img" src={block.src} alt="img" />
            {block.title && <h3>{block.title}</h3>}

        </div>
    );
});

export default ArticlesDetailsImage;