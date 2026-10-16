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
      { title: "Engagement", time: "10:00 AM" },
      { title: "Haldi Carnival", time: "3:00 PM" },
      { title: "Sangeet", time: "7:00 PM" },
    ],
  },
  {
    date: "2027-01-29",
    label: "Friday, January 29",
    events: [
      { title: "Saptapadi", time: "10:00 AM" },
      { title: "Baarat", time: "5:00 PM" },
      { title: "Reception", time: "7:00 PM" },
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