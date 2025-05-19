import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Layout from "./layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, MapPin, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const upcomingTrips = [
  {
    id: "1",
    title: "Weekend in Paris",
    date: "May 20-22, 2025",
    location: "Paris, France",
    groupName: "College Friends",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    id: "2",
    title: "Summer Beach Retreat",
    date: "June 15-20, 2025",
    location: "Cancun, Mexico",
    groupName: "Family",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    id: "3",
    title: "Hiking Adventure",
    date: "July 5-10, 2025",
    location: "Yosemite, USA",
    groupName: "Hiking Club",
    image: "/placeholder.svg?height=200&width=350",
  },
];

// Sample data for recent activities
const recentActivities = [
  {
    id: "1",
    action: "added a new destination",
    user: "Alex",
    group: "College Friends",
    time: "2 hours ago",
  },
  {
    id: "2",
    action: "updated the itinerary",
    user: "Maria",
    group: "Family",
    time: "Yesterday",
  },
  {
    id: "3",
    action: "uploaded 5 photos",
    user: "John",
    group: "Hiking Club",
    time: "2 days ago",
  },
];

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <Layout>
      <div className="space-y-8">
        <section>
          <h2 className="mb-6 text-3xl font-bold">Welcome back!</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Upcoming Trips</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{upcomingTrips.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">My Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">5</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Trip Ideas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">12</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Upcoming Trips</h2>
            <Button variant="outline" asChild>
              <Link href="/groups">View All</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {upcomingTrips.map((trip) => (
              <Card key={trip.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={trip.image || "/placeholder.svg"}
                    alt={trip.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{trip.title}</CardTitle>
                  <CardDescription>{trip.groupName}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{trip.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{trip.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/groups/${trip.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recent Activity</h2>
          </div>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {recentActivities.map((activity) => (
                  <li
                    key={activity.id}
                    className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">
                        <span className="font-semibold">{activity.user}</span>{" "}
                        {activity.action} in{" "}
                        <Link
                          href="#"
                          className="font-semibold text-primary hover:underline"
                        >
                          {activity.group}
                        </Link>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>{" "}
    </Layout>
  );
}
