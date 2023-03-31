import {useQuery} from '@tanstack/react-query'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

import {getAnalystList} from '@/src/services/configuration/users/getUsers'
import {getProfileTypeAccessList} from '../../services/configuration/profileTypeAccess'
import {SortOrder} from './useUsers'

export const useUsers = () => {
  const {
    query: {page: currentPage},
  } = useRouter()

  const [page, setPage] = useState(Number(currentPage ?? 0))
  const [search, setSearch] = useState<string>('')
  const [orderBy, setOrderBy] = useState<SortOrder | null>({
    name: 'createdAt',
    direction: 'desc',
  })

  useEffect(() => {
    setPage(Number(currentPage ?? 0))
  }, [currentPage])

  const onNextPage = (page: number) => {
    setPage(page)
  }

  const data = useQuery({
    queryKey: ['analystList', page, search, orderBy],
    queryFn: async () => {
      const {results: typeAccesses} = await getProfileTypeAccessList()

      const direction: string = orderBy?.direction === 'asc' ? '' : '-'
      const name: string = orderBy?.name ? orderBy.name : 'createdAt'
      const sortOrder: string = `${direction}${name}`
      console.log(sortOrder)
      const {data, meta} = await getAnalystList({
        page: Number(currentPage ?? page),
        q: search,
        orderBy: sortOrder,
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

      return {results: customData || [], meta}
    },
    keepPreviousData: true,
  })

  return {
    ...data,
    onNextPage,
    page,
    setSearch,
    setOrderBy,
  }
}
