import Header from "../components/header/Hader"
export default function AboutUs(){

    return (
        <div>
        <Header></Header>
        <section className="bg-black p-10 mt-10">
        <h1 className=" text-primary text-3xl font-bold mb-4">About Us</h1>
        <p className="text-Text mb-4">
          At <a className="text-accent">PC online</a>, we specialize in delivering the best PCs componesnts and PCs, productivity, and business. 
          <a className="text-accent">Since 2010</a>, we’ve been committed to providing cutting-edge solutions tailored to your unique needs.
        </p>
        <p className="text-Text mb-4">
          Our mission is to combine expert craftsmanship, premium components, and unparalleled support to ensure every 
          PC we build exceeds expectations.

        </p>
        <p className="text-Text mb-4">
          With 14 years of experience and <a className="text-accent">100,000 clients</a> , we’ve earned the trust of thousands of satisfied customers.
        </p>
        <p className="text-Text">
          <a href="/products" className="text-accent hover:underline">Shop from us</a> for a seeamles experience
        </p>
      </section>
      </div>
      
    )
}