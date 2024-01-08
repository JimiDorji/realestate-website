import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-ruuz0c8lte707v4s.us.auth0.com"
     clientId="gR0BO7gnUGH8aSk6aCD41DcXdCPRO67T"
     authorizationParams={{
      redirect_uri: "https://real-estate-bhutan-three.vercel.app"
     }}
     audience="https://real-estate-bhutan-three.vercel.app"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
