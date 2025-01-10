import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/utils/mongoDb";
import { ObjectId } from "mongodb";

export async function POST(req, res) {
   try {
      const { userId } = await req.json();

      if (!userId) {
         return NextResponse.json(
            { error: "userId not found " },
            { status: 400 }
         );
      }

      const client = await connectToDatabase();
      const db = await client.db("shop");
      const userCollection = db.collection("users");

      const orders = await userCollection.findOne(
         { _id: new ObjectId(userId) },
         { projection: { orders: 1 } }
      );

      if (orders.length === 0) {
         return NextResponse.json(
            { message: "No orders found" },
            { status: 404 }
         );
      }

      return NextResponse.json(orders.orders);
   } catch (error) {
      return NextResponse.json(
         { error: "internal error " + error },
         { status: 500 }
      );
   }
}
