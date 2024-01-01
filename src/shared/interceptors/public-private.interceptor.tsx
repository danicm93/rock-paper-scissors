import axios from 'axios'

import { SnackbarUtilities, getValidationError } from '@/shared/utilities'

export const PublicPrivateInterceptor = () => {
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      console.log('salimos por el error -->', error)
      SnackbarUtilities.error(getValidationError(error.code))
      return Promise.reject(error)
    }
  )
}
