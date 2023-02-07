import { validEmail } from "../../../utils/regex"

const isUndefinedOrNull = ( value: string) => {
  if(value == undefined) true
  if(value == null) true
  return false
}

const isValid = ( email: string) => {
  return validEmail.test(email)
}

const validateInput = (type: string, value: string): boolean => {
  let status = false
  if(type == 'email' && isUndefinedOrNull(value) == false){
     status = isValid(value)
  }
  if(type != 'email' && isUndefinedOrNull(value) == false){
    status = true
  }
  return status
}

export { validateInput }