import { useEffect, useState } from 'react'
import WantCompanyPageView from './want-company-page'
import { getMyCompanyList } from '../../services'
import { CompanyData } from '@/type'

const WantCompanyPage = () => {
  const [data, setData] = useState<CompanyData[]>([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    getMyCompanyList()
      .then((res) => {
        setData(res)
      })
      .catch((err) => console.log(err))
  }, [])

  return <WantCompanyPageView page={page} setPage={setPage} data={data} />
}

export default WantCompanyPage
