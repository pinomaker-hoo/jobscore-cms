import { CompanyData } from '@/type'
import { db } from '../../config/firebaseConfig'
import { collection, getDocs, query } from 'firebase/firestore'

const userApi = {
  getMyCompanyList: async (): Promise<CompanyData[]> => {
    const querySnapshot = await getDocs(
      query(collection(db, 'myCompanyResult')),
    )

    return querySnapshot.docs.map((item) => {
      const {
        code,
        companyId,
        department,
        totalCount,
        type1,
        type2,
        type3,
        type4,
      } = item.data()

      return {
        id: item.id,
        code,
        companyId,
        department,
        totalCount,
        type1,
        type2,
        type3,
        type4,
      }
    })
  },
  getWantCompanyList: async (): Promise<CompanyData[]> => {
    const querySnapshot = await getDocs(
      query(collection(db, 'wantCompanyResult')),
    )

    return querySnapshot.docs.map((item) => {
      const {
        code,
        companyId,
        department,
        totalCount,
        type1,
        type2,
        type3,
        type4,
      } = item.data()

      return {
        id: item.id,
        code,
        companyId,
        department,
        totalCount,
        type1,
        type2,
        type3,
        type4,
      }
    })
  },
}

export const { getMyCompanyList, getWantCompanyList } = userApi
