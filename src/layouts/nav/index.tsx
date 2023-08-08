// ** Icon Imports
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import BusinessIcon from '@mui/icons-material/Business'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const navListItem = [
  {
    listIcon: <ManageAccountsIcon />,
    listText: '대시보드',
    href: '/dashboard',
    subMenuItems: [
      {
        listIcon: <AccountCircleIcon />,
        listText: '대시보드',
        href: '/dashboard',
      },
    ],
    isSubMenuOpen: false,
  },
  {
    listIcon: <ManageAccountsIcon />,
    listText: '사용자 조회',
    href: '/company',
    subMenuItems: [
      {
        listIcon: <AccountCircleIcon />,
        listText: '사용자',
        href: '/company/user',
      },
      {
        listIcon: <BusinessIcon />,
        listText: '회사',
        href: '/company',
      },
      {
        listIcon: <AssignmentIndIcon />,
        listText: '나의 회사',
        href: '/company/my',
      },
      {
        listIcon: <BusinessIcon />,
        listText: '원하는 회사',
        href: '/company/want',
      },
    ],
    isSubMenuOpen: false,
  },
]

export default navListItem
