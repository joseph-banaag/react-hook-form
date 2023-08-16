import Forms from '@/components/forms/page'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-screen">
      <div className='w-[500px]'>
        <Forms />
      </div>
    </main>
  )
}
