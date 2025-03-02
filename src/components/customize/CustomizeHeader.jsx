import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Love from '../../assets/loveIn.png'



export default function 
() {
  return (
    <div
    className="flex items-center gap-96  px-56 py-5 fixed top-0 left-0 z-[500] w-full backdrop-blur-md bg-gradient-to-r from-white/50 via-neutral-100/50 to-white/50  supports-[backdrop-filter]:bg-white/3">
  <Link
    to="/admin-themes"
    className="flex items-center gap-2 text-100 text-[red] font-bold"
  >
    <ArrowLeft className="h-4 w-4 text-[red]" />
    Back
  </Link> 
  <div className='flex gap-3'>
    <img 
      src={Love} 
      alt="Event" 
      className="w-14 h-12 object-contain" 
    />
    <div>
        <h1 className='text-100 font-500 '>Love in the Boulevard</h1>
        <p className='text-100 text-neutral'>Hard Rock</p>
    </div>
  </div>
</div>

  )
}
