import { Card, CardContent } from "@/components/ui/card"
import { Terminal, GraduationCap, Calendar, MapPin, Award, BookOpen, School } from "lucide-react"

// Updated education data with scores removed for school and higher secondary
const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "George Mason University",
    location: "Fairfax, VA",
    period: "2023 - 2025",
    description: "Focused on advanced algorithms, machine learning, and software engineering principles.",
    gpa: "3.5/4.0",
    icon: GraduationCap,
    showGPA: true,
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "SRM Institute of Science & Technology",
    location: "Chennai, India",
    period: "2019 - 2023",
    description: "Comprehensive study of computer science fundamentals, programming, and software development.",
    gpa: "3.6/4.0",
    icon: GraduationCap,
    showGPA: true,
  },
  {
    degree: "Higher Secondary Education",
    institution: "Velocity Junior College",
    location: "India",
    period: "2017 - 2019",
    description: "Completed higher secondary education with focus on Mathematics, Physics, and Chemistry.",
    icon: BookOpen,
    showGPA: false,
  },
  {
    degree: "School Education",
    institution: "Kendriya Vidyalaya",
    location: "India",
    period: "2009 - 2017",
    description: "Completed primary and secondary education with a strong foundation in sciences and mathematics.",
    icon: School,
    showGPA: false,
  },
]

export default function EducationTimeline() {
  return (
    <section id="education" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-muted/5 z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="text-sm font-mono text-primary">~/education</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl formal-heading">Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              My academic journey and qualifications
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl mt-12 relative">
          {/* Vertical line for timeline */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-background border-2 border-primary glow"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <Card className="tech-card border-primary/20 bg-background/50 overflow-hidden">
                    <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent"></div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <item.icon className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold text-primary">{item.degree}</h3>
                      </div>

                      <div className="space-y-3 mt-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2 text-secondary" />
                          <span className="font-mono">{item.period}</span>
                        </div>

                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2 text-secondary" />
                          <span className="font-mono">
                            {item.institution}, {item.location}
                          </span>
                        </div>

                        <p className="text-muted-foreground text-sm">{item.description}</p>

                        {item.showGPA && (
                          <div className="pt-2">
                            <div className="text-sm font-medium text-secondary mb-2 flex items-center">
                              <Award className="h-4 w-4 mr-2" />
                              GPA
                            </div>
                            <p className="text-sm text-muted-foreground font-mono">{item.gpa}</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
