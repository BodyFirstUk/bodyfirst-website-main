import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { useLocation, Link, useParams, Navigate, Routes, Route } from "react-router-dom";
const siteContent = {
  company: {
    name: "Body First UK",
    tagline: "Your Health, Our Priority",
    email: "info@bodyfirst.uk",
    phone: "+442038181238",
    whatsapp: "+442038181238",
    address: {
      street: "38 High Street,",
      city: "Hampton Hill,",
      place: "Hampton, London, TW12 1PD",
      country: "United Kingdom"
    },
    hours: {
      weekday: "Monday–Friday: 9am–8pm",
      saturday: "Saturday: Closed",
      sunday: "Sunday: 11am–8pm"
    },
    social: {
      facebook: "https://www.facebook.com/share/17pz212NhW/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/bodyfirstuk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      twitter: "https://twitter.com/bodyfirstuk"
    }
  },
  prices: [
    { service: "Initial Appointment", duration: "45 min", price: "£75", category: "Physiotherapy" },
    { service: "30 min Physiotherapy", duration: "30 min", price: "£65", category: "Physiotherapy" },
    { service: "30 min Sports Massage", duration: "30 min", price: "£50", category: "Sports Massage" },
    { service: "45 min Sports Massage", duration: "45 min", price: "£60", category: "Sports Massage" },
    { service: "60 min Sports Massage", duration: "60 min", price: "£70", category: "Sports Massage" },
    { service: "Lymphatic Drainage", duration: "30 min", price: "£70", category: "Lymphatic Drainage" },
    { service: "Lymphatic Drainage", duration: "45 min", price: "£80", category: "Lymphatic Drainage" },
    { service: "Shockwave Therapy", duration: "1 session", price: "£80", category: "Other Services" },
    { service: "Gait Analysis", duration: "45 min", price: "£70", category: "Other Services" },
    { service: "Cryoair Therapy", duration: "1 session", price: "£60", category: "Other Services" }
    // Assuming a price or just updating the name if it existed elsewhere
  ],
  insurance: {
    accepted: [
      {
        name: "AXA",
        logo: "/images/insurance/axa.jpg"
      },
      {
        name: "AVIVA",
        logo: "/images/insurance/aviva.jpg"
      },
      {
        name: "BUPA",
        logo: "/images/insurance/bupa.png"
      },
      {
        name: "HEALIX",
        logo: "/images/insurance/healix.png"
      },
      {
        name: "Simply Health",
        logo: "/images/insurance/simply.jpg"
      },
      {
        name: "Vitality",
        logo: "/images/insurance/vitality.jpg"
      },
      {
        name: "WPA",
        logo: "/images/insurance/wpa.jpg"
      }
    ],
    note: "We work with all major private health insurance providers. Many of our services are covered under standard physiotherapy benefits. Please check with your insurer for specific coverage details and pre-authorisation requirements."
  },
  team: [
    {
      name: "Praveena Thiruvasagar",
      role: "Senior Physiotherapist",
      qualifications: "• CSP Charted Senior Physiotherapist  • HCPC Registered\n \n• BSc in Physiotherapy • MSc in Advanced Physiotherapy • MPhil in Shockwave Therapy and Sports Medicine and Exercise Sciences",
      description: "Senior physiotherapist with extensive experience in sports and musculoskeletal rehabilitation. Focuses on evidence-based care, complex rehab, and advanced modalities including shockwave therapy.",
      image: "/images/Aboutus/praveena.png"
    },
    {
      name: "Ivaylo Todorov",
      role: "Senior Physiotherapist",
      qualifications: "• CSP Charted Senior Physiotherapist  • HCPC Registered\n\n• Chiropractic Training",
      description: "Highly experienced physiotherapist with a strong NHS background. Interests include neuro rehabilitation, respiratory care, and spine-related management using a comprehensive patient-centred approach.",
      image: "/images/Aboutus/IvayloTodorov.jpeg"
    },
    {
      name: "Rachael Watkeys",
      role: "• Myotherapist • Sports Massage Therapist",
      qualifications: "• BAppSci (Human Movement) • AdDip (Myotherapy) • PGCE • ITEC",
      description: "Experienced myotherapist with a strong foundation in human movement and soft tissue therapy. Specialises in myofascial release, trigger point techniques, dry needling, and sports-focused recovery.",
      image: "/images/Aboutus/Rachael.jpeg"
    },
    {
      name: "Alisha Abdala",
      role: "Sports Massage Therapist",
      qualifications: "• BSc (Hons) Sport Health and Exercise",
      description: "Ex British gymnast and qualified sports massage therapist with a special interest in the thoracic and lumbar spine. Also certified in cupping therapy, lymphatic drainage, and sports injury rehabilitation. Focuses on releasing tension and correcting movement imbalances caused by repetitive activity or injury.",
      image: "/images/Aboutus/neww.jpeg"
    },
    {
      name: "Mihai Apostol",
      role: "Sports Massage Therapist",
      qualifications: "• BSc (Hons) Osteopathic Medicine (to complete 2026)",
      description: "Experienced sports massage therapist with over a decade of work in improving human movement. Currently studying osteopathy at the British School of Osteopathic Medicine, with a strong interest in biomechanics, posture, and restoring optimal movement patterns. Supports patients with postural strain, asymmetrical patterns, and sedentary lifestyle-related issues.",
      image: "/images/Aboutus/newone.jpeg"
    }
  ],
  testimonials: [
    {
      name: "David G.",
      rating: 5,
      text: "I had eight sessions with Bodyfirst because of a fractured wrist. I had only been out of the cast for a few days before I started my treatment.Praveena helped with getting the swelling down and gain much more motion. My wrist and hand now moves a lot better.Praveena is not only an excellent physio she is a lovely person too. She was always happy to answer my concerns and give me advice for exercises I could do at home to speed up my recovery.Highly recommend Bodyfirst.",
      service: "Fracture & Post-Op Rehab"
    },
    {
      name: "Tracy D.",
      rating: 5,
      text: "Highly recommend. Praveena has supported me with a long standing back issue and rehabilitation after breaking my wrist. Her knowledge, treatment and exercise programme in both cases have been fantastic.My recovery has been more comprehensive and faster than I have experienced with anyone else. I have a full range of motion just weeks after coming out of plaster.The best hands on physio I have ever had and a lovely lady to boot. So lucky to have this fantastic local business on the doorstep.",
      service: "Chronic Back & Joint Pain"
    },
    {
      name: "Bethan Probert",
      rating: 5,
      text: "Absolutely amazing physio! I have seen Praveena repeatedly and she always offers the best quality service! She was able to diagnose my injury where other physios failed to. She is highly knowledgable and qualified. She ensured I got the best treatment suited to what I needed. Best to mention the team are always welcoming and attentive! Always lovely having a chat with Sarah on the front desk!",
      service: "Physiotherapy / Expert Diagnosis"
    },
    {
      name: "Jegathees Krisha",
      rating: 5,
      text: "I had a great experience with physiotherapist Praveena. She is highly qualified, holds a Masters in Advanced Physiotherapy and her professionalism is truly proven. Using advanced foot scan technology and Fitz orthotic insoles, she worked on my feet and my twins feet. The entire process was smooth, informative and effective. I am very happy with the results and would highly recommend her to anyone looking for expert physiotherapy treatment.",
      service: "Foot Scan and Gait Analysis"
    },
    {
      name: "CHRIS FIDLER",
      rating: 5,
      text: "If you have any muscle or joint problems, this is definitely the place to go. I had a treatment today and felt immediate improvement. The staff are knowledgeable and keen to provide appropriate exercises between sessions. I highly recommend this practice.",
      service: "Sports Massage / Immediate Relief"
      // or Muscle or Joint Pain
    },
    {
      name: "Susanna Jarolim",
      rating: 5,
      text: 'Praveena was amazing.Before I came here, I had foot pain, plantar fasciitis, pain in my knee, arthritis and an old elbow injury that never went away over time. All three areas are very good. Sarah, the receptionist was very careful to send me receipts for my insurance.I highly recommend "Body First UK".Thank you for taking such good care of me😊',
      service: "Complex Pain Conditions"
    },
    {
      name: "Susan O'Connell",
      rating: 5,
      text: "Praveena runs a wonderful comprehensive clinic, with an amazing range of physio treatments. She has treated me using deep massage therapy for lymphatic drainage following heart surgery. . This has also included compression therapy. She is a highly qualified person with a masters in advanced physio and I highly recommend her.",
      service: "Post-Surgical Lymphatic Care"
    },
    // {
    //   name: 'Malak',
    //   rating: 5,
    //   text: 'Our entire family has been seeing Praveena and she is the best. From sports injuries to everyday aches and pains - she has looked after us with everything and always provides the highest level of care. Her knowledge and skill are second to none and she is as wonderful with children as she is with adults.The shockwave therapy sessions in particular have been a game changer - truly the best service I have experienced anywhere. Every appointment feels professional, effective and tailored to our needs.We are so lucky to have found her. We would highly recommend her to anyone looking for a physiotherapist who truly cares and delivers exceptional results every time!',
    //   service: 'Shockwave Therapy'
    // },
    {
      name: "Sylvia Walker",
      rating: 5,
      text: "Praveena is an excellent physiotherapist and a kind person. I recently had plantar fasciitis treated by her. She saw me as soon as I started having symptoms and after two follow-up appointments, it cleared up quickly. This is a condition that is often long-term. She has a variety of treatments available, including shockwave therapy and ultrasound. Thank you very much, Praveena.",
      service: "Plantar Fasciitis / Quick Results"
    }
  ],
  about: {
    mission: "At Body First UK, we believe that everyone deserves to move freely and live without pain. Our mission is to provide exceptional physiotherapy and wellness services that empower our patients to achieve their health and fitness goals.",
    philosophy: "We take a holistic, evidence-based approach to treatment, combining the latest research with hands-on expertise. Every patient receives a comprehensive assessment and a personalised treatment plan tailored to their specific needs and goals.",
    values: [
      "Excellence in clinical practice",
      "Patient-centered care",
      "Continuous professional development",
      "Evidence-based treatment",
      "Compassionate service"
    ]
  },
  accreditations: [
    { name: "CSP", fullName: "Chartered Society of Physiotherapy", logo: "/images/insurance/csp.png" },
    { name: "HCPC", fullName: "Health and Care Professions Council", logo: "/images/insurance/hcpc.jpeg" },
    { name: "Physio First", fullName: "Recognised Physiotherapy Practice", logo: "/images/insurance/physioFirst.jpg" }
  ]
};
const servicesData = [
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    shortDescription: "Evidence-based treatment to restore movement and function after injury or chronic pain.",
    heroDescription: "Our physiotherapy services combine manual therapy, exercise prescription, and patient education to help you recover faster and prevent future injuries.",
    heroImage: "/images/services/physio.jpg",
    heroAlt: "Physiotherapy treatment session",
    sections: [
      {
        title: "What is Physiotherapy?",
        body: "Physiotherapy is a healthcare profession focused on assessing, diagnosing, and treating disorders of movement and function. Our physiotherapists use a combination of hands-on techniques, therapeutic exercises, and education to help you achieve optimal physical health and wellbeing."
      },
      {
        title: "Who is it for?",
        body: "Physiotherapy is suitable for people of all ages experiencing pain, reduced mobility, or recovering from injury or surgery. Whether you're an athlete, office worker, or retired individual, our treatments are tailored to your specific needs and goals.",
        bullets: [
          "Post-surgical rehabilitation patients",
          "Athletes recovering from sports injuries",
          "Individuals with chronic pain conditions",
          "People seeking improved mobility and strength",
          "Those wanting to prevent future injuries"
        ]
      },
      {
        title: "Conditions We Commonly Treat",
        body: "Our physiotherapists have extensive experience treating a wide range of musculoskeletal conditions:",
        bullets: [
          "Back and neck pain",
          "Joint sprains and strains",
          "Arthritis and joint degeneration",
          "Tendon injuries and tendinopathy",
          "Post-operative rehabilitation",
          "Muscle tears and weakness",
          "Postural dysfunction",
          "Headaches and migraines"
        ]
      },
      {
        title: "What to Expect in Your Session",
        body: "Your first appointment begins with a comprehensive assessment of your condition, medical history, and movement patterns. We'll discuss your goals and create a personalized treatment plan. Sessions typically include manual therapy, targeted exercises, and advice on self-management strategies. Most appointments last 45-60 minutes."
      },
      {
        title: "Benefits",
        body: "Regular physiotherapy treatment can provide numerous benefits for your health and quality of life:",
        bullets: [
          "Reduced pain and inflammation",
          "Improved range of motion and flexibility",
          "Enhanced strength and stability",
          "Faster recovery from injury",
          "Better posture and movement patterns",
          "Increased confidence in physical activities",
          "Prevention of recurring injuries"
        ]
      }
    ]
  },
  {
    slug: "sports-massage",
    name: "Sports Massage",
    shortDescription: "Deep tissue massage techniques to enhance performance, aid recovery, and prevent injuries.",
    heroDescription: "Our sports massage therapy helps athletes and active individuals maintain peak performance, recover faster, and reduce the risk of injury through targeted soft tissue work.",
    heroImage: "/images/services/sports.jpg",
    heroAlt: "Sports massage therapy",
    sections: [
      {
        title: "What is Sports Massage?",
        body: "Sports massage is a specialized form of therapeutic massage that focuses on treating soft tissue injuries and improving athletic performance. Using a variety of techniques including deep tissue work, trigger point therapy, and myofascial release, we target specific muscle groups and problem areas to optimize your physical condition."
      },
      {
        title: "Who is it for?",
        body: 'While called "sports" massage, this treatment benefits anyone with an active lifestyle or muscle tension, not just competitive athletes.',
        bullets: [
          "Professional and amateur athletes",
          "Gym enthusiasts and fitness lovers",
          "People with physically demanding jobs",
          "Individuals with chronic muscle tension",
          "Those preparing for or recovering from events",
          "Anyone seeking deep tissue therapeutic massage"
        ]
      },
      {
        title: "Conditions We Commonly Treat",
        body: "Sports massage is effective for addressing various soft tissue conditions:",
        bullets: [
          "Muscle strains and tears",
          "Delayed onset muscle soreness (DOMS)",
          "Chronic muscle tension and knots",
          "Overuse injuries",
          "Reduced flexibility and mobility",
          "Pre and post-event muscle preparation",
          "Scar tissue and adhesions"
        ]
      },
      {
        title: "What to Expect in Your Session",
        body: "We begin by discussing your activity level, any problem areas, and your goals for treatment. The massage is performed on a treatment table with you in comfortable positions. We use various depths of pressure and techniques tailored to your needs. You may experience some discomfort during deeper work, but we always work within your tolerance. Sessions typically last 30-60 minutes."
      },
      {
        title: "Benefits",
        body: "Regular sports massage provides comprehensive benefits for active individuals:",
        bullets: [
          "Enhanced muscle recovery and repair",
          "Improved flexibility and range of motion",
          "Reduced muscle tension and soreness",
          "Better circulation and nutrient delivery",
          "Injury prevention through early detection",
          "Improved athletic performance",
          "Mental relaxation and stress relief",
          "Faster healing of soft tissue injuries"
        ]
      }
    ]
  },
  {
    slug: "dry-needling",
    name: "Dry Needling",
    shortDescription: "Targeted needle therapy to release muscle trigger points and reduce pain effectively.",
    heroDescription: "Dry needling uses fine needles to target myofascial trigger points, providing rapid relief from muscle pain, tension, and restricted movement.",
    heroImage: "/images/services/needling.jpg",
    heroAlt: "Dry needling treatment",
    sections: [
      {
        title: "What is Dry Needling?",
        body: "Dry needling is a modern, evidence-based treatment technique where fine sterile needles are inserted into tight muscle bands or trigger points. This stimulates a healing response, releases muscle tension, and reduces pain. Unlike acupuncture, dry needling is based on western medical principles and targets specific anatomical structures."
      },
      {
        title: "Who is it for?",
        body: "Dry needling is suitable for individuals experiencing muscle pain, tension, or movement restrictions that haven't fully responded to other treatments.",
        bullets: [
          "People with chronic muscle pain",
          "Athletes with persistent tightness",
          "Individuals with trigger point pain",
          "Those with movement restrictions",
          "Patients seeking drug-free pain relief",
          "People with myofascial pain syndrome"
        ]
      },
      {
        title: "Conditions We Commonly Treat",
        body: "Dry needling is particularly effective for various musculoskeletal conditions:",
        bullets: [
          "Chronic neck and back pain",
          "Tension headaches and migraines",
          "Shoulder and rotator cuff pain",
          "Tennis and golfer's elbow",
          "Hip and gluteal pain",
          "Plantar fasciitis",
          "Muscle spasms and cramping",
          "IT band syndrome"
        ]
      },
      {
        title: "What to Expect in Your Session",
        body: "After assessing your condition, your therapist will identify tight bands or trigger points in affected muscles. Fine needles are inserted into these areas, which may cause a brief twitch response and temporary discomfort. The needles remain in place for several minutes before removal. You might experience mild soreness for 24-48 hours post-treatment, similar to post-exercise soreness."
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
          "Long-lasting results with consistent treatment"
        ]
      }
    ]
  },
  {
    slug: "foot-scan-gait-analysis",
    name: "Foot Scan and Gait Analysis",
    shortDescription: "Advanced biomechanical assessment to identify movement issues and optimize foot function.",
    heroDescription: "Our comprehensive foot scanning and gait analysis technology provides detailed insights into your walking pattern, pressure distribution, and biomechanics to address pain and improve performance.",
    heroImage: "/images/services/footscan.webp",
    heroAlt: "Foot scan and gait analysis",
    sections: [
      {
        title: "What is Foot Scan and Gait Analysis?",
        body: "Using advanced pressure mapping technology and video analysis, we assess how your feet function during standing and walking. This computerized evaluation reveals pressure distribution, foot alignment, and movement patterns that may contribute to pain or injury. The data helps us create targeted treatment plans and orthotic prescriptions."
      },
      {
        title: "Who is it for?",
        body: "Foot scanning and gait analysis benefits anyone experiencing lower limb pain or seeking to optimize their movement patterns.",
        bullets: [
          "Runners and athletes with recurring injuries",
          "Individuals with foot or ankle pain",
          "People with knee, hip, or back pain",
          "Those considering custom orthotics",
          "Athletes wanting performance optimization",
          "Individuals with diabetes or neuropathy",
          "Anyone with balance or stability concerns"
        ]
      },
      {
        title: "Conditions We Commonly Assess",
        body: "Our analysis helps identify and address various biomechanical issues:",
        bullets: [
          "Plantar fasciitis and heel pain",
          "Achilles tendinopathy",
          "Shin splints and stress fractures",
          "Bunions and toe deformities",
          "Flat feet or high arches",
          "Knee pain and patellofemoral syndrome",
          "Hip and lower back dysfunction",
          "Overpronation or supination"
        ]
      },
      {
        title: "What to Expect in Your Session",
        body: "Your assessment begins with a discussion of your symptoms and activity level. You'll stand on our pressure plate scanner to capture static foot pressure data, then walk across it multiple times to analyze dynamic gait patterns. We also record video footage of your walking and running. The entire process takes about 45 minutes, and you'll receive a detailed report with findings and recommendations."
      },
      {
        title: "Benefits",
        body: "Comprehensive foot and gait assessment provides valuable insights:",
        bullets: [
          "Accurate identification of biomechanical issues",
          "Data-driven orthotic prescription",
          "Personalized exercise recommendations",
          "Injury prevention through early detection",
          "Improved athletic performance",
          "Reduced lower limb pain and discomfort",
          "Better understanding of your body mechanics",
          "Objective tracking of treatment progress"
        ]
      }
    ]
  },
  {
    slug: "ultrasound-therapy",
    name: "Ultrasound Therapy",
    shortDescription: "Therapeutic ultrasound waves to accelerate healing and reduce inflammation in deep tissues.",
    heroDescription: "Medical-grade ultrasound therapy uses sound waves to promote tissue repair, reduce inflammation, and provide pain relief for various musculoskeletal conditions.",
    heroImage: "/images/services/ultra.jpg",
    heroAlt: "Ultrasound therapy",
    sections: [
      {
        title: "What is Ultrasound Therapy?",
        body: "Therapeutic ultrasound uses high-frequency sound waves to treat injuries and promote healing in deep tissues. The sound waves create gentle vibrations that produce heat and mechanical effects in the tissue, increasing blood flow, reducing inflammation, and accelerating the healing process. This non-invasive treatment is particularly effective for chronic conditions and deep tissue injuries."
      },
      {
        title: "Who is it for?",
        body: "Ultrasound therapy benefits individuals with soft tissue injuries or chronic pain conditions requiring deep tissue healing.",
        bullets: [
          "People with tendon or ligament injuries",
          "Individuals with chronic inflammation",
          "Those recovering from soft tissue tears",
          "Patients with scar tissue or adhesions",
          "Athletes with overuse injuries",
          "Anyone with deep muscle or joint pain"
        ]
      },
      {
        title: "Conditions We Commonly Treat",
        body: "Ultrasound therapy is effective for various musculoskeletal conditions:",
        bullets: [
          "Tendinitis and tendinopathy",
          "Ligament sprains",
          "Muscle strains and tears",
          "Bursitis",
          "Plantar fasciitis",
          "Frozen shoulder",
          "Scar tissue and adhesions",
          "Joint contractures"
        ]
      },
      {
        title: "What to Expect in Your Session",
        body: "During treatment, a small amount of gel is applied to the affected area, and the ultrasound head is moved in circular motions over the treatment site. You'll feel a gentle warmth as the sound waves penetrate deep into the tissue. Treatment is painless and typically lasts 5-10 minutes per area. Ultrasound is often combined with other therapies for optimal results."
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
          "Complementary to other rehabilitation techniques"
        ]
      }
    ]
  },
  {
    slug: "shockwave-therapy",
    name: "Shockwave Therapy",
    shortDescription: "High-energy acoustic waves to treat chronic pain and stimulate natural healing processes.",
    heroDescription: "Extracorporeal shockwave therapy delivers powerful acoustic pulses to trigger the body's natural repair mechanisms, providing effective treatment for stubborn tendon and soft tissue conditions.",
    heroImage: "/images/services/shock.jpeg",
    heroAlt: "Shockwave therapy",
    sections: [
      {
        title: "What is Shockwave Therapy?",
        body: "Shockwave therapy, also known as Extracorporeal Shockwave Therapy (ESWT), uses high-energy acoustic waves to stimulate healing in chronic musculoskeletal conditions. The shockwaves trigger increased metabolism and blood flow, promote formation of new blood vessels, and dissolve calcium deposits. This evidence-based treatment is particularly effective for conditions that haven't responded to conventional therapy."
      },
      {
        title: "Who is it for?",
        body: "Shockwave therapy is ideal for individuals with chronic tendon problems or calcifications that have persisted despite other treatments.",
        bullets: [
          "People with chronic tendinopathy",
          "Athletes with persistent overuse injuries",
          "Individuals with calcific deposits",
          "Those who haven't responded to other treatments",
          "Patients wanting to avoid surgery",
          "People with chronic plantar fasciitis"
        ]
      },
      {
        title: "Conditions We Commonly Treat",
        body: "Shockwave therapy has proven effectiveness for specific conditions:",
        bullets: [
          "Plantar fasciitis and heel spurs",
          "Achilles tendinopathy",
          "Tennis and golfer's elbow",
          "Calcific shoulder tendinitis",
          "Patellar tendinopathy (jumper's knee)",
          "Greater trochanteric pain syndrome",
          "Shin splints",
          "Chronic muscle trigger points"
        ]
      },
      {
        title: "What to Expect in Your Session",
        body: "After identifying the treatment area, gel is applied and the shockwave applicator is positioned over the affected tissue. You'll feel strong pulses that may cause discomfort, but treatment is usually tolerable. Sessions last 5-10 minutes per area. Most conditions require 3-5 treatments spaced one week apart. Some soreness is normal after treatment, and improvement typically begins after 2-3 sessions."
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
          "High success rate for appropriate conditions"
        ]
      }
    ]
  },
  {
    slug: "cupping",
    name: "Cupping Therapy",
    shortDescription: "Traditional therapy using suction cups to improve circulation and release muscle tension.",
    heroDescription: "Cupping therapy creates localized suction to increase blood flow, release fascial restrictions, and promote healing in muscles and connective tissues.",
    heroImage: "/images/services/cupping.jpg",
    heroAlt: "Cupping therapy treatment",
    sections: [
      {
        title: "What is Cupping Therapy?",
        body: "Cupping therapy involves placing specialized cups on the skin to create suction. This negative pressure lifts the tissue, increasing blood circulation, releasing fascial adhesions, and promoting lymphatic drainage. We use both static cupping and dynamic cupping to address various conditions. The marks left by cupping typically fade within a few days to a week."
      },
      {
        title: "Who is it for?",
        body: "Cupping benefits individuals seeking relief from muscle tension, pain, or restricted movement through improved circulation and tissue release.",
        bullets: [
          "People with chronic muscle tightness",
          "Athletes seeking recovery enhancement",
          "Individuals with fascial restrictions",
          "Those with poor circulation",
          "People experiencing back or neck pain",
          "Anyone wanting complementary therapy"
        ]
      },
      {
        title: "Conditions We Commonly Treat",
        body: "Cupping therapy is particularly effective for certain musculoskeletal issues:",
        bullets: [
          "Chronic back and neck pain",
          "Tight shoulders and upper trapezius",
          "Muscle spasms and cramping",
          "Fascial restrictions",
          "Scar tissue and adhesions",
          "Reduced range of motion",
          "Post-exercise muscle soreness",
          "Respiratory conditions with muscle tension"
        ]
      },
      {
        title: "What to Expect in Your Session",
        body: "After assessing your condition, cups are placed on the affected areas creating suction that draws tissue into the cup. You'll feel a pulling sensation but it should not be painful. Cups may remain stationary for 5-15 minutes, or be moved across lubricated skin. Circular marks typically appear where cups were placed, which is normal."
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
          "Relaxation and stress reduction"
        ]
      }
    ]
  },
  {
    slug: "lymphatic-drainage",
    name: "Lymphatic Drainage",
    shortDescription: "Specialized massage technique to reduce swelling and support immune system function.",
    heroDescription: "Manual lymphatic drainage uses gentle, rhythmic movements to stimulate lymph flow, reduce edema, and support your body's natural detoxification processes.",
    heroImage: "/images/services/lym.jpg",
    heroAlt: "Lymphatic drainage therapy",
    sections: [
      {
        title: "What is Lymphatic Drainage?",
        body: "Manual lymphatic drainage (MLD) is a gentle, specialized massage technique designed to stimulate the lymphatic system. Using light, rhythmic strokes in specific directions, we encourage the movement of lymph fluid through the body. This helps reduce swelling, supports immune function, and promotes the removal of waste products and toxins."
      },
      {
        title: "Who is it for?",
        body: "Lymphatic drainage benefits individuals with swelling, post-surgical recovery needs, or those seeking to support their immune and detoxification systems.",
        bullets: [
          "Post-surgical patients with swelling",
          "People with lymphedema",
          "Individuals with chronic inflammation",
          "Those recovering from injuries with edema",
          "People with compromised immune systems",
          "Anyone seeking detoxification support",
          "Individuals with sinus congestion"
        ]
      },
      {
        title: "Conditions We Commonly Treat",
        body: "Lymphatic drainage is particularly beneficial for conditions involving fluid retention:",
        bullets: [
          "Post-surgical swelling and edema",
          "Lymphedema (primary and secondary)",
          "Chronic venous insufficiency",
          "Lipedema",
          "Post-traumatic swelling",
          "Sinusitis and sinus congestion",
          "Fibromyalgia",
          "Chronic fatigue syndrome"
        ]
      },
      {
        title: "What to Expect in Your Session",
        body: "Treatment involves very light, gentle strokes following the direction of lymph flow toward lymph nodes. Sessions typically begin at the neck to open major drainage pathways, then progress to affected areas. Sessions last 45-60 minutes."
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
          "Deep relaxation and stress relief"
        ]
      }
    ]
  },
  {
    slug: "compression-therapy",
    name: "Compression Therapy",
    shortDescription: "Advanced pneumatic compression to enhance recovery and reduce muscle soreness.",
    heroDescription: "Intermittent pneumatic compression therapy uses controlled pressure to improve circulation, accelerate recovery, and reduce swelling in the limbs.",
    heroImage: "/images/services/compression.jpg",
    heroAlt: "Compression recovery therapy",
    sections: [
      {
        title: "What is Compression Therapy?",
        body: "Compression therapy uses specialized pneumatic compression devices with inflatable sleeves or boots that apply sequential, rhythmic pressure to the limbs. This massage-like compression mimics the natural muscle pumping action, significantly improving blood flow and lymphatic drainage."
      },
      {
        title: "Who is it for?",
        body: "Compression therapy is ideal for athletes, active individuals, and anyone seeking improved circulation and recovery.",
        bullets: [
          "Athletes wanting enhanced recovery",
          "Endurance runners and cyclists",
          "People with heavy, tired legs",
          "Individuals with mild circulatory issues",
          "Those with occupational leg swelling",
          "Anyone seeking active recovery methods",
          "Post-exercise recovery seekers"
        ]
      },
      {
        title: "Conditions We Commonly Address",
        body: "Compression therapy helps with various recovery and circulation-related concerns:",
        bullets: [
          "Post-exercise muscle soreness and fatigue",
          "Delayed onset muscle soreness (DOMS)",
          "Minor leg swelling and heaviness",
          "Reduced circulation in the limbs",
          "Pre-event preparation and warm-up",
          "General muscle tension and tightness",
          "Occupational leg fatigue",
          "Training load management"
        ]
      },
      {
        title: "What to Expect in Your Session",
        body: "You'll be fitted with compression sleeves or boots while seated or lying comfortably. The device inflates and deflates in sequential zones, creating a wave-like massage sensation moving toward the heart. Sessions typically last 20-30 minutes."
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
          "Convenient, passive recovery method"
        ]
      }
    ]
  },
  {
    slug: "cryoair-therapy",
    name: "Cryoair Therapy",
    shortDescription: "Targeted cold therapy to reduce pain, inflammation, and accelerate healing.",
    heroDescription: "Localized Cryoair therapy uses controlled cold application to manage pain, reduce inflammation, and support tissue recovery following injury or intense activity.",
    heroImage: "/images/services/cryoair.jpg",
    heroAlt: "Cryoair cold treatment",
    sections: [
      {
        title: "What is Cryotherapy?",
        body: "Cryotherapy, or cold therapy, involves the therapeutic application of cold to injured or inflamed tissues. We use various methods including ice packs, cold compression devices, and controlled cold application techniques to reduce tissue temperature. This decreases metabolic activity, reduces inflammation, and provides effective pain relief."
      },
      {
        title: "Who is it for?",
        body: "Cryotherapy benefits anyone experiencing acute injuries, inflammation, or pain that responds well to cold application.",
        bullets: [
          "People with acute injuries or sprains",
          "Athletes with post-training inflammation",
          "Individuals with chronic inflammatory conditions",
          "Those recovering from surgery",
          "People with joint swelling",
          "Anyone seeking natural pain relief"
        ]
      },
      {
        title: "Conditions We Commonly Treat",
        body: "Cryotherapy is particularly effective for conditions involving inflammation and swelling:",
        bullets: [
          "Acute sprains and strains",
          "Post-surgical swelling",
          "Acute inflammatory arthritis flares",
          "Tendinitis and bursitis",
          "Muscle contusions and bruising",
          "Joint effusion and swelling",
          "Post-exercise inflammation",
          "Overuse injuries in acute phase"
        ]
      },
      {
        title: "What to Expect in Your Session",
        body: "Cold therapy is applied to the affected area using appropriate methods based on your condition. Application typically lasts 10-20 minutes. You'll feel significant cold initially, which may become numb as treatment continues."
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
          "Effective complement to other treatments"
        ]
      }
    ]
  }
];
const findServiceBySlug = (slug) => {
  return servicesData.find((service) => service.slug === slug);
};
const treatmentCategories = [
  {
    slug: "head-jaw-pain",
    title: "Head & Jaw",
    shortDescription: "Specialized treatment for headaches, migraines, TMJ disorders, and facial pain.",
    icon: "🧠",
    heroImage: "/images/Condition We Treat/head_jaw.jpg",
    heroAlt: "Head & Jaw",
    conditions: [
      { name: "Tension headaches" },
      { name: "Migraines" },
      { name: "TMJ dysfunction" },
      { name: "Jaw clicking or locking" },
      { name: "Facial pain" },
      { name: "Teeth grinding related pain" }
    ],
    detailContent: {
      overview: "Head and jaw pain can significantly impact your daily life, affecting your ability to eat, speak, and concentrate. Our physiotherapists specialize in treating conditions affecting the temporomandibular joint (TMJ), cervical spine, and associated muscular structures that contribute to head and facial pain.",
      sections: [
        {
          heading: "Common Causes",
          content: "Head and jaw pain often results from multiple contributing factors:",
          bullets: [
            "Poor posture leading to neck and jaw misalignment",
            "Stress-induced muscle tension and teeth grinding",
            "Previous trauma or injury to the jaw or face",
            "Cervical spine dysfunction affecting nerve pathways",
            "Arthritis or degenerative changes in the TMJ",
            "Prolonged computer or phone use creating forward head posture"
          ]
        },
        {
          heading: "Symptoms We Address",
          content: "You may experience one or more of these symptoms:",
          bullets: [
            "Persistent or recurring headaches, especially at the temples",
            "Pain or tenderness in the jaw joint",
            "Clicking, popping, or grinding sounds when opening your mouth",
            "Difficulty or pain when chewing or yawning",
            "Facial pain or pressure",
            "Limited jaw movement or locking",
            "Ear pain or ringing without infection"
          ]
        },
        {
          heading: "How Our Physiotherapists Help",
          content: "Our evidence-based approach combines multiple treatment techniques:",
          bullets: [
            "Manual therapy to release tight jaw and neck muscles",
            "Joint mobilization techniques for the TMJ and cervical spine",
            "Postural correction and ergonomic advice",
            "Specific exercises to strengthen and balance jaw muscles",
            "Relaxation techniques and stress management strategies",
            "Education on sleep positioning and daily habits",
            "Dry needling or acupuncture for muscle tension relief"
          ]
        },
        {
          heading: "When to Seek Help",
          content: "Consider physiotherapy if you're experiencing:",
          bullets: [
            "Jaw pain that persists for more than a few days",
            "Frequent headaches affecting your quality of life",
            "Difficulty opening your mouth or chewing food",
            "Pain that interferes with work or daily activities",
            "Clicking or locking of the jaw joint",
            "Pain following dental work or facial trauma"
          ]
        }
      ],
      faqs: [
        {
          question: "How long does TMJ treatment take?",
          answer: "Most patients see improvement within 4-6 sessions, though this varies based on severity and duration of symptoms. Chronic cases may require 8-12 weeks of treatment combined with home exercises."
        },
        {
          question: "Can physiotherapy help with migraines?",
          answer: "Yes, especially when migraines have a cervicogenic (neck-related) component. We address muscle tension, postural issues, and joint dysfunction that can trigger or worsen migraines."
        },
        {
          question: "Do I need a referral for jaw pain treatment?",
          answer: "No referral is necessary. However, we work closely with dentists and oral surgeons when appropriate. If structural issues are identified, we'll coordinate your care."
        },
        {
          question: "Will treatment be painful?",
          answer: "Our techniques are gentle and tailored to your comfort level. While you may feel some tenderness during treatment, it should never be unbearably painful. We always work within your tolerance."
        }
      ]
    }
  },
  {
    slug: "neck-pain",
    title: "Neck",
    shortDescription: "Expert care for neck pain, stiffness, whiplash, and cervical spine conditions.",
    icon: "🦴",
    heroImage: "/images/Condition We Treat/neck.png",
    heroAlt: "Neck",
    conditions: [
      { name: "Chronic neck pain" },
      { name: "Whiplash injuries" },
      { name: "Cervical radiculopathy" },
      { name: "Neck stiffness" },
      { name: "Postural neck pain" },
      { name: "Disc-related pain" }
    ],
    detailContent: {
      overview: "Neck pain is one of the most common reasons people seek physiotherapy. Whether caused by poor posture, injury, or degenerative changes, neck pain can affect your ability to work, drive, and enjoy daily activities. Our specialized approach addresses both immediate pain relief and long-term prevention.",
      sections: [
        {
          heading: "Common Causes",
          content: "Neck pain can arise from various sources:",
          bullets: [
            "Poor posture from desk work and device usage",
            "Whiplash from motor vehicle accidents",
            "Sports-related injuries",
            "Sleeping in awkward positions",
            "Degenerative disc disease or arthritis",
            "Muscle strain from overuse or sudden movements",
            "Nerve compression causing radiating pain"
          ]
        },
        {
          heading: "Symptoms We Address",
          content: "Neck conditions present with various symptoms:",
          bullets: [
            "Persistent aching or sharp pain in the neck",
            "Stiffness limiting head movement",
            "Pain radiating into shoulders or arms",
            "Headaches originating from the neck",
            "Numbness or tingling in the arms or hands",
            "Muscle spasms or tightness",
            "Reduced range of motion"
          ]
        },
        {
          heading: "How Our Physiotherapists Help",
          content: "We provide comprehensive, evidence-based treatment:",
          bullets: [
            "Thorough assessment to identify the root cause",
            "Manual therapy including joint mobilization and soft tissue work",
            "Specific strengthening exercises for neck stability",
            "Postural retraining and ergonomic modifications",
            "Neural mobilization for nerve-related symptoms",
            "Taping techniques for support and pain relief",
            "Education on self-management and prevention strategies"
          ]
        },
        {
          heading: "When to Seek Help",
          content: "Book an assessment if you have:",
          bullets: [
            "Neck pain lasting more than a week",
            "Pain following an accident or injury",
            "Symptoms affecting your arms or hands",
            "Severe stiffness limiting daily activities",
            "Recurring neck pain despite rest",
            "Pain accompanied by headaches or dizziness"
          ]
        }
      ],
      faqs: [
        {
          question: "How quickly will my neck pain improve?",
          answer: "Acute neck pain often improves within 2-4 weeks with appropriate treatment. Chronic conditions may take 6-12 weeks, but most patients report significant improvement after just a few sessions."
        },
        {
          question: "Is it safe to exercise with neck pain?",
          answer: "Generally yes, but it depends on the cause. We'll guide you through safe, therapeutic exercises that promote healing rather than aggravating your condition. Avoiding all movement can actually delay recovery."
        },
        {
          question: "Can you help with neck pain from sitting at a desk?",
          answer: "Absolutely. Postural neck pain is very responsive to physiotherapy. We'll assess your workstation setup, provide ergonomic recommendations, and teach you exercises to counteract prolonged sitting."
        },
        {
          question: "What's the difference between a stiff neck and something serious?",
          answer: "Most stiff necks resolve with conservative care. Seek immediate medical attention if you have severe pain after trauma, fever, severe headache, or progressive weakness in your arms. Otherwise, physiotherapy is an excellent first step."
        }
      ]
    }
  },
  {
    slug: "shoulder-pain",
    title: "Shoulder",
    shortDescription: "Comprehensive treatment for rotator cuff injuries, frozen shoulder, and shoulder instability.",
    icon: "💪",
    heroImage: "/images/Condition We Treat/shoulder.png",
    heroAlt: "Shoulder",
    conditions: [
      { name: "Rotator cuff tears" },
      { name: "Frozen shoulder" },
      { name: "Shoulder impingement" },
      { name: "Shoulder instability" },
      { name: "AC joint problems" },
      { name: "Bursitis" }
    ],
    detailContent: {
      overview: "The shoulder is the most mobile joint in the body, making it vulnerable to injury and dysfunction. Our physiotherapists have extensive experience treating shoulder conditions, from acute injuries to chronic pain, using the latest evidence-based techniques to restore function and eliminate pain.",
      sections: [
        {
          heading: "Common Causes",
          content: "Shoulder problems develop from various factors:",
          bullets: [
            "Rotator cuff injuries from sports or overuse",
            "Poor posture creating muscle imbalances",
            "Repetitive overhead activities",
            "Falls or direct trauma to the shoulder",
            "Age-related degeneration",
            "Prolonged immobilization leading to stiffness",
            "Weakness in shoulder stabilizing muscles"
          ]
        },
        {
          heading: "Symptoms We Address",
          content: "Shoulder conditions manifest in different ways:",
          bullets: [
            "Pain with overhead reaching or lifting",
            "Night pain disrupting sleep",
            "Weakness in the arm or shoulder",
            "Clicking, popping, or grinding sensations",
            "Stiffness and reduced range of motion",
            "Pain radiating down the arm",
            "Feeling of instability or shoulder 'giving way'"
          ]
        },
        {
          heading: "How Our Physiotherapists Help",
          content: "Our treatment approach is tailored to your specific condition:",
          bullets: [
            "Detailed assessment to accurately diagnose your shoulder problem",
            "Manual therapy to improve joint mobility and reduce pain",
            "Progressive strengthening program for rotator cuff and scapular muscles",
            "Postural correction and movement retraining",
            "Taping and bracing when appropriate",
            "Sport-specific or work-specific rehabilitation",
            "Guidance on activity modification and return to sport"
          ]
        },
        {
          heading: "When to Seek Help",
          content: "Consider physiotherapy if you're experiencing:",
          bullets: [
            "Shoulder pain lasting more than two weeks",
            "Inability to lift your arm normally",
            "Pain that wakes you at night",
            "Weakness affecting daily tasks",
            "Pain after a fall or injury",
            "Gradual stiffening of the shoulder"
          ]
        }
      ],
      faqs: [
        {
          question: "Can physiotherapy help frozen shoulder?",
          answer: "Yes, physiotherapy is one of the most effective treatments for frozen shoulder. While recovery can take 6-12 months, we can significantly reduce pain and accelerate the return of movement through specific techniques and exercises."
        },
        {
          question: "Do I need surgery for a rotator cuff tear?",
          answer: "Not necessarily. Many rotator cuff tears respond very well to physiotherapy. We'll assess your specific situation and can help you make an informed decision about surgery if conservative treatment isn't sufficient."
        },
        {
          question: "How long does shoulder rehabilitation take?",
          answer: "This varies by condition. Minor strains may resolve in 3-4 weeks, while complex issues like frozen shoulder or post-surgical rehab can take several months. We'll provide a realistic timeline after your assessment."
        },
        {
          question: "Can I continue working out with shoulder pain?",
          answer: "It depends on the cause and severity. We'll help you modify your training to avoid aggravating movements while maintaining fitness. Complete rest is rarely necessary and can sometimes be counterproductive."
        }
      ]
    }
  },
  {
    slug: "back-spine-pain",
    title: "Back & Spine",
    shortDescription: "Effective treatment for lower back pain, sciatica, disc injuries, and spinal conditions.",
    icon: "🏥",
    heroImage: "/images/Condition We Treat/back_spine.jpg",
    heroAlt: "Back & Spine",
    conditions: [
      { name: "Lower back pain" },
      { name: "Sciatica" },
      { name: "Disc herniation" },
      { name: "Spinal stenosis" },
      { name: "Muscle strains" },
      { name: "Postural back pain" }
    ],
    detailContent: {
      overview: "Back pain affects millions of people and is a leading cause of disability. Whether you're dealing with acute pain from a recent injury or chronic pain that's been present for months or years, our physiotherapists use evidence-based techniques to address the root cause and help you return to pain-free movement.",
      sections: [
        {
          heading: "Common Causes",
          content: "Back pain can result from numerous factors:",
          bullets: [
            "Muscle or ligament strain from heavy lifting or awkward movements",
            "Disc herniation or bulging discs",
            "Poor posture and prolonged sitting",
            "Degenerative changes in the spine",
            "Facet joint dysfunction",
            "Weak core muscles providing inadequate spinal support",
            "Previous injuries that weren't fully rehabilitated"
          ]
        },
        {
          heading: "Symptoms We Address",
          content: "Back conditions present with various symptoms:",
          bullets: [
            "Localized pain in the lower or upper back",
            "Pain radiating into the buttocks or legs (sciatica)",
            "Stiffness, especially in the morning",
            "Muscle spasms",
            "Numbness or tingling in the legs or feet",
            "Weakness in the legs",
            "Pain that worsens with sitting, standing, or specific movements"
          ]
        },
        {
          heading: "How Our Physiotherapists Help",
          content: "We offer comprehensive back pain management:",
          bullets: [
            "Thorough assessment to identify the source of pain",
            "Manual therapy including spinal mobilization and soft tissue techniques",
            "Core strengthening and spinal stabilization exercises",
            "Movement pattern correction and body mechanics training",
            "Neural mobilization for sciatic symptoms",
            "Postural education and ergonomic advice",
            "Pain science education to reduce fear and improve outcomes",
            "Individualized home exercise programs"
          ]
        },
        {
          heading: "When to Seek Help",
          content: "Book an assessment if you have:",
          bullets: [
            "Back pain persisting beyond a few days",
            "Pain radiating into your legs",
            "Numbness, tingling, or weakness in the legs",
            "Pain following an injury or accident",
            "Recurring episodes of back pain",
            "Pain affecting your ability to work or sleep"
          ]
        }
      ],
      faqs: [
        {
          question: "Should I rest or stay active with back pain?",
          answer: "Current research strongly supports staying active. Complete bed rest can actually delay recovery. We'll guide you on appropriate activities and exercises that promote healing while avoiding movements that aggravate your condition."
        },
        {
          question: "Can physiotherapy help with chronic back pain?",
          answer: "Absolutely. Even long-standing back pain responds well to physiotherapy. We address muscle imbalances, movement patterns, and contributing factors that perpetuate chronic pain, helping you regain control and function."
        },
        {
          question: "Will I need imaging (X-ray, MRI) for my back pain?",
          answer: "Most cases of back pain don't require imaging initially. We can diagnose and effectively treat most back conditions through clinical assessment. If imaging is needed, we'll advise you and can coordinate with your doctor."
        },
        {
          question: "How many sessions will I need?",
          answer: "Acute back pain often improves in 4-6 sessions, while chronic conditions may require 8-12 weeks of treatment. Many patients experience significant relief after just 2-3 sessions, with continued improvement thereafter."
        }
      ]
    }
  },
  {
    slug: "elbow-pain",
    title: "Elbow",
    shortDescription: "Specialized care for tennis elbow, golfer's elbow, and other elbow conditions.",
    icon: "🎾",
    heroImage: "/images/Condition We Treat/elbow.png",
    heroAlt: "Elbow",
    conditions: [
      { name: "Tennis elbow (lateral epicondylitis)" },
      { name: "Golfer's elbow (medial epicondylitis)" },
      { name: "Elbow bursitis" },
      { name: "Elbow tendinopathy" },
      { name: "Post-fracture rehabilitation" },
      { name: "Nerve entrapment" }
    ],
    detailContent: {
      overview: "Elbow pain can significantly impact your ability to perform everyday tasks, from typing and cooking to sports and hobbies. Our physiotherapists specialize in treating overuse injuries, tendinopathies, and post-injury rehabilitation to help you regain full, pain-free function.",
      sections: [
        {
          heading: "Common Causes",
          content: "Elbow problems typically develop from:",
          bullets: [
            "Repetitive gripping and wrist movements",
            "Overuse in sports like tennis, golf, or baseball",
            "Poor ergonomics at work or during activities",
            "Sudden increase in activity level",
            "Direct trauma or falls",
            "Age-related tendon degeneration",
            "Improper technique in sports or lifting"
          ]
        },
        {
          heading: "Symptoms We Address",
          content: "Elbow conditions typically present with:",
          bullets: [
            "Pain on the outside (tennis elbow) or inside (golfer's elbow) of the elbow",
            "Weakness in grip strength",
            "Pain when lifting, gripping, or twisting",
            "Stiffness and reduced range of motion",
            "Tenderness over the affected area",
            "Pain radiating into the forearm",
            "Difficulty with everyday activities like shaking hands or turning doorknobs"
          ]
        },
        {
          heading: "How Our Physiotherapists Help",
          content: "Our evidence-based treatment includes:",
          bullets: [
            "Comprehensive assessment to identify contributing factors",
            "Manual therapy to address muscle tension and joint restrictions",
            "Progressive loading exercises to strengthen tendons",
            "Activity modification and ergonomic advice",
            "Taping techniques for symptom relief",
            "Dry needling for stubborn muscle trigger points",
            "Return-to-sport or work rehabilitation programs",
            "Education on managing and preventing recurrence"
          ]
        },
        {
          heading: "When to Seek Help",
          content: "Consider physiotherapy if you're experiencing:",
          bullets: [
            "Elbow pain lasting more than a week",
            "Pain interfering with work or daily activities",
            "Weakness in your grip",
            "Pain that's gradually worsening",
            "Failed improvement with rest alone",
            "Recurring elbow problems"
          ]
        }
      ],
      faqs: [
        {
          question: "How long does tennis elbow take to heal?",
          answer: "Tennis elbow is a tendinopathy that typically takes 6-12 weeks to improve with physiotherapy. Chronic cases may take longer, but most patients see gradual improvement with consistent treatment and exercise."
        },
        {
          question: "Do I need to stop my sport completely?",
          answer: "Usually not. We'll help you modify your activity level and technique to allow healing while maintaining fitness. Complete rest isn't always beneficial and can lead to deconditioning."
        },
        {
          question: "Will I need injections or surgery?",
          answer: "Most elbow conditions respond well to physiotherapy alone. Injections are occasionally used for persistent cases, and surgery is rarely needed. We'll explore all conservative options first."
        },
        {
          question: "Can you help with elbow pain from computer work?",
          answer: "Yes, absolutely. Elbow pain from desk work is common and very treatable. We'll assess your workstation setup, provide ergonomic modifications, and teach you exercises to strengthen and protect your elbows."
        }
      ]
    }
  },
  {
    slug: "hand-wrist-pain",
    title: "Hand & Wrist",
    shortDescription: "Expert treatment for carpal tunnel, wrist sprains, arthritis, and hand conditions.",
    icon: "✋",
    heroImage: "/images/Condition We Treat/hand_wrist.png",
    heroAlt: "Hand & Wrist",
    conditions: [
      { name: "Carpal tunnel syndrome" },
      { name: "Wrist sprains" },
      { name: "De Quervain's tenosynovitis" },
      { name: "Arthritis" },
      { name: "Trigger finger" },
      { name: "Post-fracture rehabilitation" }
    ],
    detailContent: {
      overview: "Your hands and wrists are essential for nearly every daily activity. Pain or dysfunction in these areas can be frustrating and limiting. Our physiotherapists provide specialized care for hand and wrist conditions, combining manual therapy, exercise, and education to restore function and eliminate pain.",
      sections: [
        {
          heading: "Common Causes",
          content: "Hand and wrist problems often result from:",
          bullets: [
            "Repetitive strain from typing, mouse use, or assembly work",
            "Falls onto an outstretched hand",
            "Overuse in sports or activities",
            "Inflammatory conditions like arthritis",
            "Nerve compression (carpal tunnel syndrome)",
            "Pregnancy-related swelling and hormonal changes",
            "Age-related wear and tear"
          ]
        },
        {
          heading: "Symptoms We Address",
          content: "Hand and wrist conditions may cause:",
          bullets: [
            "Pain with gripping, pinching, or lifting",
            "Numbness or tingling in the fingers",
            "Weakness in the hand or wrist",
            "Swelling and stiffness",
            "Difficulty with fine motor tasks like buttoning or writing",
            "Pain that worsens at night",
            "Clicking or locking of fingers"
          ]
        },
        {
          heading: "How Our Physiotherapists Help",
          content: "We provide comprehensive hand and wrist care:",
          bullets: [
            "Detailed assessment including neurological and structural tests",
            "Joint mobilization and soft tissue techniques",
            "Nerve gliding exercises for carpal tunnel and other nerve issues",
            "Strengthening exercises for hand and forearm muscles",
            "Splinting and bracing when appropriate",
            "Ergonomic assessment and workplace modifications",
            "Scar management for post-surgical cases",
            "Education on activity modification and self-management"
          ]
        },
        {
          heading: "When to Seek Help",
          content: "Book an assessment if you have:",
          bullets: [
            "Persistent hand or wrist pain",
            "Numbness or tingling in your fingers",
            "Weakness affecting your grip",
            "Swelling that doesn't resolve",
            "Pain following an injury",
            "Difficulty performing work or daily tasks"
          ]
        }
      ],
      faqs: [
        {
          question: "Can physiotherapy help carpal tunnel syndrome?",
          answer: "Yes, especially in mild to moderate cases. We use manual therapy, nerve gliding exercises, and ergonomic modifications to reduce symptoms. Many patients avoid surgery through conservative physiotherapy treatment."
        },
        {
          question: "How long does wrist sprain recovery take?",
          answer: "Minor sprains often heal within 2-4 weeks, while more severe sprains can take 6-8 weeks. Physiotherapy accelerates healing and ensures you regain full strength and mobility."
        },
        {
          question: "Should I wear a brace or splint?",
          answer: "Sometimes, but not always. Bracing can be helpful for symptom relief and protection, especially at night for carpal tunnel. However, prolonged immobilization can lead to stiffness. We'll advise on appropriate use."
        },
        {
          question: "Can you help with arthritis in my hands?",
          answer: "Absolutely. While we can't reverse arthritis, physiotherapy significantly reduces pain and improves function through joint protection techniques, exercises, manual therapy, and education on managing symptoms."
        }
      ]
    }
  },
  {
    slug: "hip-groin-pain",
    title: "Hip & Groin",
    shortDescription: "Comprehensive care for hip pain, groin strains, bursitis, and hip arthritis.",
    icon: "🦵",
    heroImage: "/images/Condition We Treat/hip.webp",
    heroAlt: "Hip & Groin",
    conditions: [
      { name: "Hip arthritis" },
      { name: "Hip bursitis" },
      { name: "Groin strains" },
      { name: "Hip impingement" },
      { name: "Labral tears" },
      { name: "Hip flexor tendinopathy" }
    ],
    detailContent: {
      overview: "Hip and groin pain can significantly limit your mobility and quality of life. Whether caused by arthritis, sports injury, or overuse, our physiotherapists provide expert assessment and treatment to reduce pain, improve mobility, and help you return to the activities you love.",
      sections: [
        {
          heading: "Common Causes",
          content: "Hip and groin problems develop from various factors:",
          bullets: [
            "Osteoarthritis causing joint degeneration",
            "Overuse injuries in athletes and active individuals",
            "Muscle strains from sudden acceleration or change of direction",
            "Bursitis from repetitive friction",
            "Hip impingement affecting joint mechanics",
            "Weakness in hip stabilizing muscles",
            "Previous injuries or surgeries"
          ]
        },
        {
          heading: "Symptoms We Address",
          content: "Hip and groin conditions present with:",
          bullets: [
            "Pain in the hip, groin, or buttock",
            "Stiffness, especially after rest or in the morning",
            "Pain with walking, climbing stairs, or standing from sitting",
            "Reduced range of motion",
            "Clicking or catching sensations in the hip",
            "Pain radiating down the thigh",
            "Difficulty with activities like putting on shoes or getting in/out of cars"
          ]
        },
        {
          heading: "How Our Physiotherapists Help",
          content: "Our treatment approach includes:",
          bullets: [
            "Comprehensive assessment to identify the source of pain",
            "Manual therapy to improve joint mobility and reduce muscle tension",
            "Strengthening exercises for hip and core muscles",
            "Gait retraining and movement optimization",
            "Load management and activity modification guidance",
            "Pre and post-surgical rehabilitation",
            "Education on self-management strategies",
            "Return-to-sport programs for athletes"
          ]
        },
        {
          heading: "When to Seek Help",
          content: "Consider physiotherapy if you're experiencing:",
          bullets: [
            "Hip or groin pain lasting more than a week",
            "Pain affecting your ability to walk or exercise",
            "Stiffness limiting your daily activities",
            "Pain following a sports injury",
            "Gradual onset of hip pain with no clear cause",
            "Pain that's progressively worsening"
          ]
        }
      ],
      faqs: [
        {
          question: "Can physiotherapy help hip arthritis?",
          answer: "Yes, significantly. While we can't reverse arthritis, we can reduce pain, improve mobility, and strengthen surrounding muscles to better support the joint. Many patients delay or avoid surgery through physiotherapy."
        },
        {
          question: "How long does a groin strain take to heal?",
          answer: "Minor groin strains typically heal in 2-4 weeks, while more severe strains can take 6-12 weeks. Physiotherapy ensures proper healing and reduces the risk of re-injury through progressive rehabilitation."
        },
        {
          question: "Do I need hip surgery?",
          answer: "Not necessarily. Many hip conditions respond well to conservative treatment. We'll assess your specific situation and help you make an informed decision about surgery if physiotherapy isn't providing adequate relief."
        },
        {
          question: "Can I continue exercising with hip pain?",
          answer: "Usually yes, with modifications. Complete rest is rarely necessary. We'll help you adapt your activities to promote healing while maintaining fitness. The key is managing load appropriately."
        }
      ]
    }
  },
  {
    slug: "knee-pain",
    title: "Knee",
    shortDescription: "Specialized treatment for ACL injuries, meniscus tears, patellofemoral pain, and knee arthritis.",
    icon: "🦿",
    heroImage: "/images/Condition We Treat/knee.webp",
    heroAlt: "Knee",
    conditions: [
      { name: "ACL/MCL injuries" },
      { name: "Meniscus tears" },
      { name: "Patellofemoral pain syndrome" },
      { name: "Knee arthritis" },
      { name: "Patellar tendinopathy" },
      { name: "ITB syndrome" }
    ],
    detailContent: {
      overview: "Knee pain is one of the most common musculoskeletal complaints. Whether from sports injury, overuse, or degenerative changes, knee problems can significantly impact your mobility and independence. Our physiotherapists use evidence-based techniques to address the root cause and help you achieve lasting recovery.",
      sections: [
        {
          heading: "Common Causes",
          content: "Knee pain can arise from multiple sources:",
          bullets: [
            "Sports injuries including ligament sprains and meniscus tears",
            "Overuse injuries from running or jumping activities",
            "Osteoarthritis causing joint degeneration",
            "Patellofemoral pain from tracking issues",
            "Weakness in hip and thigh muscles",
            "Previous injuries that weren't fully rehabilitated",
            "Biomechanical issues affecting knee alignment"
          ]
        },
        {
          heading: "Symptoms We Address",
          content: "Knee conditions may present with:",
          bullets: [
            "Pain at the front, inside, or outside of the knee",
            "Swelling and stiffness",
            "Instability or feeling that the knee might give way",
            "Clicking, popping, or grinding sensations",
            "Pain with stairs, squatting, or kneeling",
            "Difficulty straightening or bending the knee fully",
            "Pain that worsens with activity"
          ]
        },
        {
          heading: "How Our Physiotherapists Help",
          content: "We provide comprehensive knee rehabilitation:",
          bullets: [
            "Thorough assessment including biomechanical analysis",
            "Manual therapy to restore joint mobility and reduce pain",
            "Progressive strengthening program for quadriceps, hamstrings, and hip muscles",
            "Balance and proprioception training",
            "Gait and running technique analysis and retraining",
            "Taping and bracing when appropriate",
            "Pre and post-operative rehabilitation for surgical cases",
            "Return-to-sport programs with objective testing"
          ]
        },
        {
          heading: "When to Seek Help",
          content: "Book an assessment if you have:",
          bullets: [
            "Knee pain lasting more than a few days",
            "Swelling that doesn't resolve with rest and ice",
            "Instability or feeling that your knee might buckle",
            "Pain following an injury or accident",
            "Difficulty bearing weight on the affected leg",
            "Pain interfering with sports or daily activities"
          ]
        }
      ],
      faqs: [
        {
          question: "Can physiotherapy help me avoid knee surgery?",
          answer: "Often yes. Many knee conditions, including meniscus tears and early arthritis, respond very well to physiotherapy. Even when surgery is necessary, pre-operative physiotherapy improves post-surgical outcomes."
        },
        {
          question: "How long does ACL rehabilitation take?",
          answer: "ACL reconstruction rehabilitation typically takes 9-12 months for full return to sport. We guide you through each phase, using objective criteria to progress safely and reduce re-injury risk."
        },
        {
          question: "Should I stop running with knee pain?",
          answer: "Not necessarily. We'll assess the cause of your pain and modify your training load and technique. Many runners can continue with appropriate modifications while rehabilitation progresses."
        },
        {
          question: "Can you help with runner's knee?",
          answer: "Absolutely. Patellofemoral pain (runner's knee) responds very well to physiotherapy. We address the underlying factors including hip weakness, training errors, and biomechanical issues causing the pain."
        }
      ]
    }
  },
  {
    slug: "foot-ankle-pain",
    title: "Foot & Ankle",
    shortDescription: "Expert care for ankle sprains, plantar fasciitis, Achilles tendinopathy, and foot pain.",
    icon: "👣",
    heroImage: "/images/Condition We Treat/foot_ankle.jpg",
    heroAlt: "Foot & Ankle",
    conditions: [
      { name: "Ankle sprains" },
      { name: "Plantar fasciitis" },
      { name: "Achilles tendinopathy" },
      { name: "Shin splints" },
      { name: "Stress fractures" },
      { name: "Flat feet problems" }
    ],
    detailContent: {
      overview: "Your feet and ankles bear your body weight with every step, making them vulnerable to injury and overuse. From acute ankle sprains to chronic conditions like plantar fasciitis, our physiotherapists provide expert treatment to restore function, reduce pain, and prevent recurrence.",
      sections: [
        {
          heading: "Common Causes",
          content: "Foot and ankle problems typically develop from:",
          bullets: [
            "Acute injuries like ankle sprains from sports or falls",
            "Overuse injuries from running or walking",
            "Poor footwear providing inadequate support",
            "Biomechanical issues affecting foot alignment",
            "Sudden increases in activity level",
            "Previous injuries not fully rehabilitated",
            "Age-related changes in foot structure"
          ]
        },
        {
          heading: "Symptoms We Address",
          content: "Foot and ankle conditions may cause:",
          bullets: [
            "Pain in the heel, arch, or ankle",
            "Swelling and stiffness",
            "Pain that's worse with first steps in the morning",
            "Difficulty walking or standing for extended periods",
            "Pain along the shin (shin splints)",
            "Instability or recurrent ankle sprains",
            "Numbness or tingling in the foot"
          ]
        },
        {
          heading: "How Our Physiotherapists Help",
          content: "Our evidence-based treatment includes:",
          bullets: [
            "Comprehensive gait and biomechanical assessment",
            "Manual therapy for joint mobility and soft tissue release",
            "Progressive strengthening and balance training",
            "Taping techniques for support and pain relief",
            "Footwear advice and orthotic recommendations",
            "Running technique analysis and retraining",
            "Load management and training program modifications",
            "Education on self-management and prevention"
          ]
        },
        {
          heading: "When to Seek Help",
          content: "Consider physiotherapy if you're experiencing:",
          bullets: [
            "Foot or ankle pain lasting more than a week",
            "Pain that's progressively worsening",
            "Swelling that doesn't resolve with rest",
            "Difficulty bearing weight or walking",
            "Recurrent ankle sprains",
            "Pain interfering with exercise or daily activities"
          ]
        }
      ],
      faqs: [
        {
          question: "How long does plantar fasciitis take to heal?",
          answer: "Plantar fasciitis typically improves within 6-12 weeks with appropriate treatment, though chronic cases may take longer. Most patients experience significant relief after 4-6 physiotherapy sessions combined with home exercises."
        },
        {
          question: "Should I stop running with Achilles pain?",
          answer: "Not always. We'll assess your tendon and determine appropriate load modifications. Complete rest isn't usually necessary and can be counterproductive. We'll guide you on safe training modifications."
        },
        {
          question: "Do I need orthotics for my foot pain?",
          answer: "Sometimes, but not always. We'll assess your foot mechanics and determine if orthotics would be beneficial. Often, strengthening exercises and footwear modifications are sufficient."
        },
        {
          question: "How can I prevent ankle sprains?",
          answer: "Balance training, proprioceptive exercises, and appropriate footwear significantly reduce sprain risk. After an initial sprain, proper rehabilitation is crucial to prevent recurrence. We provide comprehensive prevention programs."
        }
      ]
    }
  },
  {
    slug: "sports-injuries",
    title: "Sports Injuries",
    shortDescription: "Specialized rehabilitation for athletic injuries and return-to-sport programs.",
    icon: "⚽",
    heroImage: "/images/Condition We Treat/sports_injuries.jpg",
    heroAlt: "Sports Injuries",
    conditions: [
      { name: "Muscle strains and tears" },
      { name: "Ligament sprains" },
      { name: "Overuse injuries" },
      { name: "Stress fractures" },
      { name: "Concussion management" },
      { name: "Sport-specific injuries" }
    ],
    detailContent: {
      overview: "Sports injuries require specialized care to ensure full recovery and safe return to your sport. Our physiotherapists have extensive experience treating athletes of all levels, from weekend warriors to elite competitors. We use the latest evidence-based techniques and objective testing to optimize your recovery and reduce re-injury risk.",
      sections: [
        {
          heading: "Common Causes",
          content: "Sports injuries typically result from:",
          bullets: [
            "Acute trauma during competition or training",
            "Overtraining without adequate recovery",
            "Poor technique or biomechanics",
            "Inadequate warm-up or conditioning",
            "Previous injuries creating compensatory patterns",
            "Rapid increases in training volume or intensity",
            "Muscle imbalances and weakness"
          ]
        },
        {
          heading: "Symptoms We Address",
          content: "Sports injuries present with various symptoms:",
          bullets: [
            "Acute pain following injury",
            "Swelling and inflammation",
            "Reduced strength or power",
            "Limited range of motion",
            "Instability or reduced balance",
            "Pain with specific sport movements",
            "Decreased performance or confidence"
          ]
        },
        {
          heading: "How Our Physiotherapists Help",
          content: "We provide sport-specific rehabilitation:",
          bullets: [
            "Comprehensive injury assessment and diagnosis",
            "Acute injury management to reduce pain and swelling",
            "Progressive strengthening and conditioning programs",
            "Sport-specific movement retraining",
            "Objective return-to-sport testing and criteria",
            "Biomechanical analysis and technique optimization",
            "Load management and training program design",
            "Injury prevention strategies and prehabilitation"
          ]
        },
        {
          heading: "When to Seek Help",
          content: "Book an assessment if you have:",
          bullets: [
            "Acute injury during sport or training",
            "Pain affecting your performance",
            "Recurrent injuries in the same area",
            "Desire to optimize performance and prevent injury",
            "Need guidance on safe return to sport",
            "Chronic overuse pain not responding to rest"
          ]
        }
      ],
      faqs: [
        {
          question: "How soon can I return to sport after injury?",
          answer: "This depends on the injury type and severity. We use objective criteria including strength, range of motion, and functional testing to determine readiness. Returning too soon increases re-injury risk, which we carefully manage."
        },
        {
          question: "Can physiotherapy improve my athletic performance?",
          answer: "Yes. Beyond treating injuries, we identify and address biomechanical inefficiencies, muscle imbalances, and movement patterns that limit performance. Many athletes see performance gains through physiotherapy."
        },
        {
          question: "Do I need to stop training completely?",
          answer: "Usually not. We believe in active rehabilitation. We'll modify your training to allow healing while maintaining fitness. Complete rest can lead to deconditioning and isn't necessary for most injuries."
        },
        {
          question: "Can you help prevent injuries before they happen?",
          answer: "Absolutely. Prehabilitation programs address weakness, imbalances, and risk factors before injuries occur. Regular screening and preventive exercises significantly reduce injury risk in athletes."
        }
      ]
    }
  },
  {
    slug: "post-surgery-rehab",
    title: "Post-Surgery Rehab",
    shortDescription: "Comprehensive rehabilitation following orthopedic surgery and joint replacement.",
    icon: "🏥",
    heroImage: "/images/Condition We Treat/post_surgery.webp",
    heroAlt: "Post Surgery",
    conditions: [
      { name: "ACL reconstruction rehab" },
      { name: "Hip replacement recovery" },
      { name: "Knee replacement rehab" },
      { name: "Rotator cuff repair" },
      { name: "Spinal surgery rehab" },
      { name: "General orthopedic recovery" }
    ],
    detailContent: {
      overview: "Post-surgical rehabilitation is crucial for optimal recovery and return to function. Our physiotherapists work closely with surgeons to provide comprehensive rehabilitation programs tailored to your specific surgery and goals. We guide you through each phase of recovery with evidence-based techniques and objective progression criteria.",
      sections: [
        {
          heading: "Common Surgeries We Rehabilitate",
          content: "We provide post-operative care for various procedures:",
          bullets: [
            "Joint replacement (hip, knee, shoulder)",
            "ACL and other ligament reconstructions",
            "Rotator cuff and shoulder repairs",
            "Spinal surgeries including discectomy and fusion",
            "Meniscus repair or debridement",
            "Fracture fixation and hardware removal",
            "Arthroscopic procedures"
          ]
        },
        {
          heading: "What to Expect",
          content: "Post-surgical rehabilitation typically involves:",
          bullets: [
            "Initial pain and swelling management",
            "Gradual restoration of range of motion",
            "Progressive strengthening exercises",
            "Scar tissue management",
            "Gait retraining and functional movement",
            "Balance and proprioception work",
            "Return to activity and sport-specific training"
          ]
        },
        {
          heading: "How Our Physiotherapists Help",
          content: "We provide comprehensive post-operative care:",
          bullets: [
            "Early mobilization following surgical protocols",
            "Manual therapy to reduce pain and improve mobility",
            "Progressive exercise programs tailored to healing timelines",
            "Education on precautions and activity guidelines",
            "Scar massage and soft tissue mobilization",
            "Functional training for daily activities and sport",
            "Objective testing to ensure readiness for progression",
            "Communication with your surgeon throughout recovery"
          ]
        },
        {
          heading: "When to Seek Help",
          content: "Post-surgical physiotherapy is essential for:",
          bullets: [
            "Optimal recovery and return to function",
            "Preventing complications like stiffness or weakness",
            "Safe progression through rehabilitation phases",
            "Regaining confidence in movement",
            "Achieving surgical goals and outcomes",
            "Returning to work, sport, or hobbies safely"
          ]
        }
      ],
      faqs: [
        {
          question: "When should I start physiotherapy after surgery?",
          answer: "This depends on your specific surgery. Some procedures require immediate post-operative physiotherapy within days, while others may wait a few weeks. We coordinate with your surgeon to determine optimal timing."
        },
        {
          question: "Will physiotherapy be painful after surgery?",
          answer: "Some discomfort is normal as we work to restore movement and strength. However, treatment should never be unbearably painful. We work within your tolerance and progress gradually as healing allows."
        },
        {
          question: "How long will my recovery take?",
          answer: "Recovery timelines vary by procedure. Joint replacements typically take 3-6 months for full recovery, while ACL reconstruction requires 9-12 months. We provide realistic timelines and objective markers for progression."
        },
        {
          question: "Can I speed up my recovery?",
          answer: "Consistency with your exercises and following rehabilitation protocols are key. However, tissues heal on biological timelines that can't be rushed. Trying to progress too quickly increases complication risk."
        }
      ]
    }
  }
];
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [
    { name: "What We Treat", path: "/what-we-treat" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Why Us", path: "/why-us" },
    { name: "Pricing & Insurance", path: "/prices" },
    { name: "Contact Us", path: "/contact" }
  ];
  const isActive = (path) => location.pathname === path;
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-teal-900 shadow-lg py-3",
      children: /* @__PURE__ */ jsxs("nav", { className: "container", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-2", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center shrink-0", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/logo.jpg",
              alt: siteContent.company.name,
              className: "w-auto object-contain bg-white p-1 rounded-lg h-16 lg:h-20"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center justify-center space-x-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/what-we-treat",
                  className: `flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive("/what-we-treat") ? "bg-white/20 text-white shadow-sm" : "text-teal-50 hover:bg-white/10 hover:text-white"}`,
                  children: [
                    /* @__PURE__ */ jsx("span", { children: "What We Treat" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs opacity-70", children: "▾" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "\n                  invisible opacity-0 group-hover:visible group-hover:opacity-100\n                  transition-all duration-200 transform origin-top-left\n                  absolute left-0 top-full mt-2 w-80\n                  bg-white rounded-2xl shadow-xl border border-teal-100\n                  py-2 z-50 text-left overflow-hidden\n                ",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "px-5 py-3 bg-teal-50/50 border-b border-teal-100", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-teal-800 uppercase tracking-wider", children: "Conditions We Treat" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "py-2 flex flex-col", children: [
                      treatmentCategories.slice(0, 8).map((cat) => /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: `/what-we-treat/${cat.slug}`,
                          className: "px-5 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors",
                          children: cat.title
                        },
                        cat.slug
                      )),
                      /* @__PURE__ */ jsx("div", { className: "border-t border-gray-100 mt-1 pt-1", children: /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: "/what-we-treat",
                          className: "block px-5 py-3 text-xs font-bold text-teal-700 hover:bg-teal-50 transition-colors",
                          children: "View all conditions →"
                        }
                      ) })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/services",
                  className: `flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive("/services") ? "bg-white/20 text-white shadow-sm" : "text-teal-50 hover:bg-white/10 hover:text-white"}`,
                  children: [
                    /* @__PURE__ */ jsx("span", { children: "Services" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs opacity-70", children: "▾" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "\n                  invisible opacity-0 group-hover:visible group-hover:opacity-100\n                  transition-all duration-200 transform origin-top-left\n                  absolute left-0 top-full mt-2 w-72\n                  bg-white rounded-2xl shadow-xl border border-teal-100\n                  py-2 z-50 text-left overflow-hidden\n                ",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "px-5 py-3 bg-teal-50/50 border-b border-teal-100", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-teal-800 uppercase tracking-wider", children: "Our Services" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "py-2 flex flex-col", children: [
                      servicesData.slice(0, 8).map((service) => /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: `/services/${service.slug}`,
                          className: "px-5 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors",
                          children: service.name
                        },
                        service.slug
                      )),
                      /* @__PURE__ */ jsx("div", { className: "border-t border-gray-100 mt-1 pt-1", children: /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: "/services",
                          className: "block px-5 py-3 text-xs font-bold text-teal-700 hover:bg-teal-50 transition-colors",
                          children: "View all services →"
                        }
                      ) })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/about",
                className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive("/about") ? "bg-white/20 text-white shadow-sm" : "text-teal-50 hover:bg-white/10 hover:text-white"}`,
                children: "About Us"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/why-us",
                className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive("/why-us") ? "bg-white/20 text-white shadow-sm" : "text-teal-50 hover:bg-white/10 hover:text-white"}`,
                children: "Why Us"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/prices",
                className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive("/prices") ? "bg-white/20 text-white shadow-sm" : "text-teal-50 hover:bg-white/10 hover:text-white"}`,
                children: "Pricing & Insurance"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/contact",
                className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive("/contact") ? "bg-white/20 text-white shadow-sm" : "text-teal-50 hover:bg-white/10 hover:text-white"}`,
                children: "Contact Us"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 lg:space-x-6", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/contact#map", className: "hidden xl:flex items-center text-teal-100 hover:text-white uppercase text-xs font-bold tracking-wider transition-colors", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 mr-1.5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z", clipRule: "evenodd" }) }),
              "Find Us"
            ] }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white hover:bg-teal-50 text-teal-900 text-sm font-bold shadow-lg transition-all duration-300 hover:scale-105",
                children: [
                  /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }) }),
                  "Book Now"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
                className: "lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors",
                "aria-label": "Toggle menu",
                children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-8 h-8",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: isMobileMenuOpen ? /* @__PURE__ */ jsx("path", { d: "M6 18L18 6M6 6l12 12" }) : /* @__PURE__ */ jsx("path", { d: "M4 6h16M4 12h16M4 18h16" })
                  }
                )
              }
            )
          ] })
        ] }),
        isMobileMenuOpen && /* @__PURE__ */ jsxs("div", { className: "container lg:hidden mt-4 pb-6 space-y-2 border-t border-teal-800 pt-4", children: [
          navigation.map((item) => /* @__PURE__ */ jsx(
            Link,
            {
              to: item.path,
              onClick: () => setIsMobileMenuOpen(false),
              className: `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive(item.path) ? "bg-white/15 text-white" : "text-teal-100 hover:bg-white/5 hover:text-white"}`,
              children: item.name
            },
            item.path
          )),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login",
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: () => setIsMobileMenuOpen(false),
              className: "flex items-center justify-center mt-4 w-full text-center bg-white hover:bg-teal-50 text-teal-900 font-bold text-base px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200",
              children: [
                /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }) }),
                "Book Now"
              ]
            }
          )
        ] })
      ] })
    }
  );
};
const AntigravityCanvas = ({ position = "fixed", className = "" }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -1e3, y: -1e3, prevX: -1e3, prevY: -1e3 });
  const avoidAreasRef = useRef([]);
  const animationFrameRef = useRef(0);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const updateAvoidAreas = () => {
      const areas = [];
      const elements = document.querySelectorAll(".card, h1, h2, .glass-card, .avoid-particles");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (position === "absolute" && canvas.parentElement) {
          const canvasRect = canvas.getBoundingClientRect();
          areas.push({
            ...rect,
            left: rect.left - canvasRect.left,
            right: rect.right - canvasRect.left,
            top: rect.top - canvasRect.top,
            bottom: rect.bottom - canvasRect.top,
            x: rect.x - canvasRect.left,
            y: rect.y - canvasRect.top
          });
        } else {
          areas.push(rect);
        }
      });
      avoidAreasRef.current = areas;
    };
    const resizeCanvas = () => {
      if (position === "absolute" && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      updateAvoidAreas();
      initParticles();
    };
    const initParticles = () => {
      const particles = [];
      const area = canvas.width * canvas.height;
      const grainCount = Math.floor(area / 4e3);
      for (let i = 0; i < grainCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          baseX: Math.random() * canvas.width,
          baseY: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 1.2 + 0.4,
          opacity: Math.random() * 0.2 + 0.1,
          type: "grain"
        });
      }
      const bubbleCount = Math.floor(area / 3e4);
      for (let i = 0; i < bubbleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          baseX: Math.random() * canvas.width,
          baseY: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 12 + 4,
          opacity: Math.random() * 0.2 + 0.05,
          type: "bubble",
          hue: Math.random() * 40 + 190,
          // Blue-ish range for premium feel
          lightness: Math.random() * 20 + 40
        });
      }
      particlesRef.current = particles;
    };
    const handleMouseMove = (e) => {
      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;
      if (position === "absolute") {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
      } else {
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
      }
    };
    const handleMouseLeave = () => {
      mouseRef.current.x = -1e3;
      mouseRef.current.y = -1e3;
    };
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      const mouseSpeed = Math.sqrt(
        Math.pow(mouse.x - mouse.prevX, 2) + Math.pow(mouse.y - mouse.prevY, 2)
      );
      particlesRef.current.forEach((particle) => {
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 200;
        if (distance < interactionRadius && mouse.x > -500) {
          const force = (1 - distance / interactionRadius) * 4;
          const angle = Math.atan2(dy, dx);
          particle.vx += Math.cos(angle) * force;
          particle.vy += Math.sin(angle) * force;
          const swirl = (1 - distance / interactionRadius) * 1.2;
          const tangentAngle = angle + Math.PI / 2;
          particle.vx += Math.cos(tangentAngle) * swirl * (mouseSpeed * 0.1);
          particle.vy += Math.sin(tangentAngle) * swirl * (mouseSpeed * 0.1);
        }
        avoidAreasRef.current.forEach((rect) => {
          if (particle.x > rect.left - 50 && particle.x < rect.right + 50 && particle.y > rect.top - 50 && particle.y < rect.bottom + 50) {
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const rdx = particle.x - cx;
            const rdy = particle.y - cy;
            const isInside = particle.x > rect.left && particle.x < rect.right && particle.y > rect.top && particle.y < rect.bottom;
            const repelForce = isInside ? 0.5 : 0.1;
            if (rect.width > 0) particle.vx += rdx / rect.width * repelForce;
            if (rect.height > 0) particle.vy += rdy / rect.height * repelForce;
          }
        });
        particle.vx += (Math.random() - 0.5) * 0.01;
        particle.vy += (Math.random() - 0.5) * 0.01;
        particle.vx += 0.01;
        particle.vy -= 5e-3;
        particle.vx *= 0.96;
        particle.vy *= 0.96;
        const baseDistX = particle.baseX - particle.x;
        const baseDistY = particle.baseY - particle.y;
        particle.vx += baseDistX * 5e-4;
        particle.vy += baseDistY * 5e-4;
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < -100) {
          particle.x = canvas.width + 100;
          particle.baseX = particle.x;
        }
        if (particle.x > canvas.width + 100) {
          particle.x = -100;
          particle.baseX = particle.x;
        }
        if (particle.y < -100) {
          particle.y = canvas.height + 100;
          particle.baseY = particle.y;
        }
        if (particle.y > canvas.height + 100) {
          particle.y = -100;
          particle.baseY = particle.y;
        }
        if (particle.type === "grain") {
          ctx.beginPath();
          ctx.fillStyle = `rgba(100, 110, 140, ${particle.opacity})`;
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const hue = particle.hue || 200;
          const lightness = particle.lightness || 50;
          ctx.beginPath();
          const gradient = ctx.createRadialGradient(
            particle.x - particle.size * 0.3,
            particle.y - particle.size * 0.3,
            0,
            particle.x,
            particle.y,
            particle.size
          );
          gradient.addColorStop(0, `hsla(${hue}, 70%, 90%, ${particle.opacity * 2})`);
          gradient.addColorStop(1, `hsla(${hue}, 60%, ${lightness}%, ${particle.opacity})`);
          ctx.fillStyle = gradient;
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = `hsla(${hue}, 60%, ${lightness}%, ${particle.opacity * 1.5})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    const interval = setInterval(updateAvoidAreas, 2e3);
    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(interval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [position]);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: canvasRef,
      className: `pointer-events-none ${position === "absolute" ? "absolute inset-0" : "fixed inset-0"} ${className}`,
      style: { zIndex: position === "absolute" ? 0 : -1, background: "transparent" }
    }
  );
};
const Footer = () => {
  const formatPhone = (raw) => {
    const digits = raw.replace(/\D/g, "");
    if (!digits) return raw;
    if (digits.startsWith("44")) {
      const rest = digits.slice(2);
      if (rest.length === 10) {
        return `+44 ${rest.slice(0, 2)} ${rest.slice(2, 6)} ${rest.slice(6)}`;
      }
      return `+44 ${rest.replace(/(\d{3})(?=\d)/g, "$1 ").trim()}`;
    }
    if (digits.length === 11 && digits.startsWith("1")) {
      return `+1 ${digits.slice(1, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
    }
    return `+${digits.replace(/(\d{3})(?=\d)/g, "$1 ").trim()}`;
  };
  const rawPhone = siteContent.company.phone;
  const phoneDigits = rawPhone.replace(/\D/g, "");
  const formattedPhone = formatPhone(rawPhone);
  return /* @__PURE__ */ jsxs("footer", { className: "bg-gray-900 text-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(AntigravityCanvas, { position: "absolute" }),
    /* @__PURE__ */ jsx("div", { className: "bg-primary-600" }),
    /* @__PURE__ */ jsxs("div", { className: "container py-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: siteContent.company.name }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4", children: siteContent.company.tagline }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-gray-400", children: [
            /* @__PURE__ */ jsx("p", { children: siteContent.company.address.street }),
            /* @__PURE__ */ jsx("p", { children: siteContent.company.address.city }),
            /* @__PURE__ */ jsx("p", { children: siteContent.company.address.place })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Quick Links" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/what-we-treat", className: "text-gray-400 hover:text-white transition-colors", children: "What We Treat" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services", className: "text-gray-400 hover:text-white transition-colors", children: "Services" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "text-gray-400 hover:text-white transition-colors", children: "About Us" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/prices", className: "text-gray-400 hover:text-white transition-colors", children: "Pricing & Insurance" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Contact Us" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-400", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: `https://wa.me/${phoneDigits}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-white transition-colors flex items-center space-x-2",
                "aria-label": "WhatsApp",
                children: [
                  /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5 text-gray-400", fill: "currentColor", viewBox: "0 0 24 24", children: [
                    /* @__PURE__ */ jsx("path", { d: "M20.52 3.478A11.884 11.884 0 0012.03.002C5.49.002.48 5.01.48 11.55c0 2.03.53 4.01 1.54 5.77L.04 23.5l6.4-1.68a11.5 11.5 0 005.59 1.35h.01c6.54 0 11.56-5.01 11.56-11.54 0-3.09-1.2-5.99-3.14-8.06zM12.03 21.02c-1.8 0-3.54-.48-5.07-1.39l-.36-.22-3.8 1 1-3.7-.23-.38A8.35 8.35 0 013.67 11.55c0-4.6 3.73-8.33 8.36-8.33 2.24 0 4.35.87 5.93 2.45 1.58 1.58 2.45 3.7 2.45 5.93 0 4.63-3.73 8.32-8.38 8.32z" }),
                    /* @__PURE__ */ jsx("path", { d: "M17.57 14.17c-.29-.15-1.71-.84-1.98-.94-.27-.11-.47-.15-.67.15s-.77.94-.94 1.13c-.17.19-.34.21-.63.07-.29-.15-1.23-.45-2.34-1.45-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.67-1.6-.92-2.19-.24-.57-.49-.49-.67-.5l-.57-.01c-.19 0-.5.07-.77.36s-1.01.99-1.01 2.42 1.04 2.8 1.18 3 .42.5.71.8.99 1.28 1.9 2.05c1.31 1.06 2.37 1.37 2.79 1.52.42.15.67.13.92-.08.24-.21 1-1.17 1.14-1.49.14-.31.14-.58.10-.64-.05-.06-.18-.10-.38-.24z" })
                  ] }),
                  /* @__PURE__ */ jsx("span", { children: formattedPhone })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: `mailto:${siteContent.company.email}`, className: "hover:text-white transition-colors flex items-center space-x-2", "aria-label": "Email", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-gray-400", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" }) }),
              /* @__PURE__ */ jsx("span", { children: siteContent.company.email })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Opening Hours" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-gray-400", children: [
              /* @__PURE__ */ jsx("li", { children: siteContent.company.hours.weekday }),
              /* @__PURE__ */ jsx("li", { children: siteContent.company.hours.saturday }),
              /* @__PURE__ */ jsx("li", { children: siteContent.company.hours.sunday })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Accreditations" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: siteContent.accreditations.map((acc) => /* @__PURE__ */ jsxs("div", { className: "text-gray-400 text-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-white", children: acc.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs", children: acc.fullName })
          ] }, acc.name)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Follow Us" }),
            /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: siteContent.company.social.facebook,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-gray-400 hover:text-white transition-colors",
                  "aria-label": "Facebook",
                  children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: siteContent.company.social.instagram,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-gray-400 hover:text-white transition-colors",
                  "aria-label": "Instagram",
                  children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: siteContent.company.social.twitter,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-gray-400 hover:text-white transition-colors",
                  "aria-label": "Twitter",
                  children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" }) })
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ",
          siteContent.company.name,
          ". All rights reserved."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 space-x-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/terms", className: "hover:text-white transition-colors", children: "Terms & Conditions" }),
          /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "hover:text-white transition-colors", children: "Privacy Policy" })
        ] })
      ] })
    ] })
  ] });
};
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
    try {
      const GA_ID = "G-0H6C329NMN";
      const w = window;
      if (w && typeof w.gtag === "function") {
        w.gtag("config", GA_ID, { page_path: pathname });
      }
    } catch (e) {
    }
  }, [pathname]);
  return null;
};
const ScrollAnimation = ({
  as = "div",
  className = "",
  children,
  variant = "fade-up",
  delay = 0,
  threshold = 0.15
  // Trigger slightly earlier than headings
}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px"
      }
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [threshold]);
  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-[600ms] ease-out transform-gpu will-change-transform motion-reduce:transition-none motion-reduce:transform-none";
    const variants = {
      "fade-up": {
        visible: "opacity-100 translate-y-0",
        hidden: "opacity-0 translate-y-8"
      },
      "slide-in-left": {
        visible: "opacity-100 translate-x-0",
        hidden: "opacity-0 -translate-x-12"
      },
      "slide-in-right": {
        visible: "opacity-100 translate-x-0",
        hidden: "opacity-0 translate-x-12"
      },
      "scale": {
        visible: "opacity-100 scale-100",
        hidden: "opacity-0 scale-95"
      },
      "blur-up": {
        visible: "opacity-100 translate-y-0 blur-0",
        hidden: "opacity-0 translate-y-8 blur-sm"
      }
    };
    const animationState = inView ? variants[variant].visible : variants[variant].hidden;
    return `${baseClasses} ${animationState}`;
  };
  const Comp = as;
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: `${getAnimationClasses()} ${className}`,
      style: {
        transitionDelay: `${delay}ms`
      },
      children
    }
  );
};
const BOOKING_URL = "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login";
const Hero = ({
  title,
  subtitle,
  description,
  ctaPrimary,
  ctaSecondary,
  ctaSecondaryLink = "/contact",
  backgroundVideo,
  backgroundImage
}) => {
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full min-h-[calc(100vh-6.5rem)] lg:min-h-[calc(100vh-7.5rem)] flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0 text-left", children: [
      backgroundVideo ? /* @__PURE__ */ jsx(
        "video",
        {
          className: "w-full h-full object-cover scale-105 animate-slow-zoom",
          src: backgroundVideo,
          autoPlay: true,
          muted: true,
          loop: true,
          playsInline: true
        }
      ) : backgroundImage ? /* @__PURE__ */ jsx(
        "img",
        {
          src: backgroundImage,
          alt: "Body First UK",
          className: "w-full h-full object-cover scale-105 animate-slow-zoom"
        }
      ) : /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/60 z-10" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-10" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container relative z-20 px-4 py-8 text-center lg:text-left", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto lg:mx-0", children: [
      subtitle && /* @__PURE__ */ jsx("div", { className: "inline-block mb-4 px-4 py-1 rounded-full bg-teal-400/20 border border-teal-400/30 backdrop-blur-md", children: /* @__PURE__ */ jsx("span", { className: "text-teal-400 font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs", children: subtitle }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-6 animate-fade-in-up", children: title.split(" ").map((word, i) => /* @__PURE__ */ jsxs("span", { className: i === title.split(" ").length - 1 ? "text-teal-400 block lg:inline" : "block lg:inline", children: [
        word,
        " "
      ] }, i)) }),
      description && /* @__PURE__ */ jsx("p", { className: "max-w-2xl text-lg md:text-xl text-teal-50/90 font-light leading-relaxed mb-8 mx-auto lg:mx-0 animate-fade-in-up delay-100", children: description }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center lg:justify-start gap-3 mb-10 animate-fade-in-up delay-200", children: ["Advanced Assessment", "Elite Treatment", "Full Recovery", "Ongoing Wellness"].map((label, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-slate-200 text-xs md:text-sm font-medium hover:bg-white/10 transition-all shadow-sm",
          style: { animationDelay: `${(i + 3) * 100}ms` },
          children: label
        },
        label
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 animate-fade-in-up delay-300", children: [
        ctaPrimary && /* @__PURE__ */ jsxs(
          "a",
          {
            href: BOOKING_URL,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group relative inline-flex items-center justify-center px-10 py-5 bg-teal-500 text-white rounded-full font-black text-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]",
            children: [
              /* @__PURE__ */ jsx("span", { className: "relative z-10", children: ctaPrimary }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
            ]
          }
        ),
        ctaSecondary && /* @__PURE__ */ jsx(
          Link,
          {
            to: ctaSecondaryLink,
            className: "inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 hover:border-white text-white rounded-full font-bold text-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all font-black",
            children: ctaSecondary
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block", children: /* @__PURE__ */ jsx("div", { className: "w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1", children: /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-teal-400 rounded-full" }) }) }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes slow-zoom {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1.05); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s ease-in-out infinite;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      ` })
  ] });
};
const InsuranceMarquee = ({ items, duration = 20 }) => {
  const duplicated = [...items, ...items];
  const trackStyle = {
    animationDuration: `${duration}s`
  };
  return /* @__PURE__ */ jsx("div", { className: "marquee", "aria-label": "Insurance partners", children: /* @__PURE__ */ jsx("div", { className: "marquee-track", style: trackStyle, children: duplicated.map((ins, i) => /* @__PURE__ */ jsx("div", { className: "marquee-item bg-white px-6 py-4 rounded-lg shadow-md ring-1 ring-teal-100", children: /* @__PURE__ */ jsx(
    "img",
    {
      src: ins.logo,
      alt: ins.name,
      className: "h-14 w-auto object-contain",
      loading: "lazy"
    }
  ) }, `${ins.name}-${i}`)) }) });
};
const HeadingScrollAnimation = ({
  as = "h2",
  className = "",
  children,
  variant = "fade-up",
  delay = 0,
  threshold = 0.3
}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px"
        // Trigger slightly before element enters viewport
      }
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [threshold]);
  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-[800ms] ease-out transform-gpu will-change-transform";
    const variants = {
      "fade-up": {
        visible: "opacity-100 translate-y-0",
        hidden: "opacity-0 translate-y-8"
      },
      "slide-in-left": {
        visible: "opacity-100 translate-x-0",
        hidden: "opacity-0 -translate-x-12"
      },
      "slide-in-right": {
        visible: "opacity-100 translate-x-0",
        hidden: "opacity-0 translate-x-12"
      },
      "scale": {
        visible: "opacity-100 scale-100",
        hidden: "opacity-0 scale-90"
      },
      "blur-up": {
        visible: "opacity-100 translate-y-0 blur-0",
        hidden: "opacity-0 translate-y-10 blur-sm"
      }
    };
    const animationState = inView ? variants[variant].visible : variants[variant].hidden;
    return `${baseClasses} ${animationState}`;
  };
  const Comp = as;
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: `${getAnimationClasses()} ${className}`,
      style: {
        transitionDelay: `${delay}ms`
      },
      children
    }
  );
};
const SEO = ({
  title = "Hampton Hill Physiotherapy | Pain Relief & Injury Care",
  description = "Trusted physiotherapy clinic in Hampton Hill. Specialising in pain relief, sports injuries & rehabilitation. HCPC registered therapists. Insurance accepted. Call 0203 818 1238.",
  canonical,
  ogImage = "https://bodyfirst.uk/images/social-share-1200x630.png",
  ogType = "website",
  noindex = false
}) => {
  const location = useLocation();
  const baseUrl = "https://bodyfirst.uk";
  const currentUrl = canonical || `${baseUrl}${location.pathname}`;
  useEffect(() => {
    document.title = title;
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };
    const updateLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.href = href;
    };
    updateMetaTag("description", description);
    updateMetaTag("robots", noindex ? "noindex,nofollow" : "index,follow");
    updateLinkTag("canonical", currentUrl);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:image:width", "1200", true);
    updateMetaTag("og:image:height", "630", true);
    updateMetaTag("og:image:alt", "Body First UK - Your Local Physio in Hampton Hill for Pain Relief & Rehabilitation", true);
    updateMetaTag("og:locale", "en_GB", true);
    updateMetaTag("og:site_name", "Body First UK", true);
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:url", currentUrl);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);
    updateMetaTag("twitter:image:alt", "Body First UK - Your Local Physio in Hampton Hill for Pain Relief & Rehabilitation");
    updateMetaTag("twitter:site", "@bodyfirstuk");
    updateMetaTag("theme-color", "#0d9488");
    if (location.pathname === "/") {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Body First UK",
        "alternateName": "BODY FIRST UK - Physio & Wellbeing Clinic",
        "url": baseUrl,
        "logo": `${baseUrl}/images/logo.png`,
        "image": ogImage,
        "description": "Expert physiotherapy and wellness clinic in Hampton Hill, London, offering comprehensive treatment for musculoskeletal conditions, sports injuries, chronic pain, and rehabilitation.",
        "telephone": "+442038181238",
        "email": "info@bodyfirst.uk",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "38 High Street, Hampton Hill",
          "addressLocality": "Hampton",
          "addressRegion": "London",
          "postalCode": "TW12 1PD",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "51.4256928",
          "longitude": "-0.3568561"
        },
        "areaServed": {
          "@type": "City",
          "name": "Hampton Hill"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "20:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "11:00",
            "closes": "20:00"
          }
        ],
        "priceRange": "££",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "200",
          "bestRating": "5",
          "worstRating": "1"
        },
        "sameAs": [
          "https://www.facebook.com/share/17pz212NhW/",
          "https://www.instagram.com/bodyfirstuk",
          "https://twitter.com/bodyfirstuk",
          "https://www.google.com/maps/place/BODY+FIRST+UK+-+Physio+%26+Wellbeing+Clinic/@51.4256928,-0.3568561,17z"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Physiotherapy Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalTherapy",
                "name": "Physiotherapy",
                "description": "Expert assessment and treatment for musculoskeletal conditions, pain relief, and injury rehabilitation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalTherapy",
                "name": "Sports Massage",
                "description": "Deep tissue massage for recovery, flexibility, and performance enhancement"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalTherapy",
                "name": "Shockwave Therapy",
                "description": "Non-invasive treatment for chronic injuries and pain management"
              }
            }
          ]
        }
      };
      script.textContent = JSON.stringify(schemaData);
    }
  }, [title, description, canonical, ogImage, ogType, noindex, location.pathname, currentUrl]);
  return null;
};
const seoConfig = {
  home: {
    title: "Expert Physiotherapy London | Body First UK Clinic",
    description: "Expert physiotherapy & wellness in Hampton, London. Sports massage, dry needling, shockwave therapy. HCPC registered. Insurance accepted. Book online today."
  },
  about: {
    title: "About Us | Body First UK Physiotherapy Clinic",
    description: "Meet our HCPC registered physiotherapy team in Hampton, London. Expert care, evidence-based treatment, and patient-centred approach since day one."
  },
  services: {
    title: "Physiotherapy Services London | Body First UK",
    description: "Comprehensive physiotherapy services: sports massage, dry needling, shockwave therapy, gait analysis, cupping & more. Book your treatment today."
  },
  whatWeTreat: {
    title: "Conditions We Treat | Body First UK Physiotherapy",
    description: "Expert treatment for back pain, sports injuries, knee pain, shoulder issues, chronic conditions & more. HCPC registered physiotherapists in Hampton, London."
  },
  prices: {
    title: "Pricing & Insurance | Body First UK Physiotherapy",
    description: "Transparent physiotherapy pricing from £65. We accept all major insurance providers including BUPA, AXA, Aviva. Book online or call today."
  },
  contact: {
    title: "Contact Us | Body First UK Physiotherapy Hampton",
    description: "Book your physiotherapy appointment in Hampton, London. Call +44 203 818 1238 or book online. Same-day appointments often available."
  },
  whyUs: {
    title: "Why Choose Body First UK | Expert Physiotherapy",
    description: "HCPC registered physiotherapists, evidence-based treatment, flexible hours, all insurance accepted. Discover why patients choose Body First UK."
  }
};
const Home = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(SEO, { title: seoConfig.home.title, description: seoConfig.home.description, canonical: "https://bodyfirst.uk/" }),
    /* @__PURE__ */ jsx(
      Hero,
      {
        title: "Move Better Feel Stronger",
        subtitle: "Elite Physiotherapy & Wellness",
        description: "At Body First UK, we combine expert physiotherapy with cutting-edge wellness treatments to help you move better, feel stronger, and live pain-free.",
        ctaPrimary: "Book Now",
        ctaSecondary: "Contact Us",
        backgroundVideo: "/videos/hero.mp4"
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white/80 backdrop-blur-sm", children: /* @__PURE__ */ jsx("div", { className: "container px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsx(Link, { to: "/what-we-treat", className: "group", children: /* @__PURE__ */ jsxs("div", { className: "h-full p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 mb-6 rounded-2xl bg-teal-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500", children: "🩺" }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-slate-900 mb-4 tracking-tight", children: "What We Treat" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 mb-6 leading-relaxed", children: "Expert treatment for a wide range of musculoskeletal conditions and injuries." }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center font-bold text-teal-600 group-hover:gap-2 transition-all", children: [
          "Learn more ",
          /* @__PURE__ */ jsx("span", { className: "opacity-0 group-hover:opacity-100 transition-all", children: "→" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Link, { to: "/services", className: "group", children: /* @__PURE__ */ jsxs("div", { className: "h-full p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 mb-6 rounded-2xl bg-teal-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500", children: "⚕️" }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-slate-900 mb-4 tracking-tight", children: "Our Services" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 mb-6 leading-relaxed", children: "Physiotherapy, sports massage, dry needling, and advanced wellness treatments." }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center font-bold text-teal-600 group-hover:gap-2 transition-all", children: [
          "View services ",
          /* @__PURE__ */ jsx("span", { className: "opacity-0 group-hover:opacity-100 transition-all", children: "→" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Link, { to: "/prices", className: "group", children: /* @__PURE__ */ jsxs("div", { className: "h-full p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 mb-6 rounded-2xl bg-teal-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500", children: "💷" }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-slate-900 mb-4 tracking-tight", children: "Pricing" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 mb-6 leading-relaxed", children: "Transparent pricing from £65. We work with all major private health insurance providers." }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center font-bold text-teal-600 group-hover:gap-2 transition-all", children: [
          "See pricing ",
          /* @__PURE__ */ jsx("span", { className: "opacity-0 group-hover:opacity-100 transition-all", children: "→" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("a", { href: "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login", target: "_blank", rel: "noopener noreferrer", className: "group", children: /* @__PURE__ */ jsxs("div", { className: "h-full p-8 rounded-3xl bg-teal-600 shadow-[0_20px_50px_rgba(20,184,166,0.3)] hover:shadow-[0_25px_60px_rgba(20,184,166,0.4)] transition-all duration-500 hover:-translate-y-2 border border-teal-500", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 mb-6 rounded-2xl bg-white/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500", children: "📅" }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-white mb-4 tracking-tight", children: "Book Now" }),
        /* @__PURE__ */ jsx("p", { className: "text-teal-50 mb-6 leading-relaxed", children: "Easy online booking. Same-day appointments often available at our London clinic." }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center font-bold text-white group-hover:gap-2 transition-all", children: [
          "Book online ",
          /* @__PURE__ */ jsx("span", { className: "opacity-0 group-hover:opacity-100 transition-all", children: "→" })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-transparent", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 text-center lg:text-left relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8 text-center lg:text-left", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-6", variant: "fade-up", children: [
            "Elite ",
            /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Care" }),
            " Solutions"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 max-w-2xl leading-relaxed", children: "Comprehensive physiotherapy and wellness treatments tailored to your unique recovery journey." })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/services", className: "group shrink-0 inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full border border-slate-200 font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm", children: [
          "Explore All Services",
          /* @__PURE__ */ jsx("span", { className: "group-hover:translate-x-1 transition-transform", children: "→" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-2 gap-8", children: servicesData.slice(0, 4).map((service) => /* @__PURE__ */ jsx(
        ScrollAnimation,
        {
          variant: "fade-up",
          className: "bg-white rounded-3xl p-6 group overflow-hidden border border-slate-200 shadow-md hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300",
          children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6 text-left h-full", children: [
            /* @__PURE__ */ jsx("div", { className: "w-full md:w-40 h-40 flex-shrink-0 overflow-hidden rounded-2xl shadow-inner bg-slate-100", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: service.heroImage || "/images/logo.jpg",
                alt: service.name,
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col justify-between py-1", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-slate-900 mb-2 group-hover:text-teal-600 transition-colors leading-tight", children: service.name }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-600 mb-4 line-clamp-2 leading-relaxed text-sm", children: service.shortDescription })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsxs(
                Link,
                {
                  to: `/services/${service.slug}`,
                  className: "inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-teal-600 transition-all group/btn shadow-md",
                  children: [
                    "Explore Treatment",
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2.5,
                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                          }
                        )
                      }
                    )
                  ]
                }
              ) })
            ] })
          ] })
        },
        service.slug
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/services",
          className: "inline-flex items-center gap-3 px-8 py-4 bg-teal-50 text-teal-700 rounded-full font-black hover:bg-teal-100 transition-all shadow-sm",
          children: [
            "View All Services",
            /* @__PURE__ */ jsx("span", { children: "→" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white/60 backdrop-blur-sm overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-6", variant: "slide-in-left", children: [
          "Voices of ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Recovery" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed", children: "Trusted by hundreds of patients across London for professional, life-changing care." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-2", children: siteContent.testimonials.map((testimonial, index) => /* @__PURE__ */ jsxs(
        ScrollAnimation,
        {
          variant: "fade-up",
          className: `p-8 rounded-3xl bg-white border border-slate-200 hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300 ${index % 2 !== 0 ? "lg:translate-y-8" : ""}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-6", children: [...Array(testimonial.rating)].map((_, i) => /* @__PURE__ */ jsx("span", { className: "text-amber-400 text-lg", children: "★" }, i)) }),
            /* @__PURE__ */ jsxs("p", { className: "text-slate-700 mb-8 italic text-lg leading-relaxed", children: [
              '"',
              testimonial.text,
              '"'
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-700", children: testimonial.name.split(" ").map((n) => n[0]).join("") }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-black text-slate-900 leading-none mb-1", children: testimonial.name }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-teal-600 font-medium", children: testimonial.service })
              ] })
            ] })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-3xl shadow-2xl mb-8", children: [
          /* @__PURE__ */ jsx("div", { className: "flex -space-x-3", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full border-2 border-slate-900 bg-teal-500 flex items-center justify-center text-[10px] font-bold", children: "BF" }, i)) }),
          /* @__PURE__ */ jsx("div", { className: "h-8 w-px bg-white/20 mx-2" }),
          /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-2xl font-black flex items-center gap-2", children: [
              "4.9/5 ",
              /* @__PURE__ */ jsx("span", { className: "text-amber-400 text-base", children: "★★★★★" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400 uppercase tracking-widest font-bold", children: "200+ Google Reviews" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://www.google.com/maps/place/BODY+FIRST+UK+-+Physio+%26+Wellbeing+Clinic/@51.4256961,-0.359431,17z/data=!4m18!1m9!3m8!1s0x48760b5ea482eda5:0xb1dababe47d75f95!2sBODY+FIRST+UK+-+Physio+%26+Wellbeing+Clinic!8m2!3d51.4256928!4d-0.3568561!9m1!1b1!16s%2Fg%2F11dylwm6fj!3m7!1s0x48760b5ea482eda5:0xb1dababe47d75f95!8m2!3d51.4256928!4d-0.3568561!9m1!1b1!16s%2Fg%2F11dylwm6fj?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-slate-900 font-black flex items-center gap-2 hover:text-teal-600 transition-colors",
            children: [
              "Watch All Google Reviews ",
              /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "→" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-transparent", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-between mb-16 gap-8 text-center lg:text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl font-black text-slate-900 mb-4", variant: "scale", children: [
            "Insurance ",
            /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Coverage" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600", children: "Seamlessly integrated with all major health insurance providers for your ease of treatment." })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/prices", className: "shrink-0 inline-flex items-center gap-2 font-bold text-teal-600 hover:gap-3 transition-all", children: [
          "Verify your coverage ",
          /* @__PURE__ */ jsx("span", { children: "→" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-12 rounded-[3rem] bg-white border border-slate-100 shadow-sm relative overflow-hidden group", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/70 to-transparent z-10 pointer-events-none" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/70 to-transparent z-10 pointer-events-none" }),
        /* @__PURE__ */ jsx(InsuranceMarquee, { items: siteContent.insurance.accepted, duration: 25 })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white/60 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
          /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-6", variant: "blur-up", children: [
            "The ",
            /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Experts" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0", children: "Highly qualified professionals dedicated to your recovery and specialized in elite care." })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/about#team", className: "group shrink-0 inline-flex items-center gap-3 bg-slate-900 px-8 py-4 rounded-full font-bold text-white hover:bg-teal-600 transition-all shadow-lg", children: [
          "Meet Full Team",
          /* @__PURE__ */ jsx("span", { className: "group-hover:translate-x-1 transition-transform", children: "→" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-10", children: siteContent.team.map((member, index) => /* @__PURE__ */ jsxs(
        ScrollAnimation,
        {
          className: "group relative",
          variant: "fade-up",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 relative shadow-xl", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: member.image,
                  alt: member.name,
                  className: "w-full h-full object-cover transition-all duration-700 group-hover:scale-110",
                  loading: "lazy",
                  onError: (e) => {
                    e.currentTarget.src = "/images/team/fallback.png";
                  }
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" }),
              /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-2", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest font-black text-teal-400 mb-2 drop-shadow-md whitespace-pre-line", children: member.qualifications }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium leading-relaxed text-white drop-shadow-md", children: member.description })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-slate-900 mb-1", children: member.name }),
              /* @__PURE__ */ jsx("p", { className: "text-teal-600 font-bold uppercase tracking-widest text-xs", children: member.role })
            ] })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-transparent", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-3xl font-black text-slate-900 mb-4", variant: "blur-up", children: [
          "Professional ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Standards" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600 max-w-2xl mx-auto", children: "All our physiotherapists are fully qualified and registered with professional bodies, ensuring the highest level of care." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto", children: siteContent.accreditations.map((acc, index) => /* @__PURE__ */ jsxs(
        ScrollAnimation,
        {
          className: "group p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300 text-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "h-20 mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: acc.logo,
                alt: acc.name,
                className: "max-h-full max-w-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-black text-slate-900 mb-2", children: acc.name }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm font-medium tracking-wide uppercase", children: acc.fullName })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-white/60 backdrop-blur-sm relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50 rounded-full blur-[120px] opacity-50 -z-10" }),
      /* @__PURE__ */ jsxs("div", { className: "container px-4 relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
          /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-6", variant: "slide-in-right", children: [
            "Why ",
            /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Body First" }),
            " UK?"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed", children: "We combine clinical excellence with a patient-first philosophy to ensure the fastest, safest recovery possible." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
          { icon: "🏆", title: "Expert Team", color: "bg-teal-50 text-teal-600", desc: "HCPC and CSP registered physiotherapists with years of clinical experience." },
          { icon: "🎯", title: "Personalised Care", color: "bg-emerald-50 text-emerald-600", desc: "Tailored treatment plans designed specifically for your unique recovery goals." },
          { icon: "⚡", title: "Advanced Techniques", color: "bg-teal-50 text-teal-600", desc: "Latest evidence-based treatments and cutting-edge rehabilitation equipment." },
          { icon: "📍", title: "Central Location", color: "bg-slate-50 text-slate-600", desc: "Convenient London location with excellent transport links and local parking." },
          { icon: "🕐", title: "Flexible Hours", color: "bg-teal-50 text-teal-600", desc: "Extended opening hours including evenings and Sundays to fit your busy life." },
          { icon: "💷", title: "Transparent Pricing", color: "bg-emerald-50 text-emerald-600", desc: "No hidden fees. Affordable professional care with major insurance accepted." }
        ].map((item, index) => /* @__PURE__ */ jsxs(ScrollAnimation, { className: "group p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300", variant: "fade-up", children: [
          /* @__PURE__ */ jsx("div", { className: `w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`, children: item.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-slate-900 mb-4 tracking-tight", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed font-medium", children: item.desc })
        ] }, index)) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-16", children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/why-us",
            className: "group inline-flex items-center gap-3 font-black text-slate-900 hover:text-teal-600 transition-colors text-lg",
            children: [
              "Discover our story ",
              /* @__PURE__ */ jsx("span", { className: "group-hover:translate-x-2 transition-transform", children: "→" })
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-32 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-slate-900" }),
      /* @__PURE__ */ jsx(AntigravityCanvas, { position: "absolute" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-teal-600 rounded-full blur-[150px] opacity-20 animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "container px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1]", variant: "fade-up", children: [
          "Start Your Journey to ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "Peak Performance" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-teal-50/70 mb-12 max-w-2xl mx-auto leading-relaxed", children: "Don't let pain define your limits. Book an elite assessment today and rediscover your body's full potential." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-6", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group relative inline-flex items-center justify-center px-12 py-6 bg-teal-500 text-white rounded-full font-black text-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(20,184,166,0.5)]",
              children: [
                /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Book Elite Assessment" }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "inline-flex items-center justify-center px-10 py-6 border-2 border-white/20 hover:border-white text-white rounded-full font-bold text-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all",
              children: "Contact Specialist"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-12 text-sm text-slate-500 font-bold tracking-[0.3em] uppercase", children: "Same day appointments often available" })
      ] }) })
    ] })
  ] });
};
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  return /* @__PURE__ */ jsxs("div", { className: `border-b border-slate-100 transition-all duration-300 ${isOpen ? "bg-slate-50/50 rounded-2xl" : ""}`, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "w-full flex items-center justify-between py-6 px-4 text-left group",
        onClick: () => setIsOpen(!isOpen),
        children: [
          /* @__PURE__ */ jsx("span", { className: `text-lg font-black transition-colors ${isOpen ? "text-teal-600" : "text-slate-900 group-hover:text-teal-600"}`, children: question }),
          /* @__PURE__ */ jsx("span", { className: `flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "bg-teal-600 border-teal-600 text-white rotate-180" : "border-slate-200 text-slate-400 group-hover:border-teal-200 group-hover:text-teal-600"}`, children: /* @__PURE__ */ jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: contentRef,
        className: "overflow-hidden transition-all duration-500 ease-in-out",
        style: {
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px"
        },
        children: /* @__PURE__ */ jsx("div", { className: "px-4 pb-8 text-slate-600 leading-relaxed", children: answer })
      }
    )
  ] });
};
const Accordion = ({ items }) => {
  return /* @__PURE__ */ jsx("div", { className: "space-y-2", children: items.map((item, index) => /* @__PURE__ */ jsx(AccordionItem, { ...item }, index)) });
};
const WhatWeTreat = () => {
  const faqItems = [
    {
      question: "How quickly will I see results?",
      answer: "Most patients experience significant improvement within 2–3 sessions, though exact timelines vary based on the clinical diagnosis and individual response to treatment. We provide a realistic roadmap during your initial assessment."
    },
    {
      question: "Do I need a referral from my GP?",
      answer: "No GP referral is required for private physiotherapy. You can book directly with us. However, if you are using private health insurance, we recommend checking if your provider requires a referral for claim processing."
    },
    {
      question: "What should I wear to my session?",
      answer: "We recommend comfortable, loose clothing that allows access to the area being treated. For lower limb issues, shorts are ideal; for upper body issues, a vest or t-shirt is preferred."
    },
    {
      question: "Will the treatment be painful?",
      answer: "Some clinical techniques may cause brief discomfort as we work on restricted tissues, but we always prioritize your comfort and explain every step of the process beforehand."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "bg-transparent", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: seoConfig.whatWeTreat.title,
        description: seoConfig.whatWeTreat.description
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[50vh] flex items-center overflow-hidden bg-teal-900 py-12 lg:py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/Condition We Treat/whatwetreat.png",
            alt: "People receiving physiotherapy treatment",
            className: "w-full h-full object-cover transform scale-105"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/40 to-transparent" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container relative z-10 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl text-white", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl lg:text-7xl font-extrabold mb-6 leading-tight", children: [
          "Conditions We ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "Treat" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-teal-50 font-light max-w-2xl leading-relaxed", children: "Elite physiotherapy for musculoskeletal conditions, sports injuries, and advanced chronic pain management in London." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-transparent", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-10", children: treatmentCategories.map((category, index) => /* @__PURE__ */ jsxs(
      ScrollAnimation,
      {
        delay: index * 50,
        variant: "fade-up",
        className: "group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-700 border border-slate-100 flex flex-col h-full hover:-translate-y-2",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "h-56 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: category.heroImage || "/images/logo.jpg",
                alt: category.title,
                className: "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-white via-white/40 to-black/10 transition-colors duration-500 group-hover:via-white/20" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-10 flex-1 flex flex-col pt-0 -mt-10 relative z-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-white rounded-3xl shadow-2xl shadow-teal-900/10 flex items-center justify-center text-4xl mb-6 border border-slate-50 group-hover:rotate-6 transition-all duration-500", children: category.icon }),
              /* @__PURE__ */ jsx("h3", { className: "text-3xl font-black text-slate-900 group-hover:text-teal-600 transition-colors mb-4 line-clamp-1", children: category.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-medium text-sm mb-6 line-clamp-2 leading-relaxed", children: category.shortDescription })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-50/50 rounded-3xl p-6 mb-8 flex-1 border border-slate-100 group-hover:bg-teal-50/30 transition-colors", children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4", children: "Focus Areas" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: category.conditions.slice(0, 3).map((condition, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-sm text-slate-600 font-bold", children: [
                /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" }),
                condition.name
              ] }, idx)) })
            ] }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/what-we-treat/${category.slug}`,
                className: "w-full inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black transition-all group/btn shadow-lg shadow-slate-900/10 hover:bg-teal-600",
                children: [
                  "View Treatments",
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 3,
                          d: "M17 8l4 4m0 0l-4 4m4-4H3"
                        }
                      )
                    }
                  )
                ]
              }
            )
          ] })
        ]
      },
      category.slug
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white/60 backdrop-blur-sm", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-teal-600 font-black uppercase tracking-[0.3em] text-sm mb-4", children: "The Process" }),
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-6", variant: "fade-up", children: [
          "Elite Recovery ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Journey" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-12 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-[2.25rem] top-10 bottom-10 w-px bg-slate-100 hidden md:block" }),
        [
          {
            n: 1,
            t: "Clinical Assessment",
            d: "We begin with a high-fidelity evaluation of your history and movement patterns to identify the root physiological cause."
          },
          {
            n: 2,
            t: "Tailored Roadmap",
            d: "An elite treatment plan is crafted, combining hands-on therapy, advanced modalities, and targeted rehabilitation."
          },
          {
            n: 3,
            t: "Precision Treatment",
            d: "We deploy evidence-based clinical techniques and corrective exercises to accelerate your tissue healing and performance."
          },
          {
            n: 4,
            t: "Sustainable Health",
            d: "Empowering you with elite-level knowledge and self-management tools to prevent future injury and maintain peak wellness."
          }
        ].map((step, i) => /* @__PURE__ */ jsxs(ScrollAnimation, { variant: "fade-up", delay: i * 100, className: "relative pl-0 md:pl-24 group", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 w-16 h-16 rounded-[1.5rem] bg-teal-50 text-teal-600 flex items-center justify-center text-2xl font-black border border-teal-100 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500 hidden md:flex", children: step.n }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/30 group-hover:shadow-2xl transition-all duration-500", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4 md:hidden", children: [
              /* @__PURE__ */ jsx("span", { className: "w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black", children: step.n }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-slate-900", children: step.t })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-slate-900 mb-4 hidden md:block", children: step.t }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-lg leading-relaxed font-medium", children: step.d })
          ] })
        ] }, i))
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-transparent", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-teal-600 font-black uppercase tracking-[0.3em] text-sm mb-4", children: "Support" }),
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-6", variant: "slide-in-left", children: [
          "Common ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Questions" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(ScrollAnimation, { variant: "fade-up", className: "bg-white rounded-[3rem] border border-slate-100 shadow-xl p-8 lg:p-12", children: /* @__PURE__ */ jsx(Accordion, { items: faqItems }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden bg-slate-900", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-40", children: [
        /* @__PURE__ */ jsx("img", { src: "/images/Condition We Treat/whatwetreat.png", alt: "Recovery", className: "w-full h-full object-cover grayscale" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/80 to-teal-800/40" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container relative z-10 text-center px-4", children: [
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl lg:text-6xl font-black text-white mb-8", variant: "scale", children: [
          "Reclaim Your ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "Mobility" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl mb-12 text-teal-50 max-w-2xl mx-auto font-light leading-relaxed", children: "Pain shouldn't be your normal. Experience the elite difference with our London clinical team." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "px-10 py-5 bg-teal-500 text-white rounded-full font-black text-xl hover:bg-teal-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(20,184,166,0.4)]",
              children: "Book Now"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "px-10 py-5 border-2 border-white/30 text-white rounded-full font-black text-xl hover:bg-white/10 transition-all backdrop-blur-sm shadow-xl",
              children: "Speak to Specialist"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const WhatWeTreatDetail = () => {
  const { slug } = useParams();
  const category = treatmentCategories.find((c) => c.slug === slug);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (!category) {
    return /* @__PURE__ */ jsx(Navigate, { to: "/what-we-treat", replace: true });
  }
  const { detailContent } = category;
  const getSectionType = (title) => {
    const t = title.toLowerCase();
    if (t.includes("causes")) return "causes";
    if (t.includes("symptoms")) return "symptoms";
    if (t.includes("how our") || t.includes("help") || t.includes("treatment")) return "help";
    if (t.includes("when to seek")) return "when";
    return "default";
  };
  const getImageForSlug = (slug2) => {
    if (slug2 === "head-jaw-pain") return "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop";
    if (slug2 === "neck-pain") return "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2074&auto=format&fit=crop";
    if (slug2 === "back-spine-pain") return "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop";
    return "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2070&auto=format&fit=crop";
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-transparent", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: `${category.title} | Body First UK`,
        description: detailContent.overview || "Expert physiotherapy and treatment for conditions in Hampton Hill, London.",
        canonical: `https://bodyfirst.uk/what-we-treat/${category.slug}`
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[60vh] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
        category.heroImage ? /* @__PURE__ */ jsx(
          "img",
          {
            src: category.heroImage,
            alt: category.heroAlt ?? category.title,
            className: "w-full h-full object-cover scale-105 animate-slow-zoom"
          }
        ) : /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-slate-50/50 z-10" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container relative z-20 pt-20 pb-12 lg:pt-32 lg:pb-24", children: [
        /* @__PURE__ */ jsx("nav", { className: "mb-8", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/what-we-treat",
            className: "group inline-flex items-center text-teal-100 hover:text-white transition-all duration-300",
            children: [
              /* @__PURE__ */ jsx("span", { className: "p-2 bg-white/10 rounded-full mr-3 group-hover:bg-white/20 transition-all", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-4 h-4 transform group-hover:-translate-x-1 transition-transform",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2.5,
                      d: "M15 19l-7-7 7-7"
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ jsx("span", { className: "font-medium tracking-wide uppercase text-xs", children: "All Conditions We Treat" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto lg:mx-0 text-white", children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight", children: [
            category.title,
            /* @__PURE__ */ jsx("span", { className: "block h-1.5 w-24 bg-teal-400 mt-4 rounded-full" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-teal-50/90 max-w-2xl leading-relaxed font-light mb-8", children: detailContent.overview }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-2xl shadow-teal-500/20",
                children: "Assess My Symptoms"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/contact",
                className: "bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all",
                children: "Contact Specialist"
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container -mt-10 lg:-mt-16 relative z-30 px-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl shadow-2xl shadow-teal-900/10 p-6 lg:p-10 border border-teal-50 flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-teal-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "py-4 md:py-0 md:px-8 text-center flex-1 w-full", children: [
        /* @__PURE__ */ jsx("span", { className: "block text-teal-600 font-bold text-lg mb-1", children: "Targeted Relief" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-sm", children: "Evidence-Based Treatment" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "py-4 md:py-0 md:px-8 text-center flex-1 w-full border-t md:border-t-0", children: [
        /* @__PURE__ */ jsx("span", { className: "block text-teal-600 font-bold text-lg mb-1", children: "Faster Recovery" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-sm", children: "Personalized Care Path" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "py-4 md:py-0 md:px-8 text-center flex-1 w-full border-t md:border-t-0", children: [
        /* @__PURE__ */ jsx("span", { className: "block text-teal-600 font-bold text-lg mb-1", children: "Expert Diagnosis" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-sm", children: "Experienced Phsysios" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "py-16 lg:py-24 space-y-24 lg:space-y-32", children: [
      detailContent.sections.map((section, index) => {
        const type = getSectionType(section.heading);
        const isEven = index % 2 === 0;
        if (type === "causes") {
          return /* @__PURE__ */ jsx("section", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: `flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`, children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-6", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xs uppercase tracking-[0.2em] font-bold text-teal-600", children: "The Root Cause" }),
              /* @__PURE__ */ jsx("h3", { className: "text-4xl lg:text-5xl font-bold text-slate-900 leading-tight", children: section.heading }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600 leading-relaxed", children: section.content }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-3 pt-4", children: section.bullets?.map((bullet, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-teal-500" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-700 font-medium", children: bullet })
              ] }, i)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 relative group w-full", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-teal-100 rounded-[2rem] transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 z-0" }),
              /* @__PURE__ */ jsx("div", { className: "relative z-10 overflow-hidden rounded-[2rem] shadow-2xl aspect-[4/3]", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: getImageForSlug(slug || ""),
                  alt: section.heading,
                  className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                }
              ) })
            ] })
          ] }) }, index);
        }
        if (type === "symptoms") {
          return /* @__PURE__ */ jsxs("section", { className: "bg-slate-900 py-24 lg:py-32 text-white relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-teal-500/10 blur-[100px] rounded-full" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full" }),
            /* @__PURE__ */ jsxs("div", { className: "container relative z-10 px-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mb-16", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-xs uppercase tracking-[0.2em] font-bold text-teal-400 mb-4", children: "Diagnosis" }),
                /* @__PURE__ */ jsx("h3", { className: "text-4xl lg:text-5xl font-extrabold mb-6 font-primary", children: section.heading }),
                /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-300", children: section.content })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: section.bullets?.map((bullet, i) => /* @__PURE__ */ jsxs("div", { className: "group bg-slate-800 border border-slate-600 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6 text-teal-400 group-hover:bg-teal-400 group-hover:text-white transition-colors", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }) }),
                /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold mb-2 group-hover:text-teal-400 transition-colors uppercase tracking-tight", children: bullet }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-400", children: [
                  "Our assessment identifies and resolves ",
                  bullet.toLowerCase(),
                  " to restore your quality of life."
                ] })
              ] }, i)) })
            ] })
          ] }, index);
        }
        if (type === "help") {
          return /* @__PURE__ */ jsx("section", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl border border-slate-100 relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 grid lg:grid-cols-2 gap-16 items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-bold tracking-wider uppercase", children: "Our Approach" }),
              /* @__PURE__ */ jsx("h3", { className: "text-4xl lg:text-5xl font-bold text-slate-900", children: section.heading }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600 leading-relaxed", children: section.content }),
              /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: section.bullets?.map((bullet, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 group", children: [
                /* @__PURE__ */ jsx("span", { className: "w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all flex-shrink-0", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3, d: "M5 13l4 4L19 7" }) }) }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-700 font-medium text-sm", children: bullet })
              ] }, i)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-teal-50 rounded-[2rem] transform rotate-3 -z-10" }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
                  alt: "Physiotherapist at work",
                  className: "rounded-[2.5rem] shadow-2xl w-full h-full object-cover"
                }
              )
            ] })
          ] }) }) }, index);
        }
        return /* @__PURE__ */ jsx("section", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-100/50 p-10 lg:p-16 rounded-[2rem] border border-slate-200", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold mb-6 text-slate-900", children: section.heading }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600 mb-8", children: section.content }),
          section.bullets && /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: section.bullets.map((bullet, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-teal-500" }),
            /* @__PURE__ */ jsx("span", { className: "text-slate-700", children: bullet })
          ] }, i)) })
        ] }) }, index);
      }),
      detailContent.faqs && detailContent.faqs.length > 0 && /* @__PURE__ */ jsx("section", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-teal-600 font-bold uppercase tracking-widest text-sm mb-4", children: "Common Concerns" }),
          /* @__PURE__ */ jsx("h3", { className: "text-4xl lg:text-5xl font-bold text-slate-900", children: "Frequently Asked Questions" })
        ] }),
        /* @__PURE__ */ jsx(ScrollAnimation, { variant: "fade-up", className: "bg-white rounded-[3rem] border border-slate-100 shadow-xl p-8 lg:p-12", children: /* @__PURE__ */ jsx(Accordion, { items: detailContent.faqs }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container pb-24 lg:pb-32 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-[3rem] bg-teal-600 p-12 lg:p-24 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-3xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl lg:text-6xl font-extrabold text-white leading-tight", children: [
          "Don't Let Pain ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-teal-200", children: "Hold You Back" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-teal-50 leading-relaxed font-light", children: "Secure your appointment online and start your journey towards a pain-free life today." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center pt-4", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "bg-white text-teal-700 px-12 py-5 rounded-full font-black text-xl hover:bg-teal-50 transition-colors shadow-2xl",
              children: "Book Assessment"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "bg-teal-700 text-white border border-teal-400/30 px-12 py-5 rounded-full font-bold text-xl hover:bg-teal-800 transition-colors",
              children: "Speak with Specialist"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "container py-8 text-center border-t border-slate-100", children: /* @__PURE__ */ jsxs(Link, { to: "/what-we-treat", className: "text-slate-400 hover:text-teal-600 font-medium transition-colors flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 19l-7-7 7-7m8 14l-7-7 7-7" }) }),
      "Back to All Conditions"
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s ease-in-out infinite;
        }
      ` })
  ] });
};
const Card = ({
  title,
  icon,
  image,
  children,
  className = "",
  hover = true,
  titleClassName,
  delay = 0
}) => {
  const hoverClasses = hover ? "hover:-translate-y-2 hover:shadow-2xl" : "";
  return /* @__PURE__ */ jsxs(
    ScrollAnimation,
    {
      variant: "fade-up",
      delay,
      className: `card p-6 ${hoverClasses} ${className}`,
      children: [
        (icon || image || title) && /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          image ? /* @__PURE__ */ jsx("div", { className: "w-16 h-16 mb-4 overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx("img", { src: image, alt: title || "icon", className: "w-full h-full object-cover" }) }) : icon ? /* @__PURE__ */ jsx("div", { className: "text-4xl mb-3", children: icon }) : null,
          title && /* @__PURE__ */ jsx("h3", { className: `text-xl font-bold ${titleClassName ?? "text-gray-900"}`, children: title })
        ] }),
        children
      ]
    }
  );
};
const Services = () => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-transparent", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: seoConfig.services.title,
        description: seoConfig.services.description
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[50vh] flex items-center overflow-hidden bg-teal-900 py-12 lg:py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/Condition We Treat/whatwetreat.png",
            alt: "Physiotherapy treatment session",
            className: "w-full h-full object-cover transform scale-105"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/40 to-transparent" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container relative z-10 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl text-white", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl lg:text-7xl font-extrabold mb-6 leading-tight", children: [
          "Our ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "Services" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-teal-50 font-light max-w-2xl leading-relaxed", children: "Experience peak physical performance through our comprehensive suite of evidence-based wellness and recovery treatments in London." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-transparent", children: /* @__PURE__ */ jsx("div", { className: "container px-4 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-12 max-w-6xl mx-auto", children: servicesData.map((service, index) => /* @__PURE__ */ jsx(
      ScrollAnimation,
      {
        variant: "fade-up",
        delay: index * 100,
        className: "bg-white rounded-3xl p-6 group overflow-hidden border border-slate-200 shadow-md hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-stretch", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-2/5 h-72 lg:h-auto overflow-hidden relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: service.heroImage || "/images/logo.jpg",
                alt: service.name,
                className: "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 p-8 lg:p-12 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: /* @__PURE__ */ jsx("span", { className: "px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-teal-100", children: "ELITE CARE" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-3xl lg:text-4xl font-black text-slate-900 mb-6 group-hover:text-teal-600 transition-colors leading-tight", children: service.name }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 mb-10 text-lg leading-relaxed line-clamp-3", children: service.shortDescription }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/services/${service.slug}`,
                className: "inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-full font-black text-lg hover:bg-teal-600 transition-all group/btn shadow-lg shadow-slate-900/10",
                children: [
                  "Explore Treatment",
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 3,
                          d: "M17 8l4 4m0 0l-4 4m4-4H3"
                        }
                      )
                    }
                  )
                ]
              }
            ) })
          ] })
        ] })
      },
      service.slug
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white/60 backdrop-blur-sm relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-teal-600 font-black uppercase tracking-[0.3em] text-sm mb-4", children: "The Experience" }),
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black mb-6 text-slate-900", variant: "fade-up", children: [
          "What to ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Expect" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-500 max-w-2xl mx-auto font-medium", children: "Every session at Body First UK is a step towards your peak performance." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: [
        {
          img: "/images/features/assessment.png",
          title: "Detailed Assessment",
          desc: "Comprehensive evaluation of movement patterns and goals to create a personalised recovery roadmap."
        },
        {
          img: "/images/features/treatment.png",
          title: "Hands-On Therapy",
          desc: "Expert manual techniques to reduce pain, improve mobility, and accelerate natural healing processes."
        },
        {
          img: "/images/features/rehab.png",
          title: "Premium Rehab",
          desc: "Tailored exercise programmes designed to strengthen, stabilise, and prevent future recurrences."
        },
        {
          img: "/images/features/education.png",
          title: "Expert Guidance",
          desc: "Clear, evidence-based explanations about your condition and practical advice for daily management."
        },
        {
          img: "/images/features/advanced.png",
          title: "Elite Modalities",
          desc: "Access to specialised treatments like Shockwave, Foot Scan, and advanced recovery technologies."
        },
        {
          img: "/images/features/assessment.png",
          title: "Progress Review",
          desc: "Regular reassessments to monitor your journey and fine-tune treatment for optimal performance."
        }
      ].map((feature, i) => /* @__PURE__ */ jsx(ScrollAnimation, { delay: i * 50, variant: "fade-up", className: "group", children: /* @__PURE__ */ jsx(
        Card,
        {
          image: feature.img,
          title: feature.title,
          className: "h-full rounded-[2rem] border border-slate-100 hover:border-teal-100 hover:shadow-2xl transition-all duration-500 overflow-hidden",
          children: /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-medium leading-relaxed", children: feature.desc })
        }
      ) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-slate-900 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx(AntigravityCanvas, { position: "absolute" }),
      /* @__PURE__ */ jsx("div", { className: "container px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2", children: [
          /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black mb-8", variant: "slide-in-left", children: [
            "Elite Benefits of ",
            /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "Our Care" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-400 mb-12 font-light leading-relaxed", children: "Join hundreds of patients who have transformed their quality of life through our evidence-based clinical approach." }),
          /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-8", children: [
            { title: "Pain Resolution", text: "Targeted techniques to resolve chronic and acute pain." },
            { title: "Elite Mobility", text: "Restore full range of motion and functional flexibility." },
            { title: "Rapid Recovery", text: "Accelerate healing from surgery and sports injuries." },
            { title: "Risk Mitigation", text: "Proactive strategies to reduce the risk of future injury." },
            { title: "Peak Performance", text: "Optimise movement patterns for superior athletic ability." },
            { title: "Reclaimed Life", text: "Return to the activities and sports you love, pain-free." }
          ].map((item, i) => /* @__PURE__ */ jsxs(ScrollAnimation, { delay: i * 100, variant: "fade-up", className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold border border-teal-500/20", children: "✓" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-black text-lg mb-2 text-teal-50", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm font-medium leading-relaxed", children: item.text })
            ] })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2 relative group", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-teal-500/10 rounded-[3rem] blur-3xl group-hover:bg-teal-500/20 transition-all duration-700" }),
          /* @__PURE__ */ jsxs("div", { className: "relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5]", children: [
            /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop", alt: "Recovery Benefits", className: "w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden bg-slate-900", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-40", children: [
        /* @__PURE__ */ jsx("img", { src: "/images/Condition We Treat/whatwetreat.png", alt: "Recovery", className: "w-full h-full object-cover grayscale" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/80 to-teal-800/40" })
      ] }),
      /* @__PURE__ */ jsx(AntigravityCanvas, { position: "absolute" }),
      /* @__PURE__ */ jsxs("div", { className: "container relative z-10 text-center px-4", children: [
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl lg:text-6xl font-black text-white mb-8", variant: "scale", children: [
          "Your Recovery ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "Starts Here" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl mb-12 text-teal-50 max-w-2xl mx-auto font-light leading-relaxed", children: "Don't let pain define your potential. Book an elite assessment with our London clinical team today." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "px-10 py-5 bg-teal-500 text-white rounded-full font-black text-xl hover:bg-teal-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(20,184,166,0.4)]",
              children: "Book Now"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "px-10 py-5 border-2 border-white/30 text-white rounded-full font-black text-xl hover:bg-white/10 transition-all backdrop-blur-sm shadow-xl",
              children: "Contact Us"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = slug ? findServiceBySlug(slug) : void 0;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (!service) {
    return /* @__PURE__ */ jsx(Navigate, { to: "/services", replace: true });
  }
  const getSectionType = (title) => {
    const t = title.toLowerCase();
    if (t.includes("what is")) return "intro";
    if (t.includes("who is it for")) return "who";
    if (t.includes("conditions")) return "conditions";
    if (t.includes("expect")) return "expect";
    if (t.includes("benefits")) return "benefits";
    return "default";
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-transparent", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: `${service.name} | ${"Body First UK"}`,
        description: service.shortDescription || service.heroDescription || "Expert physiotherapy services at Body First UK in Hampton Hill, London.",
        canonical: `https://bodyfirst.uk/services/${service.slug}`
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[60vh] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
        service.heroImage ? /* @__PURE__ */ jsx(
          "img",
          {
            src: service.heroImage,
            alt: service.heroAlt ?? service.name,
            className: "w-full h-full object-cover scale-105 animate-slow-zoom"
          }
        ) : /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-slate-50/50 z-10" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container relative z-20 pt-20 pb-12 lg:pt-32 lg:pb-24", children: [
        /* @__PURE__ */ jsx("nav", { className: "mb-8", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/services",
            className: "group inline-flex items-center text-teal-100 hover:text-white transition-all duration-300",
            children: [
              /* @__PURE__ */ jsx("span", { className: "p-2 bg-white/10 rounded-full mr-3 group-hover:bg-white/20 transition-all", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-4 h-4 transform group-hover:-translate-x-1 transition-transform",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2.5,
                      d: "M15 19l-7-7 7-7"
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ jsx("span", { className: "font-medium tracking-wide uppercase text-xs", children: "Explore All Services" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto lg:mx-0", children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight", children: [
            service.name,
            /* @__PURE__ */ jsx("span", { className: "block h-1.5 w-24 bg-teal-400 mt-4 rounded-full" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-teal-50/90 max-w-2xl leading-relaxed font-light mb-8", children: service.heroDescription }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-2xl shadow-teal-500/20",
                children: "Book Your Session"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/contact",
                className: "bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all",
                children: "Get in Touch"
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container -mt-10 lg:-mt-16 relative z-30 px-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl shadow-2xl shadow-teal-900/10 p-6 lg:p-10 border border-teal-50 flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-teal-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "py-4 md:py-0 md:px-8 text-center flex-1 w-full", children: [
        /* @__PURE__ */ jsx("span", { className: "block text-teal-600 font-bold text-lg mb-1", children: "Expert Care" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-sm", children: "Certified Professionals" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "py-4 md:py-0 md:px-8 text-center flex-1 w-full border-t md:border-t-0", children: [
        /* @__PURE__ */ jsx("span", { className: "block text-teal-600 font-bold text-lg mb-1", children: "Modern Clinic" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-sm", children: "State-of-the-art Tech" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "py-4 md:py-0 md:px-8 text-center flex-1 w-full border-t md:border-t-0", children: [
        /* @__PURE__ */ jsx("span", { className: "block text-teal-600 font-bold text-lg mb-1", children: "Tailored Plans" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-sm", children: "Personalized Recovery" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "py-16 lg:py-24 space-y-24 lg:space-y-32", children: service.sections.map((section, index) => {
      const type = getSectionType(section.title);
      const isEven = index % 2 === 0;
      if (type === "intro") {
        return /* @__PURE__ */ jsx("section", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: `flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xs uppercase tracking-[0.2em] font-bold text-teal-600", children: "Introduction" }),
            /* @__PURE__ */ jsx("h3", { className: "text-4xl lg:text-5xl font-bold text-slate-900 leading-tight", children: section.title }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600 leading-relaxed", children: section.body })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 relative group w-full", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-teal-100 rounded-[2rem] transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 z-0" }),
            /* @__PURE__ */ jsx("div", { className: "relative z-10 overflow-hidden rounded-[2rem] shadow-2xl aspect-[4/3]", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
                alt: "Physiotherapy session",
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              }
            ) })
          ] })
        ] }) }, index);
      }
      if (type === "conditions") {
        return /* @__PURE__ */ jsxs("section", { className: "bg-slate-900 py-24 lg:py-32 text-white relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-teal-500/10 blur-[100px] rounded-full" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full" }),
          /* @__PURE__ */ jsxs("div", { className: "container relative z-10 px-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mb-16", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xs uppercase tracking-[0.2em] font-bold text-teal-400 mb-4", children: "Therapeutic Scope" }),
              /* @__PURE__ */ jsx("h3", { className: "text-4xl lg:text-5xl font-extrabold mb-6 font-primary", children: section.title }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-300", children: section.body })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: section.bullets?.map((bullet, i) => /* @__PURE__ */ jsxs("div", { className: "group bg-slate-800 border border-slate-600 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6 text-teal-400 group-hover:bg-teal-400 group-hover:text-white transition-colors", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
              /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold mb-2 group-hover:text-teal-400 transition-colors", children: bullet }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-400", children: [
                "Our expert team provides targeted therapy to resolve ",
                bullet.toLowerCase(),
                " and restore full function."
              ] })
            ] }, i)) })
          ] })
        ] }, index);
      }
      if (type === "who") {
        return /* @__PURE__ */ jsx("section", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl border border-slate-100 relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 grid lg:grid-cols-2 gap-16 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-bold tracking-wider", children: "SUITABILITY" }),
            /* @__PURE__ */ jsx("h3", { className: "text-4xl lg:text-5xl font-bold text-slate-900", children: section.title }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600 leading-relaxed", children: section.body }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: section.bullets?.map((bullet, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 group", children: [
              /* @__PURE__ */ jsx("span", { className: "w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3, d: "M5 13l4 4L19 7" }) }) }),
              /* @__PURE__ */ jsx("span", { className: "text-slate-700 font-medium", children: bullet })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-teal-50 rounded-[2rem] transform rotate-3 -z-10" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
                alt: "Patients training",
                className: "rounded-[2.5rem] shadow-2xl w-full h-full object-cover"
              }
            )
          ] })
        ] }) }) }, index);
      }
      if (type === "expect") {
        return /* @__PURE__ */ jsxs("section", { className: "container px-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-teal-600 font-bold uppercase tracking-widest text-sm mb-4", children: "The Journey" }),
            /* @__PURE__ */ jsx("h3", { className: "text-4xl lg:text-5xl font-bold text-slate-900 mb-6", children: section.title }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600", children: section.body })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
            { t: "Assessment", d: "Deep dive into your condition and habits." },
            { t: "Treatment", d: "Hands-on therapy and expert guidance." },
            { t: "Recovery", d: "Long-term planning for sustained health." }
          ].map((step, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-3xl border border-slate-200 shadow-lg hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300 text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-teal-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 transform rotate-3", children: i + 1 }),
            /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold mb-3", children: step.t }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500", children: step.d })
          ] }, i)) })
        ] }, index);
      }
      return /* @__PURE__ */ jsx("section", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-100/50 p-10 lg:p-16 rounded-[2rem] border border-slate-200", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold mb-6 text-slate-900", children: section.title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600 mb-8", children: section.body }),
        section.bullets && /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: section.bullets.map((bullet, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-teal-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-700", children: bullet })
        ] }, i)) })
      ] }) }, index);
    }) }),
    /* @__PURE__ */ jsx("section", { className: "container pb-24 lg:pb-32 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-[3rem] bg-teal-600 p-12 lg:p-24 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-3xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl lg:text-6xl font-extrabold text-white leading-tight", children: [
          "Begin Your Recovery ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-200", children: "Today" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-teal-50 leading-relaxed font-light", children: "Expertly tailored physiotherapy sessions designed to get you back to peak performance without pain." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center pt-4", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "bg-white text-teal-700 px-12 py-5 rounded-full font-black text-xl hover:bg-teal-50 transition-colors shadow-2xl",
              children: "Book Securely Online"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "bg-teal-700 text-white border border-teal-400/30 px-12 py-5 rounded-full font-bold text-xl hover:bg-teal-800 transition-colors",
              children: "Talk to a Specialist"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-teal-200 text-sm font-semibold tracking-wider flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-white rounded-full animate-pulse" }),
          "Available for appointments this week"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "container py-8 text-center border-t border-slate-100", children: /* @__PURE__ */ jsxs(Link, { to: "/services", className: "text-slate-400 hover:text-teal-600 font-medium transition-colors flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 19l-7-7 7-7m8 14l-7-7 7-7" }) }),
      "Back to Services Overview"
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s ease-in-out infinite;
        }
      ` })
  ] });
};
const About = () => {
  const aboutHeroImage = "/images/Aboutus/hero.png";
  return /* @__PURE__ */ jsxs("div", { className: "bg-transparent", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: seoConfig.about.title,
        description: seoConfig.about.description
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[50vh] flex items-center overflow-hidden bg-teal-900 py-12 lg:py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: aboutHeroImage,
            alt: "About Body First UK",
            className: "w-full h-full object-cover transform scale-105",
            onError: (e) => {
              e.currentTarget.style.display = "none";
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/40 to-transparent" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl text-white", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl lg:text-7xl font-extrabold mb-6 leading-tight", children: [
          "About Body ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "First UK" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-teal-50 font-light max-w-2xl leading-relaxed", children: "Your trusted partner in health, recovery, and long-term wellness." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 overflow-hidden bg-transparent", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-16 mb-24", children: [
        /* @__PURE__ */ jsx(ScrollAnimation, { variant: "fade-up", className: "lg:w-1/2 order-2 lg:order-1", children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-teal-500/10 rounded-[2rem] blur-2xl group-hover:bg-teal-500/20 transition-all duration-700" }),
          /* @__PURE__ */ jsxs("div", { className: "relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
                alt: "Our Mission",
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                onError: (e) => e.currentTarget.src = "/images/logo.jpg"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2 order-1 lg:order-2", children: [
          /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-8", variant: "slide-in-left", children: [
            "Our ",
            /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Mission" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-lg text-slate-600 leading-relaxed", children: [
            /* @__PURE__ */ jsx("p", { children: siteContent.about.mission }),
            /* @__PURE__ */ jsxs("div", { className: "pt-4 flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "px-6 py-2 rounded-full bg-teal-50 text-teal-700 font-bold border border-teal-100 italic", children: '"Movement is Medicine"' }),
              /* @__PURE__ */ jsx("div", { className: "px-6 py-2 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-100", children: "Professional Care" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2", children: [
          /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-8 text-left", variant: "slide-in-right", children: [
            "Our ",
            /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Philosophy" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-lg text-slate-600 leading-relaxed", children: [
            /* @__PURE__ */ jsx("p", { children: siteContent.about.philosophy }),
            /* @__PURE__ */ jsx("p", { children: "We believe in treating the person, not just the symptom, ensuring long-term success and improved quality of life." })
          ] })
        ] }),
        /* @__PURE__ */ jsx(ScrollAnimation, { variant: "fade-up", className: "lg:w-1/2", children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-emerald-500/10 rounded-[2rem] blur-2xl group-hover:bg-emerald-500/20 transition-all duration-700" }),
          /* @__PURE__ */ jsxs("div", { className: "relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=2069&auto=format&fit=crop",
                alt: "Our Philosophy",
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                onError: (e) => e.currentTarget.src = "/images/logo.jpg"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-slate-900 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50/30 to-transparent opacity-10" }),
      /* @__PURE__ */ jsx(AntigravityCanvas, { position: "absolute" }),
      /* @__PURE__ */ jsxs("div", { className: "container px-4 relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
          /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black mb-6", variant: "fade-up", children: [
            "The ",
            /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "Values" }),
            " That Drive Us"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-400 max-w-2xl mx-auto", children: "Our core principles define every interaction and treatment plan we build for our patients." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: siteContent.about.values.map((value, index) => /* @__PURE__ */ jsxs(
          ScrollAnimation,
          {
            variant: "fade-up",
            delay: index * 100,
            className: "group p-8 rounded-3xl bg-slate-800 border border-slate-600 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform", children: "✨" }),
              /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold mb-3 text-white", children: [
                "Value ",
                index + 1
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed font-medium", children: value })
            ]
          },
          index
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "team", className: "py-24 bg-white/60 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-6", variant: "scale", children: [
          "Meet Our ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Experts" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 max-w-2xl mx-auto", children: "Highly qualified professionals dedicated to your recovery and physical excellence." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-10", children: siteContent.team.map((member, index) => /* @__PURE__ */ jsxs(
        ScrollAnimation,
        {
          variant: "fade-up",
          delay: index * 100,
          className: "group",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative rounded-[2.5rem] overflow-hidden mb-6 aspect-[4/5] shadow-xl group-hover:shadow-2xl transition-all duration-500", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: member.image,
                  alt: member.name,
                  className: "w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110",
                  loading: "lazy",
                  onError: (e) => {
                    e.currentTarget.src = "/images/team/fallback.png";
                  }
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-2", children: /* @__PURE__ */ jsx("p", { className: "text-white text-sm font-medium leading-relaxed drop-shadow-md", children: member.description }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left px-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-slate-900 mb-1 tracking-tight group-hover:text-teal-600 transition-colors", children: member.name }),
              /* @__PURE__ */ jsx("p", { className: "text-teal-600 font-black uppercase text-xs tracking-widest mb-3", children: member.role }),
              /* @__PURE__ */ jsx("div", { className: "inline-block px-6 py-2 rounded-2xl bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200 whitespace-pre-line mx-2", children: member.qualifications })
            ] })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-transparent", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-6", variant: "blur-up", children: [
          "World-Class ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Standards" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 max-w-2xl mx-auto mb-12", children: "Our therapists are fully registered with the UK's leading professional health bodies." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-20", children: siteContent.accreditations.map((acc, index) => /* @__PURE__ */ jsxs(
        ScrollAnimation,
        {
          variant: "fade-up",
          delay: index * 150,
          className: "flex flex-col items-center hover:-translate-y-2 transition-transform duration-500",
          children: [
            /* @__PURE__ */ jsx("div", { className: "h-24 px-4 py-2 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group w-full max-w-[200px]", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: acc.logo,
                alt: acc.name,
                className: "max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              }
            ) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 text-center mb-2", children: acc.name }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm text-center font-medium", children: acc.fullName })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxs(ScrollAnimation, { variant: "fade-up", className: "max-w-4xl mx-auto rounded-[2rem] bg-white p-10 shadow-xl border border-slate-100 relative overflow-hidden group", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-black text-slate-900 mb-8 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center", children: "🤝" }),
            "Excellence in Clinical Care"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-x-12 gap-y-6", children: [
            "Regulated by professional UK health bodies",
            "Continuous professional development (CPD)",
            "Fully insured clinical practitioners",
            "Evidence-based treatment protocols",
            "Highest hygiene & safety standards",
            "Patient confidentiality & MDT coordination"
          ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-slate-700 font-medium", children: [
            /* @__PURE__ */ jsx("span", { className: "shrink-0 w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center text-white text-[10px]", children: "✓" }),
            item
          ] }, i)) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white/60 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-20", children: /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-6", variant: "slide-in-right", children: [
        "Why ",
        /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Body First" }),
        " UK"
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto", children: [
        {
          icon: "🎓",
          title: "Elite Expertise",
          color: "teal",
          text: "Our team brings years of high-level clinical experience from elite sports to complex chronic cases."
        },
        {
          icon: "🤝",
          title: "Personalized Focus",
          color: "emerald",
          text: "We spend more time listening and assessing, ensuring a treatment plan as unique as your goals."
        },
        {
          icon: "📊",
          title: "Science-Driven",
          color: "teal",
          text: "Every technique we use is backed by the latest healthcare research and proven outcomes."
        },
        {
          icon: "⏱️",
          title: "Dedicated Time",
          color: "emerald",
          text: "We value quality over quantity, providing full, unhurried attention in every single session."
        }
      ].map((item, i) => /* @__PURE__ */ jsxs(
        ScrollAnimation,
        {
          delay: i * 100,
          className: "group p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300 text-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-14 h-14 rounded-2xl bg-${item.color}-50 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`, children: item.icon }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-slate-900 mb-3 tracking-tight", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed font-medium", children: item.text })
          ]
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden bg-slate-900", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-40", children: [
        /* @__PURE__ */ jsx("img", { src: "/images/Aboutus/hero.png", alt: "Recovery", className: "w-full h-full object-cover grayscale" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/80 to-teal-800/40" })
      ] }),
      /* @__PURE__ */ jsx(AntigravityCanvas, { position: "absolute" }),
      /* @__PURE__ */ jsxs("div", { className: "container relative z-10 text-center px-4", children: [
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl lg:text-6xl font-black text-white mb-8", variant: "scale", children: [
          "Your Recovery ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "Starts Here" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl mb-12 text-teal-50 max-w-2xl mx-auto font-light leading-relaxed", children: "Take the first step towards a revitalised, pain-free life with London's elite physiotherapy team." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "px-10 py-5 bg-teal-500 text-white rounded-full font-black text-xl hover:bg-teal-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(20,184,166,0.4)]",
              children: "Book Your Priority Session"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "px-10 py-5 border-2 border-white/30 text-white rounded-full font-black text-xl hover:bg-white/10 transition-all backdrop-blur-sm",
              children: "Contact Specialist"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const PricingCards = () => {
  const groupedPrices = siteContent.prices.reduce((acc, item) => {
    const category = item.category || "Other Services";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});
  return /* @__PURE__ */ jsx("div", { className: "space-y-24", children: Object.entries(groupedPrices).map(([category, items]) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 mb-12", children: [
      /* @__PURE__ */ jsx(
        HeadingScrollAnimation,
        {
          as: "h3",
          className: "text-3xl font-black text-slate-900 shrink-0 tracking-tight",
          variant: "fade-up",
          children: category
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "h-px bg-slate-200 w-full rounded-full" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8", children: items.map((item, index) => /* @__PURE__ */ jsxs(
      Card,
      {
        delay: index * 0.05,
        className: "flex flex-col justify-between h-full p-8 bg-white border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300 rounded-[2rem] group",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-between items-start mb-6", children: /* @__PURE__ */ jsx("h4", { className: "text-xl font-black text-slate-900 leading-tight group-hover:text-teal-600 transition-colors", children: item.service }) }),
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold bg-slate-50 text-slate-500 mb-8 border border-slate-100 group-hover:bg-teal-50 group-hover:text-teal-700 group-hover:border-teal-100 transition-colors", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
              item.duration
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-8 flex items-center justify-between border-t border-slate-50", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black mb-1", children: "Session Fee" }),
              /* @__PURE__ */ jsx("span", { className: "text-3xl font-black text-slate-900 leading-none group-hover:text-teal-600 transition-colors", children: item.price })
            ] }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center justify-center bg-slate-900 text-white font-black py-3 px-5 rounded-2xl hover:bg-teal-600 transition-all duration-300 text-sm shadow-lg shadow-slate-900/10 group-hover:shadow-teal-600/20",
                children: [
                  "Book",
                  /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 ml-2 transition-transform group-hover:translate-x-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14 5l7 7-7 7" }) })
                ]
              }
            )
          ] })
        ]
      },
      index
    )) })
  ] }, category)) });
};
const PricesInsurance = () => {
  const pricesHeroImage = "/images/insurance/hero.png";
  return /* @__PURE__ */ jsxs("div", { className: "bg-transparent", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: seoConfig.prices.title,
        description: seoConfig.prices.description
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[50vh] flex items-center overflow-hidden bg-teal-900 py-12 lg:py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: pricesHeroImage,
            alt: "Pricing and insurance at Body First UK",
            className: "w-full h-full object-cover transform scale-105",
            loading: "lazy",
            onError: (e) => {
              e.currentTarget.style.display = "none";
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/40 to-transparent" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container relative z-10 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl text-white", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl lg:text-7xl font-extrabold mb-6 leading-tight", children: [
          "Pricing & ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "Insurance" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-teal-50 font-light max-w-2xl leading-relaxed", children: "Premium care with transparent pricing. We are registered with all major health insurance providers for seamless claims." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-transparent", children: /* @__PURE__ */ jsx("div", { className: "container px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-6", variant: "fade-up", children: [
          "Treatment ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Investment" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed", children: "Affordable luxury care. Our rates reflect our expertise and the high-end technology used in every treatment." })
      ] }),
      /* @__PURE__ */ jsx(PricingCards, {}),
      /* @__PURE__ */ jsxs(ScrollAnimation, { variant: "fade-up", className: "mt-20 p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col lg:flex-row items-center justify-between gap-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:max-w-2xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-xs font-black", children: "!" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900", children: "Self-Paying Patients" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-lg leading-relaxed", children: "Prices listed are for self-paying individuals. All initial appointments include a comprehensive 45-minute clinical assessment and a personalized recovery roadmap." })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group relative inline-flex items-center justify-center px-10 py-5 bg-teal-500 text-white rounded-full font-black text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_10px_30px_rgba(20,184,166,0.3)] shrink-0",
            children: [
              "Book Your Assessment",
              /* @__PURE__ */ jsx("span", { className: "ml-3 group-hover:translate-x-1 transition-transform", children: "→" })
            ]
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white/60 backdrop-blur-sm overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-20 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2", children: [
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-8", variant: "slide-in-left", children: [
          "Major ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Insurance" }),
          " Accepted"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 leading-relaxed mb-10", children: "We work directly with major health insurers to ensure your focus stays on recovery, not paperwork." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6 mb-10", children: [
          { q: "Direct Billing", a: "We can submit claims directly to many insurers on your behalf." },
          { q: "Recognised Providers", a: "Fully registered with Bupa, AXA, Aviva, Vitality, and more." },
          { q: "Receipts Provided", a: "Digital receipts sent instantly for policy reimbursement." }
        ].map((item, i) => /* @__PURE__ */ jsxs(ScrollAnimation, { variant: "fade-up", delay: i * 100, className: "flex gap-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 font-bold", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-slate-900 mb-1", children: item.q }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500", children: item.a })
          ] })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:w-1/2 w-full", children: /* @__PURE__ */ jsxs("div", { className: "p-12 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-inner relative group overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" }),
        /* @__PURE__ */ jsx(InsuranceMarquee, { items: siteContent.insurance.accepted, duration: 25 }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm relative z-20", children: /* @__PURE__ */ jsxs("p", { className: "text-slate-600 italic text-center font-medium", children: [
          '"',
          siteContent.insurance.note,
          '"'
        ] }) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-transparent", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 text-center relative z-10", children: [
      /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-3xl md:text-4xl font-black text-slate-900 mb-16", variant: "blur-up", children: [
        "Payment & ",
        /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Policies" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16", children: [
        { icon: "💳", title: "Card Payments", desc: "All major credit and debit cards accepted, including contactless." },
        { icon: "💷", title: "Cash Accepted", desc: "We provide digital receipts for all cash transactions." },
        { icon: "🏥", title: "Insurance Billing", desc: "Available for Bupa, AXA, and other recognised providers." }
      ].map((item, i) => /* @__PURE__ */ jsxs(ScrollAnimation, { variant: "fade-up", className: "p-10 bg-white rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-500 text-center group", children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl mb-6 group-hover:scale-110 transition-transform", children: item.icon }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3 text-slate-900", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 leading-relaxed text-sm", children: item.desc })
      ] }, i)) }),
      /* @__PURE__ */ jsxs(ScrollAnimation, { variant: "fade-up", className: "max-w-3xl mx-auto p-10 bg-slate-900 text-white rounded-[2.5rem] relative overflow-hidden group", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" }),
        /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-black mb-6 flex items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-teal-400 text-3xl", children: "⏰" }),
          " Cancellation Policy"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-slate-400 text-lg leading-relaxed", children: [
          "We value your time and ours. Appointments cancelled with less than ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-bold", children: "24 hours' notice" }),
          " may be subject to the full appointment fee. Please contact us as soon as possible if you need to reschedule."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden bg-slate-900", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-40", children: [
        /* @__PURE__ */ jsx("img", { src: pricesHeroImage, alt: "Recovery", className: "w-full h-full object-cover grayscale" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/80 to-teal-800/40" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container relative z-10 text-center px-4", children: [
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl lg:text-6xl font-black text-white mb-8", variant: "scale", children: [
          "Ready to Start ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "Feeling Better?" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl mb-12 text-teal-50 max-w-2xl mx-auto font-light leading-relaxed", children: "Professional care is just a few clicks away. Secure your elite assessment today." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "px-10 py-5 bg-teal-500 text-white rounded-full font-black text-xl hover:bg-teal-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(20,184,166,0.4)]",
              children: "Book Now"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "px-10 py-5 border-2 border-white/30 text-white rounded-full font-black text-xl hover:bg-white/10 transition-all backdrop-blur-sm",
              children: "Contact Specialist"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const __vite_import_meta_env__ = {};
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const configured = __vite_import_meta_env__?.VITE_CONTACT_FORM_ENDPOINT;
    const endpoint = configured || "https://formsubmit.co/ajax/info@bodyfirst.uk";
    const finishSuccess = () => {
      setSubmitted(true);
      setLoading(false);
      setErrorMessage(null);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 5e3);
    };
    setLoading(true);
    setErrorMessage(null);
    try {
      if (endpoint.includes("formsubmit.co")) {
        const fd = new FormData();
        fd.append("name", formData.name);
        fd.append("email", formData.email);
        fd.append("phone", formData.phone);
        fd.append("message", formData.message);
        fd.append("_replyto", formData.email);
        fd.append("_subject", `Website enquiry from ${formData.name || "Website visitor"}`);
        fd.append("_captcha", "false");
        fd.append("_template", "table");
        fd.append("_format", "plain");
        const res = await fetch(endpoint, {
          method: "POST",
          body: fd,
          headers: { Accept: "application/json" }
        });
        setLoading(false);
        if (res.ok) {
          finishSuccess();
        } else {
          let msg = `Server returned ${res.status}`;
          try {
            const body = await res.json();
            if (body && (body.error || body.message)) msg = body.error || body.message;
          } catch (e2) {
          }
          setErrorMessage(msg);
        }
      } else {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
          })
        });
        setLoading(false);
        if (res.ok) {
          finishSuccess();
        } else {
          let msg = `Server returned ${res.status}`;
          try {
            const body = await res.json();
            if (body && body.error) msg = body.error;
          } catch (e2) {
          }
          setErrorMessage(msg);
        }
      }
    } catch (err) {
      console.error("Contact send error", err);
      setLoading(false);
      setErrorMessage(err?.message || "Network error");
    }
  };
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Ask an Expert" }),
    submitted && /* @__PURE__ */ jsx("div", { className: "mb-6 p-4 bg-green-50 border border-green-200 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-green-800 font-medium", children: "✓ Thank you! We'll get back to you within 24 hours." }) }),
    errorMessage && /* @__PURE__ */ jsxs("div", { className: "mb-4 p-4 bg-red-50 border border-red-200 rounded-lg", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-red-800 font-medium", children: [
        "Error sending message: ",
        errorMessage
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 mt-2", children: "You can also send directly using your email client:" }),
      /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            const to = "info@bodyfirst.uk";
            const subject = encodeURIComponent(`Website enquiry from ${formData.name || "Website visitor"}`);
            const bodyLines = [
              `Name: ${formData.name}`,
              `Email: ${formData.email}`,
              `Phone: ${formData.phone}`,
              "",
              `Message:
${formData.message}`
            ];
            const body = encodeURIComponent(bodyLines.join("\n"));
            const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
            window.location.href = mailto;
          },
          className: "inline-flex items-center justify-center bg-white border border-red-300 text-red-700 px-4 py-2 rounded-lg",
          children: "Send with my email app"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 mb-1", children: "Full Name *" }),
        /* @__PURE__ */ jsx("input", { id: "name", name: "name", value: formData.name, onChange: handleChange, required: true, className: "w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-1", children: "Email Address *" }),
        /* @__PURE__ */ jsx("input", { id: "email", type: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700 mb-1", children: "Phone Number" }),
        /* @__PURE__ */ jsx("input", { id: "phone", name: "phone", value: formData.phone, onChange: handleChange, className: "w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-1", children: "Your Message *" }),
        /* @__PURE__ */ jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleChange, required: true, rows: 5, className: "w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "w-full inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition",
          children: loading ? /* @__PURE__ */ jsx("span", { children: "Sending…" }) : "Send Message"
        }
      )
    ] })
  ] });
};
const Map = () => {
  const mapEmbedUrl = "https://www.google.com/maps?q=38+High+Street,+Hampton+Hill,+TW12+1PD,+United+Kingdom&output=embed";
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "aspect-video w-full rounded-xl overflow-hidden shadow-lg", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: mapEmbedUrl,
        width: "100%",
        height: "100%",
        style: { border: 0 },
        allowFullScreen: true,
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade",
        title: "Body First UK Location Map"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 p-6 bg-gray-50 rounded-lg", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-3 text-gray-900", children: "Visit Us" }),
      /* @__PURE__ */ jsxs("address", { className: "not-italic text-gray-700 space-y-1", children: [
        /* @__PURE__ */ jsx("p", { children: siteContent.company.address.street }),
        /* @__PURE__ */ jsx("p", { children: siteContent.company.address.city }),
        /* @__PURE__ */ jsx("p", { children: siteContent.company.address.place }),
        /* @__PURE__ */ jsx("p", { children: siteContent.company.address.country })
      ] })
    ] })
  ] });
};
const Contact = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  const faqItems = [
    {
      question: "How do I book an appointment?",
      answer: `You can book easily online through our booking portal, by calling us at ${siteContent.company.phone}, or via WhatsApp. We usually confirm all manual enquiries within 2 hours during business hours.`
    },
    {
      question: "Do you offer same-day appointments?",
      answer: "Yes, we prioritize acute injuries and often have same-day availability. We recommend calling or messaging us on WhatsApp for the most up-to-date same-day slots."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring any relevant medical reports or scans. We recommend wearing loose, comfortable clothing (like athletic wear) that allows easy access to the area being treated."
    },
    {
      question: "Can I use my private health insurance?",
      answer: "Absolutely. We are registered with all major UK health insurers including Bupa, AXA, Aviva, and Vitality. Please have your membership number and authorization code ready when booking."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, there is street parking available nearby, and we are conveniently located near public transport links for easy access."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "bg-transparent", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: seoConfig.contact.title,
        description: seoConfig.contact.description
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[50vh] flex items-center overflow-hidden bg-teal-900 py-12 lg:py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/Contact/contact_hero.png",
            alt: "Body First UK Contact",
            className: "w-full h-full object-cover transform scale-105",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/40 to-transparent" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container relative z-10 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl text-white", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl lg:text-7xl font-extrabold mb-6 leading-tight", children: [
          "Get in ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "Touch" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-teal-50 font-light max-w-2xl leading-relaxed", children: "Experience elite care. Contact our specialists today to start your journey to peak performance." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-transparent", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 mb-24", children: [
        {
          icon: "📞",
          title: "Call Us",
          value: siteContent.company.phone,
          href: `tel:${siteContent.company.phone}`,
          sub: "Mon-Fri: 9am-8pm"
        },
        {
          icon: /* @__PURE__ */ jsx("img", { src: "/images/icons/whatsapp.svg", alt: "WhatsApp", className: "w-10 h-10" }),
          title: "WhatsApp",
          value: "Message Specialist",
          href: `https://wa.me/${siteContent.company.whatsapp}`,
          sub: "Quick replies guaranteed"
        },
        {
          icon: "✉️",
          title: "Email Us",
          value: siteContent.company.email,
          href: `mailto:${siteContent.company.email}`,
          sub: "We reply within 24 hours"
        }
      ].map((method, i) => /* @__PURE__ */ jsxs(ScrollAnimation, { variant: "fade-up", delay: i * 100, className: "group p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "h-16 w-16 mx-auto mb-8 flex items-center justify-center rounded-2xl bg-teal-50 text-4xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500", children: method.icon }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-black text-slate-900 mb-2", children: method.title }),
        /* @__PURE__ */ jsx("a", { href: method.href, className: "text-teal-600 font-bold text-lg hover:underline block mb-2 break-all px-2", children: method.value }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm font-medium", children: method.sub })
      ] }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(ScrollAnimation, { variant: "fade-up", className: "bg-slate-900 text-white rounded-[3rem] p-12 relative overflow-hidden group", children: [
        /* @__PURE__ */ jsx(AntigravityCanvas, { position: "absolute" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-3xl font-black mb-4", children: [
              "Opening ",
              /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "Hours" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-1 w-20 bg-teal-500 mx-auto rounded-full" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-3 gap-8 text-center", children: [
            { day: "Mon – Fri", time: "9am – 8pm" },
            { day: "Saturday", time: "Closed" },
            { day: "Sunday", time: "11am – 8pm" }
          ].map((h, i) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-teal-400 font-black uppercase tracking-widest text-xs", children: h.day }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: h.time })
          ] }, i)) })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "book", className: "py-24 bg-white/60 backdrop-blur-sm relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-16 items-stretch", children: [
      /* @__PURE__ */ jsxs(ScrollAnimation, { variant: "fade-up", className: "lg:w-1/2 bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 p-10 lg:p-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-black text-slate-900 mb-4", children: [
            "Send us a ",
            /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Message" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-medium", children: "Have a specific question? Fill out the form below and a specialist will get back to you shortly." })
        ] }),
        /* @__PURE__ */ jsx(ContactForm, {})
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "map", className: "lg:w-1/2 flex flex-col", children: [
        /* @__PURE__ */ jsx(ScrollAnimation, { variant: "fade-up", className: "flex-1 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 relative group min-h-[400px]", children: /* @__PURE__ */ jsx(Map, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center gap-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl text-teal-600 shrink-0", children: "📍" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-black text-slate-900", children: "Clinic Location" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-medium", children: siteContent.company.address.place })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-transparent", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-6", variant: "slide-in-left", children: [
          "Common ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Questions" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600", children: "Everything you need to know about your first visit and treatment." })
      ] }),
      /* @__PURE__ */ jsx(ScrollAnimation, { variant: "fade-up", className: "bg-white rounded-[3rem] border border-slate-100 shadow-xl p-8 lg:p-12", children: /* @__PURE__ */ jsx(Accordion, { items: faqItems }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden bg-slate-900", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-40", children: [
        /* @__PURE__ */ jsx("img", { src: "/images/Contact/contact_hero.png", alt: "Recovery", className: "w-full h-full object-cover grayscale" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/80 to-teal-800/40" })
      ] }),
      /* @__PURE__ */ jsx(AntigravityCanvas, { position: "absolute" }),
      /* @__PURE__ */ jsxs("div", { className: "container relative z-10 text-center px-4", children: [
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl lg:text-6xl font-black text-white mb-8", variant: "scale", children: [
          "Ready to Take the ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "First Step?" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl mb-12 text-teal-50 max-w-2xl mx-auto font-light leading-relaxed", children: "Pain shouldn't be your normal. Join hundreds of patients who chose Body First UK for their recovery." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `tel:${siteContent.company.phone}`,
              className: "px-10 py-5 bg-teal-500 text-white rounded-full font-black text-xl hover:bg-teal-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(20,184,166,0.4)]",
              children: "Call Specialist Now"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "px-10 py-5 border-2 border-white/30 text-white rounded-full font-black text-xl hover:bg-white/10 transition-all backdrop-blur-sm shadow-xl",
              children: "Book Elite Assessment"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const WhyUs = () => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-transparent", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: seoConfig.whyUs.title,
        description: seoConfig.whyUs.description
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[50vh] flex items-center overflow-hidden bg-teal-900 py-12 lg:py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/Aboutus/hero.png",
            alt: "Why choose Body First UK",
            className: "w-full h-full object-cover transform scale-105",
            loading: "lazy",
            onError: (e) => {
              e.currentTarget.style.display = "none";
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/40 to-transparent" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl text-white", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl lg:text-7xl font-extrabold mb-6 leading-tight", children: [
          "Why Choose ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "Body First UK" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-teal-50 font-light max-w-2xl leading-relaxed", children: "We provide high-quality, evidence-based physiotherapy with compassionate, personalised care in the heart of London." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 overflow-hidden bg-transparent", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-16 mb-24", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2", children: [
          /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-8", variant: "slide-in-left", children: [
            "Elite ",
            /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Clinical" }),
            " Excellence"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-lg text-slate-600 leading-relaxed", children: [
            /* @__PURE__ */ jsx("p", { children: "At Body First UK, we don't just treat symptoms; we identify the root cause of your pain. Our clinicians are HCPC and CSP registered, bringing over a decade of elite experience to every session." }),
            /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4 pt-4", children: [
              "HCPC & CSP Registered",
              "Advanced Education",
              "Elite Sports Experience",
              "Evidence-Based Methods"
            ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 font-bold text-slate-700", children: [
              /* @__PURE__ */ jsx("span", { className: "w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-[10px]", children: "✓" }),
              item
            ] }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(ScrollAnimation, { variant: "fade-up", className: "lg:w-1/2", children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-teal-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-teal-500/20 transition-all duration-700" }),
          /* @__PURE__ */ jsx("div", { className: "relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop",
              alt: "Clinical Excellence",
              className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
              onError: (e) => e.currentTarget.src = "/images/Aboutus/hero.png"
            }
          ) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-16", children: [
        /* @__PURE__ */ jsx(ScrollAnimation, { variant: "fade-up", className: "lg:w-1/2 order-2 lg:order-1", children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-emerald-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-emerald-500/20 transition-all duration-700" }),
          /* @__PURE__ */ jsx("div", { className: "relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
              alt: "Patient Centred Care",
              className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
              onError: (e) => e.currentTarget.src = "/images/Aboutus/hero.png"
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2 order-1 lg:order-2 text-left", children: [
          /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-8", variant: "slide-in-right", children: [
            "Your ",
            /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Recovery" }),
            ", Our Priority"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-lg text-slate-600 leading-relaxed", children: [
            /* @__PURE__ */ jsx("p", { children: "Every patient journey is unique. We provide a full 45-minute initial assessment to truly understand your goals, whether that's returning to professional sport or playing with your grandchildren." }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "★" }),
                " Our Commitment"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 italic", children: '"We focus on measurable outcomes and open communication, creating treatment plans that fit your life, not just your symptoms."' })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-slate-900 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx(AntigravityCanvas, { position: "absolute" }),
      /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center mb-20", children: /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black mb-6", variant: "fade-up", children: [
          "Why Patients ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "Trust" }),
          " Us"
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
          { icon: "🏆", title: "Expert Clinicians", text: "HCPC & CSP registered with over 10 years of cross-specialty experience." },
          { icon: "🎯", title: "Personalised Plans", text: "Comprehensive assessments leading to tailored recovery programmes." },
          { icon: "⚡", title: "Modern Technology", text: "Access to Foot Scan, Shockwave, and advanced recovery modalities." },
          { icon: "📍", title: "Prime Location", text: "Centrally located in London with easy transport and parking access." },
          { icon: "🕐", title: "Flexible Timing", text: "Open late and on Sundays to accommodate your busy schedule." },
          { icon: "💷", title: "Insurance Direct", text: "Accepted by all major UK insurers with direct billing available." }
        ].map((item, i) => /* @__PURE__ */ jsxs(
          ScrollAnimation,
          {
            delay: i * 100,
            className: "group p-10 rounded-[2rem] bg-slate-800 border border-slate-600 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-5xl mb-6 group-hover:scale-110 transition-transform inline-block", children: item.icon }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black mb-3", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed font-medium", children: item.text })
            ]
          },
          i
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white/60 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl md:text-5xl font-black text-slate-900 mb-6", variant: "blur-up", children: [
          "Professional ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-600", children: "Standards" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 max-w-2xl mx-auto", children: "Our clinic and clinicians meet the highest regulatory and professional standards in the UK." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-20", children: siteContent.accreditations.map((acc, index) => /* @__PURE__ */ jsxs(
        ScrollAnimation,
        {
          variant: "fade-up",
          delay: index * 150,
          className: "flex flex-col items-center group",
          children: [
            /* @__PURE__ */ jsx("div", { className: "h-24 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center mb-6 w-full max-w-[200px] group-hover:-translate-y-2 transition-transform duration-500", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: acc.logo,
                alt: acc.name,
                className: "max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              }
            ) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 text-center mb-2", children: acc.name }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm text-center font-medium", children: acc.fullName })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden bg-slate-900", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-40", children: [
        /* @__PURE__ */ jsx("img", { src: "/images/Aboutus/hero.png", alt: "Recovery", className: "w-full h-full object-cover grayscale" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/80 to-teal-800/40" })
      ] }),
      /* @__PURE__ */ jsx(AntigravityCanvas, { position: "absolute" }),
      /* @__PURE__ */ jsxs("div", { className: "container relative z-10 text-center px-4", children: [
        /* @__PURE__ */ jsxs(HeadingScrollAnimation, { as: "h2", className: "text-4xl lg:text-6xl font-black text-white mb-8", variant: "scale", children: [
          "Experience the ",
          /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "Difference" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl mb-12 text-teal-50 max-w-2xl mx-auto font-light leading-relaxed", children: "Join hundreds of satisfied patients who have reclaimed their mobility and life with Body First UK." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "px-10 py-5 bg-teal-500 text-white rounded-full font-black text-xl hover:bg-teal-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(20,184,166,0.4)]",
              children: "Book Your Appointment"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "px-10 py-5 border-2 border-white/30 text-white rounded-full font-black text-xl hover:bg-white/10 transition-all backdrop-blur-sm",
              children: "Speak to a Professional"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const BookPage = () => {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: "Book Your Assessment" }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-12", children: "Take the first step toward recovery. Our booking system will be integrated here." }),
    /* @__PURE__ */ jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-xl p-12 mb-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-6xl mb-6", children: "📅" }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Booking System Placeholder" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "This page would integrate with your booking system or calendar software. Common integrations include Calendly, Acuity Scheduling, or custom booking solutions." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-left bg-white rounded-lg p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-3", children: "What to expect:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-2", children: "✓" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "Choose your preferred physiotherapist" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-2", children: "✓" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "Select a convenient date and time" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-2", children: "✓" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "Complete a brief health questionnaire" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-2", children: "✓" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "Receive confirmation and preparation instructions" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      Link,
      {
        to: "/what-we-treat",
        className: "inline-block bg-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors",
        children: "← Back to What We Treat"
      }
    )
  ] }) }) });
};
function AppShell() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col relative", children: [
      /* @__PURE__ */ jsx(AntigravityCanvas, {}),
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "flex-grow pt-[6.5rem] lg:pt-[7.5rem] relative", children: /* @__PURE__ */ jsxs(Routes, { children: [
        /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/what-we-treat", element: /* @__PURE__ */ jsx(WhatWeTreat, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/what-we-treat/:slug", element: /* @__PURE__ */ jsx(WhatWeTreatDetail, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/services", element: /* @__PURE__ */ jsx(Services, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/services/:slug", element: /* @__PURE__ */ jsx(ServiceDetailPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(About, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/why-us", element: /* @__PURE__ */ jsx(WhyUs, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/prices", element: /* @__PURE__ */ jsx(PricesInsurance, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/book", element: /* @__PURE__ */ jsx(BookPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true }) })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
const routes = [
  "/",
  "/about",
  "/why-us",
  "/prices",
  "/contact",
  "/book",
  "/services",
  "/what-we-treat",
  ...servicesData.map((s) => `/services/${s.slug}`),
  ...treatmentCategories.map((c) => `/what-we-treat/${c.slug}`)
];
const BASE_URL = "https://bodyfirst.uk";
const OG_IMAGE = `${BASE_URL}/images/social-share-1200x630.png`;
function getPageMeta(url) {
  if (url === "/") return { title: seoConfig.home.title, description: seoConfig.home.description, canonical: `${BASE_URL}/` };
  if (url === "/about") return { title: seoConfig.about.title, description: seoConfig.about.description, canonical: `${BASE_URL}/about` };
  if (url === "/why-us") return { title: seoConfig.whyUs.title, description: seoConfig.whyUs.description, canonical: `${BASE_URL}/why-us` };
  if (url === "/prices") return { title: seoConfig.prices.title, description: seoConfig.prices.description, canonical: `${BASE_URL}/prices` };
  if (url === "/contact") return { title: seoConfig.contact.title, description: seoConfig.contact.description, canonical: `${BASE_URL}/contact` };
  if (url === "/services") return { title: seoConfig.services.title, description: seoConfig.services.description, canonical: `${BASE_URL}/services` };
  if (url === "/what-we-treat") return { title: seoConfig.whatWeTreat.title, description: seoConfig.whatWeTreat.description, canonical: `${BASE_URL}/what-we-treat` };
  if (url === "/book") return { title: "Book an Appointment | Body First UK", description: "Book your physiotherapy appointment online at Body First UK, Hampton Hill, London.", canonical: `${BASE_URL}/book` };
  if (url.startsWith("/services/")) {
    const slug = url.slice("/services/".length);
    const service = servicesData.find((s) => s.slug === slug);
    if (service) return {
      title: `${service.name} | Body First UK`,
      description: service.shortDescription || service.heroDescription,
      canonical: `${BASE_URL}/services/${slug}`
    };
  }
  if (url.startsWith("/what-we-treat/")) {
    const slug = url.slice("/what-we-treat/".length);
    const cat = treatmentCategories.find((c) => c.slug === slug);
    if (cat) return {
      title: `${cat.title} Treatment | Body First UK Physiotherapy`,
      description: cat.shortDescription,
      canonical: `${BASE_URL}/what-we-treat/${slug}`
    };
  }
  return {
    title: "Body First UK | Hampton Hill Physiotherapy",
    description: "Expert physiotherapy & wellness in Hampton, London. HCPC registered. Insurance accepted.",
    canonical: `${BASE_URL}${url}`
  };
}
function getHeadTags(url) {
  const { title, description, canonical } = getPageMeta(url);
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description.replace(/"/g, "&quot;")}" />`,
    `<meta name="robots" content="index,follow" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:title" content="${title.replace(/"/g, "&quot;")}" />`,
    `<meta property="og:description" content="${description.replace(/"/g, "&quot;")}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title.replace(/"/g, "&quot;")}" />`,
    `<meta name="twitter:description" content="${description.replace(/"/g, "&quot;")}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`
  ].join("\n  ");
}
function render(url) {
  return renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(AppShell, {}) }) })
  );
}
export {
  getHeadTags,
  getPageMeta,
  render,
  routes
};
