import { type Metadata } from 'next'

import About from '@/components/about/about'
import Container from '@/components/shared/container'


export const metadata: Metadata = {
  title: 'About - Expertise in Full-Stack Development from Frontend to Backend',
  description:
    "Learn about Asad Komi's journey as a full-stack developer, from mastering .NET and React to building scalable applications with Node.js, MySQL, and more.",

  }

export default function Page() {
  return (
    <Container className='min-h-[80vh]'>
        <About />
    </Container>
  )
}
