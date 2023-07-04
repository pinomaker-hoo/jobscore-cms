// ** Mui Imports
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContentText,
} from '@mui/material'

interface Props {
  state: boolean
  closeEvent(): void
  message: string
  title: string
  event: any
}

const SelectModal = ({ state, closeEvent, message, event, title }: Props) => {
  return (
    <Dialog
      open={state}
      disableEscapeKeyDown
      onClose={(event, reason) => {
        if (reason !== 'backdropClick') {
          closeEvent()
        }
      }}
      fullWidth
    >
      <DialogTitle sx={{ textAlign: 'center' }}>{title}</DialogTitle>
      <DialogContentText sx={{ textAlign: 'center' }}>
        {message}
      </DialogContentText>
      <DialogActions>
        <Button onClick={event}>확인</Button>
        <Button onClick={closeEvent}>취소</Button>
      </DialogActions>
    </Dialog>
  )
}

export default SelectModal
