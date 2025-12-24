export const siteContent = {
  company: {
    name: 'Body First UK',
    tagline: 'Your Health, Our Priority',
    email: 'info@bodyfirst.uk',
    phone: '+442038181238',
    whatsapp: '+442038181238',
    address: {
      street: '38 High Street,',
      city: 'Hampton Hill,',
      place: 'Hampton, London, TW12 1PD',
      country: 'United Kingdom'
    },
    hours: {
      weekday: 'Monday–Friday: 9am–8pm',
      saturday: 'Saturday: Closed',
      sunday: 'Sunday: 11am–8pm'
    },
    social: {
      facebook: 'https://www.facebook.com/share/17pz212NhW/?mibextid=wwXIfr',
      instagram: 'https://www.instagram.com/bodyfirstuk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      twitter: 'https://twitter.com/bodyfirstuk'
    }
  },

  hero: {
    title: 'Expert Physiotherapy & Wellness Care',
    subtitle: 'Professional treatment for your health and recovery in the heart of London',
    description: 'At Body First UK, we combine expert physiotherapy with cutting-edge wellness treatments to help you move better, feel stronger, and live pain-free.',
    ctaPrimary: 'Book Now',
    ctaSecondary: 'Contact Us'
  },

  services: [
    {
      id: 'physiotherapy',
      name: 'Physiotherapy',
      shortDesc: 'Expert assessment and treatment for musculoskeletal conditions, injuries, and rehabilitation.',
      description: 'Our chartered physiotherapists provide comprehensive assessments, hands-on treatment, and tailored rehabilitation programmes to help you recover from injuries, manage chronic conditions, and improve your overall physical function.',
      icon: '🏥'
    },
    {
      id: 'sports-massage',
      name: 'Sports Massage',
      shortDesc: 'Deep tissue massage to relieve muscle tension, improve flexibility, and enhance recovery.',
      description: 'Our sports massage therapy combines various techniques to reduce muscle tension, improve circulation, and promote faster recovery. Perfect for athletes and active individuals, or anyone experiencing muscle tightness and pain.',
      icon: '💆'
    },
    {
      id: 'dry-needling',
      name: 'Dry Needling',
      shortDesc: 'Effective treatment for muscle pain and trigger points using fine needles.',
      description: 'Dry needling targets myofascial trigger points to release muscle tension, reduce pain, and restore normal muscle function. This evidence-based technique is particularly effective for chronic pain conditions.',
      icon: '💉'
    },
    {
      id: 'gait-analysis',
      name: 'Gait Analysis / Foot Scan',
      shortDesc: 'Advanced biomechanical assessment to optimise your movement patterns.',
      description: 'Using state-of-the-art technology, we analyse your walking and running patterns to identify biomechanical issues. This helps us prescribe the right treatment, exercises, or orthotics for optimal function.',
      icon: '👣'
    },
    {
      id: 'shockwave-therapy',
      name: 'Shockwave Therapy',
      shortDesc: 'Non-invasive treatment using acoustic waves to accelerate healing.',
      description: 'Shockwave therapy uses high-energy acoustic waves to stimulate healing in chronic soft tissue injuries. It\'s particularly effective for conditions like plantar fasciitis, tennis elbow, and calcific tendonitis.',
      icon: '⚡'
    },
    {
      id: 'cupping-therapy',
      name: 'Cupping Therapy',
      shortDesc: 'Ancient therapy technique to improve blood flow and reduce muscle tension.',
      description: 'Cupping therapy uses suction cups to increase blood circulation, release fascial restrictions, and reduce muscle tension. This complementary therapy can enhance your recovery and overall wellbeing.',
      icon: '🫖'
    },
    {
      id: 'lymphatic-drainage',
      name: 'Lymphatic Drainage',
      shortDesc: 'Gentle massage technique to reduce swelling and boost your immune system.',
      description: 'Manual lymphatic drainage is a specialized massage technique that stimulates the lymphatic system, helping to reduce swelling, boost immunity, and promote detoxification.',
      icon: '🌊'
    },
    {
      id: 'compression-therapy',
      name: 'Compression Therapy',
      shortDesc: 'Advanced compression technology for recovery and circulation.',
      description: 'Using dynamic compression devices, we help enhance recovery, reduce muscle soreness, and improve circulation. Popular with athletes and those seeking faster recovery times.',
      icon: '🦵'
    },
    {
      id: "cryoair-therapy",
      name: "Cryoair Therapy",
      shortDesc: "Cold therapy to reduce inflammation and accelerate recovery.",
      description:
        "Localised Cryoair therapy uses controlled cold temperatures to reduce inflammation, manage pain, and speed up the healing process. Ideal for acute injuries and chronic inflammatory conditions.",
      icon: "❄️",
    },
  ],

  conditions: [
    {
      id: 'back-pain',
      area: 'Back & Spine',
      conditions: ['Lower back pain', 'Upper back pain', 'Sciatica', 'Disc problems', 'Postural issues', 'Chronic pain'],
      icon: '🦴'
    },
    {
      id: 'neck-shoulder',
      area: 'Neck & Shoulder',
      conditions: ['Neck pain', 'Whiplash', 'Frozen shoulder', 'Rotator cuff injuries', 'Shoulder impingement', 'Tension headaches'],
      icon: '💪'
    },
    {
      id: 'knee-leg',
      area: 'Knee & Leg',
      conditions: ['Knee pain', 'ACL injuries', 'Meniscus tears', 'Runner\'s knee', 'IT band syndrome', 'Shin splints'],
      icon: '🦵'
    },
    {
      id: 'hip-groin',
      area: 'Hip & Groin',
      conditions: ['Hip pain', 'Groin strain', 'Hip impingement', 'Bursitis', 'Arthritis', 'Post-surgical rehabilitation'],
      icon: '🏃'
    },
    {
      id: 'foot-ankle',
      area: 'Foot & Ankle',
      conditions: ['Plantar fasciitis', 'Achilles tendonitis', 'Ankle sprains', 'Heel pain', 'Flat feet', 'Bunions'],
      icon: '👣'
    },
    {
      id: 'elbow-wrist',
      area: 'Elbow & Wrist',
      conditions: ['Tennis elbow', 'Golfer\'s elbow', 'Carpal tunnel', 'Wrist sprains', 'Repetitive strain injury'],
      icon: '✋'
    },
    {
      id: 'sports-injuries',
      area: 'Sports Injuries',
      conditions: ['Muscle strains', 'Ligament sprains', 'Overuse injuries', 'Rehabilitation', 'Performance optimisation'],
      icon: '⚽'
    },
    {
      id: 'chronic-pain',
      area: 'Chronic Conditions',
      conditions: ['Arthritis', 'Fibromyalgia', 'Chronic pain syndromes', 'Post-surgical pain', 'Long-term injuries'],
      icon: '🩺'
    }
  ],

  prices: [
    { service: 'Initial Appointment', duration: '45 min', price: '£75', category: 'Physiotherapy' },
    { service: '30 min Physiotherapy', duration: '30 min', price: '£65', category: 'Physiotherapy' },
    { service: '30 min Sports Massage', duration: '30 min', price: '£50', category: 'Sports Massage' },
    { service: '45 min Sports Massage', duration: '45 min', price: '£60', category: 'Sports Massage' },
    { service: '60 min Sports Massage', duration: '60 min', price: '£70', category: 'Sports Massage' },
    { service: 'Lymphatic Drainage', duration: '30 min', price: '£70', category: 'Lymphatic Drainage' },
    { service: 'Lymphatic Drainage', duration: '45 min', price: '£80', category: 'Lymphatic Drainage' },
    { service: 'Shockwave Therapy', duration: '1 session', price: '£80', category: 'Other Services' },
    { service: 'Gait Analysis', duration: '45 min', price: '£70', category: 'Other Services' },
    { service: 'Cryoair Therapy', duration: '1 session', price: '£60', category: 'Other Services' } // Assuming a price or just updating the name if it existed elsewhere
  ],

  insurance: {
    accepted: [
      {
        name: 'AXA',
        logo: '/images/insurance/axa.jpg',
      },
      {
        name: 'AVIVA',
        logo: '/images/insurance/aviva.jpg',
      },
      {
        name: 'BUPA',
        logo: '/images/insurance/bupa.png',
      },
      {
        name: 'HEALIX',
        logo: '/images/insurance/healix.png',
      },
      {
        name: 'Simply Health',
        logo: '/images/insurance/simply.jpg',
      },
      {
        name: 'Vitality',
        logo: '/images/insurance/vitality.jpg',
      },
      {
        name: 'WPA',
        logo: '/images/insurance/wpa.jpg',
      },
    ],
    note: 'We work with all major private health insurance providers. Many of our services are covered under standard physiotherapy benefits. Please check with your insurer for specific coverage details and pre-authorisation requirements.',
  },


  team: [
    {
      name: "Praveena Thiruvasager",
      role: "Senior Physiotherapist",
      qualifications: "BSc in Physiotherapy • MSc in Advanced Physiotherapy • MPhil in Shockwave Therapy and Sports Medicine and Exercise Sciences • CSP • Chartered Senior Physiotherapist• HCPC registered",
      description:
        "Senior physiotherapist with extensive experience in sports and musculoskeletal rehabilitation. Focuses on evidence-based care, complex rehab, and advanced modalities including shockwave therapy.",
      image: "/images/Aboutus/praveena.png",
    },
    {
      name: "Ivaylo Todorov",
      role: "Senior Physiotherapist",
      qualifications: "CSP • Chartered Senior Physiotherapist • Chiropractic Training",
      description:
        "Highly experienced physiotherapist with a strong NHS background. Interests include neuro rehabilitation, respiratory care, and spine-related management using a comprehensive patient-centred approach.",
      image: "/images/Aboutus/IvayloTodorov.jpeg",
    },
    {
      name: "Rachael Watkeys",
      role: "Myotherapist • Sports Massage Therapist",
      qualifications:
        "BAppSci (Human Movement) • AdDip (Myotherapy) • PGCE • ITEC",
      description:
        "Experienced myotherapist with a strong foundation in human movement and soft tissue therapy. Specialises in myofascial release, trigger point techniques, dry needling, and sports-focused recovery.",
      image: "/images/Aboutus/Rachael.jpeg",
    },
    {
      name: "Alisha Abdala",
      role: "Sports Massage Therapist",
      qualifications: "BSc (Hons) Sport Health and Exercise",
      description:
        "Ex British gymnast and qualified sports massage therapist with a special interest in the thoracic and lumbar spine. Also certified in cupping therapy, lymphatic drainage, and sports injury rehabilitation. Focuses on releasing tension and correcting movement imbalances caused by repetitive activity or injury.",
      image: "/images/Aboutus/neww.jpeg",
    },
    {
      name: "Mihai Apostol",
      role: "Sports Massage Therapist",
      qualifications: "BSc (Hons) Osteopathic Medicine (to complete 2026)",
      description:
        "Experienced sports massage therapist with over a decade of work in improving human movement. Currently studying osteopathy at the British School of Osteopathic Medicine, with a strong interest in biomechanics, posture, and restoring optimal movement patterns. Supports patients with postural strain, asymmetrical patterns, and sedentary lifestyle-related issues.",
      image: "/images/Aboutus/newone.jpeg",
    },

  ],

  testimonials: [
    {
      name: 'David G.',
      rating: 5,
      text: 'I had eight sessions with Bodyfirst because of a fractured wrist. I had only been out of the cast for a few days before I started my treatment.Praveena helped with getting the swelling down and gain much more motion. My wrist and hand now moves a lot better.Praveena is not only an excellent physio she is a lovely person too. She was always happy to answer my concerns and give me advice for exercises I could do at home to speed up my recovery.Highly recommend Bodyfirst.',
      service: 'Fracture & Post-Op Rehab'
    },
    {
      name: 'Tracy D.',
      rating: 5,
      text: 'Highly recommend. Praveena has supported me with a long standing back issue and rehabilitation after breaking my wrist. Her knowledge, treatment and exercise programme in both cases have been fantastic.My recovery has been more comprehensive and faster than I have experienced with anyone else. I have a full range of motion just weeks after coming out of plaster.The best hands on physio I have ever had and a lovely lady to boot. So lucky to have this fantastic local business on the doorstep.',
      service: 'Chronic Back & Joint Pain'
    },
    {
      name: 'Bethan Probert',
      rating: 5,
      text: 'Absolutely amazing physio! I have seen Praveena repeatedly and she always offers the best quality service! She was able to diagnose my injury where other physios failed to. She is highly knowledgable and qualified. She ensured I got the best treatment suited to what I needed. Best to mention the team are always welcoming and attentive! Always lovely having a chat with Sarah on the front desk!',
      service: 'Physiotherapy / Expert Diagnosis'
    },
    {
      name: 'Jegathees Krisha',
      rating: 5,
      text: 'I had a great experience with physiotherapist Praveena. She is highly qualified, holds a Masters in Advanced Physiotherapy and her professionalism is truly proven. Using advanced foot scan technology and Fitz orthotic insoles, she worked on my feet and my twins feet. The entire process was smooth, informative and effective. I am very happy with the results and would highly recommend her to anyone looking for expert physiotherapy treatment.',
      service: 'Foot Scan and Gait Analysis'
    },
    {
      name: 'CHRIS FIDLER',
      rating: 5,
      text: 'If you have any muscle or joint problems, this is definitely the place to go. I had a treatment today and felt immediate improvement. The staff are knowledgeable and keen to provide appropriate exercises between sessions. I highly recommend this practice.',
      service: 'Sports Massage / Immediate Relief'// or Muscle or Joint Pain
    },
    {
      name: 'Susanna Jarolim',
      rating: 5,
      text: 'Praveena was amazing.Before I came here, I had foot pain, plantar fasciitis, pain in my knee, arthritis and an old elbow injury that never went away over time. All three areas are very good. Sarah, the receptionist was very careful to send me receipts for my insurance.I highly recommend "Body First UK".Thank you for taking such good care of me😊',
      service: 'Complex Pain Conditions'
    },


    {
      name: "Susan O'Connell",
      rating: 5,
      text: 'Praveena runs a wonderful comprehensive clinic, with an amazing range of physio treatments. She has treated me using deep massage therapy for lymphatic drainage following heart surgery. . This has also included compression therapy. She is a highly qualified person with a masters in advanced physio and I highly recommend her.',
      service: 'Post-Surgical Lymphatic Care'
    },
    // {
    //   name: 'Malak',
    //   rating: 5,
    //   text: 'Our entire family has been seeing Praveena and she is the best. From sports injuries to everyday aches and pains - she has looked after us with everything and always provides the highest level of care. Her knowledge and skill are second to none and she is as wonderful with children as she is with adults.The shockwave therapy sessions in particular have been a game changer - truly the best service I have experienced anywhere. Every appointment feels professional, effective and tailored to our needs.We are so lucky to have found her. We would highly recommend her to anyone looking for a physiotherapist who truly cares and delivers exceptional results every time!',
    //   service: 'Shockwave Therapy'
    // },
    {
      name: 'Sylvia Walker',
      rating: 5,
      text: 'Praveena is an excellent physiotherapist and a kind person. I recently had plantar fasciitis treated by her. She saw me as soon as I started having symptoms and after two follow-up appointments, it cleared up quickly. This is a condition that is often long-term. She has a variety of treatments available, including shockwave therapy and ultrasound. Thank you very much, Praveena.',
      service: 'Plantar Fasciitis / Quick Results'
    },

  ],

  about: {
    mission: 'At Body First UK, we believe that everyone deserves to move freely and live without pain. Our mission is to provide exceptional physiotherapy and wellness services that empower our patients to achieve their health and fitness goals.',
    philosophy: 'We take a holistic, evidence-based approach to treatment, combining the latest research with hands-on expertise. Every patient receives a comprehensive assessment and a personalised treatment plan tailored to their specific needs and goals.',
    values: [
      'Excellence in clinical practice',
      'Patient-centered care',
      'Continuous professional development',
      'Evidence-based treatment',
      'Compassionate service'
    ]
  },

  accreditations: [
    { name: 'CSP', fullName: 'Chartered Society of Physiotherapy', logo: '/images/insurance/csp.png' },
    { name: 'HCPC', fullName: 'Health and Care Professions Council', logo: '/images/insurance/hcpc.jpeg' },
    { name: 'Physio First', fullName: 'Recognised Physiotherapy Practice', logo: '/images/insurance/physioFirst.jpg' }
  ]
};
