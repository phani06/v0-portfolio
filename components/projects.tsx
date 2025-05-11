import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Terminal, Code } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Covid-19-and-Pneumonia-Detection-Using-Chest-X-Rays",
    description:
      "A deep learning model using CNN and ResNet50 was developed to detect pneumonia in COVID-19 patients from chest X-rays, achieving an average accuracy of 93.70%. Techniques like one-hot encoding, dropout, and Adam optimization helped improve performance by reducing training loss and increasing accuracy..",
    image: "/images/projects/covid.jpg",
    tags: ["Python", "Javascript", "HTML", "CSS"],
    githubUrl: "https://github.com/phani06/Covid-19-and-Pneumonia-Dectection-Using-Chest-X-Rays",
    color: "from-primary/20 to-secondary/20",
  },
  {
    title: "Customer Churn Prediction Model",
    description: "Developed a customer churn prediction model using XGBoost, achieving 92% accuracy and an F1 score of 0.89, reducing churn rates by 15%. Conducted extensive feature engineering and hyperparameter tuning, improving model precision by 12% and recall by 10% across a dataset of over 100,000 customer records.",
    image: "/images/projects/churn.jpg",
    tags: ["Python", "Sciket-learn", "XGBoost", "Pandas"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-secondary/20 to-accent/20",
  },
  {
    title: "SQL Query Generation from Natural Language Questions",
    description: "Developed and deployed a Bi-directional LSTM model that improved query generation speed by 30% and achieved 89.5% accuracy. Led end-to-end project execution, reducing error rates by 15% and ensuring 95% real-world success..",
    image: "/images/projects/bilstm.jpg",
    tags: ["Python", "NLP", "TensorFlow", "SQL"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-accent/20 to-primary/20",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-muted/5 z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="text-sm font-mono text-primary">~/projects</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl formal-heading">My Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Check out some of my recent work and personal projects.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="tech-card overflow-hidden border-transparent bg-background/50">
              <div className={`aspect-video overflow-hidden bg-gradient-to-br ${project.color} relative`}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105 mix-blend-overlay"
                />
                <div className="absolute top-2 right-2 bg-background/80 rounded-full p-1">
                  <Code className="h-4 w-4 text-primary" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary font-mono">{project.title}</CardTitle>
                <CardDescription className="font-mono text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-mono text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link href={project.githubUrl}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-secondary text-secondary hover:text-primary-foreground hover:border-secondary"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
