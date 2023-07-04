import { Company } from '@/type'
import { Box, Card, Grid, Typography, Stack } from '@mui/material'
import { DataGrid, GridColumns } from '@mui/x-data-grid'

interface Props {
  page: number
  setPage: any
  data: Company[]
}

const defaultColumns: GridColumns = [
  {
    flex: 0.2,
    field: 'id',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '번호',
    renderCell: ({ row }: { row: Company }) => (
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
    renderCell: ({ row }: { row: Company }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.name}</Typography>
      </Box>
    ),
  },
  {
    flex: 0.4,
    field: 'url',
    minWidth: 30,
    headerAlign: 'center',
    headerName: '페이지',
    renderCell: ({ row }: { row: Company }) => (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2">{row.url}</Typography>
      </Box>
    ),
  },
]

const CompanyPageView = ({ page, setPage, data }: Props) => {
  const columns = [...defaultColumns]
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h3">회사 조회</Typography>
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

export default CompanyPageView
