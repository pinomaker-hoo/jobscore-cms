// ** React Imports
import { useEffect, useState } from 'react'

// ** Componenet Imports
import UserChartPageView from './user-chart-page'

// ** Service Imports
import { getUserList } from '../../services'

// ** Type Imports
import { User } from '@/type'
import React from 'react'

const UserChartPage = () => {
  const [data, setData] = useState<User[]>([])

  useEffect(() => {
    getUserList()
      .then((res) => {
        setData(res)
      })
      .catch((err) => console.log(err))
  }, [])

  console.log(data)

  return <UserChartPageView data={data} />
}

export default UserChartPage
