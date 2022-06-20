import { makeStyles } from '@mui/styles';

const cardStyles = makeStyles({
  root: {
    width: '21.875rem',
    height: '14.375rem',
    '& h3': {
      paddingTop: '0.938rem',
      paddingRight: '1.25rem',
      fontFamily: 'Assitant',
    },
    '& p': {
      paddingRight: '1.875rem',
      paddingTop: '0.313rem',
      fontSize: '1.125rem',
      color: '#8F8F8F',
      fontFamily: "'Assistant', sans-serif",
      fontWeight: 300,

    },
    '& img': {
      position: 'relative',
      bottom: '5rem',
      width: '23%',
      marginLeft: '0.625rem',
    },

  },
});

export default cardStyles;
