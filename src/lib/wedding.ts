import engagementImage from "@/assets/event-engagement.jpg";
import haldiImage from "@/assets/event-haldi.jpg";
import sangeetImage from "@/assets/sangeet-dancing.jpg";
import saptapadiImage from "@/assets/event-saptapadi.jpg";
import baaratImage from "@/assets/baarat-procession.jpg";
import receptionImage from "@/assets/reception-celebration.jpg";

export const wedding = {
  names: "Vedangi & Siddhant",
  dates: "January 28–29, 2027",
  venue: "The Foresta Resort",
  location: "Mulshi, Pune",
  mapUrl: "https://share.google/DxVHqyg0djySK7CFR",
  ceremonyAt: "2027-01-29T10:00:00+05:30",
};

export const celebrationDays = [
  {
    date: "2027-01-28",
    label: "Thursday, January 28",
    events: [
      {
        title: "Engagement", marathiTitle: "साखरपुडा", time: "10:00 AM",
        quote: "साखरेच्या गोडव्याने, जुळले दोन मनांचे धागे.",
        description: "Our celebrations begin with the sweetness of a sakharpuda. Join our families as we exchange rings and mark the beginning of a lifetime together, surrounded by your love and blessings.",
        dressCode: "Ethnic elegance", attire: "Sarees, salwar suits or kurtas with thoughtful accessories for a graceful morning celebration.",
        image: engagementImage, imageAlt: "Gold engagement rings surrounded by jasmine and pink flowers",
      },
      {
        title: "Haldi Carnival", marathiTitle: "हळदीचा सोहळा", time: "3:00 PM",
        quote: "हळदीचा रंग, आनंदाची उधळण; हसत खेळत साजरा करू हा क्षण!",
        description: "A joyful afternoon of haldi, laughter and togetherness. Bring your playful spirit as our loved ones shower us with turmeric and good wishes, turning the day into a bright celebration of new beginnings.",
        dressCode: "Pastel colours", attire: "Soft pastel sarees, kurtas or playful floral outfits in light fabrics, with comfortable flats; choose something you don’t mind getting a little haldi on.",
        image: haldiImage, imageAlt: "Brass bowl of turmeric paste with marigolds and yellow silk",
      },
      {
        title: "Sangeet", marathiTitle: "संगीत संध्या", time: "7:00 PM",
        quote: "सुरांची मैफल, नात्यांचा मेळ; आज रंगू दे आनंदाचा खेळ!",
        description: "An evening that brings both families together through music and dance. Celebrate with us as favourite songs, shared laughter and joyful performances fill the night with memories to treasure.",
        dressCode: "Jewel tones & festive sparkle", attire: "Lehengas, festive sarees, bandhgalas or embellished kurtas; wear shoes made for dancing.",
        image: sangeetImage, imageAlt: "Wedding guests dancing together at a festive open-air sangeet under fairy lights",
      },
    ],
  },
  {
    date: "2027-01-29",
    label: "Friday, January 29",
    events: [
      {
        title: "Saptapadi", marathiTitle: "सप्तपदी", time: "10:00 AM",
        quote: "सात पावले, सात वचने; जन्मभर जपू प्रेमाचे नाते.",
        description: "In the warmth of Maharashtrian tradition, we take seven sacred steps and begin our married life. Be with us for the wedding rituals and bless our journey of friendship, love and lifelong companionship.",
        dressCode: "Traditional Maharashtrian", attire: "Paithani or nauvari sarees, silk sarees, or kurta-pyjamas with a traditional jacket; a pheta makes a lovely finishing touch.",
        image: saptapadiImage, imageAlt: "Sacred wedding fire with brass ritual vessels beneath a floral mandap",
      },
      {
        title: "Baarat", marathiTitle: "वरात", time: "5:00 PM",
        quote: "ढोलाच्या तालावर, आनंदाच्या गजरात; नाचत गात निघाली वरात!",
        description: "Let the celebration spill into the evening with the spirit of a lively varaat. Join the procession, cheer with our families and dance your heart out as we welcome this next chapter with joy.",
        dressCode: "Colourful festive wear", attire: "Bright sarees, festive kurtas or Indo-western outfits; comfortable footwear for the procession, with an optional colourful pheta.",
        image: baaratImage, imageAlt: "Dhol players and guests in colourful pheta turbans dancing in a Maharashtrian baarat procession",
      },
      {
        title: "Reception", marathiTitle: "स्वागत समारंभ", time: "7:00 PM",
        quote: "आपल्या आशीर्वादांची साथ, खुलो आमच्या संसाराची वाट.",
        description: "Our two days of celebration come together in a warm evening with the people we love. Join us to share your blessings, capture happy memories and celebrate the beginning of our forever.",
        dressCode: "Elegant evening formal", attire: "Silk sarees, elegant lehengas, suits or bandhgalas; rich colours and refined details for the evening.",
        image: receptionImage, imageAlt: "Guests celebrating together at an elegant garden reception beneath an illuminated floral stage",
      },
    ],
  },
];

export const storyMilestones = [
  { year: "2023", title: "First Glance" },
  { year: "2024 & 2025", title: "Adventures Together" },
  { year: "2026", title: "The Proposal" },
  { year: "2027", title: "Forever Begins" },
];

export function getTimeLeft(now: Date) {
  const difference = Math.max(0, new Date(wedding.ceremonyAt).getTime() - now.getTime());
  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
}