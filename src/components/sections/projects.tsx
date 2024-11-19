"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const projects = [
  {
    title: "AI-Powered Chat Application",
    description: "A real-time chat application with AI-powered features including sentiment analysis and automatic language translation.",
    tech: ["React", "Node.js", "Socket.io", "OpenAI API"],
    github: "https://github.com/owenlin/ai-chat",
    demo: "https://ai-chat.demo.com",
    image: "https://picsum.photos/seed/project1/600/400",
  },
  {
    title: "Blockchain Explorer",
    description: "A comprehensive blockchain explorer for tracking transactions, smart contracts, and token transfers across multiple networks.",
    tech: ["Next.js", "TypeScript", "Web3.js", "Tailwind CSS"],
    github: "https://github.com/owenlin/blockchain-explorer",
    demo: "https://blockchain-explorer.demo.com",
    image: "https://picsum.photos/seed/project2/600/400",
  },
  {
    title: "Smart Home Dashboard",
    description: "An IoT dashboard for monitoring and controlling smart home devices with real-time data visualization.",
    tech: ["Vue.js", "Firebase", "D3.js", "MQTT"],
    github: "https://github.com/owenlin/smart-home",
    demo: "https://smart-home.demo.com",
    image: "https://picsum.photos/seed/project3/600/400",
  },
]

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

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="relative overflow-hidden rounded-t-lg aspect-video mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
