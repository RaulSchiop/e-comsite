
import Link from 'next/link';

export default function NotFound() {
  return (
<main className="flex items-center justify-center h-screen bg-background text-Text">
  <div>
    <p className='text-accent text-6xl font-bold'>404</p>
    <h1 className="text-5xl font-bold">Page not found</h1>
    <p>Sorry, we couldn't find the page you're looking for.</p>
    
    
    <div className="flex gap-5 mt-4">
      <Link className='bg-secondary p-2 rounded-md text-Text' href={"/"}>Go back home</Link>
        <div className="flex gap-1 items-center justify-center bg-primary p-2 rounded-md">
        <Link href={"/"}>Contact support</Link> 
        <span aria-hidden="true">&rarr;</span> 
      </div>
    </div>

  </div>
</main>

  );
}