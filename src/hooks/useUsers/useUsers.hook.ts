import {useQuery} from '@tanstack/react-query'
import {useRouter} from 'next/router'
import {useState} from 'react'

import {getAnalystList} from '@/src/services/configuration/users/getAnalystList'
import {getProfileTypeAccessList} from '../../services/configuration/profileTypeAccess'

export const useUsers = () => {
  const {
    query: {page: currentPage},
  } = useRouter()

  const [page, setPage] = useState(Number(currentPage ?? 0))

  const onNextPage = () => {
    setPage(prevState => prevState + 1)
  }

  const onPrevPage = () => {
    setPage(prevState => prevState - 1)
  }

  const {data: typeAccessList, isLoading} = useQuery(
    ['typeAccessList'],
    getProfileTypeAccessList
  )

  const data = useQuery({
    queryKey: ['analystList', page, currentPage, isLoading],
    queryFn: async () => {
      if (isLoading) return
      if (!typeAccessList) return
      const {results: typeAccesses} = typeAccessList

      const {data, meta} = await getAnalystList({
        page: Number(currentPage ?? page),
      })

      const customData = data.map(item => {
        const typeAccessMatchedMap = item.typeAccess.reduce(
          (map: any, type) => {
            const typeAccessMatched = typeAccesses.find(access =>
              access._id.includes(type._id)
            )
            if (type._id === typeAccessMatched?._id) {
              map[type._id] = {
                _id: type._id,
                name: typeAccessMatched?.name,
              }
            } else {
              map[type._id] = type
            }
            return map
          },
          {}
        )

        const typeAccessWithName = item.typeAccess.map(
          type => typeAccessMatchedMap[type._id]
        )

        return {
          ...item,
          typeAccess: typeAccessWithName,
        }
      })

      return {results: customData, meta}
    },
  })

  return {
    ...data,
    onNextPage,
    onPrevPage,
  }
}
