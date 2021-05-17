import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardHeader } from "@material-ui/core/";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Height } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));
const defaultProps = {
  m: 2,
  borderColor: "#ecbd46",
  border: "3px solid",
};
export default function AltCard() {
  const classes = useStyles();
  const data = [
    {
      header: "1. gold zukunft",
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
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {data.map((elem) => (
          <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem.text)}>
            <Box border={1} {...defaultProps}>
              <Card style={{ overflowY: "scroll", height: "290px" }}>
                <CardHeader subheader={` ${elem.header}`} />
                <CardContent>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ color: "#a4a4a4" }}
                  >
                    {` ${elem.text}`}
                  </Typography>
                </CardContent>
              </Card>{" "}
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
