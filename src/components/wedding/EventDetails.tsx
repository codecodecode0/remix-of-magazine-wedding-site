import { motion } from "framer-motion";
import { MapPin, Clock, ArrowUpRight, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { celebrationDays, wedding } from "@/lib/wedding";

const EventDetails = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">The Celebration</p>
        <h2 className="heading-elegant font-serif text-4xl md:text-5xl lg:text-6xl">Event Details</h2>
        <div className="divider-editorial mt-8" />
        <p lang="mr" className="text-xl md:text-2xl leading-relaxed text-muted-foreground mt-8">परंपरेचा साज, प्रेमाचा सोहळा; आपल्या साथीने बहरू दे आनंदाचा मळा.</p>
        <p className="font-serif text-2xl md:text-3xl mt-8">{wedding.dates}</p>
        <p className="font-serif text-xl mt-6">{wedding.venue}</p>
        <p className="text-muted-foreground mt-2">{wedding.location}</p>
        <Button asChild variant="outline" className="mt-6 gap-2">
          <a href={wedding.mapUrl} target="_blank" rel="noopener noreferrer"><MapPin className="h-4 w-4" />View location<ArrowUpRight className="h-4 w-4" /></a>
        </Button>
      </motion.div>
      <div className="max-w-6xl mx-auto space-y-20">
        {celebrationDays.map((day, index) => (
          <motion.div key={day.date} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
            <h3 className="font-serif text-2xl md:text-3xl border-b border-border pb-6 mb-8"><time dateTime={day.date}>{day.label}</time></h3>
            <ul className="grid md:grid-cols-3 gap-8 items-start">
              {day.events.map((event) => (
                <li key={event.title} className="min-w-0">
                  <img src={event.image} alt={event.imageAlt} loading="lazy" width={640} height={1024} className="w-full aspect-[4/5] object-cover rounded-sm" />
                  <div className="pt-6">
                    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground"><Clock className="h-4 w-4" />{event.time}</span>
                    <h4 className="font-serif text-2xl mt-3">{event.title}</h4>
                    <p lang="mr" className="text-base text-muted-foreground mt-1">{event.marathiTitle}</p>
                    <blockquote lang="mr" className="border-l-2 border-rose pl-4 my-5 text-lg leading-relaxed text-foreground/80">“{event.quote}”</blockquote>
                    <p className="text-sm leading-7 text-muted-foreground">{event.description}</p>
                    <div className="border-t border-border mt-6 pt-5">
                      <p className="flex items-center gap-2 text-xs uppercase text-muted-foreground"><Shirt className="h-4 w-4" />Suggested dress code</p>
                      <p className="text-sm font-medium mt-2">{event.dressCode}</p>
                      <p className="text-sm leading-6 text-muted-foreground mt-2">{event.attire}</p>
                    </div>
                  </div>
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
