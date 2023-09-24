import express from "express";
import { initDB } from "./db/dataSource.js";
import usersRouter from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`App is runnin and listening on port ${PORT}`);
    initDB();
});

export default app;