

import {test,expect} from "@playwright/test"

const token="a1607b35de980d2afcede754599af3139f05ee459e2c7c10cf9a895fe7eb310a";

test("Test for google api",async({request})=>{
    
    const response=await request.get("https://www.google.com/");

    //assertion
    console.log("Status code is:"+ response.status());
    
})

test("To get users",async({request})=>{

    const response=await request.get("https://gorest.co.in/public/v2/users",{
                        headers:{
                            Authorization:"Bearer "+token
        
                            }
                                });

        console.log("Status code: "+response.status());
        const data=await response.json();
        console.log(data);

        

})

test.only("For Post request",async({request})=>{
//request payload
const requestBody={
    
    name: "Priyanka",
    gender: "female",
    email: "priyanka"+Date.now()+"@gmail.com",
    status: "active"

};

   const response= await request.post("https://gorest.co.in/public/v2/users",{
                        headers:{
                            Authorization:"Bearer "+token
        
                            },
                            data:requestBody
                                });

            console.log("Status code is: "+response.status());
             expect(response.status()).toBe(201);
            const resData=await response.json();
            console.log(resData);

            
            
})