"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  SiKubernetes,
  SiGrafana,
  SiPrometheus,
  SiElasticsearch,
  SiApachekafka,
  SiApacheairflow,
  SiScylladb,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiAmazon,
  SiGithubactions,
  SiGit,
} from "@icons-pack/react-simple-icons"

const skills = [
  {
    category: "Data Engineering & ETL",
    description: "Building robust data pipelines and ETL processes",
    skills: [
      { name: "Apache Airflow", level: 90, icon: SiApacheairflow },
      { name: "Apache Kafka", level: 85, icon: SiApachekafka },
      { name: "Python", level: 95, icon: SiPython },
      { name: "PostgreSQL", level: 90, icon: SiPostgresql },
    ],
  },
  {
    category: "Observability & Monitoring",
    description: "Implementing comprehensive system monitoring solutions",
    skills: [
      { name: "Grafana", level: 90, icon: SiGrafana },
      { name: "Prometheus", level: 85, icon: SiPrometheus },
      { name: "Elasticsearch", level: 80, icon: SiElasticsearch },
      { name: "Kubernetes", level: 85, icon: SiKubernetes },
    ],
  },
  {
    category: "Database Technologies",
    description: "Working with various database systems and optimizations",
    skills: [
      { name: "ScyllaDB", level: 85, icon: SiScylladb },
      { name: "PostgreSQL", level: 90, icon: SiPostgresql },
      { name: "MongoDB", level: 85, icon: SiMongodb },
      { name: "Elasticsearch", level: 80, icon: SiElasticsearch },
    ],
  },
  {
    category: "Frontend Development",
    description: "Creating modern and responsive web applications",
    skills: [
      { name: "React", level: 90, icon: SiReact },
      { name: "Next.js", level: 85, icon: SiNextdotjs },
      { name: "TypeScript", level: 90, icon: SiTypescript },
      { name: "Tailwind CSS", level: 95, icon: SiTailwindcss },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    description: "Managing and deploying cloud infrastructure",
    skills: [
      { name: "Docker", level: 90, icon: SiDocker },
      { name: "Kubernetes", level: 85, icon: SiKubernetes },
      { name: "AWS", level: 85, icon: SiAmazon },
      { name: "GitHub Actions", level: 90, icon: SiGithubactions },
    ],
  },
  {
    category: "Tools & Best Practices",
    description: "Utilizing industry-standard tools and methodologies",
    skills: [
      { name: "Git", level: 95, icon: SiGit },
      { name: "CI/CD", level: 90, icon: SiGithubactions },
      { name: "Docker", level: 90, icon: SiDocker },
      { name: "AWS", level: 85, icon: SiAmazon },
    ],
  },
]

function ProgressBar({ value }: { value: number }) {
  const progressRef = useRef(null)
  const isInView = useInView(progressRef, { once: true })

  return (
    <div ref={progressRef} className="h-2 w-full bg-muted rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-primary"
        initial={{ width: 0 }}
        animate={{ width: isInView ? `${value}%` : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  )
}

export function Skills() {
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
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container" ref={containerRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          {skill.icon && (
                            <skill.icon
                              className="h-4 w-4 text-muted-foreground"
                              aria-hidden="true"
                            />
                          )}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <ProgressBar value={skill.level} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
