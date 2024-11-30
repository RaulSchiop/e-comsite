import { connectToDatabase } from "@/app/utils/mongoDb";  

export async function GET() {
  try {
   
    const client = await connectToDatabase();

    const db = client.db("shop"); 
    const productsCollection = db.collection("products"); 
    const products = await productsCollection.find({}).toArray();

    if (products.length === 0) {
      return new Response(
        JSON.stringify({ message: "No products found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
