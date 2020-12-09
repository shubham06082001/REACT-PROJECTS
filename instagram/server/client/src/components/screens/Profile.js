import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Profile = () => {
  return (
    <div
      style={{
        backgroundImage:
          "https://www.transparenttextures.com/patterns/arches.png",
        backgroundColor: "#00238c",
        width: "100%",
        height: "100%",
        margin: " 0 auto",
      }}
    >
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-around",
          margin: "3px auto",
          borderBottom: "2px double darkgrey",
        }}
      >
        <div>
          <img
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              border: "2px solid white",
            }}
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
            alt="Profile"
          />
        </div>
        <div style={{ textAlign: "center", color: "#fff" }}>
          <h4
            style={{
              border: "2px solid orange",
              marginBottom: "40px",
              fontSize: "30px",
            }}
          >
            AMMA JOHNSON
          </h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "110%",
            }}
          >
            <h5
              style={{
                textAlign: "center",
                border: "2px solid yellow",
                padding: "10px",
              }}
            >
              40 posts
            </h5>
            <h5
              style={{
                textAlign: "center",
                border: "2px solid yellow",
                padding: "10px",
              }}
            >
              40 followers
            </h5>
            <h5
              style={{
                textAlign: "center",
                border: "2px solid yellow",
                padding: "10px",
              }}
            >
              40 following
            </h5>
          </div>
        </div>
      </div>

      <div className="gallery">
        <Card className="Card" style={{ margin: "0 auto" }}>
          <CardImg
            style={{ margin: "0 auto", textAlign: "center" }}
            top
            src="https://images.unsplash.com/photo-1490814525860-594e82bfd34a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1413&q=80"
            alt="Card image cap"
            width="400px"
            height="500px"
          />
          <CardBody>
            <CardTitle style={{ textAlign: "center" }}>title</CardTitle>
            <CardText style={{ textAlign: "center" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <CardText style={{ textAlign: "center" }}>
              <small>Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card className="Card" style={{ margin: "0 auto" }}>
          <CardImg
            style={{ margin: "0 auto", textAlign: "center" }}
            top
            src="https://images.unsplash.com/photo-1490814525860-594e82bfd34a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1413&q=80"
            alt="Card image cap"
            width="400px"
            height="500px"
          />
          <CardBody>
            <CardTitle style={{ textAlign: "center" }}>title</CardTitle>
            <CardText style={{ textAlign: "center" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <CardText style={{ textAlign: "center" }}>
              <small>Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card className="Card" style={{ margin: "0 auto" }}>
          <CardImg
            style={{ margin: "0 auto", textAlign: "center" }}
            top
            src="https://images.unsplash.com/photo-1490814525860-594e82bfd34a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1413&q=80"
            alt="Card image cap"
            width="400px"
            height="500px"
          />
          <CardBody>
            <CardTitle style={{ textAlign: "center" }}>title</CardTitle>
            <CardText style={{ textAlign: "center" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <CardText style={{ textAlign: "center" }}>
              <small>Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
