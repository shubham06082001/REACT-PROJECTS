import React from "react";
import { Typography} from "@material-ui/core";

import { Cards, Chart, CountryPicker, Map } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import leftImage from "./images/covid.gif";
import rightImage from "./images/corona.gif";
import hug from "./images/hug.gif";
import prevention_who from "./images/prevention who.gif";
import prevention from "./images/prevention.gif";
import protection_who from "./images/protection who.gif";
import face from "./images/face .gif";
import stay_home from "./images/stay home.gif";

import spread from "./images/spread.gif";
import spread_corona from "./images/spread corona.gif";
import cause from "./images/cause.gif";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    //fetchedData

    this.setState({ data: fetchedData, country: country });

    //setState
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <img src={leftImage} className={styles.left_image} alt="COVID" />
          <img
            className={styles.image}
            alt="COVID-19"
            src={"https://i.ibb.co/7QpKsCX/image.png"}
          />
          <img src={rightImage} className={styles.right_image} alt="CORONA" />
        </div>
        <Cards data={data} />
        <Typography variant="h4" className={styles.subHeading}>SELECT YOUR COUNTRY</Typography>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Typography className={styles.subHeading} variant="h4">
          COVID-19 COUNTRY WISE STATISTICS
        </Typography>
        <Map />
        <Typography className={styles.subHeading} variant="h4">
          HOW TO PROTECT YOURSELF FROM COVID-19 PANDEMIC
        </Typography>
        <div className={styles.images}>
          <img src={hug} className={styles.gif} alt="gif" />
          <img src={prevention_who} className={styles.gif} alt="gif" />
          <img src={prevention} className={styles.gif} alt="gif" />
          <img src={protection_who} className={styles.gif} alt="gif" />
          <img src={stay_home} className={styles.gif} alt="gif" />
          <img src={face} className={styles.gif} alt="gif" />
        </div>
        <Typography className={styles.subHeading} variant="h4">HOW COVID-19 ORIGINATED AND SPREAD WORLDWIDE</Typography>
        <Typography className={styles.subText} variant="h6" color="textPrimary">
          COVID-19 is the infectious disease caused by the most recently
          discovered coronavirus. This new virus and disease were unknown before
          the outbreak began in Wuhan, China, in December 2019. COVID-19 is now
          a pandemic affecting many countries globally.
        </Typography>

        <div className={styles.images}>
          <img src={cause} className={styles.gif} alt="gif" />
          <img src={spread} className={styles.gif} alt="gif" />
          <img src={spread_corona} className={styles.gif} alt="gif" />
        </div>
      </div>
    );
  }
}

export default App;
