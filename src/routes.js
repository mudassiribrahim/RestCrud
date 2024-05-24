import express from 'express';
import model from './models.js'
const router = express.Router();

router.post('/post',async (req,res)=>{
    const data = new model({
        name : req.body.name,
        age : req.body.age
    })
    try {
        const saveData = await data.save();
        res.status(200).json(saveData);
    } catch (error) {
        res.status(400).json({
            message : error.message})

        
    }
})

router.get('/getAll',async(_,res)=>{
    try {
        const data = await model.find();
        res.status(200).json(data);
    } catch (error) {
        res.stats(400).json({message : error.message})
        
    }
})

router.get('/get/:id',async(req,res)=>{
    const id = req.params.id;
    try {
        const data = await model.findById(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({message : error.message})
        
    }
})

router.patch('/update/:id',(req,res)=>{
    const id = req.params.id;
    const payload = req.body;
    const option = {new : true}
    try {
        const result = model.findByIdAndUpdate({id,payload,option})
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({message : error.message})
        
    }
})

router.delete('/delete/:id',async(req,res)=>{
try {
    const id = req.params.id;
    const data = await model.findByIdAndDelete(id)
    res.status(200).json(data) 
} catch (error) {
    res.status(400).json({message : error.message})
    
}
    res.send('delete Api')
})

export default router
