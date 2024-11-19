import Layout from "@/components/layout"
import { Hero } from "@/components/sections/hero"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"

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
