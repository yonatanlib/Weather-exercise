import { makeStyles } from '@mui/styles';

const cardStyles = makeStyles({
  root: {
    width: 350,
    height: 230,
    '& h3': {
      paddingTop: 15,
      paddingRight: 20,
      fontFamily: 'Assitant',
    },
    '& p': {
      paddingRight: 30,
      paddingTop: 5,
      fontSize: 17,
      color: '#8F8F8F',
      fontFamily: "'Assistant', sans-serif",
      fontWeight: 300,

    },
    '& img': {
      position: 'relative',
      bottom: 80,
      width: '23%',
      marginLeft: '10px',
    },

  },
});

export default cardStyles;
