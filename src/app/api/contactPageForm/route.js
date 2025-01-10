import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/utils/mongoDb";

export async function POST(req, res) {
   try {
      const { name, Email, problem } = await req.json();

      if (!name || !Email || !problem) {
         return NextResponse.json(
            {
               error: "The fealds are not enttered",
            },
            {
               status: 400,
            }
         );
      }

      const client = await connectToDatabase();
      const db = await client.db("shop");
      const problemsCollection = db.collection("problems");

      const newProblem = problemsCollection.insertOne({
         Name: name,
         Email,
         Problem: problem,
      });

      return NextResponse.json(
         { message: "Problem has added to db" },
         { status: 200 }
      );
   } catch (error) {
      console.log(error);
      return NextResponse.json(
         {
            error: "internal error" + error,
         },
         {
            status: 500,
         }
      );
   }
}
