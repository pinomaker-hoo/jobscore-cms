import { User } from '@/type'
import { Box, Card, Grid, Typography, Stack } from '@mui/material'
import { DataGrid, GridColumns } from '@mui/x-data-grid'

interface Props {
  page: number
  setPage: any
  data: User[]
}

const defaultColumns: GridColumns = [
  {
    flex: 0.3,
    field: 'id',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '번호',
    renderCell: ({ row }: { row: User }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.id}</Typography>
      </Box>
    ),
  },
  {
    flex: 0.2,
    field: 'name',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '회사 이름',
    renderCell: ({ row }: { row: User }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.company}</Typography>
      </Box>
    ),
  },
  {
    flex: 0.2,
    field: 'department',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '직책',
    renderCell: ({ row }: { row: User }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.department}</Typography>
      </Box>
    ),
  },
  {
    flex: 0.2,
    field: 'myCode',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '나의 회사 타입',
    renderCell: ({ row }: { row: User }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.myCode}</Typography>
      </Box>
    ),
  },
  {
    flex: 0.2,
    field: 'myCodeCount',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '나의 회사 점수',
    renderCell: ({ row }: { row: User }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.myTotalCount}</Typography>
      </Box>
    ),
  },
  {
    flex: 0.2,
    field: 'wantCode',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '내가 원하는 회사 타입',
    renderCell: ({ row }: { row: User }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.wantCode}</Typography>
      </Box>
    ),
  },
  {
    flex: 0.2,
    field: 'wantCodeCount',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '내가 원하는 회사 점수',
    renderCell: ({ row }: { row: User }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.wantTotalCount}</Typography>
      </Box>
    ),
  },
  {
    flex: 0.3,
    field: 'createdAt',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '생성 날짜',
    renderCell: ({ row }: { row: User }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.createdAt}</Typography>
      </Box>
    ),
  },
]

const UserPageView = ({ page, setPage, data }: Props) => {
  const columns = [...defaultColumns]
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h3">사용자 조회</Typography>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <DataGrid
            columns={columns}
            rows={data}
            rowCount={data.length}
            autoHeight
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
            disableColumnMenu
            pagination
            page={page}
            paginationMode="client"
            pageSize={10}
            onPageChange={(newPage) => {
              setPage(newPage)
            }}
            components={{
              NoRowsOverlay: () => (
                <Stack
                  height="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  등록된 정보가 없습니다.
                </Stack>
              ),
            }}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserPageView
