import { makeStyles } from '@mui/styles';

const headerStyle = makeStyles({
  root: {
    backgroundColor: 'white',
    height: '11rem',
    textAlign: 'right',
    '& h4': {
      position: 'relative',
      top: '1.813rem',
      right: '5rem',
      fontSize: '2rem',

    },
  },
});

export default headerStyle;
