import { motion } from "framer-motion";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { celebrationDays, wedding } from "@/lib/wedding";

const EventDetails = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">The Celebration</p>
        <h2 className="heading-elegant font-serif text-4xl md:text-5xl lg:text-6xl">Event Details</h2>
        <div className="divider-editorial mt-8" />
        <p className="font-serif text-2xl md:text-3xl mt-8">{wedding.dates}</p>
        <p className="font-serif text-xl mt-6">{wedding.venue}</p>
        <p className="text-muted-foreground mt-2">{wedding.location}</p>
        <Button asChild variant="outline" className="mt-6 gap-2">
          <a href={wedding.mapUrl} target="_blank" rel="noopener noreferrer"><MapPin className="h-4 w-4" />View location<ArrowUpRight className="h-4 w-4" /></a>
        </Button>
      </motion.div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
        {celebrationDays.map((day, index) => (
          <motion.div key={day.date} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
            <h3 className="font-serif text-2xl md:text-3xl border-b border-border pb-6"><time dateTime={day.date}>{day.label}</time></h3>
            <ul className="divide-y divide-border">
              {day.events.map((event) => (
                <li key={event.title} className="py-7 flex items-center justify-between gap-4">
                  <h4 className="font-serif text-xl md:text-2xl">{event.title}</h4>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap"><Clock className="h-4 w-4" />{event.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EventDetails;
