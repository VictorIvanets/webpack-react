import { StateSchema } from "app/Providers/StoreProvider/config/StateSchema"
import { useTheme } from "app/Providers/Theme/useTheme"
import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { className } from "shared/lib/helpers/classNames/classNames"
import { profileActions, profileReduser } from "../Profileconfig/ProfileSlice"
import { AppThunkDispatchData, AppThunkDispatchLogin } from "shared/lib/helpers/AppDispatch/AppDispath"
import { ProfileCardProps, ProfileProps } from "../Profileconfig/Profiletype"
import Button from "widgets/Button/Button"
import { PreLoader } from "widgets/PreLoader"
import { Input } from "widgets/Input"
import { updateProfileData } from "../Profileconfig/updateProfileData"
// import { fetchProfileData } from "../Profileconfig/fetchProfileData"



export function ProfileCard(
    {
        data, 
        isLoading, 
        error, 
        readonly, 
        onCangeFLastname, 
        onCangeFirstname,
        onCangeUsername,
        onCangeAge,
        onCangeCyty,
        onCangeCountry,
    }: ProfileCardProps){

    const dispatchData = useDispatch<AppThunkDispatchData>();
    const {theme} = useTheme()
    const {t} = useTranslation()
    const neterror = typeof error === "string" ? error.toString() : "HZ ERROR"

    const dispatch = useDispatch()

    const onEdit = useCallback(()=>{
        dispatch(profileActions.setReadonly(true))
    }, [dispatch])

    const onCancelEdit = useCallback(()=>{
        dispatch(profileActions.setReadonly(false))
        dispatch(profileActions.cancelUpdateProfile())
    }, [dispatch])

    const onSavelEdit = useCallback(()=>{
        dispatch(profileActions.saveUpdateProfile())
        dispatchData(updateProfileData())
    }, [dispatch])




    return (<div className="profilecardbox">
        { error ? <h1 className="absolutecenter">{neterror}</h1> : !isLoading && data ?
        <div className={className('profilecard', {profilecarddarks: (theme === "dark" ? true : false)}, [])}>
            
            <div className="profilecard__info">
            <img className="profilecard__foto" src={data.avatar} alt="" />
            <div className="profilecard__info__text">
                <h2 className="mb1">{t("Ім'я")}: {data.first}</h2>
                <h2 className="mb1">{t("Прізвище")}: {data.lastname}</h2>
                <h2 className="mb1">{t("Країна")}: {data.country}</h2>
                <h2 className="mb1">{t("Місто")}: {data.city}</h2>
                <h2 className="mb1">{t("Вік")}: {data.age} {t("років")}</h2>
                <h2 className="mb1">{t("Нік")}: {data.username}</h2>

                   { !readonly ? <Button
                            onClick={onEdit} 
                            className="profilecard__btn">
                            {t("Редагувати")}
                    </Button> : ''}
            </div>
 
            </div>


            {<div className={className('profilecard__data', {readonlyinput: readonly ? false : true}, [])}>
                    
                    {readonly 
                    ?                 
                    <><Input
                    onChange={onCangeFirstname}
                    value={data?.first}
                    placeholder="Ім'я"
                    className="profilecard__data__input"
                    />
                    <Input
                    onChange={onCangeFLastname}
                    value={data?.lastname}
                    placeholder="Призвіще"
                    className="profilecard__data__input"
                    /> 
                    <Input
                    onChange={onCangeCountry}
                    value={data?.country}
                    placeholder="країна"
                    className="profilecard__data__input"
                    /> 
                    <Input
                    onChange={onCangeCyty}
                    value={data?.city}
                    placeholder="місто"
                    className="profilecard__data__input"
                    /> 
                    <Input
                    onChange={onCangeAge}
                    value={data?.age}
                    placeholder="Вік"
                    className="profilecard__data__input"
                    /> 
                    <Input
                    onChange={onCangeUsername}
                    value={data?.username}
                    placeholder="Призвіще"
                    className="profilecard__data__input"
                    /> 
                    <div>
                    <Button 
                            onClick={onCancelEdit}
                            className="profilecard__btn cancel">
                            {t("Відмінити")}
                    </Button>
                    <Button 
                            onClick={onSavelEdit}
                            className="profilecard__btn save">
                            {t("Зберегти")}
                    </Button>
                    </div>
                    </> 
                    : ''}
                
                  
            </div>}
            </div> 
                
        : <PreLoader/>}



       
</div>
)
   }

   export default ProfileCard