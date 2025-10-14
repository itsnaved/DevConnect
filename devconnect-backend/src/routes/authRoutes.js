import express from 'express' ;
const router = express.Router();

// Define routes specific to users
router.post('/signup', (req, res) => {
  res.send('Signed up');
});

router.post('/signin', (req, res) => {
  res.send(`Sign in`);
});

export default router;