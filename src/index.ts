import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// const origin = process.env.NODE_ENV === 'production' ? 'https://yourapp.com' : 'http://localhost:3000';
const origins = ['http://localhost:3000', 'http://172.31.92.207', 'http://54.210.97.220'];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "*",
  credentials: true,
}))

app.use('/api', routes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
