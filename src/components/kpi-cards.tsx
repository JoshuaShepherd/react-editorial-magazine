"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Users, Building, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

interface KPICardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down" | "neutral"
  icon: React.ComponentType<{ className?: string }>
}

function KPICard({ title, value, change, trend, icon: Icon }: KPICardProps) {
  return (
    <Card className="bg-card border-border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground tracking-wide">
          {title}
        </CardTitle>
        <Icon className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <div className="text-3xl font-bold font-mono text-foreground tracking-tight">
              {value}
            </div>
            <div className="flex items-center space-x-2">
              <Badge 
                variant="secondary" 
                className={cn(
                  "text-xs font-medium",
                  trend === "up" && "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
                  trend === "down" && "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
                  trend === "neutral" && "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                )}
              >
                {trend === "up" && <TrendingUp className="mr-1 h-3 w-3" />}
                {trend === "down" && <TrendingDown className="mr-1 h-3 w-3" />}
                {change}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <KPICard
        title="Total Contacts"
        value="2,847"
        change="+12% from last month"
        trend="up"
        icon={Users}
      />
      <KPICard
        title="Active Companies"
        value="186"
        change="+5% from last month"
        trend="up"
        icon={Building}
      />
      <KPICard
        title="This Month's Activities"
        value="1,204"
        change="-3% from last month"
        trend="down"
        icon={Activity}
      />
    </div>
  )
}
