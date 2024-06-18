import { useTheme } from "app/Providers/Theme/useTheme";
import { Article, ArticleCodeBlock } from "pages/ArticlesPage/articleTypes/articleTypes";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import className from "shared/lib/helpers/classNames/classNames";
import Button from "widgets/Button/Button";

export interface ArticlesDetailsCodeProps {
    block: ArticleCodeBlock
}



const ArticlesDetailsCode = memo(({block}: ArticlesDetailsCodeProps) => {
    const {theme} = useTheme()
    const {t} = useTranslation()
    const [copyOk, setCopyOk] = useState(null)

    function timeout(): any {setTimeout(()=>{
        setCopyOk(null)
    }, 1400)}

    const onCopy = useCallback(()=>{
        navigator.clipboard.writeText(block.code)
        setCopyOk(<div className="copyok"><h2 className="copyok__text">copy text</h2></div>)

        timeout()
        clearTimeout(timeout())

    },[block.code, copyOk])



    return (
        <div className={className('ArticlesDetailsCode', {ArticlesDetailsCodedark: (theme === "dark" ? true : false), ArticlesDetailsCoderuby: (theme === "ruby" ? true : false)}, [])}>
            <div className="ArticlesDetailsCode__box">
                <Button 
                onClick={onCopy}
                    className="ArticlesDetailsCode__box__btn modalbtnOut">
                    Copy
                </Button>
                {copyOk}
            <pre>
                <code className="ArticlesDetailsCode__code">{block.code}</code>
            
            </pre>
            </div>
        </div>
    );
});

export default ArticlesDetailsCode;