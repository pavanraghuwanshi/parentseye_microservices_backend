import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { configDotenv } from "dotenv";
import cors from "cors";

const app = express();

// CORS Middleware
app.use(cors());

// User Management Service Proxy
app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://localhost:5001",
    changeOrigin: true,
  })
);

// Bus Tracking Service Proxy
app.use(
  "/bus",
  createProxyMiddleware({
    target: "http://localhost:5002",
    changeOrigin: true,
  })
);

// Geofencing Service Proxy
app.use(
  "/geofence",
  createProxyMiddleware({
    target: "http://localhost:5003",
    changeOrigin: true,
  })
);

// Notifications Service Proxy
app.use(
  "/notify",
  createProxyMiddleware({
    target: "http://localhost:5004",
    changeOrigin: true,
  })
);

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});
