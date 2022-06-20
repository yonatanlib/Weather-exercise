import { makeStyles } from '@mui/styles';

const boxStyle = makeStyles({
  root: {
    position: 'relative',
    bottom: 60,
    '& h4': {
      display: 'inline-block',
      margin: '0px 5px',
    },
    '& h2': {
      fontSize: 32,
      fontWeight: 'lighter',
      marginLeft: 13,
    },
  },
});

export default boxStyle;
