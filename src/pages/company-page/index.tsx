import { useEffect, useState } from 'react'
import CompanyPageView from './company-page'
import { getCompanyList } from '../../services'
import { Company } from '@/type'

const CompanyPage = () => {
  const [data, setData] = useState<Company[]>([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    getCompanyList()
      .then((res) => {
        setData(res)
      })
      .catch((err) => console.log(err))
  }, [])

  return <CompanyPageView page={page} setPage={setPage} data={data} />
}

export default CompanyPage
