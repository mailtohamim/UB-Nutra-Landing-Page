export type QuizCategory = {
    id: string;
    title: string;
    subtitle: string;
    color: string;
    textColor: string;
    buttonColor: string;
    questions: QuizQuestion[];
};

export type QuizQuestion = {
    id: number;
    question: string;
    options: string[];
};

export const quizCategories: QuizCategory[] = [
    {
        id: "sports-ember",
        title: "Unleash Your Inner Athlete",
        subtitle: "Find the perfect fuel for your fitness journey with EMBER.",
        color: "bg-[#000000]",
        textColor: "text-white",
        buttonColor: "bg-[#E31E24]",
        questions: [
            { id: 1, question: "How often do you work out?", options: ["Daily", "3-4 times a week", "Occasionally", "Rarely"] },
            { id: 2, question: "What represents your main fitness goal?", options: ["Muscle Gain", "Weight Loss", "Endurance", "General Health"] },
            { id: 3, question: "Do you struggle with energy levels during workouts?", options: ["Always", "Sometimes", "Rarely", "Never"] },
            { id: 4, question: "How is your post-workout recovery?", options: ["Fast", "Manageable", "Slow & Painful", "I don't track it"] },
            { id: 5, question: "Do you currently take protein supplements?", options: ["Yes, daily", "Only on workout days", "Sometimes", "Never"] },
            { id: 6, question: "What time of day do you train?", options: ["Morning", "Afternoon", "Evening", "Variable"] },
            { id: 7, question: "Do you engage in high-intensity interval training (HIIT)?", options: ["Frequently", "Sometimes", "No", "What is that?"] },
            { id: 8, question: "How would you rate your hydration habits?", options: ["Excellent", "Good", "Needs Improvement", "Poor"] },
            { id: 9, question: "Do you experience muscle cramps often?", options: ["Yes", "Occasionally", "Rarely", "Never"] },
            { id: 10, question: "Are you looking to bulk up or lean out?", options: ["Bulk Up", "Lean Out", "Maintain", "Not sure"] },
            { id: 11, question: "Do you track your macros?", options: ["Strictly", "Loosely", "No", "I don't know what macros are"] },
            { id: 12, question: "How much sleep do you get on average?", options: ["8+ hours", "6-7 hours", "4-5 hours", "Less than 4 hours"] },
            { id: 13, question: "Do you prefer cardio or weightlifting?", options: ["Cardio", "Weightlifting", "Mix of both", "Neither"] },
            { id: 14, question: "How often do you take rest days?", options: ["1-2 days/week", "3-4 days/week", "When I feel like it", "Never"] },
            { id: 15, question: "Do you use pre-workout supplements?", options: ["Yes, always", "Sometimes", "No", "I use coffee"] },
            { id: 16, question: "How important is taste in your supplements?", options: ["Very Important", "Somewhat Important", "Not Important", "I prioritize effect"] },
            { id: 17, question: "Do you suffer from joint pain after exercise?", options: ["Yes", "Sometimes", "Rarely", "Never"] },
            { id: 18, question: "Are you training for a specific event?", options: ["Yes, a competition", "Yes, a marathon", "No, just for life", "No"] },
            { id: 19, question: "Do you prefer plant-based or whey protein?", options: ["Plant-Based", "Whey", "No Preference", "Neither"] },
            { id: 20, question: "How committed are you to reaching your fitness goals?", options: ["100% Committed", "Trying my best", "Struggling to start", "Just browsing"] }
        ]
    },
    {
        id: "beauty-glow",
        title: "Discover Your Natural Glow",
        subtitle: "Radiate confidence with our skin and beauty solutions.",
        color: "bg-[#F47C7C]",
        textColor: "text-white",
        buttonColor: "bg-[#E31E24]",
        questions: [
            { id: 21, question: "How would you describe your skin type?", options: ["Oily", "Dry", "Combination", "Normal"] },
            { id: 22, question: "What is your primary skin concern?", options: ["Acne", "Aging/Wrinkles", "Hydration", "Pigmentation"] },
            { id: 23, question: "Do you wear sunscreen daily?", options: ["Yes, religiously", "Most days", "Only when sunny", "Rarely"] },
            { id: 24, question: "How strong are your nails?", options: ["Very Strong", "Average", "Brittle/Weak", "They peel often"] },
            { id: 25, question: "Are you concerned about hair thinning?", options: ["Yes, very", "A little bit", "Not really", "No"] },
            { id: 26, question: "How much water do you drink daily?", options: ["2L+", "1-2L", "Less than 1L", "I don't track"] },
            { id: 27, question: "Do you take collagen supplements?", options: ["Yes", "I have in the past", "No, but interested", "No"] },
            { id: 28, question: "How many hours of sleep do you average?", options: ["7-9 hours", "5-6 hours", "Less than 5", "Variable"] },
            { id: 29, question: "Is your hair chemically treated?", options: ["Yes, dyed/bleached", "Yes, permed/straightened", "No, natural", "Sometimes"] },
            { id: 30, question: "Do you smoke?", options: ["Yes", "Occasionally", "Identify as social smoker", "No"] },
            { id: 31, question: "How would you rate your diet?", options: ["Nutrient-rich", "Balanced", "Needs improvement", "Fast-food heavy"] },
            { id: 32, question: "Do you experience regular breakouts?", options: ["Yes, monthly", "Stress-related", "Rarely", "Never"] },
            { id: 33, question: "Are you looking for anti-aging solutions?", options: ["Yes, definitely", "Preventative measures", "Maybe later", "No"] },
            { id: 34, question: "Do you have a daily skincare routine?", options: ["Yes, multi-step", "Cleanse & Moisturize", "Splash of water", "No"] },
            { id: 35, question: "Does your skin feel tight after washing?", options: ["Yes, always", "Sometimes", "Rarely", "Never"] },
            { id: 36, question: "Do you want to improve skin elasticity?", options: ["Yes", "Maybe", "Not a priority", "What is that?"] },
            { id: 37, question: "Do you spend a lot of time in AC environments?", options: ["Yes, all day", "Part of the day", "Rarely", "No"] },
            { id: 38, question: "Are dark circles a concern for you?", options: ["Major concern", "Minor concern", "Not really", "No"] },
            { id: 39, question: "Do you prefer gummies or tablets for supplements?", options: ["Gummies", "Tablets", "Powder", "No preference"] },
            { id: 40, question: "How soon do you want to see results?", options: ["Immediately", "Within a month", "3 months", "Long term"] }
        ]
    },
    {
        id: "wellness-daily",
        title: "Optimize Your Daily Wellness",
        subtitle: "Building blocks for a healthier, happier you.",
        color: "bg-[#8CC63F]",
        textColor: "text-white",
        buttonColor: "bg-[#2A2A2A]",
        questions: [
            { id: 41, question: "How are your energy levels throughout the day?", options: ["Consistent", "Afternoon slump", "Low energy", "Hyperactive"] },
            { id: 42, question: "Do you eat enough fruits and vegetables?", options: ["Yes, plenty", "I try to", "Not really", "Rarely"] },
            { id: 43, question: "Do you catch colds easily?", options: ["Yes, frequently", "Seasonally", "Rarely", "Almost never"] },
            { id: 44, question: "How would you rate your stress levels?", options: ["Low", "Moderate", "High", "Very High"] },
            { id: 45, question: "Do you take a multivitamin?", options: ["Yes, daily", "Sometimes", "No", "Used to"] },
            { id: 46, question: "Do you struggle with 'brain fog'?", options: ["Often", "Sometimes", "Rarely", "Never"] },
            { id: 47, question: "How is your digestion?", options: ["Great", "Good", "Sensitive", "Problematic"] },
            { id: 48, question: "Do you get enough sun exposure?", options: ["Yes", "Moderate", "Low", "I avoid the sun"] },
            { id: 49, question: "Do you work a desk job?", options: ["Yes, sedentary", "Active job", "Student", "Retired"] },
            { id: 50, question: "Are looking to support heart health?", options: ["Yes", "Preventative", "Not a priority", "No"] },
            { id: 51, question: "Do you eat fish regularly?", options: ["2+ times a week", "Once a week", "Occasionally", "Never"] },
            { id: 52, question: "Are you vegan or vegetarian?", options: ["Vegan", "Vegetarian", "Pescatarian", "None"] },
            { id: 53, question: "How much caffeine do you consume?", options: ["None", "1-2 cups", "3-4 cups", "5+ cups"] },
            { id: 54, question: "Do you have trouble staying focused?", options: ["Yes", "Sometimes", "Rarely", "No"] },
            { id: 55, question: "Is joint mobility an issue for you?", options: ["Yes", "Stiff mornings", "Sometimes", "No"] },
            { id: 56, question: "Do you want to boost your metabolism?", options: ["Yes", "Maybe", "No", "I don't know"] },
            { id: 57, question: "Do you supplement with Vitamin D?", options: ["Yes", "In winter", "No", "I get it from sun"] },
            { id: 58, question: "How often do you exercise?", options: ["Daily", "Weekly", "Monthly", "Rarely"] },
            { id: 59, question: "Are you interested in herbal remedies?", options: ["Very interested", "Open to it", "Skeptical", "No"] },
            { id: 60, question: "What is your main wellness goal?", options: ["Longevity", "Weight Management", "Energy", "Stress Relief"] }
        ]
    },
    {
        id: "sleep-recovery",
        title: "Master Your Sleep",
        subtitle: "Unlock the secret to waking up refreshed.",
        color: "bg-[#9E005D]",
        textColor: "text-white",
        buttonColor: "bg-[#2A2A2A]",
        questions: [
            { id: 61, question: "How long does it take you to fall asleep?", options: ["Instantly", "15-30 mins", "30-60 mins", "1+ hour"] },
            { id: 62, question: "Do you wake up during the night?", options: ["Never", "Once", "Multiple times", "Every hour"] },
            { id: 63, question: "Do you feel rested when you wake up?", options: ["Yes, energized", "Usually", "Groggy", "Exhausted"] },
            { id: 64, question: "Do you have a consistent sleep schedule?", options: ["Yes", "Mostly", "Weekends differ", "No"] },
            { id: 65, question: "Do you look at screens before bed?", options: ["Always", "Sometimes", "Rarely", "Never"] },
            { id: 66, question: "Do you maximize caffeine intake late in the day?", options: ["Yes", "Sometimes", "Only morning", "No caffeine"] },
            { id: 67, question: "Do you experience vivid dreams or nightmares?", options: ["Often", "Sometimes", "Rarely", "Never"] },
            { id: 68, question: "Is your room environment optimized for sleep?", options: ["Dark & Cool", "Could be better", "Bright/Noisy", "No"] },
            { id: 69, question: "Do you consume alcohol before bed?", options: ["Frequently", "Occasionally", "Rarely", "Never"] },
            { id: 70, question: "Do you nap during the day?", options: ["Daily", "Sometimes", "Rarely", "Never"] },
            { id: 71, question: "Does stress keep you awake?", options: ["Yes, often", "Sometimes", "Rarely", "No"] },
            { id: 72, question: "Do you exercise close to bedtime?", options: ["Yes", "Sometimes", "No, earlier", "No exercise"] },
            { id: 73, question: "Have you tried melatonin?", options: ["Yes, regularly", "Occasionally", "Tried once", "No"] },
            { id: 74, question: "Do you snore?", options: ["Yes", "I've been told so", "Maybe", "No"] },
            { id: 75, question: "Do you have restless legs?", options: ["Yes", "Sometimes", "Rarely", "No"] },
            { id: 76, question: "How is your mattress comfort?", options: ["Perfect", "Good", "Needs replacing", "Uncomfortable"] },
            { id: 77, question: "Do you prioritize sleep?", options: ["It's #1", "I try to", "Work comes first", "Social life first"] },
            { id: 78, question: "Do you use sleep tracking apps?", options: ["Yes", "Sometimes", "Used to", "No"] },
            { id: 79, question: "Do you feel sleepy during the day?", options: ["Constantly", "After lunch", "Rarely", "Never"] },
            { id: 80, question: "Are you interested in magnesium for sleep?", options: ["Already use it", "Yes", "Maybe", "No"] }
        ]
    },
    {
        id: "gut-immunity",
        title: "Gut & Immunity Shield",
        subtitle: "Strengthen your core from the inside out.",
        color: "bg-[#F7941D]",
        textColor: "text-white",
        buttonColor: "bg-[#2A2A2A]",
        questions: [
            { id: 81, question: "Do you experience bloating after meals?", options: ["Often", "Sometimes", "Rarely", "Never"] },
            { id: 82, question: "How often do you get sick?", options: ["Every month", "Seasonally", "Rarely", "Years ago"] },
            { id: 83, question: "Do you consume probiotic foods (yogurt, kimchi)?", options: ["Daily", "Weekly", "Rarely", "Never"] },
            { id: 84, question: "Do you have any food intolerances?", options: ["Yes, multiple", "Dairy/Gluten", "Maybe", "None"] },
            { id: 85, question: "How fast is your recovery from illness?", options: ["Fast", "Average", "Slow", "Very slow"] },
            { id: 86, question: "Do you take antibiotics often?", options: ["Yes", "Recently", "Rarely", "Never"] },
            { id: 87, question: "Is your digestion regular?", options: ["Yes", "Mostly", "Irregular", "No"] },
            { id: 88, question: "Do you eat a lot of processed sugar?", options: ["Yes", "Moderate", "Low", "No"] },
            { id: 89, question: "How is your mood generally?", options: ["Stable", "Up and down", "Anxious", "Low"] },
            { id: 90, question: "Do you travel frequently?", options: ["Yes", "Occasionally", "Rarely", "No"] },
            { id: 91, question: "Do you supplement with Vitamin C?", options: ["Daily", "When sick", "Occasionally", "No"] },
            { id: 92, question: "Do you supplement with Zinc?", options: ["Yes", "Sometimes", "No", "What is that?"] },
            { id: 93, question: "Do you have seasonal allergies?", options: ["Yes, severe", "Mild", "Sometimes", "No"] },
            { id: 94, question: "Do you wash your hands frequently?", options: ["Obsessively", "Regularly", "Before meals", "Sometimes"] },
            { id: 95, question: "Does stress affect your stomach?", options: ["Yes, immediately", "Sometimes", "Rarely", "No"] },
            { id: 96, question: "Do you eat plenty of fiber?", options: ["Yes", "I think so", "Probably not", "No"] },
            { id: 97, question: "Are you constantly around sick people (e.g. kids, hospital)?", options: ["Yes", "Sometimes", "Rarely", "No"] },
            { id: 98, question: "Do you feel 'run down' often?", options: ["Yes", "Sometimes", "Rarely", "Never"] },
            { id: 99, question: "Do you believe gut health links to mental health?", options: ["Strongly", "Somewhat", "Maybe", "No"] },
            { id: 100, question: "Are you ready to boost your immunity?", options: ["Yes, let's go", "I think so", "Maybe", "Not now"] }
        ]
    }
];
