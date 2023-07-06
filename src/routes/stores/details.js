import { writable } from "svelte/store";

export const details = writable({
  name: "Dwight K. Shrute",
  institutes: ["Scranton University, Scranton"],
  degrees: ["B.Sc in Agriculture (Honors)"],
  terms: ["Sep’17 — Dec’21"],
  details: [
    [
      "GPA: 3.99 / 4.00. Dean’s scholarship",
      "Courses : Beet Farming Techniques and BeetologySurvival Strategies in a Post-Apocalyptic World",
    ],
  ],
  companies: [
    "Scranton University, Scranton",
    "Scranton University, Scranton",
    "Staples, Scranton",
  ],
  roles: [
    "Assistant Regional Manager",
    "Assistant to the Regional Manager",
    "Sales Associate",
  ],
  tasks: [
    [
      "Increased sales and client retention.",
      "Improved customer satisfaction.",
      "Cost savings through streamlined administrative processes.",
    ],
    [
      "Improved filing system accessibility.",
      "Increased revenue from sales strategies.",
      "Enhanced communication between Regional Manager and staff.",
    ],
    [
      "Exceeded sales targets consistently.",
      "High customer satisfaction and repeat business.",
      "Recognition for outstanding performance.",
    ],
  ],

  periods: ["Aug'10 - Present", "June'05 - July'10", "Feb'03 - Nov'05"],
  skills: [
    [
      "Sales Techniques",
      "Customer Relations",
      "Account Management",
      "Cold Calling",
      "MS Office",
    ],
  ],

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
