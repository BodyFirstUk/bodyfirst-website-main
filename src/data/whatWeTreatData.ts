export interface Condition {
  name: string;
}

export interface ContentSection {
  heading: string;
  content: string;
  bullets?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TreatmentCategory {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string; // emoji or could be replaced with icon component
  conditions: Condition[];
  heroImage?: string;
  heroAlt?: string;
  detailContent: {
    overview: string;
    sections: ContentSection[];
    faqs: FAQ[];
  };
}

export const treatmentCategories: TreatmentCategory[] = [
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
      { name: "Teeth grinding related pain" },
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
            "Prolonged computer or phone use creating forward head posture",
          ],
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
            "Ear pain or ringing without infection",
          ],
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
            "Dry needling or acupuncture for muscle tension relief",
          ],
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
            "Pain following dental work or facial trauma",
          ],
        },
      ],
      faqs: [
        {
          question: "How long does TMJ treatment take?",
          answer: "Most patients see improvement within 4-6 sessions, though this varies based on severity and duration of symptoms. Chronic cases may require 8-12 weeks of treatment combined with home exercises.",
        },
        {
          question: "Can physiotherapy help with migraines?",
          answer: "Yes, especially when migraines have a cervicogenic (neck-related) component. We address muscle tension, postural issues, and joint dysfunction that can trigger or worsen migraines.",
        },
        {
          question: "Do I need a referral for jaw pain treatment?",
          answer: "No referral is necessary. However, we work closely with dentists and oral surgeons when appropriate. If structural issues are identified, we'll coordinate your care.",
        },
        {
          question: "Will treatment be painful?",
          answer: "Our techniques are gentle and tailored to your comfort level. While you may feel some tenderness during treatment, it should never be unbearably painful. We always work within your tolerance.",
        },
      ],
    },
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
      { name: "Disc-related pain" },
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
            "Nerve compression causing radiating pain",
          ],
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
            "Reduced range of motion",
          ],
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
            "Education on self-management and prevention strategies",
          ],
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
            "Pain accompanied by headaches or dizziness",
          ],
        },
      ],
      faqs: [
        {
          question: "How quickly will my neck pain improve?",
          answer: "Acute neck pain often improves within 2-4 weeks with appropriate treatment. Chronic conditions may take 6-12 weeks, but most patients report significant improvement after just a few sessions.",
        },
        {
          question: "Is it safe to exercise with neck pain?",
          answer: "Generally yes, but it depends on the cause. We'll guide you through safe, therapeutic exercises that promote healing rather than aggravating your condition. Avoiding all movement can actually delay recovery.",
        },
        {
          question: "Can you help with neck pain from sitting at a desk?",
          answer: "Absolutely. Postural neck pain is very responsive to physiotherapy. We'll assess your workstation setup, provide ergonomic recommendations, and teach you exercises to counteract prolonged sitting.",
        },
        {
          question: "What's the difference between a stiff neck and something serious?",
          answer: "Most stiff necks resolve with conservative care. Seek immediate medical attention if you have severe pain after trauma, fever, severe headache, or progressive weakness in your arms. Otherwise, physiotherapy is an excellent first step.",
        },
      ],
    },
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
      { name: "Bursitis" },
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
            "Weakness in shoulder stabilizing muscles",
          ],
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
            "Feeling of instability or shoulder 'giving way'",
          ],
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
            "Guidance on activity modification and return to sport",
          ],
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
            "Gradual stiffening of the shoulder",
          ],
        },
      ],
      faqs: [
        {
          question: "Can physiotherapy help frozen shoulder?",
          answer: "Yes, physiotherapy is one of the most effective treatments for frozen shoulder. While recovery can take 6-12 months, we can significantly reduce pain and accelerate the return of movement through specific techniques and exercises.",
        },
        {
          question: "Do I need surgery for a rotator cuff tear?",
          answer: "Not necessarily. Many rotator cuff tears respond very well to physiotherapy. We'll assess your specific situation and can help you make an informed decision about surgery if conservative treatment isn't sufficient.",
        },
        {
          question: "How long does shoulder rehabilitation take?",
          answer: "This varies by condition. Minor strains may resolve in 3-4 weeks, while complex issues like frozen shoulder or post-surgical rehab can take several months. We'll provide a realistic timeline after your assessment.",
        },
        {
          question: "Can I continue working out with shoulder pain?",
          answer: "It depends on the cause and severity. We'll help you modify your training to avoid aggravating movements while maintaining fitness. Complete rest is rarely necessary and can sometimes be counterproductive.",
        },
      ],
    },
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
      { name: "Postural back pain" },
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
            "Previous injuries that weren't fully rehabilitated",
          ],
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
            "Pain that worsens with sitting, standing, or specific movements",
          ],
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
            "Individualized home exercise programs",
          ],
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
            "Pain affecting your ability to work or sleep",
          ],
        },
      ],
      faqs: [
        {
          question: "Should I rest or stay active with back pain?",
          answer: "Current research strongly supports staying active. Complete bed rest can actually delay recovery. We'll guide you on appropriate activities and exercises that promote healing while avoiding movements that aggravate your condition.",
        },
        {
          question: "Can physiotherapy help with chronic back pain?",
          answer: "Absolutely. Even long-standing back pain responds well to physiotherapy. We address muscle imbalances, movement patterns, and contributing factors that perpetuate chronic pain, helping you regain control and function.",
        },
        {
          question: "Will I need imaging (X-ray, MRI) for my back pain?",
          answer: "Most cases of back pain don't require imaging initially. We can diagnose and effectively treat most back conditions through clinical assessment. If imaging is needed, we'll advise you and can coordinate with your doctor.",
        },
        {
          question: "How many sessions will I need?",
          answer: "Acute back pain often improves in 4-6 sessions, while chronic conditions may require 8-12 weeks of treatment. Many patients experience significant relief after just 2-3 sessions, with continued improvement thereafter.",
        },
      ],
    },
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
      { name: "Nerve entrapment" },
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
            "Improper technique in sports or lifting",
          ],
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
            "Difficulty with everyday activities like shaking hands or turning doorknobs",
          ],
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
            "Education on managing and preventing recurrence",
          ],
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
            "Recurring elbow problems",
          ],
        },
      ],
      faqs: [
        {
          question: "How long does tennis elbow take to heal?",
          answer: "Tennis elbow is a tendinopathy that typically takes 6-12 weeks to improve with physiotherapy. Chronic cases may take longer, but most patients see gradual improvement with consistent treatment and exercise.",
        },
        {
          question: "Do I need to stop my sport completely?",
          answer: "Usually not. We'll help you modify your activity level and technique to allow healing while maintaining fitness. Complete rest isn't always beneficial and can lead to deconditioning.",
        },
        {
          question: "Will I need injections or surgery?",
          answer: "Most elbow conditions respond well to physiotherapy alone. Injections are occasionally used for persistent cases, and surgery is rarely needed. We'll explore all conservative options first.",
        },
        {
          question: "Can you help with elbow pain from computer work?",
          answer: "Yes, absolutely. Elbow pain from desk work is common and very treatable. We'll assess your workstation setup, provide ergonomic modifications, and teach you exercises to strengthen and protect your elbows.",
        },
      ],
    },
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
      { name: "Post-fracture rehabilitation" },
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
            "Age-related wear and tear",
          ],
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
            "Clicking or locking of fingers",
          ],
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
            "Education on activity modification and self-management",
          ],
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
            "Difficulty performing work or daily tasks",
          ],
        },
      ],
      faqs: [
        {
          question: "Can physiotherapy help carpal tunnel syndrome?",
          answer: "Yes, especially in mild to moderate cases. We use manual therapy, nerve gliding exercises, and ergonomic modifications to reduce symptoms. Many patients avoid surgery through conservative physiotherapy treatment.",
        },
        {
          question: "How long does wrist sprain recovery take?",
          answer: "Minor sprains often heal within 2-4 weeks, while more severe sprains can take 6-8 weeks. Physiotherapy accelerates healing and ensures you regain full strength and mobility.",
        },
        {
          question: "Should I wear a brace or splint?",
          answer: "Sometimes, but not always. Bracing can be helpful for symptom relief and protection, especially at night for carpal tunnel. However, prolonged immobilization can lead to stiffness. We'll advise on appropriate use.",
        },
        {
          question: "Can you help with arthritis in my hands?",
          answer: "Absolutely. While we can't reverse arthritis, physiotherapy significantly reduces pain and improves function through joint protection techniques, exercises, manual therapy, and education on managing symptoms.",
        },
      ],
    },
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
      { name: "Hip flexor tendinopathy" },
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
            "Previous injuries or surgeries",
          ],
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
            "Difficulty with activities like putting on shoes or getting in/out of cars",
          ],
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
            "Return-to-sport programs for athletes",
          ],
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
            "Pain that's progressively worsening",
          ],
        },
      ],
      faqs: [
        {
          question: "Can physiotherapy help hip arthritis?",
          answer: "Yes, significantly. While we can't reverse arthritis, we can reduce pain, improve mobility, and strengthen surrounding muscles to better support the joint. Many patients delay or avoid surgery through physiotherapy.",
        },
        {
          question: "How long does a groin strain take to heal?",
          answer: "Minor groin strains typically heal in 2-4 weeks, while more severe strains can take 6-12 weeks. Physiotherapy ensures proper healing and reduces the risk of re-injury through progressive rehabilitation.",
        },
        {
          question: "Do I need hip surgery?",
          answer: "Not necessarily. Many hip conditions respond well to conservative treatment. We'll assess your specific situation and help you make an informed decision about surgery if physiotherapy isn't providing adequate relief.",
        },
        {
          question: "Can I continue exercising with hip pain?",
          answer: "Usually yes, with modifications. Complete rest is rarely necessary. We'll help you adapt your activities to promote healing while maintaining fitness. The key is managing load appropriately.",
        },
      ],
    },
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
      { name: "ITB syndrome" },
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
            "Biomechanical issues affecting knee alignment",
          ],
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
            "Pain that worsens with activity",
          ],
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
            "Return-to-sport programs with objective testing",
          ],
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
            "Pain interfering with sports or daily activities",
          ],
        },
      ],
      faqs: [
        {
          question: "Can physiotherapy help me avoid knee surgery?",
          answer: "Often yes. Many knee conditions, including meniscus tears and early arthritis, respond very well to physiotherapy. Even when surgery is necessary, pre-operative physiotherapy improves post-surgical outcomes.",
        },
        {
          question: "How long does ACL rehabilitation take?",
          answer: "ACL reconstruction rehabilitation typically takes 9-12 months for full return to sport. We guide you through each phase, using objective criteria to progress safely and reduce re-injury risk.",
        },
        {
          question: "Should I stop running with knee pain?",
          answer: "Not necessarily. We'll assess the cause of your pain and modify your training load and technique. Many runners can continue with appropriate modifications while rehabilitation progresses.",
        },
        {
          question: "Can you help with runner's knee?",
          answer: "Absolutely. Patellofemoral pain (runner's knee) responds very well to physiotherapy. We address the underlying factors including hip weakness, training errors, and biomechanical issues causing the pain.",
        },
      ],
    },
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
      { name: "Flat feet problems" },
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
            "Age-related changes in foot structure",
          ],
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
            "Numbness or tingling in the foot",
          ],
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
            "Education on self-management and prevention",
          ],
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
            "Pain interfering with exercise or daily activities",
          ],
        },
      ],
      faqs: [
        {
          question: "How long does plantar fasciitis take to heal?",
          answer: "Plantar fasciitis typically improves within 6-12 weeks with appropriate treatment, though chronic cases may take longer. Most patients experience significant relief after 4-6 physiotherapy sessions combined with home exercises.",
        },
        {
          question: "Should I stop running with Achilles pain?",
          answer: "Not always. We'll assess your tendon and determine appropriate load modifications. Complete rest isn't usually necessary and can be counterproductive. We'll guide you on safe training modifications.",
        },
        {
          question: "Do I need orthotics for my foot pain?",
          answer: "Sometimes, but not always. We'll assess your foot mechanics and determine if orthotics would be beneficial. Often, strengthening exercises and footwear modifications are sufficient.",
        },
        {
          question: "How can I prevent ankle sprains?",
          answer: "Balance training, proprioceptive exercises, and appropriate footwear significantly reduce sprain risk. After an initial sprain, proper rehabilitation is crucial to prevent recurrence. We provide comprehensive prevention programs.",
        },
      ],
    },
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
      { name: "Sport-specific injuries" },
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
            "Muscle imbalances and weakness",
          ],
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
            "Decreased performance or confidence",
          ],
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
            "Injury prevention strategies and prehabilitation",
          ],
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
            "Chronic overuse pain not responding to rest",
          ],
        },
      ],
      faqs: [
        {
          question: "How soon can I return to sport after injury?",
          answer: "This depends on the injury type and severity. We use objective criteria including strength, range of motion, and functional testing to determine readiness. Returning too soon increases re-injury risk, which we carefully manage.",
        },
        {
          question: "Can physiotherapy improve my athletic performance?",
          answer: "Yes. Beyond treating injuries, we identify and address biomechanical inefficiencies, muscle imbalances, and movement patterns that limit performance. Many athletes see performance gains through physiotherapy.",
        },
        {
          question: "Do I need to stop training completely?",
          answer: "Usually not. We believe in active rehabilitation. We'll modify your training to allow healing while maintaining fitness. Complete rest can lead to deconditioning and isn't necessary for most injuries.",
        },
        {
          question: "Can you help prevent injuries before they happen?",
          answer: "Absolutely. Prehabilitation programs address weakness, imbalances, and risk factors before injuries occur. Regular screening and preventive exercises significantly reduce injury risk in athletes.",
        },
      ],
    },
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
      { name: "General orthopedic recovery" },
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
            "Arthroscopic procedures",
          ],
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
            "Return to activity and sport-specific training",
          ],
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
            "Communication with your surgeon throughout recovery",
          ],
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
            "Returning to work, sport, or hobbies safely",
          ],
        },
      ],
      faqs: [
        {
          question: "When should I start physiotherapy after surgery?",
          answer: "This depends on your specific surgery. Some procedures require immediate post-operative physiotherapy within days, while others may wait a few weeks. We coordinate with your surgeon to determine optimal timing.",
        },
        {
          question: "Will physiotherapy be painful after surgery?",
          answer: "Some discomfort is normal as we work to restore movement and strength. However, treatment should never be unbearably painful. We work within your tolerance and progress gradually as healing allows.",
        },
        {
          question: "How long will my recovery take?",
          answer: "Recovery timelines vary by procedure. Joint replacements typically take 3-6 months for full recovery, while ACL reconstruction requires 9-12 months. We provide realistic timelines and objective markers for progression.",
        },
        {
          question: "Can I speed up my recovery?",
          answer: "Consistency with your exercises and following rehabilitation protocols are key. However, tissues heal on biological timelines that can't be rushed. Trying to progress too quickly increases complication risk.",
        },
      ],
    },
  },
];

export default treatmentCategories;
