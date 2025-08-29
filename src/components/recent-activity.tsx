"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  Phone, 
  Mail, 
  Calendar, 
  Users, 
  Building, 
  MoreVertical,
  Plus
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Activity {
  id: string
  type: "call" | "email" | "meeting" | "contact" | "company"
  title: string
  description: string
  contact?: string
  company?: string
  timestamp: string
  status: "completed" | "pending" | "scheduled"
}

const activities: Activity[] = [
  {
    id: "1",
    type: "call",
    title: "This Month's Activities",
    description: "Discussed Q4 renewal and expansion opportunities",
    contact: "Sarah Johnson",
    company: "TechCorp Inc.",
    timestamp: "2 hours ago",
    status: "completed"
  },
  {
    id: "2",
    type: "email",
    title: "Proposal sent to Acme Corp",
    description: "Sent detailed proposal for enterprise package",
    contact: "Mike Davis",
    company: "Acme Corp",
    timestamp: "4 hours ago",
    status: "completed"
  },
  {
    id: "3",
    type: "meeting",
    title: "Product demo scheduled",
    description: "Demo scheduled for new customer onboarding",
    contact: "Lisa Chen",
    company: "StartupXYZ",
    timestamp: "Tomorrow 2:00 PM",
    status: "scheduled"
  },
  {
    id: "4",
    type: "contact",
    title: "New contact added",
    description: "Added contact from LinkedIn outreach campaign",
    contact: "Robert Wilson",
    company: "InnovateLabs",
    timestamp: "Yesterday",
    status: "completed"
  }
]

function ActivityIcon({ type }: { type: Activity["type"] }) {
  switch (type) {
    case "call":
      return <Phone className="h-4 w-4" />
    case "email":
      return <Mail className="h-4 w-4" />
    case "meeting":
      return <Calendar className="h-4 w-4" />
    case "contact":
      return <Users className="h-4 w-4" />
    case "company":
      return <Building className="h-4 w-4" />
    default:
      return <Calendar className="h-4 w-4" />
  }
}

function ActivityItem({ activity }: { activity: Activity }) {
  return (
    <div className="flex items-start space-x-4 py-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
          <ActivityIcon type={activity.type} />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">
              {activity.title}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {activity.description}
            </p>
            {activity.contact && (
              <div className="flex items-center space-x-2 mt-2">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs bg-primary/10 text-primary">
                    {activity.contact.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">
                  {activity.contact}
                  {activity.company && ` • ${activity.company}`}
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Badge 
              variant={activity.status === "completed" ? "default" : "secondary"}
              className="text-xs"
            >
              {activity.status}
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {activity.timestamp}
        </p>
      </div>
    </div>
  )
}

export function RecentActivity() {
  return (
    <Card className="bg-card border-border shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold tracking-tight">Recent Activity</CardTitle>
          <Button 
            size="sm" 
            className="bg-accent text-accent-foreground hover:bg-accent/80"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Activity
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-0 divide-y divide-border">
          {activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </div>
        <div className="pt-4">
          <Button variant="ghost" className="w-full">
            View All Activities
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
