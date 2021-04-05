import * as React from 'react';
import {
  Dialog,
  Button,
  DialogActions,
} from '@material-ui/core';
import IconCancel from '@material-ui/icons/Cancel';
import IconCheck from '@material-ui/icons/CheckCircleOutline';

interface Props {
  open: boolean,
  handleClick: any,
  title?: string,
  fullWidth?: boolean,
  submitLabel?: string,
  action?: any,
  header?: React.ReactNode,
  children?: React.ReactNode,
  classes?: any,
  showCancel?: boolean
};

const CustomDialog: React.FC<Props> = ({
  header,
  fullWidth,
  handleClick,
  submitLabel,
  action,
  children,
  open,
  showCancel
}) => {
  return (
    <Dialog
      fullWidth={fullWidth}
      open={open}
      onClose={handleClick}
    >
      {header}
      {children}
      <DialogActions>
        { (showCancel) && (
          <Button
            onClick={handleClick}
          >
            <IconCancel />
            {' Cancelar'}
          </Button>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            action(); 
            handleClick();
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
