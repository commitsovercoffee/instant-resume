import { writable } from "svelte/store";

export const details = writable({
  profile: {
    name: "Dwight K. Shrute",
    contact: "dwightshrute@gmail.com | (555) 123-4567 | shrutefarms.com",
  },
  schools: [
    {
      course: "B.Sc in Agriculture (Honors)",
      institute: "Scranton University, Scranton",
      duration: "2003",
      details: [
        "GPA: 3.99 / 4.00. Dean’s scholarship",
        "Courses : Beet Farming Techniques and BeetologySurvival Strategies in a Post-Apocalyptic World",
      ],
    },
  ],
  experiences: [
    {
      role: " Assistant Regional Manager",
      company: "Dunder Mifflin, Scranton, PA",
      duration: "2010 - Present",
      tasks: [
        "Increased sales and client retention.",
        "Improved customer satisfaction.",
        "Cost savings through streamlined administrative processes.",
      ],
      deletable: true,
    },
    {
      role: " Assistant to the Regional Manager",
      company: " Dunder Mifflin, Scranton, PA",
      duration: " 2005 - 2010",
      tasks: [
        "Improved filing system accessibility.",
        "Increased revenue from sales strategies.",
        "Enhanced communication between Regional Manager and staff.",
      ],
    },
    {
      role: "Sales Associate",
      company: "Staples, Scranton, PA",
      duration: "2003 - 2005",
      tasks: [
        "Exceeded sales targets consistently.",
        "High customer satisfaction and repeat business.",
        "Recognition for outstanding performance.",
      ],
    },
  ],

  skills:
    "Sales Techniques, Customer Relations, Account Management, Cold Calling and MS Office",
  projects: [
    {
      name: "Beet Master",
      desc: "comprehensive guide for all things beet farming.",
    },
    {
      name: "Sales Warrior",
      desc: "performance tracking system for sales teams.",
    },
    {
      name: "Pranksters Pro",
      desc: "pranks to outwit and outsmart Jim Halpert.",
    },
  ],
});
