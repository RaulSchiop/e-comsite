import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/utils/mongoDb";

export async function GET() {
   try {
      const client = await connectToDatabase();
      const db = client.db("shop");
      const productsCollection = db.collection("products");

      const products = await productsCollection.find({}).toArray();

      if (products.length === 0) {
         return NextResponse.json(
            { message: "No products found" },
            { status: 404 }
         );
      }

      return NextResponse.json(products);
   } catch (error) {
      console.error("Error fetching products:", error);
      return NextResponse.json(
         { error: "Internal server error" },
         { status: 500 }
      );
   }
}
