import express, { json, urlencoded } from "express";
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', async(req, res, next) => {
    try {
        res.end("<p>Hello World</p>")
    } catch (error) {
        next(error);
    }
});

export default app;