import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardHeader } from "@material-ui/core/";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
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
      text: "text 1 will come here ",
    },
    {
      header: "2. Kleine Goldmünzen und Goldbarren kaufen",
      text: "text 2 will come here ",
    },
    {
      header: "3. Zu große Goldbarren kaufen",
      text: "text 3 will come here dsfasffadf sdasdasdsadafsdaffdsf asdfsdafdsfdaf",
    },
    {
      header: "4. Zu günstig Gold kaufen wollen",
      text: "text 4 will come here aDaaDSADADA  ADADDadA",
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
              <Card>
                <CardHeader subheader={` ${elem.header}`} />
                <CardContent>
                  <Typography variant="body2" component="p">
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
