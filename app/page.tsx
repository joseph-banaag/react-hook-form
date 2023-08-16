import Forms from '@/components/forms/page'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-screen">
      <div className='mt-48'>
        <Forms />
      </div>
      <div className='w-full h-[4em] mx-auto p-5 mt-16 bg-violet-950 flex justify-center items-center'>
        <h1 className='text-sm font-extralight font-sans'>
          This is not an actual sign in / sign up page for Vimeo. This is for sample project only.
        </h1>
      </div>
    </main>
  )
}
