import { type Metadata } from 'next'
import Contact from '@/components/contact/contact'
import Container from '@/components/shared/container'

export const metadata: Metadata = {
  title: 'Contact - Reach Out for Full-Stack Development and Tech Consultation',
  description:
    'Get in touch, a seasoned full-stack developer and tech consultant, to discuss your project, web development needs, or to explore collaboration opportunities.',
}

export default function Page() {
  return (
    <Container className='min-h-[80vh]'>
      <Contact />
    </Container>
  )
}
