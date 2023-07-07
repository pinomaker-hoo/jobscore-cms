import { useEffect, useState } from 'react'
import UserPageView from './user-page'
import { getUserList } from '../../services'
import { User } from '@/type'

const UserPage = () => {
  const [data, setData] = useState<User[]>([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    getUserList()
      .then((res) => {
        setData(res)
      })
      .catch((err) => console.log(err))
  }, [])

  return <UserPageView page={page} setPage={setPage} data={data} />
}

export default UserPage
