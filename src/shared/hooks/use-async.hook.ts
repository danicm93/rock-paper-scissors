import { useEffect } from 'react'

import { AxiosResponse } from 'axios'

type SuccessFunction = (data: any) => void;
type ReturnFunction = () => void;

export const useAsync = (
  asyncFn: () => Promise<AxiosResponse<any, any>>,
  successFunction: SuccessFunction,
  returnFunction: ReturnFunction,
  dependencies: any[] = []
) => {
  useEffect(() => {
    let isActive = true
    asyncFn().then((result) => {
      if (isActive) successFunction(result.data)
    })
    return () => {
      returnFunction && returnFunction()
      isActive = false
    }
  }, dependencies)
}
