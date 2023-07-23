import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header, Form } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header label='Home' />
      <Form />
    </div>
  )
}
