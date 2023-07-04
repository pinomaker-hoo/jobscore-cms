import { Company } from '@/type'
import { db } from '../../config/firebaseConfig'
import { collection, getDocs, query } from 'firebase/firestore'

const companyApi = {
  getCompanyList: async (): Promise<Company[]> => {
    const querySnapshot = await getDocs(query(collection(db, 'company')))

    return querySnapshot.docs.map((item) => {
      const { name, url } = item.data()

      return {
        id: item.id,
        name,
        url,
      }
    })
  },
}

export const { getCompanyList } = companyApi
