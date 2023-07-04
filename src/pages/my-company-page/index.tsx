import { useEffect, useState } from 'react'
import MyCompanyPageView from './my-company-page'
import { getMyCompanyList } from '../../services'
import { CompanyData } from '@/type'

const MyCompanyPage = () => {
  const [data, setData] = useState<CompanyData[]>([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    getMyCompanyList()
      .then((res) => {
        setData(res)
      })
      .catch((err) => console.log(err))
  }, [])

  return <MyCompanyPageView page={page} setPage={setPage} data={data} />
}

export default MyCompanyPage
