import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card } from "@material-ui/core/";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Carousel from "react-multi-carousel";
import Typography from "@material-ui/core/Typography";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 60,
  },
  medium: {
    breakpoint: { max: 1023, min: 600 },
    items: 3,
  },

  medum: {
    breakpoint: { max: 1486, min: 600 },
    items: 2,
    partialVisibilityGutter: 20,
  },

  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0),
    display: "flex",
  },
}));
const defaultProps = {
  m: 2,
  borderColor: "#ecbd46",
  border: "3px solid",
  height: "375px",
  marginLeft: "0px",
};

export default function HilfenTipsCard(props) {
  const classes = useStyles();
  const data = [
    {
      header: "1. Zum falschen Zeitpunkt kaufen",
      text: "Gold wird 23 Stunden am Tag auf der ganzen Welt gehandelt. Sie können also rund um die Uhr das glänzende Edelmetall erwerben. Wichtig dabei ist, nicht nur auf den Preis zu achten, sondern auch auf den Zeitpunkt. Beachten Sie die Öffnungs- und Arbeitszeiten der Händler. Bestellen Sie außerhalb dieser Zeiten besteht immer ein Kursrisikio, da keine Absicherung vorliegt. Es könnte Ihnen bei einigen Händlern der unbekannte Preis vom nächsten Tag berechnet werden. Andere Händler agieren anders…",
    },
    {
      header: "2. Kleine Goldmünzen und Goldbarren kaufen",
      text: "Goldbarren und Goldmünzen gibt es in unterschiedlichen Größen. Doch welche Größe ist die richtige? Für jede Gewichtseinheit fallen unterschiedlich hohe Prägekosten an, die in den Verkaufspreis mit eingerechnet sind. Für kleine Goldbarren sowie –münzen werden prozentual höhere Aufschläge bezogen auf den reinen Materialwert berechnet, als für große…. ",
    },
    {
      header: "3. Zu große Goldbarren kaufen",
      text: "Einen großen Goldbarren, wie etwa 1 kg Gold, kann man nur ganz oder gar nicht verkaufen. Daher empfiehlt es sich lieber beispielsweise in 10 Stück 100 Gramm Goldbarren oder in 30 1-Unzen-Goldmünzen zu investieren. Der Preisunterschied ist gering, jedoch sind Sie flexibel was Teilkäufe angeht.",
    },
    {
      header: "4. Zu günstig Gold kaufen wollen",

      text: "Wer zu billig kauft, kauft zwei Mal.“ Doch bei Gold haben Sie keine zweite Chance. Das Edelmetall wird immer zu marktgerechten Preisen gehandelt. Finden Sie also ein wahres Schnäppchen im Internet, können Sie sich eins sicher ein: Da stimmt etwas nicht. Eventuell kann es sich hierbei sogar um Fälschungen handeln. Ihr Geld ist weg und Sie haben kein brauchbares Gold erhalten.",
    },
  ];

  return (
    <Carousel
      ssr
      partialVisible
      itemClass="image-item"
      responsive={responsive}
      container
      className={classes.gridContainer}
      justify="center"
    >
      {data.slice(0, 5).map((elem) => (
        <Grid key={data.indexOf(elem.text)}>
          <Box border={1} {...defaultProps}>
            <Card
              style={{
                overflowY: "auto",
                height: "100%",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  style={{ fontFamily: "TGL0-1451Engschrift" }}
                >
                  {` ${elem.header}`}
                </Typography>
                <Typography
                  gutterBottom
                  style={{ color: "#a4a4a4" }}
                  variant="body1"
                >
                  {` ${elem.text}`}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      ))}
    </Carousel>
  );
}
