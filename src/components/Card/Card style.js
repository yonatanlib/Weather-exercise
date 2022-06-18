import { makeStyles } from "@mui/styles";

const cardStyles = makeStyles({
    root: {
        width: 350,
        height: 230,
        "& h2": {
            marginRight: 20,
            marginTop: 10,
            fontWeight: "Bold",
            textAlign: "right",
           
        }
    },
    typography: {
        paddingRight: 20,
        paddingTop: 10,
    }
});

export default cardStyles;