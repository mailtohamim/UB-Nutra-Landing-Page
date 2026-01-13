
export interface Product {
    id: string;
    name: string;
    description: string;
    category: "Beauty" | "Immunity" | "Gut Health" | "Lifestyle" | "Men's Health" | "Women's Health" | "Kids" | "Sports Nutrition";
    form: "Softgel" | "Capsule" | "Gummy" | "Tablet" | "Powder";
    price: string;
    image: string;
    badge?: string;
}

export const products: Product[] = [
    {
        id: "beauty-1",
        name: "UB Bright Skin Booster",
        description: "Advanced softgel formula for radiant, glowing skin.",
        category: "Beauty",
        form: "Softgel",
        price: "$29.99",
        image: "https://placehold.co/400x400/F47C7C/ffffff?text=Bright+Skin",
        badge: "Best Seller"
    },
    {
        id: "beauty-2",
        name: "Collagen Types I, V, X",
        description: "Premium collagen complex for hair, skin, and nails.",
        category: "Beauty",
        form: "Capsule",
        price: "$34.99",
        image: "https://placehold.co/400x400/F47C7C/ffffff?text=Collagen",
    },
    {
        id: "immunity-1",
        name: "UB Activated Lung Protect",
        description: "Supports respiratory health and immune function.",
        category: "Immunity",
        form: "Tablet",
        price: "$24.99",
        image: "https://placehold.co/400x400/F7941D/ffffff?text=Lung+Protect",
    },
    {
        id: "immunity-2",
        name: "Liposomal Vitamin C",
        description: "High-absorption Vitamin C for superior immune support.",
        category: "Immunity",
        form: "Softgel",
        price: "$19.99",
        image: "https://placehold.co/400x400/F7941D/ffffff?text=Vitamin+C",
        badge: "High Potency"
    },
    {
        id: "gut-1",
        name: "UB Daily Digestive Probiotics 35B",
        description: "35 Billion CFU blend for optimal gut flora balance.",
        category: "Gut Health",
        form: "Capsule",
        price: "$39.99",
        image: "https://placehold.co/400x400/8CC63F/ffffff?text=Probiotics+35B",
    },
    {
        id: "gut-2",
        name: "Saccharomyces Boulardii",
        description: "Beneficial yeast probiotic for digestive comfort.",
        category: "Gut Health",
        form: "Capsule",
        price: "$28.99",
        image: "https://placehold.co/400x400/8CC63F/ffffff?text=S.+Boulardii",
    },
    {
        id: "lifestyle-1",
        name: "Sleep Gummies",
        description: "Melatonin-infused gummies for restful sleep.",
        category: "Lifestyle",
        form: "Gummy",
        price: "$18.99",
        image: "https://placehold.co/400x400/9E005D/ffffff?text=Sleep+Gummies",
        badge: "Night Time"
    },
    {
        id: "lifestyle-2",
        name: "Stress & Anxiety",
        description: "Ashwagandha gummies to help manage daily stress.",
        category: "Lifestyle",
        form: "Gummy",
        price: "$21.99",
        image: "https://placehold.co/400x400/9E005D/ffffff?text=Stress+relief",
    }
];

export const categories = [
    { name: "Beauty", color: "bg-[#F47C7C]", href: "/shop?category=Beauty", icon: "/Beauty.svg" },
    { name: "Immunity", color: "bg-[#F7941D]", href: "/shop?category=Immunity", icon: "/Immunity.svg" },
    { name: "Gut Health", color: "bg-[#8CC63F]", href: "/shop?category=Gut Health", icon: "/Gut Health.svg" },
    { name: "Sleep", color: "bg-[#9E005D]", href: "/shop?category=Lifestyle", icon: "/Sleep.svg" },
];

export const values = [
    { label: "FDA Registered", icon: "/FDA.svg" },
    { label: "GMP Certified", icon: "/GMP.svg" },
    { label: "Halal Certified", icon: "/Halal.svg" },
    { label: "Frontier R&D", icon: "/RnD.svg" },
];
