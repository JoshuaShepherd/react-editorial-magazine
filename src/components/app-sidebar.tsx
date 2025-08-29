"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Home,
  Users,
  Building,
  Activity,
  BarChart3,
  Settings,
  Plus
} from "lucide-react"
import { cn } from "@/lib/utils"

interface AppSidebarProps {
  className?: string
}

const navigation = [
  { name: "Dashboard", href: "/", icon: Home, current: true },
  { name: "Contacts", href: "/contacts", icon: Users, current: false },
  { name: "Companies", href: "/companies", icon: Building, current: false },
  { name: "Activities", href: "/activities", icon: Activity, current: false },
  { name: "Analytics", href: "/analytics", icon: BarChart3, current: false },
]

export function AppSidebar({ className }: AppSidebarProps) {
  return (
    <div className={cn("flex flex-col h-full w-64 bg-sidebar border-r border-sidebar-border", className)}>
      {/* Logo */}
      <div className="flex items-center px-6 py-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">BC</span>
          </div>
          <span className="font-semibold text-lg tracking-wide text-sidebar-foreground">Bold CRM</span>
        </div>
      </div>

      <Separator className="mx-4" />

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.name}
              variant={item.current ? "default" : "ghost"}
              className={cn(
                "w-full justify-start font-medium h-11",
                item.current 
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </Button>
          )
        })}
      </nav>

      <Separator className="mx-4" />

      {/* Quick Actions */}
      <div className="p-4 space-y-2">
        <Button 
          size="sm" 
          className="w-full justify-start bg-accent text-accent-foreground hover:bg-accent/80"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Contact
        </Button>
      </div>

      {/* Settings */}
      <div className="p-4 mt-auto">
        <Button
          variant="ghost"
          className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <Settings className="mr-3 h-4 w-4" />
          Settings
        </Button>
      </div>
    </div>
  )
}
