import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CalendarDays, Plus, Search, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function GroupsPage() {
  // Sample data for groups
  const groups = [
    {
      id: "1",
      name: "College Friends",
      members: 6,
      upcomingTrips: 1,
      description: "Friends from university planning trips together",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: "2",
      name: "Family",
      members: 4,
      upcomingTrips: 1,
      description: "Family vacation planning group",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: "3",
      name: "Hiking Club",
      members: 8,
      upcomingTrips: 1,
      description: "Adventure seekers planning hiking trips",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: "4",
      name: "Work Colleagues",
      members: 5,
      upcomingTrips: 0,
      description: "Team building trips and retreats",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: "5",
      name: "Foodie Friends",
      members: 3,
      upcomingTrips: 0,
      description: "Exploring culinary destinations together",
      image: "/placeholder.svg?height=200&width=350",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold">My Groups</h1>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search groups..."
              className="w-full pl-8 sm:w-[250px]"
            />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create Group
          </Button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <Card key={group.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={group.image || "/placeholder.svg"}
                alt={group.name}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{group.name}</CardTitle>
              <CardDescription>{group.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{group.members} members</span>
                </div>
                <div className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    {group.upcomingTrips} upcoming{" "}
                    {group.upcomingTrips === 1 ? "trip" : "trips"}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/groups/${group.id}`}>View Group</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
