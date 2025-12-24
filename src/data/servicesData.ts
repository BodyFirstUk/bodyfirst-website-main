// src/data/servicesData.ts

export interface ServiceSection {
  title: string;
  body: string;
  bullets?: string[];
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  heroDescription: string;
  heroImage?: string;
  heroAlt?: string;
  sections: ServiceSection[];
}

export const servicesData: Service[] = [
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    shortDescription:
      "Evidence-based treatment to restore movement and function after injury or chronic pain.",
    heroDescription:
      "Our physiotherapy services combine manual therapy, exercise prescription, and patient education to help you recover faster and prevent future injuries.",
    heroImage: "/images/services/physio.jpg",
    heroAlt: "Physiotherapy treatment session",
    sections: [
      {
        title: "What is Physiotherapy?",
        body:
          "Physiotherapy is a healthcare profession focused on assessing, diagnosing, and treating disorders of movement and function. Our physiotherapists use a combination of hands-on techniques, therapeutic exercises, and education to help you achieve optimal physical health and wellbeing.",
      },
      {
        title: "Who is it for?",
        body:
          "Physiotherapy is suitable for people of all ages experiencing pain, reduced mobility, or recovering from injury or surgery. Whether you're an athlete, office worker, or retired individual, our treatments are tailored to your specific needs and goals.",
        bullets: [
          "Post-surgical rehabilitation patients",
          "Athletes recovering from sports injuries",
          "Individuals with chronic pain conditions",
          "People seeking improved mobility and strength",
          "Those wanting to prevent future injuries",
        ],
      },
      {
        title: "Conditions We Commonly Treat",
        body:
          "Our physiotherapists have extensive experience treating a wide range of musculoskeletal conditions:",
        bullets: [
          "Back and neck pain",
          "Joint sprains and strains",
          "Arthritis and joint degeneration",
          "Tendon injuries and tendinopathy",
          "Post-operative rehabilitation",
          "Muscle tears and weakness",
          "Postural dysfunction",
          "Headaches and migraines",
        ],
      },
      {
        title: "What to Expect in Your Session",
        body:
          "Your first appointment begins with a comprehensive assessment of your condition, medical history, and movement patterns. We'll discuss your goals and create a personalized treatment plan. Sessions typically include manual therapy, targeted exercises, and advice on self-management strategies. Most appointments last 45-60 minutes.",
      },
      {
        title: "Benefits",
        body:
          "Regular physiotherapy treatment can provide numerous benefits for your health and quality of life:",
        bullets: [
          "Reduced pain and inflammation",
          "Improved range of motion and flexibility",
          "Enhanced strength and stability",
          "Faster recovery from injury",
          "Better posture and movement patterns",
          "Increased confidence in physical activities",
          "Prevention of recurring injuries",
        ],
      },
    ],
  },

  {
    slug: "sports-massage",
    name: "Sports Massage",
    shortDescription:
      "Deep tissue massage techniques to enhance performance, aid recovery, and prevent injuries.",
    heroDescription:
      "Our sports massage therapy helps athletes and active individuals maintain peak performance, recover faster, and reduce the risk of injury through targeted soft tissue work.",
    heroImage: "/images/services/sports.jpg",
    heroAlt: "Sports massage therapy",
    sections: [
      {
        title: "What is Sports Massage?",
        body:
          "Sports massage is a specialized form of therapeutic massage that focuses on treating soft tissue injuries and improving athletic performance. Using a variety of techniques including deep tissue work, trigger point therapy, and myofascial release, we target specific muscle groups and problem areas to optimize your physical condition.",
      },
      {
        title: "Who is it for?",
        body:
          'While called "sports" massage, this treatment benefits anyone with an active lifestyle or muscle tension, not just competitive athletes.',
        bullets: [
          "Professional and amateur athletes",
          "Gym enthusiasts and fitness lovers",
          "People with physically demanding jobs",
          "Individuals with chronic muscle tension",
          "Those preparing for or recovering from events",
          "Anyone seeking deep tissue therapeutic massage",
        ],
      },
      {
        title: "Conditions We Commonly Treat",
        body:
          "Sports massage is effective for addressing various soft tissue conditions:",
        bullets: [
          "Muscle strains and tears",
          "Delayed onset muscle soreness (DOMS)",
          "Chronic muscle tension and knots",
          "Overuse injuries",
          "Reduced flexibility and mobility",
          "Pre and post-event muscle preparation",
          "Scar tissue and adhesions",
        ],
      },
      {
        title: "What to Expect in Your Session",
        body:
          "We begin by discussing your activity level, any problem areas, and your goals for treatment. The massage is performed on a treatment table with you in comfortable positions. We use various depths of pressure and techniques tailored to your needs. You may experience some discomfort during deeper work, but we always work within your tolerance. Sessions typically last 30-60 minutes.",
      },
      {
        title: "Benefits",
        body:
          "Regular sports massage provides comprehensive benefits for active individuals:",
        bullets: [
          "Enhanced muscle recovery and repair",
          "Improved flexibility and range of motion",
          "Reduced muscle tension and soreness",
          "Better circulation and nutrient delivery",
          "Injury prevention through early detection",
          "Improved athletic performance",
          "Mental relaxation and stress relief",
          "Faster healing of soft tissue injuries",
        ],
      },
    ],
  },

  {
    slug: "dry-needling",
    name: "Dry Needling",
    shortDescription:
      "Targeted needle therapy to release muscle trigger points and reduce pain effectively.",
    heroDescription:
      "Dry needling uses fine needles to target myofascial trigger points, providing rapid relief from muscle pain, tension, and restricted movement.",
    heroImage: "/images/services/needling.jpg",
    heroAlt: "Dry needling treatment",
    sections: [
      {
        title: "What is Dry Needling?",
        body:
          "Dry needling is a modern, evidence-based treatment technique where fine sterile needles are inserted into tight muscle bands or trigger points. This stimulates a healing response, releases muscle tension, and reduces pain. Unlike acupuncture, dry needling is based on western medical principles and targets specific anatomical structures.",
      },
      {
        title: "Who is it for?",
        body:
          "Dry needling is suitable for individuals experiencing muscle pain, tension, or movement restrictions that haven't fully responded to other treatments.",
        bullets: [
          "People with chronic muscle pain",
          "Athletes with persistent tightness",
          "Individuals with trigger point pain",
          "Those with movement restrictions",
          "Patients seeking drug-free pain relief",
          "People with myofascial pain syndrome",
        ],
      },
      {
        title: "Conditions We Commonly Treat",
        body:
          "Dry needling is particularly effective for various musculoskeletal conditions:",
        bullets: [
          "Chronic neck and back pain",
          "Tension headaches and migraines",
          "Shoulder and rotator cuff pain",
          "Tennis and golfer's elbow",
          "Hip and gluteal pain",
          "Plantar fasciitis",
          "Muscle spasms and cramping",
          "IT band syndrome",
        ],
      },
      {
        title: "What to Expect in Your Session",
        body:
          "After assessing your condition, your therapist will identify tight bands or trigger points in affected muscles. Fine needles are inserted into these areas, which may cause a brief twitch response and temporary discomfort. The needles remain in place for several minutes before removal. You might experience mild soreness for 24-48 hours post-treatment, similar to post-exercise soreness.",
      },
      {
        title: "Benefits",
        body: "Dry needling offers several therapeutic advantages:",
        bullets: [
          "Rapid reduction in muscle pain and tension",
          "Improved muscle activation and function",
          "Enhanced range of motion",
          "Reduced referral pain patterns",
          "Accelerated healing through increased blood flow",
          "Drug-free pain management option",
          "Complementary to other therapies",
          "Long-lasting results with consistent treatment",
        ],
      },
    ],
  },

  {
    slug: "foot-scan-gait-analysis",
    name: "Foot Scan and Gait Analysis",
    shortDescription:
      "Advanced biomechanical assessment to identify movement issues and optimize foot function.",
    heroDescription:
      "Our comprehensive foot scanning and gait analysis technology provides detailed insights into your walking pattern, pressure distribution, and biomechanics to address pain and improve performance.",
    heroImage: "/images/services/footscan.webp",
    heroAlt: "Foot scan and gait analysis",
    sections: [
      {
        title: "What is Foot Scan and Gait Analysis?",
        body:
          "Using advanced pressure mapping technology and video analysis, we assess how your feet function during standing and walking. This computerized evaluation reveals pressure distribution, foot alignment, and movement patterns that may contribute to pain or injury. The data helps us create targeted treatment plans and orthotic prescriptions.",
      },
      {
        title: "Who is it for?",
        body:
          "Foot scanning and gait analysis benefits anyone experiencing lower limb pain or seeking to optimize their movement patterns.",
        bullets: [
          "Runners and athletes with recurring injuries",
          "Individuals with foot or ankle pain",
          "People with knee, hip, or back pain",
          "Those considering custom orthotics",
          "Athletes wanting performance optimization",
          "Individuals with diabetes or neuropathy",
          "Anyone with balance or stability concerns",
        ],
      },
      {
        title: "Conditions We Commonly Assess",
        body:
          "Our analysis helps identify and address various biomechanical issues:",
        bullets: [
          "Plantar fasciitis and heel pain",
          "Achilles tendinopathy",
          "Shin splints and stress fractures",
          "Bunions and toe deformities",
          "Flat feet or high arches",
          "Knee pain and patellofemoral syndrome",
          "Hip and lower back dysfunction",
          "Overpronation or supination",
        ],
      },
      {
        title: "What to Expect in Your Session",
        body:
          "Your assessment begins with a discussion of your symptoms and activity level. You'll stand on our pressure plate scanner to capture static foot pressure data, then walk across it multiple times to analyze dynamic gait patterns. We also record video footage of your walking and running. The entire process takes about 45 minutes, and you'll receive a detailed report with findings and recommendations.",
      },
      {
        title: "Benefits",
        body:
          "Comprehensive foot and gait assessment provides valuable insights:",
        bullets: [
          "Accurate identification of biomechanical issues",
          "Data-driven orthotic prescription",
          "Personalized exercise recommendations",
          "Injury prevention through early detection",
          "Improved athletic performance",
          "Reduced lower limb pain and discomfort",
          "Better understanding of your body mechanics",
          "Objective tracking of treatment progress",
        ],
      },
    ],
  },

  {
    slug: "ultrasound-therapy",
    name: "Ultrasound Therapy",
    shortDescription:
      "Therapeutic ultrasound waves to accelerate healing and reduce inflammation in deep tissues.",
    heroDescription:
      "Medical-grade ultrasound therapy uses sound waves to promote tissue repair, reduce inflammation, and provide pain relief for various musculoskeletal conditions.",
    heroImage: "/images/services/ultra.jpg",
    heroAlt: "Ultrasound therapy",
    sections: [
      {
        title: "What is Ultrasound Therapy?",
        body:
          "Therapeutic ultrasound uses high-frequency sound waves to treat injuries and promote healing in deep tissues. The sound waves create gentle vibrations that produce heat and mechanical effects in the tissue, increasing blood flow, reducing inflammation, and accelerating the healing process. This non-invasive treatment is particularly effective for chronic conditions and deep tissue injuries.",
      },
      {
        title: "Who is it for?",
        body:
          "Ultrasound therapy benefits individuals with soft tissue injuries or chronic pain conditions requiring deep tissue healing.",
        bullets: [
          "People with tendon or ligament injuries",
          "Individuals with chronic inflammation",
          "Those recovering from soft tissue tears",
          "Patients with scar tissue or adhesions",
          "Athletes with overuse injuries",
          "Anyone with deep muscle or joint pain",
        ],
      },
      {
        title: "Conditions We Commonly Treat",
        body:
          "Ultrasound therapy is effective for various musculoskeletal conditions:",
        bullets: [
          "Tendinitis and tendinopathy",
          "Ligament sprains",
          "Muscle strains and tears",
          "Bursitis",
          "Plantar fasciitis",
          "Frozen shoulder",
          "Scar tissue and adhesions",
          "Joint contractures",
        ],
      },
      {
        title: "What to Expect in Your Session",
        body:
          "During treatment, a small amount of gel is applied to the affected area, and the ultrasound head is moved in circular motions over the treatment site. You'll feel a gentle warmth as the sound waves penetrate deep into the tissue. Treatment is painless and typically lasts 5-10 minutes per area. Ultrasound is often combined with other therapies for optimal results.",
      },
      {
        title: "Benefits",
        body: "Therapeutic ultrasound provides multiple healing advantages:",
        bullets: [
          "Accelerated tissue healing and repair",
          "Reduced inflammation and swelling",
          "Increased blood flow to injured areas",
          "Pain relief through improved circulation",
          "Breakdown of scar tissue and adhesions",
          "Enhanced flexibility and range of motion",
          "Non-invasive and drug-free treatment",
          "Complementary to other rehabilitation techniques",
        ],
      },
    ],
  },

  {
    slug: "shockwave-therapy",
    name: "Shockwave Therapy",
    shortDescription:
      "High-energy acoustic waves to treat chronic pain and stimulate natural healing processes.",
    heroDescription:
      "Extracorporeal shockwave therapy delivers powerful acoustic pulses to trigger the body's natural repair mechanisms, providing effective treatment for stubborn tendon and soft tissue conditions.",
    heroImage: "/images/services/shock.jpeg",
    heroAlt: "Shockwave therapy",
    sections: [
      {
        title: "What is Shockwave Therapy?",
        body:
          "Shockwave therapy, also known as Extracorporeal Shockwave Therapy (ESWT), uses high-energy acoustic waves to stimulate healing in chronic musculoskeletal conditions. The shockwaves trigger increased metabolism and blood flow, promote formation of new blood vessels, and dissolve calcium deposits. This evidence-based treatment is particularly effective for conditions that haven't responded to conventional therapy.",
      },
      {
        title: "Who is it for?",
        body:
          "Shockwave therapy is ideal for individuals with chronic tendon problems or calcifications that have persisted despite other treatments.",
        bullets: [
          "People with chronic tendinopathy",
          "Athletes with persistent overuse injuries",
          "Individuals with calcific deposits",
          "Those who haven't responded to other treatments",
          "Patients wanting to avoid surgery",
          "People with chronic plantar fasciitis",
        ],
      },
      {
        title: "Conditions We Commonly Treat",
        body:
          "Shockwave therapy has proven effectiveness for specific conditions:",
        bullets: [
          "Plantar fasciitis and heel spurs",
          "Achilles tendinopathy",
          "Tennis and golfer's elbow",
          "Calcific shoulder tendinitis",
          "Patellar tendinopathy (jumper's knee)",
          "Greater trochanteric pain syndrome",
          "Shin splints",
          "Chronic muscle trigger points",
        ],
      },
      {
        title: "What to Expect in Your Session",
        body:
          "After identifying the treatment area, gel is applied and the shockwave applicator is positioned over the affected tissue. You'll feel strong pulses that may cause discomfort, but treatment is usually tolerable. Sessions last 5-10 minutes per area. Most conditions require 3-5 treatments spaced one week apart. Some soreness is normal after treatment, and improvement typically begins after 2-3 sessions.",
      },
      {
        title: "Benefits",
        body: "Shockwave therapy offers powerful therapeutic effects:",
        bullets: [
          "Effective treatment for chronic conditions",
          "Stimulates natural healing processes",
          "Breaks down calcific deposits",
          "Promotes new blood vessel formation",
          "Reduces pain through nerve desensitization",
          "Non-surgical treatment option",
          "Quick treatment sessions with lasting results",
          "High success rate for appropriate conditions",
        ],
      },
    ],
  },

  {
    slug: "cupping",
    name: "Cupping Therapy",
    shortDescription:
      "Traditional therapy using suction cups to improve circulation and release muscle tension.",
    heroDescription:
      "Cupping therapy creates localized suction to increase blood flow, release fascial restrictions, and promote healing in muscles and connective tissues.",
    heroImage: "/images/services/cupping.jpg",
    heroAlt: "Cupping therapy treatment",
    sections: [
      {
        title: "What is Cupping Therapy?",
        body:
          "Cupping therapy involves placing specialized cups on the skin to create suction. This negative pressure lifts the tissue, increasing blood circulation, releasing fascial adhesions, and promoting lymphatic drainage. We use both static cupping and dynamic cupping to address various conditions. The marks left by cupping typically fade within a few days to a week.",
      },
      {
        title: "Who is it for?",
        body:
          "Cupping benefits individuals seeking relief from muscle tension, pain, or restricted movement through improved circulation and tissue release.",
        bullets: [
          "People with chronic muscle tightness",
          "Athletes seeking recovery enhancement",
          "Individuals with fascial restrictions",
          "Those with poor circulation",
          "People experiencing back or neck pain",
          "Anyone wanting complementary therapy",
        ],
      },
      {
        title: "Conditions We Commonly Treat",
        body:
          "Cupping therapy is particularly effective for certain musculoskeletal issues:",
        bullets: [
          "Chronic back and neck pain",
          "Tight shoulders and upper trapezius",
          "Muscle spasms and cramping",
          "Fascial restrictions",
          "Scar tissue and adhesions",
          "Reduced range of motion",
          "Post-exercise muscle soreness",
          "Respiratory conditions with muscle tension",
        ],
      },
      {
        title: "What to Expect in Your Session",
        body:
          "After assessing your condition, cups are placed on the affected areas creating suction that draws tissue into the cup. You'll feel a pulling sensation but it should not be painful. Cups may remain stationary for 5-15 minutes, or be moved across lubricated skin. Circular marks typically appear where cups were placed, which is normal.",
      },
      {
        title: "Benefits",
        body: "Cupping therapy provides unique therapeutic advantages:",
        bullets: [
          "Improved blood circulation to treated areas",
          "Release of fascial restrictions and adhesions",
          "Reduced muscle tension and spasms",
          "Enhanced lymphatic drainage",
          "Pain relief through improved tissue health",
          "Accelerated recovery from training",
          "Complementary to massage and manual therapy",
          "Relaxation and stress reduction",
        ],
      },
    ],
  },

  {
    slug: "lymphatic-drainage",
    name: "Lymphatic Drainage",
    shortDescription:
      "Specialized massage technique to reduce swelling and support immune system function.",
    heroDescription:
      "Manual lymphatic drainage uses gentle, rhythmic movements to stimulate lymph flow, reduce edema, and support your body's natural detoxification processes.",
    heroImage: "/images/services/lym.jpg",
    heroAlt: "Lymphatic drainage therapy",
    sections: [
      {
        title: "What is Lymphatic Drainage?",
        body:
          "Manual lymphatic drainage (MLD) is a gentle, specialized massage technique designed to stimulate the lymphatic system. Using light, rhythmic strokes in specific directions, we encourage the movement of lymph fluid through the body. This helps reduce swelling, supports immune function, and promotes the removal of waste products and toxins.",
      },
      {
        title: "Who is it for?",
        body:
          "Lymphatic drainage benefits individuals with swelling, post-surgical recovery needs, or those seeking to support their immune and detoxification systems.",
        bullets: [
          "Post-surgical patients with swelling",
          "People with lymphedema",
          "Individuals with chronic inflammation",
          "Those recovering from injuries with edema",
          "People with compromised immune systems",
          "Anyone seeking detoxification support",
          "Individuals with sinus congestion",
        ],
      },
      {
        title: "Conditions We Commonly Treat",
        body:
          "Lymphatic drainage is particularly beneficial for conditions involving fluid retention:",
        bullets: [
          "Post-surgical swelling and edema",
          "Lymphedema (primary and secondary)",
          "Chronic venous insufficiency",
          "Lipedema",
          "Post-traumatic swelling",
          "Sinusitis and sinus congestion",
          "Fibromyalgia",
          "Chronic fatigue syndrome",
        ],
      },
      {
        title: "What to Expect in Your Session",
        body:
          "Treatment involves very light, gentle strokes following the direction of lymph flow toward lymph nodes. Sessions typically begin at the neck to open major drainage pathways, then progress to affected areas. Sessions last 45-60 minutes.",
      },
      {
        title: "Benefits",
        body: "Regular lymphatic drainage provides comprehensive health benefits:",
        bullets: [
          "Significant reduction in swelling and edema",
          "Enhanced immune system function",
          "Improved circulation and tissue health",
          "Accelerated healing after surgery or injury",
          "Reduced inflammation throughout the body",
          "Support for natural detoxification",
          "Relief from sinus pressure and congestion",
          "Deep relaxation and stress relief",
        ],
      },
    ],
  },

  {
    slug: "compression-therapy",
    name: "Compression Therapy",
    shortDescription:
      "Advanced pneumatic compression to enhance recovery and reduce muscle soreness.",
    heroDescription:
      "Intermittent pneumatic compression therapy uses controlled pressure to improve circulation, accelerate recovery, and reduce swelling in the limbs.",
    heroImage: "/images/services/compression.jpg",
    heroAlt: "Compression recovery therapy",
    sections: [
      {
        title: "What is Compression Therapy?",
        body:
          "Compression therapy uses specialized pneumatic compression devices with inflatable sleeves or boots that apply sequential, rhythmic pressure to the limbs. This massage-like compression mimics the natural muscle pumping action, significantly improving blood flow and lymphatic drainage.",
      },
      {
        title: "Who is it for?",
        body:
          "Compression therapy is ideal for athletes, active individuals, and anyone seeking improved circulation and recovery.",
        bullets: [
          "Athletes wanting enhanced recovery",
          "Endurance runners and cyclists",
          "People with heavy, tired legs",
          "Individuals with mild circulatory issues",
          "Those with occupational leg swelling",
          "Anyone seeking active recovery methods",
          "Post-exercise recovery seekers",
        ],
      },
      {
        title: "Conditions We Commonly Address",
        body:
          "Compression therapy helps with various recovery and circulation-related concerns:",
        bullets: [
          "Post-exercise muscle soreness and fatigue",
          "Delayed onset muscle soreness (DOMS)",
          "Minor leg swelling and heaviness",
          "Reduced circulation in the limbs",
          "Pre-event preparation and warm-up",
          "General muscle tension and tightness",
          "Occupational leg fatigue",
          "Training load management",
        ],
      },
      {
        title: "What to Expect in Your Session",
        body:
          "You'll be fitted with compression sleeves or boots while seated or lying comfortably. The device inflates and deflates in sequential zones, creating a wave-like massage sensation moving toward the heart. Sessions typically last 20-30 minutes.",
      },
      {
        title: "Benefits",
        body: "Regular compression therapy sessions provide multiple advantages:",
        bullets: [
          "Accelerated muscle recovery after training",
          "Reduced delayed onset muscle soreness",
          "Improved circulation and blood flow",
          "Enhanced lymphatic drainage",
          "Decreased muscle tension and soreness",
          "Better removal of metabolic waste",
          "Reduced swelling in treated limbs",
          "Convenient, passive recovery method",
        ],
      },
    ],
  },

  {
    slug: "cryoair-therapy",
    name: "Cryoair Therapy",
    shortDescription:
      "Targeted cold therapy to reduce pain, inflammation, and accelerate healing.",
    heroDescription:
      "Localized Cryoair therapy uses controlled cold application to manage pain, reduce inflammation, and support tissue recovery following injury or intense activity.",
    heroImage: "/images/services/cryoair.jpg",
    heroAlt: "Cryoair cold treatment",
    sections: [
      {
        title: "What is Cryotherapy?",
        body:
          "Cryotherapy, or cold therapy, involves the therapeutic application of cold to injured or inflamed tissues. We use various methods including ice packs, cold compression devices, and controlled cold application techniques to reduce tissue temperature. This decreases metabolic activity, reduces inflammation, and provides effective pain relief.",
      },
      {
        title: "Who is it for?",
        body:
          "Cryotherapy benefits anyone experiencing acute injuries, inflammation, or pain that responds well to cold application.",
        bullets: [
          "People with acute injuries or sprains",
          "Athletes with post-training inflammation",
          "Individuals with chronic inflammatory conditions",
          "Those recovering from surgery",
          "People with joint swelling",
          "Anyone seeking natural pain relief",
        ],
      },
      {
        title: "Conditions We Commonly Treat",
        body:
          "Cryotherapy is particularly effective for conditions involving inflammation and swelling:",
        bullets: [
          "Acute sprains and strains",
          "Post-surgical swelling",
          "Acute inflammatory arthritis flares",
          "Tendinitis and bursitis",
          "Muscle contusions and bruising",
          "Joint effusion and swelling",
          "Post-exercise inflammation",
          "Overuse injuries in acute phase",
        ],
      },
      {
        title: "What to Expect in Your Session",
        body:
          "Cold therapy is applied to the affected area using appropriate methods based on your condition. Application typically lasts 10-20 minutes. You'll feel significant cold initially, which may become numb as treatment continues.",
      },
      {
        title: "Benefits",
        body: "Cryotherapy provides immediate and therapeutic benefits:",
        bullets: [
          "Rapid reduction in pain and discomfort",
          "Decreased inflammation and swelling",
          "Reduced tissue metabolism preventing secondary damage",
          "Numbing effect for acute pain relief",
          "Controlled bleeding and bruising in acute injuries",
          "Supports faster recovery when properly timed",
          "Safe, non-invasive pain management",
          "Effective complement to other treatments",
        ],
      },
    ],
  },
];

// Helper function to find service by slug
export const findServiceBySlug = (slug: string): Service | undefined => {
  return servicesData.find((service) => service.slug === slug);
};

// Helper function to get all service slugs (useful for routing)
export const getAllServiceSlugs = (): string[] => {
  return servicesData.map((service) => service.slug);
};

export default servicesData;
