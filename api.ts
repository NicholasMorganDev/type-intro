import cors from 'cors';
import express,{Request, Response} from 'express';

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

app.get('/', (req: Request, res: Response) => {
  res.send('I am gRoot')
})

