import { CompanyData } from '@/type'
import { Box, Card, Grid, Typography, Stack } from '@mui/material'
import { DataGrid, GridColumns } from '@mui/x-data-grid'
import getType from '../../utils/protect-route/code'

interface Props {
  page: number
  setPage: any
  data: CompanyData[]
}

const defaultColumns: GridColumns = [
  {
    flex: 0.3,
    field: 'id',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '번호',
    renderCell: ({ row }: { row: CompanyData }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.id}</Typography>
      </Box>
    ),
  },
  {
    flex: 0.2,
    field: 'code',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '유형',
    renderCell: ({ row }: { row: CompanyData }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{getType(row.code)}</Typography>
      </Box>
    ),
  },
  {
    flex: 0.15,
    field: 'page',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '페이지명',
    renderCell: ({ row }: { row: CompanyData }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.department}</Typography>
      </Box>
    ),
  },
  {
    flex: 0.15,
    field: 'totalCount',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '총 점수',
    renderCell: ({ row }: { row: CompanyData }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.totalCount}점</Typography>
      </Box>
    ),
  },
  {
    flex: 0.15,
    field: 'type1',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '업무 강도',
    renderCell: ({ row }: { row: CompanyData }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.type1}점</Typography>
      </Box>
    ),
  },
  {
    flex: 0.15,
    field: 'type2',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '출퇴근 자유도',
    renderCell: ({ row }: { row: CompanyData }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.type2}점</Typography>
      </Box>
    ),
  },
  {
    flex: 0.15,
    field: 'type3',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '복지 점수',
    renderCell: ({ row }: { row: CompanyData }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.type3}점</Typography>
      </Box>
    ),
  },
  {
    flex: 0.15,
    field: 'type4',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '성장 가능성',
    renderCell: ({ row }: { row: CompanyData }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.type4}점</Typography>
      </Box>
    ),
  },
  {
    flex: 0.3,
    field: 'createdAt',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '생성 시간',
    renderCell: ({ row }: { row: CompanyData }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">
          {row.createdAt ? row.createdAt : '-'}
        </Typography>
      </Box>
    ),
  },
]

const MyCompanyPageView = ({ page, setPage, data }: Props) => {
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

export default MyCompanyPageView
