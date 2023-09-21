'use client'
import Clipping from '@/components/Clipping'
import Info from '@/components/Info'
import Landing from '@/components/Landing'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Divider from '@/components/UI/Divider'
import Header from '@/components/UI/Header'
import Vision from '@/components/Vision'
import Missions from '@/components/Missions'
import { SectionProvider } from '@/contexts/Sections'
import { type FC } from 'react'
import Head from 'next/head'
const Home: FC = () => {
  return (
    <SectionProvider>
      <Head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ececec" />
      </Head>
      <Header />
      <Landing />
      <Vision />
      <Divider direction="horizontal" />
      <Missions />
      <Divider direction="horizontal" />
      <Services />
      <Divider direction="horizontal" />
      <Team />
      <Divider direction="horizontal" />
      <Info />
      <Divider direction="horizontal" />
      <Projects />
      <Divider direction="horizontal" />
      <Clipping />
    </SectionProvider>
  )
}
export default Home
