import {getGeneralTaxes} from '@/src/services/customization/taxes/getGeneralTaxes'
import {useQuery} from '@tanstack/react-query'

const useTariffs = () => {
  const data = useQuery(['generalTaxes'], async () => {
    return getGeneralTaxes()
  })

  return data
}

export {useTariffs}
