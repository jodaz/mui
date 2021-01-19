import * as React from 'react';
import {
  Dialog,
  Button,
  DialogTitle,
  DialogActions
} from '@material-ui/core';
import IconCancel from '@material-ui/icons/Cancel';
import IconCheck from '@material-ui/icons/CheckCircleOutline';

interface Props {
  title: string,
  ariaLabel: string,
  fullWidth: boolean,
  handleClick: any,
  submitLabel: string,
  action: any,
  open: boolean
};

const CustomDialog: React.FC<Props> = ({
  title,
  ariaLabel,
  fullWidth,
  handleClick,
  submitLabel,
  action,
  open
}) => {
  return (
    <Dialog
      fullWidth={fullWidth}
      open={open}
      onClose={handleClick}
      aria-label={ariaLabel}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogActions>
        <Button onClick={handleClick}>
          <IconCancel />
          {' Cancelar'}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleClick();
            action();
          }}
        >
          <IconCheck />
          {submitLabel ? submitLabel : 'Enviar'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;
