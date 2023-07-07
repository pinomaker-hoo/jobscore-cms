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
  createdAt: string
}

export interface Company {
  id: string
  name: string
  url: string
  createdAt: string
}

export interface User {
  id: string
  companyId: string
  company: string
  createdAt: string
  department: string
  myCode: string
  wantCode: string
  myTotalCount: number
  wantTotalCount: number
}
