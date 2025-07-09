import SectionHeader from "@/components/SectionHeader";
import React from "react";

export default function EventsAndWebinars() {
  return <div className="p-6 space-y-6">
    {/* Section Header */}
    <SectionHeader title="Events & Webinars" description="Schedule and manage your live events" leftContent="null" options={{name: 'link', content: 'Schedule Event', link: '/dashboard/events-and-webinars/create-event-and-schedule'}} />

    {/* Event and Webinars Cards */}
    
  </div>;
}
