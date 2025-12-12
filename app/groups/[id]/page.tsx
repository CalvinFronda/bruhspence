"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, ImageIcon, MapPin, Plus, Users } from "lucide-react";
import Image from "next/image";

export default function GroupDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // This would normally be fetched from an API based on the ID
  const [group] = useState({
    id: params.id,
    name:
      params.id === "1"
        ? "College Friends"
        : params.id === "2"
          ? "Family"
          : params.id === "3"
            ? "Hiking Club"
            : "Group",
    members: [
      {
        id: "1",
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "2",
        name: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "3",
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "4",
        name: "Maria Garcia",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "5",
        name: "Sam Lee",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    trips: [
      {
        id: "1",
        title:
          params.id === "1"
            ? "Weekend in Paris"
            : params.id === "2"
              ? "Summer Beach Retreat"
              : params.id === "3"
                ? "Hiking Adventure"
                : "Trip",
        date:
          params.id === "1"
            ? "May 20-22, 2025"
            : params.id === "2"
              ? "June 15-20, 2025"
              : params.id === "3"
                ? "July 5-10, 2025"
                : "2025",
        location:
          params.id === "1"
            ? "Paris, France"
            : params.id === "2"
              ? "Cancun, Mexico"
              : params.id === "3"
                ? "Yosemite, USA"
                : "Location",
        description:
          "Trip description goes here with details about the planned activities and accommodations.",
        image: "/placeholder.svg?height=300&width=600",
        itinerary: [
          { day: "Day 1", activities: "Arrival and check-in, Welcome dinner" },
          {
            day: "Day 2",
            activities: "City tour, Museum visit, Local cuisine dinner",
          },
          {
            day: "Day 3",
            activities: "Free day for shopping, Farewell lunch, Departure",
          },
        ],
        photos: [
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
        ],
      },
    ],
  });

  const trip = group.trips[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold">{group.name}</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Users className="mr-2 h-4 w-4" /> Invite Members
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Trip
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Current Trip: {trip.title}</CardTitle>
              <CardDescription>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{trip.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{trip.location}</span>
                  </div>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="photos">Photos</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                    <Image
                      src={trip.image || "/placeholder.svg"}
                      alt={trip.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Description</h3>
                    <p>{trip.description}</p>
                  </div>
                </TabsContent>
                <TabsContent value="itinerary">
                  <div className="space-y-4">
                    {trip.itinerary.map((item, index) => (
                      <div key={index} className="rounded-lg border p-4">
                        <h3 className="mb-2 font-semibold">{item.day}</h3>
                        <p>{item.activities}</p>
                      </div>
                    ))}
                    <Button className="mt-4">
                      <Plus className="mr-2 h-4 w-4" /> Add Day
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="photos">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {trip.photos.map((photo, index) => (
                      <div
                        key={index}
                        className="relative aspect-square overflow-hidden rounded-lg"
                      >
                        <Image
                          src={photo || "/placeholder.svg"}
                          alt={`Trip photo ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <Button className="mt-4">
                    <ImageIcon className="mr-2 h-4 w-4" /> Upload Photos
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Group Members</CardTitle>
              <CardDescription>{group.members.length} members</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {group.members.map((member) => (
                  <li key={member.id} className="flex items-center gap-3">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full">
                      <Image
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span>{member.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-muted-foreground" />
                </div>
                <div className="absolute bottom-0 w-full bg-background/80 p-2 text-center">
                  {trip.location}
                </div>
              </div>
              <Button variant="outline" className="mt-4 w-full">
                Change Location
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
