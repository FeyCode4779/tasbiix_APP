import Tasbiix from "../models/tasbiixModels.js";

export const readAllTasbiix = async (req,res)=>{
    try{
       const tasbiix = await Tasbiix.find()
       res.status(200).json(tasbiix)                
    }catch(error){
         res.status(500).json({error: error.message})
    }
 }

export const createTasbiix = async (req,res)=>{
   try{
        const {title,description,isActive} = req.body;

        const tasbiix = new Tasbiix({
            title,description,isActive,date:Date()
        })

        const tasbiixSave = await tasbiix.save();
        res.status(201).json(tasbiixSave)
   }catch(error){
        res.status(500).json({error: error.message})
   }
}

export const updateTasbiix = async (req,res)=>{
    try{
         const {title,description,isActive} = req.body;
 
         const tasbiix = await Tasbiix.findById(req.params.id);
         if(tasbiix){
             tasbiix.title = title;
             tasbiix.description = description;
             tasbiix.isActive = isActive;

             const tasbiixSave = await tasbiix.save();
             res.status(200).json(tasbiixSave)
         }         
    }catch(error){
         res.status(500).json({error: error.message})
    }
 }


 export const deleteTasbiix = async (req,res)=>{
    try{
       const tasbiix = await Tasbiix.findByIdAndDelete(req.params.id)
       res.status(200).json({message:"Deleted Successfully"})                
    }catch(error){
         res.status(500).json({error: error.message})
    }
 }