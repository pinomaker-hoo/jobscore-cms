// ** Icon Imports
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'

const navListItem = [
  {
    listIcon: <ManageAccountsIcon />,
    listText: '회원 관리',
    href: '/user',
    subMenuItems: [
      {
        listIcon: <AssignmentIndIcon />,
        listText: '사용자 조회',
        href: '/user',
      },
    ],
    isSubMenuOpen: false,
  },
]

export default navListItem
