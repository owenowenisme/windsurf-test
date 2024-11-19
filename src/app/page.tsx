import dynamic from 'next/dynamic'
import Layout from "@/components/layout"

// Dynamically import client components with ssr disabled
const Hero = dynamic(() => import("@/components/sections/hero").then(mod => mod.Hero), 
  { ssr: false }
)
const Skills = dynamic(() => import("@/components/sections/skills").then(mod => mod.Skills), 
  { ssr: false }
)
const Projects = dynamic(() => import("@/components/sections/projects").then(mod => mod.Projects), 
  { ssr: false }
)
const Contact = dynamic(() => import("@/components/sections/contact").then(mod => mod.Contact), 
  { ssr: false }
)

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  )
}
