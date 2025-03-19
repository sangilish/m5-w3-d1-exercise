

import OAuth2Login from './OAuth2Login';

export default OAuth2Login;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";  // 이 줄이 있는지 확인!

ReactDOM.render(
  <App />,
  document.getElementById("example") // index.html에 "example" ID가 존재하는지도 확인
);