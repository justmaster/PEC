import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {
  Wrapper,
  Body,
  BodyElement,
  BodySlice
} from "./desktop_styles/ContactsStyles";
import {
  CircularContainer,
  Dash,
  Subheading,
  Subsubheading,
  PaddedContainer,
  Btn
} from "./desktop_styles/Components";
import { useParams } from "react-router-dom";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

const [phone1, phone2, email, adress] = [
  "+98 902 862 3701",
  "+98 937 927 9877",
  "peceast@gmail.com",
  "Sarakhs Special Economic Zone Duste Boulevard 2"
];

const position = {
  lat: 36.413499,
  lng: 61.067916
};

const location = "https://www.google.com/maps/place/36%C2%B024'48.6%22N+61%C2%B004'04.5%22E/@36.4134987,61.0328967,13z/data=!4m5!3m4!1s0x0:0x0!8m2!3d36.4134987!4d61.0679156?hl=en"

export const Contacts = () => {
  const { id } = useParams();
  const heading = id === "en" ? "Contacts" : "با ما تماس بگیرید"
  return (
    <>
      <Wrapper id="CONTACTS">
        <Body>
          <BodyElement className="left">
            <BodySlice className="filler top">
              <CircularContainer>
                <AlternateEmailIcon style={{ color: "black" }} />
              </CircularContainer>
              <Dash></Dash>
            </BodySlice>
            <BodySlice className="top titleHolder">
              <div className="divider">
                <Subheading>{heading}</Subheading>
              </div>
            </BodySlice>
            <BodySlice className="filler bottom"></BodySlice>
            <BodySlice className="textHolder">
              {[phone1, phone2, email, adress].map(element => (
                <PaddedContainer className="contacts" key={element}>
                  <Subsubheading className="bgBright">{element}</Subsubheading>
                </PaddedContainer>
              ))}
              <PaddedContainer className="contacts">
                <a href={location} target="_blank"><Btn className="bgBright">Google Maps</Btn></a>
              </PaddedContainer>
            </BodySlice>
          </BodyElement>
          <BodyElement className="right">
            {" "}
            <LoadScript
              id="script-loader"
              googleMapsApiKey="AIzaSyCR9k5RIW0H8-c71LTw1y_UKhMtdjxetHY"
            >
              <GoogleMap
                id="marker-example"
                mapContainerStyle={{ height: "500px", width: "100%" }}
                zoom={8}
                center={position}
              >
                <Marker position={position} />
              </GoogleMap>
            </LoadScript>
          </BodyElement>
        </Body>
      </Wrapper>
    </>
  );
};
