import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Pride Parade 2024",
    date: "2024-06-28",
    time: "12:00 PM",
    location: "Downtown City Park",
    description:
      "Join us for the annual Pride Parade celebrating diversity and inclusion!",
    attendees: 1500,
  },
  {
    id: 2,
    title: "LGBTQ+ Film Festival",
    date: "2024-07-15",
    time: "7:00 PM",
    location: "City Cinema",
    description:
      "A week-long festival showcasing the best in LGBTQ+ cinema from around the world.",
    attendees: 500,
  },
  {
    id: 3,
    title: "Queer Art Exhibition",
    date: "2024-08-05",
    time: "10:00 AM",
    location: "Modern Art Gallery",
    description:
      "Explore thought-provoking artworks by LGBTQ+ artists in this month-long exhibition.",
    attendees: 300,
  },
];

const EventCard = ({ event, darkMode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`p-6 rounded-xl shadow-lg ${
      darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
    }`}
  >
    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
    <div className="flex items-center mb-2">
      <Calendar className="w-5 h-5 mr-2 text-indigo-500" />
      <span>{event.date}</span>
    </div>
    <div className="flex items-center mb-2">
      <Clock className="w-5 h-5 mr-2 text-indigo-500" />
      <span>{event.time}</span>
    </div>
    <div className="flex items-center mb-2">
      <MapPin className="w-5 h-5 mr-2 text-indigo-500" />
      <span>{event.location}</span>
    </div>
    <p className="mb-4">{event.description}</p>
    <div className="flex items-center">
      <Users className="w-5 h-5 mr-2 text-indigo-500" />
      <span>{event.attendees} attendees</span>
    </div>
  </motion.div>
);

const EventsPage = ({ darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <h2
        className={`text-3xl font-bold ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} darkMode={darkMode} />
        ))}
      </div>
    </motion.div>
  );
};

export default EventsPage;
