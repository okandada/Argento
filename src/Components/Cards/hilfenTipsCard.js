import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardHeader } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function AltCard() {
  const classes = useStyles();
  const data = [
    {
      header: "1. gold zukunft",
      text: "sds sdsds",
    },
    {
      header: "2. Kleine Goldmünzen und Goldbarren kaufen",
      text: "text 2 will come here",
    },
    {
      header: "3. Zu große Goldbarren kaufen",
      text: "text 3 will come here",
    },
    {
      header: "4. Zu günstig Gold kaufen wollen",
      text: "text 4 will come here",
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
          <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)}>
            <Card>
              <CardHeader
                title={`header : ${elem.header}`}
                subheader={`text : ${elem.text}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
