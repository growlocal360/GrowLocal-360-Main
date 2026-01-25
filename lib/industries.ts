export interface Industry {
    slug: string;
    name: string;
    shortName: string;
    title: string;
    description: string;
    heroDescription: string;
    icon: string;
}

export const industries: Industry[] = [
    {
        slug: "hvac",
        name: "HVAC",
        shortName: "HVAC",
        title: "HVAC Lead Generation & Management",
        description: "Get more HVAC service calls with an SEO-optimized website, automated follow-ups, and Google Business Profile integration.",
        heroDescription: "Attract Local HVAC Leads, Improve Your Customer Experience, Grow Your Business",
        icon: "thermometer",
    },
    {
        slug: "appliance-repair",
        name: "Appliance Repair",
        shortName: "Appliance",
        title: "Appliance Repair Lead Generation & Management",
        description: "Get more appliance repair jobs with an SEO-optimized website, automated follow-ups, and Google Business Profile integration.",
        heroDescription: "Attract Local Appliance Repair Leads, Improve Your Customer Experience, Grow Your Business",
        icon: "wrench",
    },
    {
        slug: "pressure-washing",
        name: "Pressure Washing",
        shortName: "Pressure Wash",
        title: "Pressure Washing Lead Generation & Management",
        description: "Get more pressure washing jobs with an SEO-optimized website, automated follow-ups, and Google Business Profile integration.",
        heroDescription: "Attract Local Pressure Washing Leads, Improve Your Customer Experience, Grow Your Business",
        icon: "droplet",
    },
    {
        slug: "plumbing",
        name: "Plumbing",
        shortName: "Plumbing",
        title: "Plumbing Lead Generation & Management",
        description: "Get more plumbing service calls with an SEO-optimized website, automated follow-ups, and Google Business Profile integration.",
        heroDescription: "Attract Local Plumbing Leads, Improve Your Customer Experience, Grow Your Business",
        icon: "pipe",
    },
    {
        slug: "fence-building",
        name: "Fence Building",
        shortName: "Fencing",
        title: "Fence Building Lead Generation & Management",
        description: "Get more fence building projects with an SEO-optimized website, automated follow-ups, and Google Business Profile integration.",
        heroDescription: "Attract Local Fence Building Leads, Improve Your Customer Experience, Grow Your Business",
        icon: "fence",
    },
    {
        slug: "handyman",
        name: "Handyman Services",
        shortName: "Handyman",
        title: "Handyman Lead Generation & Management",
        description: "Get more handyman jobs with an SEO-optimized website, automated follow-ups, and Google Business Profile integration.",
        heroDescription: "Attract Local Handyman Leads, Improve Your Customer Experience, Grow Your Business",
        icon: "hammer",
    },
    {
        slug: "roofing",
        name: "Roofing",
        shortName: "Roofing",
        title: "Roofing Lead Generation & Management",
        description: "Get more roofing projects with an SEO-optimized website, automated follow-ups, and Google Business Profile integration.",
        heroDescription: "Attract Local Roofing Leads, Improve Your Customer Experience, Grow Your Business",
        icon: "home",
    },
    {
        slug: "landscaping",
        name: "Landscaping",
        shortName: "Landscaping",
        title: "Landscaping Lead Generation & Management",
        description: "Get more landscaping clients with an SEO-optimized website, automated follow-ups, and Google Business Profile integration.",
        heroDescription: "Attract Local Landscaping Leads, Improve Your Customer Experience, Grow Your Business",
        icon: "tree",
    },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
    return industries.find((industry) => industry.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
    return industries.map((industry) => industry.slug);
}
