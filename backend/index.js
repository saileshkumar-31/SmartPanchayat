const express = require ("express");

const app = new express();

const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const PORT = 8001;

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

//POST
app.post("/api/auth/register", async(req ,res)=>{

    try{
        //1.Data from front end
    const data = req.body;

    //2.DB Logic
    const newUser = await prisma.userRegistration.create(
        {
            data:{
                user_name : data.user_name,
                user_mobile : data.user_mobile,
                user_email  : data.user_email,
                user_pass : data.user_pass,
                user_panchayat : data.user_panchayat
            }
        }
    )

    //3.Data to front end
    res.json({
        message: "new user created",
        data: newUser
    })

    }catch(error){
        res.send(500).json({
            message:"Internal server error",
            error: error

        })
    
    }
})


