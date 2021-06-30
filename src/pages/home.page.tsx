import { Fragment, useEffect, useState } from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { CenterLayout } from "../components/center";
import { PATH_ENUM } from "../router/path";
import { Button } from "@material-ui/core";

const animation = require("../assets/animatios/animation.json");
const Homepage = () => {
  const buttonStyle = {
    display: "block",
    margin: "10px auto",
  };
  const [abc, setAbc] = useState(1);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  console.log("First");

  useEffect(() => {
    console.log("Second");
  }, [abc]);

  return (
    <Fragment>
      <CenterLayout moreStyle={{ flexDirection: "column" }}>
        <h2>Welcome To Homepage</h2>
        <br />
        <Link to={PATH_ENUM.LOGIN} style={{ textDecoration: "none" }}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setAbc(abc + 1)}
          >
            Go To Login
          </Button>
        </Link>
      </CenterLayout>
      <br />
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        style={{ minWidth: "100%" }}
      />
    </Fragment>
  );
};

export default Homepage;
