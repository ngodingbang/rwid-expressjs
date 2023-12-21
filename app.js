import { Handler as HttpHandler } from "./app/http/Handler.js";
import { ServiceProvider } from "./app/providers/ServiceProvider.js";
import { Router } from "./routes/Router.js";
import express from "express";

const app = express();

new ServiceProvider(app).boot();
new HttpHandler(app);
new Router(app);

export default app;
