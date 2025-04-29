import { Card, CardContent } from "@/components/ui/card"
import { Terminal, FileText, ExternalLink, Calendar, Users, Tag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// You can customize this data with your actual publications
const publicationsData = [
  {
    title: "Movie Recommendation System with Sentiment Analysis",
    authors: ["Phanindhar Telukuntla"],
    journal: "ICRTDA 2023 journal",
    year: "2023",
    abstract:
      "Published a research paper in Recent Trends in Data Science and its Applications. Proposed a hybrid Recommendation System incorporating collaborative filtering, content-based filtering, and sentiment analysis of movies. The system recommends movies based on user sentiment, addressing limitations of traditional approaches.",
    keywords: ["KNN", "Recommendation Systems", "Python", "Javascript"],
    link: "https://www.riverpublishers.com/pdf/ebook/chapter/RP_9788770040723C108.pdf",
  },
  // The second publication has been removed
]

export default function Publications() {
  return (
    <section id="publications" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-muted/5 z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="text-sm font-mono text-primary">~/publications</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl formal-heading">Publications</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              My research papers and academic contributions
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl mt-12 space-y-8">
          {publicationsData.map((pub, index) => (
            <Card key={index} className="tech-card border-primary/20 bg-background/50 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent"></div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-primary">{pub.title}</h3>
                      <div className="flex items-center mt-2 flex-wrap gap-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-1 text-secondary" />
                          <span className="font-mono">
                            {pub.authors.map((author, i) => (
                              <span key={i}>
                                {author}
                                {i < pub.authors.length - 1 ? ", " : ""}
                              </span>
                            ))}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center mt-2 space-x-4">
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium text-secondary">{pub.journal}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1 text-secondary" />
                          <span>{pub.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pl-9">
                    <p className="text-sm text-muted-foreground">{pub.abstract}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {pub.keywords.map((keyword, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-mono text-primary"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {keyword}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4">
                      <Link href={pub.link} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/50 text-primary hover:bg-primary/10"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Publication
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
