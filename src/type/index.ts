import { Dayjs } from 'dayjs'

export interface Dates {
  startDate: Dayjs
  endDate: Dayjs
}

export interface CompanyData {
  id: string
  code: string
  department: string
  totalCount: number
  companyId: string
  type1: number
  type2: number
  type3: number
  type4: number
}
