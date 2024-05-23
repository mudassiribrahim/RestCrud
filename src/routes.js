import express from 'express';
const router = express.Router();

router.post('/post',(req,res)=>{
    res.send('post Api')
})

router.get('/getAll',(req,res)=>{
    res.send('getAll Api')})

router.get('/get/:id',(req,res)=>{
    res.send('get Api')
})

router.put('/update/:id',(req,res)=>{
    res.send('update Api')
})

router.delete('/delete/:id',(req,res)=>{
    res.send('delete Api')
})

export default router