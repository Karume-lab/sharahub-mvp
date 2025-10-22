import { URLKeys } from "@/lib/types";

export const navLinks: { label: string; href: URLKeys }[] = [
  { label: "The Team", href: "#the-team" },
  { label: "Statistics", href: "#statistics" },
  { label: "FAQs", href: "#faqs" },
  { label: "Get In Touch With Us", href: "#get-in-touch-with-us" },
];

export enum ProfileTypes {
  Affiliate = "affiliate",
  Business = "business",
}

export const profileTypeDescriptions = {
  affiliate:
    "Grow your influence and earn on your own terms by partnering with trusted brands. Share products that genuinely resonate with your audience and turn your reach into real, values-aligned rewards.",
  business:
    "Promote your own products and services by collaborating with experienced creators who can amplify your brand's visibility, build trust, and deliver long-term growth through impactful campaigns.",
};
