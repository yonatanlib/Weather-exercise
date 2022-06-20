import { makeStyles } from '@mui/styles';

const headerStyle = makeStyles({
  root: {
    backgroundColor: 'white',
    height: '11rem',
    textAlign: 'right',
    '& h4': {
      position: 'relative',
      top: 29,
      right: 80,
      fontSize: 32,

    },
  },
});

export default headerStyle;
