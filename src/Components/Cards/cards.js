import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./card.css";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
const TextTypography = withStyles({
  root: {
    color: "#a4a4a4",
  },
})(Typography);

export default function MediaCard(props) {
  // const [state, setState] = React.useState({});
  const classes = useStyles();
  const bull = "1 Unze Gold";
  const bull2 = "1.560,42 EUR";
  return (
    <div className={classes.root}>
      <Card>
        <CardActionArea>
          <img alt="" width="100%" src={props.url} />
          <CardContent style={{ padding: "0" }}>
            <Typography variant="h4" gutterBottom>
              <div style={{ marginBottom: "32px" }}>{bull}</div>
            </Typography>
            <Typography variant="h4" gutterBottom>
              {bull2}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              zzgl. Versandkosten Lieferzeit: 4-7 Tage
            </Typography>
          </CardContent>
        </CardActionArea>

        <Button
          // to="https://abcstorexzy.myshopify.com/products/gold1"
          href="https://abcstorexzy.myshopify.com/products/gold1"
          style={{ background: "#ffffff" }}
          fullWidth={true}
        >
          <Typography variant="button"> jetzt endecken</Typography>
          {/* <span style={{ color: "#c28c02", fontWeight: "bolder" }}>
            jetzt endecken
          </span> */}
        </Button>
      </Card>
    </div>
  );
}
