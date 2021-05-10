import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>1 Unze Gold</span>;
  const bull2 = <span className={classes.bullet}>1.560,42 EUR</span>;
  return (
    <div style={{ margin: "0px" }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={props.url} title="abc" />
          <CardContent>
            <Typography variant="h5" component="h2">
              {bull}
            </Typography>

            <Typography variant="body2" component="p">
              Feinheit: 999,9/1000 Feingold
              <br />
              {'"Herkunftsland: Schweiz / Deutschland"'}
            </Typography>
            <Typography variant="h5" component="h2">
              {bull2}
            </Typography>
            <Typography variant="body2" component="p" size="large">
              zzgl. Versandkosten Lieferzeit: 4-7 Tage
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" style={{ background: "white" }} fullWidth={true}>
            <span style={{ color: "#c28c02", fontWeight: "bolder" }}>
              jetzt endecken
            </span>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
