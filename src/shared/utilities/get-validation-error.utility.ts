import { TypeWithKey } from '@/shared/models'

export const getValidationError = (errorCode: string) => {
  // TODO - En caso de no existir el código de error, retornar un mensaje genérico
  const codeMatcher: TypeWithKey<string> = {
    ERR_BAD_REQUEST: 'Error de comunicación con el servidor',
  }

  return codeMatcher[errorCode]
}
