import { Search, Database } from "lucide-react"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

interface Dataset {
  title: string
  description: string
  size: string
  tags: string[]
}

const datasets: Dataset[] = [
  {
    title: "Global Temperature Records",
    description: "Historical temperature data from weather stations worldwide",
    size: "2.3 GB",
    tags: ["climate"],
  },
  {
    title: "Public Transport Usage",
    description: "Monthly public transport usage statistics from major cities",
    size: "856 MB",
    tags: ["transportation"],
  },
]

export default function DatasetListing() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input type="text" placeholder="Search datasets..." className="w-full pl-10 pr-4 py-2 border rounded-md" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="climate">Climate</SelectItem>
            <SelectItem value="transportation">Transportation</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {datasets.map((dataset) => (
          <Card key={dataset.title} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Database />
                  <h3 className="font-semibold text-lg">{dataset.title}</h3>
                </div>
                <p className="text-muted-foreground">{dataset.description}</p>
                <div className="flex gap-2">
                  {dataset.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                      {tag}
                    </Badge>
                  ))}
                  <span className="text-muted-foreground">{dataset.size}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-6 mt-4 text-sm text-muted-foreground">
              <button className="ml-auto">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

