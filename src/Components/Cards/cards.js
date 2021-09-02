import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import "./card.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.6),
    },
  },
}));

// const productsLinkResul = data.map((product) => (
//   <div>
//     <Link to={product.productlink} href={product.productlink}></Link>
//   </div>
// ));
// console.log(productsLinkResul);

export default function MediaCard(props) {
  const classes = useStyles();
  const bull_1 = "1 Unze Gold";
  const bull_2 = "1.560,42 EUR";
  const bull_3 = "Feinheit: 999,9/1000 Feingold";
  const bull_4 = "Herkunftsland: Schweiz / Deutschland";
  return (
    <div className={classes.root}>
      <Card>
        <CardActionArea>
          <img alt="" width="100%" src={props.url} />
          <CardContent style={{ padding: "0", backgroundColor: "black" }}>
            <div className="bull_1Styling">{bull_1}</div>

            <div className="cardText">{bull_3}</div>
            <div className="cardText">{bull_4}</div>

            <div className="bull_2Styling">{bull_2}</div>

            <div className="cardText">
              zzgl. Versandkosten Lieferzeit: 4-7 Tage
            </div>
          </CardContent>
        </CardActionArea>

        <Button
          href={props.productlink}
          // href="https://abcstorexzy.myshopify.com/products/gold1"
          // href="https://qm0eopnilbiv0t3c-59629076667.shopifypreview.com/collections/all"
          style={{ background: "#ffffff" }}
          fullWidth={true}
        >
          <Typography variant="button" className="buttonText">
            jetzt endecken
          </Typography>
        </Button>
      </Card>
    </div>
  );
}
