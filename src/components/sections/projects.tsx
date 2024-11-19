"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Chat Application",
    description: "A real-time chat application with AI-powered features including sentiment analysis and automatic language translation.",
    tech: ["React", "Node.js", "Socket.io", "OpenAI API"],
    github: "https://github.com/owenlin/ai-chat",
    demo: "https://ai-chat.demo.com",
  },
  {
    title: "Blockchain Explorer",
    description: "A comprehensive blockchain explorer for tracking transactions, smart contracts, and token transfers across multiple networks.",
    tech: ["Next.js", "TypeScript", "Web3.js", "Tailwind CSS"],
    github: "https://github.com/owenlin/blockchain-explorer",
    demo: "https://blockchain-explorer.demo.com",
  },
  {
    title: "Smart Home Dashboard",
    description: "An IoT dashboard for monitoring and controlling smart home devices with real-time data visualization.",
    tech: ["Vue.js", "Firebase", "D3.js", "MQTT"],
    github: "https://github.com/owenlin/smart-home",
    demo: "https://smart-home.demo.com",
  },
]

export function Projects() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container" ref={containerRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="relative overflow-hidden rounded-t-lg aspect-video mb-4">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={`https://picsum.photos/seed/project${index + 1}/600/400`}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
