import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";
import Spinner from "./Spinner";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log(recovered);
  if (!confirmed) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {/* container 1 --------------------------------------------------------------------------------------------------------------------------------*/}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              INFECTED
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography
              variant="body2"
              fontWeight="fontWeightMedium"
              fontFamily="Monospace"
            >
              Number of ACTIVE CASES of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        {/* container 2 --------------------------------------------------------------------------------------------------------------------------------*/}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              RECOVERED
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography
              variant="body2"
              fontWeight="fontWeightMedium"
              fontFamily="Monospace"
            >
              Number of RECOVERIES from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        {/* container 3 --------------------------------------------------------------------------------------------------------------------------------*/}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              DEATHS
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography
              variant="body2"
              fontWeight="fontWeightMedium"
              fontFamily="Monospace"
            >
              Number of DEATHS from COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
