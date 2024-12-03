import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/utils/mongoDb";

export async function GET(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const client = await connectToDatabase();
    const db = client.db("shop");
    const usersCollection = db.collection("users"); 

    const user = await usersCollection.findOne({ email, password });

    if (user) {
      return NextResponse.json(
        { id: user._id.toString()}, 
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error( error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
