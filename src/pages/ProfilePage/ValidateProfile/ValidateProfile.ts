import { ProfileProps, ValidateProfileError } from "../Profileconfig/Profiletype";


export const valodProfoleData = (profile?: ProfileProps) => {

    if (!profile) {
        return [ValidateProfileError.NO_DATA]
    }
    const {
        first,
        lastname,
        age,
        country
    } = profile
    const errors: ValidateProfileError[] = []

        if (!first || !lastname || first.length <2 || first.length >50) {
            errors.push(ValidateProfileError.INCORRECT_USER_DATA)
        }

        if (!age || age.length <2) {
            errors.push(ValidateProfileError.INCORRECT_USER_EGE)
        }

        if (!country || country.length > 100) {
            errors.push(ValidateProfileError.INCORRECT_USER_COUNTRY)
        }

        return errors

}