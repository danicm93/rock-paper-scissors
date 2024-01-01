import { TypeWithKey } from '@/shared/models'

export const getValidationError = (errorCode: string) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_BAD_REQUEST: 'Error de comunicación con el servidor',
  }

  return codeMatcher[errorCode]
}
