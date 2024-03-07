import { TypeWithKey } from '@/shared/models'

export const getValidationError = (errorCode: string) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_BAD_REQUEST: 'Error de comunicación con el servidor',
    ERR_CANCELED: 'Petición cancelada',
  }

  return codeMatcher[errorCode]
}
