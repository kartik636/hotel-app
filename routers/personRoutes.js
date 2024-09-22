const express = require('express');
const Person = require('../modals/person')
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    res.status(200).json(response);
    console.log('person add sucessfull');
    
  } catch (error) {
    console.log("Internal error ");
    res.status(500).json({ error: "error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    res.json(data);
    console.log("data fetched sucessfully");
  } catch (error) {
    res.json(error);
    console.log("internal error");
  }
});

router.get('/:workType',async(req,res)=>{
  try {
    const workType = req.params.workType;
    if(workType=='chief'||workType=='manager'||workType=='waiter'){
      const response = await Person.find({work:workType});
      res.status(200).json(response);
      
    }
  } catch (error) {
    res.json(error);
  }
});

router.put('/:id',async(req,res)=>{
 try {
  const personId =  req.params.id;
  const updateData = req.body;
  const response =  await Person.findByIdAndUpdate(personId,updateData,{
             new:true,  // return the update document
             runValidators:true  //run mongoose validations
  });
  res.json(response).status(200);
  console.log("person data updated sucessfully");
  
 } catch (error) {
  res.json(error).status(404);
 }
});
router.delete('/:id',async(req,res)=>{
  try {
    const personId = req.params.id;
    const response =  await Person.findByIdAndDelete(personId);
    res.status(200).json(response);
    console.log("person deleted sucessfully");
    
  } catch (error) {
    res.status(404).json(error);
    console.log("Inter error,person not deleted");
    
  }
})

module.exports = router;