import { useTheme } from "app/Providers/Theme/useTheme";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import className from "shared/lib/helpers/classNames/classNames";
import Button from "widgets/Button/Button";
import { Input } from "widgets/Input";

export const CommentAdd = memo(() => {
    const {theme} = useTheme()
    const {t} = useTranslation()





    return (
        <div className={className('commentadd', {commentadddark: (theme === "dark" ? true : false), commentaddruby: (theme === "ruby" ? true : false)}, [])}>
            
            <h2>ВАШ КОМЕНТАР</h2>
            <Input placeholder="add comment" className="commentadd__input"/>
            <Button className="modalbtnOut commentadd__btn">ВІДПРАВИТИ</Button>

        </div>
    );
});

export default CommentAdd;