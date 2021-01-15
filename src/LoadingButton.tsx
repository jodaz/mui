import * as React from 'react';
import {
  Button,
  CircularProgress
} from '@material-ui/core';

interface Props {
  loading: boolean,
  classes: string,
  icon: any,
  children: any,
  rest: any
};

const LoadingButton: React.FC<Props> = (props) => {
  const {
    icon,
    classes,
    loading,
    children,
    ...rest
  } = props;

  const defaultIcon = icon ? icon : <></>;

  return (
    <Button
      className={classes}
      startIcon={loading ? <CircularProgress size={10} /> : defaultIcon}
      disabled={loading}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default LoadingButton;
