import { useTheme } from "app/Providers/Theme/useTheme"
import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { className } from "shared/lib/helpers/classNames/classNames"
import { profileActions } from "../Profileconfig/ProfileSlice"
import { AppThunkDispatchData } from "shared/lib/helpers/AppDispatch/AppDispath"
import { Currency, ProfileCardProps } from "../Profileconfig/Profiletype"
import Button from "widgets/Button/Button"
import { PreLoader } from "widgets/PreLoader"
import { Input } from "widgets/Input"
import { updateProfileData } from "../Profileconfig/updateProfileData"
import Select from "widgets/Select/Select"

export const currencyOptions = [
    {value: Currency.UAH, content: Currency.UAH},
    {value: Currency.USD, content: Currency.USD},
    {value: Currency.EUR, content: Currency.EUR}
]
export const ProfileCard = memo((
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
        onCangeCurrency,
    }: ProfileCardProps)=>{

    const dispatchData = useDispatch<AppThunkDispatchData>();
    const {theme} = useTheme()
    const {t} = useTranslation()

    // console.log(error)
    // console.log(readonly)
    // console.log(data)

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
        {!isLoading && data ?
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


            {<div className={className('profilecard__data', {readonlyinput: readonly ? false : true, invaliddata: error ? true : false}, [])}>
                    
                    {readonly 
                    ?                 
                    <div className="profilecard__data__edit"><Input
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

                    <Select 
                        className="selectcurrency" 
                        label={t("CURRENCY")}
                        options={currencyOptions}
                        onChange={onCangeCurrency}
                        value={data?.currency}
                        />

                    <div className={className('profilecard__data__btn', {}, [])}
                   >
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
                    {error && Array.isArray(error) ? error.map((err: string) =>(<h3  key={err} className="errdatatext">{err}</h3>)) : ''}
                    </div> 
                    : ''}
                
                  
            </div>}
            </div> 
                
        : <PreLoader/>}



       
</div>
)
   })

   export default ProfileCard