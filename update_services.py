import re

# 1. Update servicesData.ts
with open('src/data/servicesData.ts', 'r') as f:
    services_data = f.read()

osteopathy_block = """  {
    slug: "osteopathy",
    name: "Osteopathy",
    shortDescription:
      "Whole-body manual therapy to restore balance, relieve pain, and improve overall function.",
    heroDescription:
      "Our osteopathic treatments use hands-on techniques to diagnose, treat, and prevent a wide range of musculoskeletal conditions by addressing the root cause of pain and dysfunction.",
    heroImage: "/images/services/osteopathy.jpg",
    heroAlt: "Osteopathy treatment session",
    sections: [
      {
        title: "What is Osteopathy?",
        body:
          "Osteopathy is a primary healthcare profession that focuses on the diagnosis, treatment, and prevention of musculoskeletal disorders. Osteopaths use a holistic, whole-body approach — recognising that the body's structure and function are closely linked. Using hands-on techniques such as soft tissue manipulation, joint mobilisation, articulation, and cranial osteopathy, we aim to restore balance, improve circulation, and support the body's natural ability to heal itself.",
      },
      {
        title: "Who is it for?",
        body:
          "Osteopathy is suitable for people of all ages and activity levels — from newborns to the elderly. Whether you're dealing with acute pain, chronic discomfort, or looking to optimise your physical wellbeing, osteopathic treatment is tailored to your individual needs.",
        bullets: [
          "People with back, neck, or joint pain",
          "Office workers with postural strain",
          "Athletes seeking injury prevention and recovery",
          "Pregnant women experiencing musculoskeletal discomfort",
          "Individuals with headaches or migraines",
          "Those with chronic pain or recurring injuries",
          "Anyone wanting to improve overall mobility and function",
        ],
      },
      {
        title: "Conditions We Commonly Treat",
        body:
          "Our osteopath has extensive experience treating a wide range of conditions:",
        bullets: [
          "Lower back pain and sciatica",
          "Neck pain and cervicogenic headaches",
          "Shoulder, hip, and knee pain",
          "Postural dysfunction and repetitive strain",
          "Sports injuries and overuse syndromes",
          "Arthritic and degenerative joint conditions",
          "Jaw pain and TMJ dysfunction",
          "Pregnancy-related musculoskeletal pain",
        ],
      },
      {
        title: "What to Expect in Your Session",
        body:
          "Your first appointment begins with a thorough case history and physical examination, including assessment of your posture, movement, and areas of concern. Your osteopath will then use a combination of hands-on techniques — including stretching, massage, joint mobilisation, and manipulation — tailored to your specific condition. You'll also receive guidance on exercises, posture, and lifestyle modifications to support your recovery. Initial appointments typically last 45–60 minutes, with follow-up sessions lasting 30–45 minutes.",
      },
      {
        title: "Benefits",
        body:
          "Regular osteopathic treatment can provide wide-ranging benefits for your health and quality of life:",
        bullets: [
          "Effective relief from acute and chronic pain",
          "Improved posture, alignment, and body awareness",
          "Enhanced joint mobility and flexibility",
          "Reduced muscle tension and spasms",
          "Better circulation and tissue healing",
          "Holistic approach treating the cause, not just symptoms",
          "Drug-free and non-invasive treatment option",
          "Personalised care for long-term wellbeing",
        ],
      },
    ],
  },"""

# Remove osteopathy block from the end
services_data = services_data.replace(f"\n\n{osteopathy_block}", "")

# Insert osteopathy block after physiotherapy
physio_end = """      },
    ],
  },"""

insert_after = f"""{physio_end}

{osteopathy_block}"""

services_data = services_data.replace(physio_end, insert_after, 1)

with open('src/data/servicesData.ts', 'w') as f:
    f.write(services_data)


# 2. Update content.ts
with open('src/data/content.ts', 'r') as f:
    content_data = f.read()

osteopathy_content = """    {
      id: 'osteopathy',
      name: 'Osteopathy',
      shortDesc: 'Whole-body manual therapy to restore balance, relieve pain, and improve function.',
      description: 'Osteopathy uses hands-on techniques including soft tissue manipulation, joint mobilisation, and cranial approaches to treat the root cause of pain and dysfunction. Our osteopath takes a whole-body approach, addressing not just the symptoms but the underlying structural and functional imbalances.',
      icon: '🦴'
    },"""

# Remove from end
content_data = content_data.replace(f"\n{osteopathy_content}", "")

physio_content = """    {
      id: 'physiotherapy',
      name: 'Physiotherapy',
      shortDesc: 'Expert assessment and treatment for musculoskeletal conditions, injuries, and rehabilitation.',
      description: 'Our chartered physiotherapists provide comprehensive assessments, hands-on treatment, and tailored rehabilitation programmes to help you recover from injuries, manage chronic conditions, and improve your overall physical function.',
      icon: '🏥'
    },"""

insert_content = f"""{physio_content}
{osteopathy_content}"""

content_data = content_data.replace(physio_content, insert_content)

# Add prices
prices_target = """  prices: [
    { service: 'Initial Appointment', duration: '45 min', price: '£75', category: 'Physiotherapy' },
    { service: '30 min Physiotherapy', duration: '30 min', price: '£65', category: 'Physiotherapy' },"""

prices_insert = f"""{prices_target}
    {{ service: 'Initial Appointment', duration: '45-60 min', price: '£75', category: 'Osteopathy' }},
    {{ service: 'Follow up', duration: '30-45 min', price: '£65', category: 'Osteopathy' }},"""

content_data = content_data.replace(prices_target, prices_insert)

with open('src/data/content.ts', 'w') as f:
    f.write(content_data)

print("Done")
