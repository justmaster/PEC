import React, { FunctionComponent as FC } from "react";
import "./App.css";
import styled from "styled-components";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./Home";


const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/ck5xqhrb52eqk019329rmfp26/master"
});

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #ebebeb;
`;

const App: FC = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Wrapper>
          <Route path='/' component={Home} exact/>
          <Route path='/:id/home' component={Home} />
        </Wrapper>
      </ApolloProvider>
    </Router>
  );
};

export default App;
