import {useQuery} from '@tanstack/react-query'

import {getProfileTypeAccessList} from '../../services/configuration/profileTypeAccess'
import {getUser} from '@/src/services/configuration/users/getUser'
import {useRouter} from 'next/router'

export const useUser = () => {
  const {query} = useRouter()
  const id = String(query?.id || '')

  const {data: typeAccessList, isLoading} = useQuery(
    ['typeAccessList'],
    getProfileTypeAccessList
  )

  const data = useQuery({
    queryKey: ['getUser', id, isLoading],
    queryFn: async () => {
      if (isLoading) return
      if (!typeAccessList) return
      const {results: typeAccesses} = typeAccessList

      const user = await getUser({id})

      const typeAccessMatchedMap = user.type_access.reduce((map: any, type) => {
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
      }, {})

      const typeAccessWithName = user.type_access.map(
        type => typeAccessMatchedMap[type._id]
      )

      user.type_access = typeAccessWithName

      return user
    },
  })

  return {
    ...data,
  }
}
