import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Testing router')
});

export { router };