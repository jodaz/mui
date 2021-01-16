import * as React from 'react';
import {
  makeStyles,
  ButtonBase,
  CircularProgress,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: theme.spacing(4)
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: '6 0 auto'
  },
  content: {
    flex: '1 0 auto',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '3 0 auto'
  },
  icon: {
    height: 50,
    width: 50
  }
}));

interface Props {
  loading: boolean,
  title: string,
  total: number,
  icon: any,
  handleClick: any
}

const InfoCard: React.FC<Props> = (props) => {
  const {
    loading,
    title,
    total,
    icon,
    handleClick
  } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <ButtonBase
        className={classes.content}
        onClick={handleClick}
      >
        <div className={classes.details}>
          <CardContent className={classes.content}>
            { (loading)
              ? <CircularProgress />
              : <>
                <Typography component="h5" variant="h5">
                  {total}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {title}
                </Typography>
              </>
            }
          </CardContent>
        </div>
        <div className={classes.iconContainer}>
          {React.cloneElement(icon, { className: classes.icon})}
        </div>
      </ButtonBase >
    </Card>
  )
};

export default InfoCard;
