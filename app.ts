import express, { Application, Request, Response, NextFunction } from "express";
import path from "path";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/dist'));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET"
  );
  next()
});

app.use('/*', (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

export default app;
