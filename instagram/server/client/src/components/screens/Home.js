import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allpost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.posts);
      });
  }, []);
  return (
    <div
      className="home"
      style={{ backgroundColor: "white", marginTop: "-98px" }}
    >
      {data.map((item) => {
        return (
          <Card
            className="Card"
            style={{
              margin: "0 auto",
              padding: "10px",
              backgroundColor: "white",
            }}
          >
            <div>
              <CardTitle
                style={{
                  textAlign: "center",
                  float: "left",
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                RAMESH
              </CardTitle>
              <CardText
                style={{ float: "right", textAlign: "center", color: "white" }}
              >
                <small>Posted 3 days ago</small>
              </CardText>
            </div>

            <CardImg
              style={{ margin: "0 auto", textAlign: "center" }}
              top
              width="100%"
              src="https://images.unsplash.com/photo-1490814525860-594e82bfd34a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1413&q=80"
              alt="Card image cap"
            />
            <CardBody>
              <CardText
                style={{
                  textAlign: "center",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <i
                className="material-icons"
                style={{ color: "red", fontSize: "30px" }}
              >
                favorite
              </i>
            </CardBody>
            <input type="text" placeholder="Add a comment" />
            <Button color="warning">ADD COMMENT</Button>
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
