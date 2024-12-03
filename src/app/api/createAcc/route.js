import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/utils/mongoDb";

export async function POST(req) {
    try{

        const {name,Email,Password}=await req.json();
        
        if(!name || !Email || !Password){
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }
        const client= await connectToDatabase();
        const db= client.db("shop");
        const usersCollection=db.collection("users");
        
        const existingUser = await usersCollection.findOne({ Email });
        if (existingUser) {
            return NextResponse.json(
                { error: "Email already exists" },
                { status: 409 } 
            );
        }

        const newAcc=await usersCollection.insertOne({
            name,
            Email,
            Password,
            orders:[],
            cart:[],
        })

        const user = await usersCollection.findOne({ Email, Password });

        if (user) {
            return NextResponse.json(
              { id: user._id.toString() }, 
              { status: 200 }
            );
          } else {
            return NextResponse.json(
              { error: "Error while fetching user after creation" },
              { status: 500 }
            );
          }
    

    }catch(error){
        console.log(error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }

}