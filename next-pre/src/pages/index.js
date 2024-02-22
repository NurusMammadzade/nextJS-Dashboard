import Image from 'next/image'
import { Inter } from 'next/font/google'

import Link from 'next/link'

import Script from '@/components/script'
import TopCards from '@/components/TopCards'
import BarChart from '@/components/BarChart'
import RecentOrders from '@/components/RecentOrders'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main className='bg-gray-100 min-h-screen'>
      <Script />
      <TopCards />
      <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
        <BarChart />
        <RecentOrders />
      </div>
    </main>



  </>
  )
}
