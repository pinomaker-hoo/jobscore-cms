// ** Mui Imports
import {
  Box,
  Card,
  Button,
  Grid,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

// * Component Imports
import BarChart from '../../components/chart'

// ** Other Imports
import { Dayjs } from 'dayjs'
import { User } from '@/type'

interface Props {
  data: User[]
}

const UserChartPageView = ({ data }: Props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card sx={{ p: 5 }}>
          <Typography>유저 통계</Typography>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ p: 5 }}>{/* <BarChart data={data} /> */}</Card>
      </Grid>
    </Grid>
  )
}

export default UserChartPageView
