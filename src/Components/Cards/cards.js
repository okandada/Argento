import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function MediaCard(props) {
  // const [state, setState] = React.useState({});
  const classes = useStyles();
  const bull = <span>1 Unze Gold</span>;
  const bull2 = <span>1.560,42 EUR</span>;
  return (
    <div className={classes.root}>
      <Card>
        <CardActionArea style={{ color: "black" }}>
          <img alt="" width="100%" src={props.url} />
          <CardContent style={{ padding: "0 16px 0 16px" }}>
            <Typography
              variant="h3"
              gutterBottom
              style={{ paddingBottom: "25px" }}
            >
              {bull}
            </Typography>
            <Typography variant="h3" gutterBottom>
              {bull2}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              zzgl. Versandkosten Lieferzeit: 4-7 Tage
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            component={Link}
            to="/UnsernShop"
            size="large"
            style={{ background: "white" }}
            fullWidth={true}
          >
            <span style={{ color: "#c28c02", fontWeight: "bolder" }}>
              jetzt endecken
            </span>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
