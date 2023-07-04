import { useEffect, useState } from 'react'
import UserPageView from './user-page'
import { getMyCompanyList } from '../../services'
import { CompanyData } from '@/type'

const UserPage = () => {
  const [data, setData] = useState<CompanyData[]>([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    getMyCompanyList()
      .then((res) => {
        setData(res)
      })
      .catch((err) => console.log(err))
  }, [])

  return <UserPageView page={page} setPage={setPage} data={data} />
}

export default UserPage
