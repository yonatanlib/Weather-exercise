import { makeStyles } from "@mui/styles";

const cardStyles = makeStyles({
    root: {
        width: 350,
        height: 230,
        "& h3": {
            paddingTop: 15,
            paddingRight: 20,
            fontWeight:"Bold"
        },
        "& p":{
            paddingRight: 30,
            paddingTop: 5,
            fontSize: 18,
            color:"#8F8F8F"

        },
        "& img":{
            position:"relative",
            bottom: 80,
            width: "23%",
            marginLeft: "10px"
        },
        "& h4":{
            display:"inline-block",
            margin: "0px 5px"
        }

    },
    // typography: {
    //     paddingRight: 20,
    //     // paddingTop: 10,
    // }
});

export default cardStyles;