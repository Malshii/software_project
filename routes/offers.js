const router= require("express").Router();
let userOffers=require("../models/offers");
router.route("/add").post((req,res)=>{

    const head=req.body.head;
    const description=req.body.description;
    const date=req.body.date;
     const newmedical=new userOffers({

        head,
        description,
        date
    
    })

//data add 
newmedical.save().then(()=>{
        res.json("offer details Added")
    }).catch((err)=>{
        console.log(err);
    })

})
//read data
router.route("/").get((req,res)=>{

    userOffers.find().then((medical)=>{
        res.json(medical)
    }).catch((err)=>{
        console.log(err);
    })
})
//update
router.route("/update/:id").put(async(req,res)=>{
    let medicalId=req.params.id;
    const{head,description,date}=req.body;

    const updateMedical={
        head,
        description,
        date
        
    }

    const update=await userOffers.findByIdAndUpdate(medicalId,updateMedical).then(()=>{
        res.status(200).send({status:"offer details update"})
    }).catch((err)=>{
        res.status(500).send({status:"error with updating data",error:err.message});
    })
})
//delete

router.route("/delete/:id").delete(async(req,res)=>{
    let medicalId = req.params.id;

    await userOffers.findByIdAndDelete(medicalId)
    .then(()=>{
        res.status(200).send({status:"offer deleted"});
    }).catch((err)=>{
        res.status(500).send({status:"error with delete medical certificate",error:err.message});
    })
})

//get one user data

router.route("/get/:id").get(async(req,res)=>{
    let medicalId = req.params.id;
    const medical=await userOffers.findById(medicalId) 
    .then((m)=>{
        res.status(200).send({status:"User fetched",m})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with get user",error:err.message})
    })
})





module.exports=router;