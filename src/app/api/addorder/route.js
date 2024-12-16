import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/utils/mongoDb";
import { ObjectId } from "mongodb";

export async function POST(req,res) {
try{
const {cart,userId}=await req.json();

if(!cart||!userId){
    return NextResponse.json(
        {error:"missing cart or user not logged in"},
        {status:400});
}

const client=await connectToDatabase();
const db=await client.db('shop');
const userCollection=db.collection('users')

const newOrder=userCollection.updateOne({_id:new ObjectId(userId)},
    {$push:{orders:cart}}
)

return NextResponse.json({messsage:"order succesfully added"},{status:200});
}catch(error){
return NextResponse.json({error:"internal error"},{status:500})
}
}