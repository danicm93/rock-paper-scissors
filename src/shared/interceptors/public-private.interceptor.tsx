import axios from 'axios'

import { SnackbarUtilities, getValidationError } from '@/shared/utilities'

export const PublicPrivateInterceptor = () => {
  axios.interceptors.response.use(null, (error) => {
    SnackbarUtilities.error(getValidationError(error.code))
    return Promise.reject(error)
  })
}
