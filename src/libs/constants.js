import Num from "../assets/Future100.png";
import Rave from "../assets/rave.png";
import Even from "../assets/123.png";
import Chilbilz from "../assets/873.png";
import Techbro from "../assets/tech.png";
import David from "../assets/david.png";

// data for the featured calender
export const cards = [
  {
    id: "1",
    name: "Future100",
    description: "Join the community that revolves around tech.",
    imgUrl: Num,
  },
  {
    id: "2",
    name: "Rave",
    description: "Join the community that revolves around tech.",
    imgUrl: Rave,
  },
  {
    id: "3",
    name: "ChilBiz",
    description: "Join the community that revolves around tech.",
    imgUrl: Even,
  },
  {
    id: "4",
    name: "TechBro",
    description: "Join the community that revolves around tech.",
    imgUrl: Chilbilz,
  },
  {
    id: "5",
    name: "TechBro",
    description: "Join the community that revolves around tech.",
    imgUrl: Techbro,
  },
  {
    id: "6",
    name: "TechBro",
    description: "Join the community that revolves around tech.",
    imgUrl: David,
  },
  {
    id: "7",
    name: "TechBro",
    description: "Join the community that revolves around tech.",
    imgUrl: David,
  },
  {
    id: "8",
    name: "TechBro",
    description: "Join the community that revolves around tech.",
    imgUrl: David,
  },
];

// data for pricing plan
export const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: "0",
    tag: "Free forever",

    features: [
      "Unlimited number of events",
      "Unlimited number of guests",
      "Message blasts and automated reminders via email, SMS, and WhatsApp",
      "Send up to 150 invites",
      "Unlimited event collaborators",
      "Import & export data via CSV",
      "Require approval for registration",
      "Share your profile calendar with the world",
      "5% platform fee for paid",
    ],
    link: "#",
    ctaText: "Get started now!",
  },

  {
    id: 2,
    name: "premium",
    price: "25",
    tag: "Per month, billed Annually",

    features: [
      "Everything in free plan",
      "Send unlimited invites",
      "Check in guests to your event through Centrl",
      "More customization options",
      "API access",
      "Priority support",
      "Early access to select feature",
      "Custom URL for event pages",
      "0% platform fee for paid events",
    ],
    link: "#",
    ctaText: "Upgrade to Premium",
  },

  {
    id: 3,
    name: "platinum package",
    price: "Custom Pricing",
    tag: "",

    features: [
      "Unlimited number of events",
      "Unlimited number of guests per events",
      "Blasts and automated reminders via email, SMS, push notification and WhatsApp",
      "Send up to 500 invites or newsletters per week through Luma",
      "Check in guests to your events through Luma",
    ],
    link: "/",
    ctaText: "Contact Sales",
  },
];

// data for FAQS
export const faqs = [
  {
    question: "Are there hidden fees?",
    answer:
      "No, Centrl does not have hidden fees. The only charges include a small platform fee when purchasing tickets through Centrl.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "Centrl integrates with Paystack as its payment gateway, allowing users to pay via bank transfers, credit/debit cards, and other payment methods supported by Paystack",
  },
  {
    question: "How secure is Centrl?",
    answer:
      "Centrl prioritizes user privacy and security. Since we are an event platform, we do not collect sensitive data. The information we gather is limited to name, email and phone number. However, we continously explore new ways to enhance user privacy and security."
  },
  {
    question: "Do you offer Discounts?",
    answer:
      "Currently, Centrl does not offer discounts.",
  },
];
