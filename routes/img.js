const router= require("express").Router();
let MedicimgURLaddal=require("../modles/img");
router.route("/add").post((req,res)=>{

    const reciptNumber=req.body.reciptNumber;
    const ImgURL=req.body.ImgURL;
     const newmedical=new MedicimgURLaddal({

        reciptNumber,
        ImgURL
    
    })

//data add 
newmedical.save().then(()=>{
        res.json("image details Added")
    }).catch((err)=>{
        console.log(err);
    })

})
//read data
router.route("/").get((req,res)=>{

    MedicimgURLaddal.find().then((medical)=>{
        res.json(medical)
    }).catch((err)=>{
        console.log(err);
    })
})
//update
router.route("/update/:id").put(async(req,res)=>{
    let medicalId=req.params.id;
    const{reciptNumber,ImgURL}=req.body;

    const updateMedical={
        reciptNumber,
        ImgURL
        
    }

    const update=await MedicimgURLaddal.findByIdAndUpdate(medicalId,updateMedical).then(()=>{
        res.status(200).send({status:"Medical certificate details update"})
    }).catch((err)=>{
        res.status(500).send({status:"error with updating data",error:err.message});
    })
})
//delete

router.route("/delete/:id").delete(async(req,res)=>{
    let medicalId = req.params.id;

    await MedicimgURLaddal.findByIdAndDelete(medicalId)
    .then(()=>{
        res.status(200).send({status:"Medical certificate deleted"});
    }).catch((err)=>{
        res.status(500).send({status:"error with delete medical certificate",error:err.message});
    })
})

//get one user data

router.route("/get/:id").get(async(req,res)=>{
    let medicalId = req.params.id;
    const medical=await MedicimgURLaddal.findById(medicalId) 
    .then((m)=>{
        res.status(200).send({status:"User fetched",m})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with get user",error:err.message})
    })
})





module.exports=router;