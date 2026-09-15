import { HeroSlide, ServiceItem, ReviewItem, GalleryImage, FAQItem } from '../types';

export const CLINIC_INFO = {
  name: "ESTHETIC DENTAL CARE",
  nameBengali: "এসথেটিক ডেন্টাল কেয়ার",
  tagline: "Professional dental care designed around your comfort, confidence and long-term oral health.",
  phone: "093302 92202",
  phoneRaw: "+919330292202",
  phoneDisplay: "093302 92202",
  address: "202/3, Netaji Subhas Chandra Bose Rd, near Usha Fire Brigade, Sahid Nagar Colony, Netaji Nagar, Kolkata, West Bengal 700047",
  shortAddress: "202/3, Netaji Subhas Chandra Bose Rd, Netaji Nagar, Kolkata, West Bengal 700047",
  landmark: "Near Usha Fire Brigade, Sahid Nagar Colony",
  rating: 5.0,
  reviewCount: 13,
  category: "Dentist / Dental Clinic",
  googleMapsUrl: "https://maps.google.com/?q=Esthetic+Dental+Care+202/3+Netaji+Subhas+Chandra+Bose+Rd+Netaji+Nagar+Kolkata+West+Bengal+700047",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.2995963503164!2d88.3582458!3d22.4835269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02711681ba4c95%3A0xe21f834ec21360bb!2sNetaji%20Subhash%20Chandra%20Bose%20Rd%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

// Verified photography from Esthetic Dental Care Google Maps listing (Images A, C, D, E)
export const CLINIC_PHOTOS = {
  imageA: {
    url: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlgJWhjVSEnamXLAzb6gDS2P1kfDZvg8DbK1QOlJury4kBfjpFFz-CJ_Atc55N2VvGJGVQMTsRss_Ao5cQQP1tK3HRLMP67TbYGYRqImnIFs0IRYGiPnWP9PlhDOuQZpO9Y130SvhtCMEZU=s338-k-no",
    fallback: "/clinic/image-a.jpg",
    title: "Clinical Treatment Operatory",
    alt: "Esthetic Dental Care operatory with dental chair and equipment in Netaji Nagar"
  },
  imageC: {
    url: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWly1YpdgiskoBprumaVgwnWo9PpFYQD1d2mAzLwWPww-pYnYFtYnEYlZljOHOvVIYFHXAcypMoGYymHqmb_Ra3utRuiR0DcjksMdQccxMP4dPnXCgVI9_dg0Nbzavq8F5wa5Lkz_pKs4gYm=s564-k-no",
    fallback: "/clinic/image-c.jpg",
    title: "Treatment Chair & Equipment",
    alt: "Modern ergonomic treatment chair and dental setup at Esthetic Dental Care"
  },
  imageD: {
    url: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmVEiZsyAqXAyJ-3VnevGXjDr_-41mX9V6wBQsZggFrwP7Ya0ej6GYoF-Y6AB9jqLvwwwwg9HX84f8eHEhOfpoDMZ4GpX2b3L5bIGFshjsZF69l2AuOULEFCQo0T1gm6MlmONO5q1OBm_3W=s430-k-no",
    fallback: "/clinic/image-d.jpg",
    title: "Patient Consultation Zone",
    alt: "Consultation desk and treatment planning room at Esthetic Dental Care"
  },
  imageE: {
    url: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlIylsPepBdgCzvB_67a_rxJyM0cSv6XoFrkH10DM0eSLhKWUQ1L6dTCSQsjPSn64ngQR43UWFx7cvUs985d5gIj-j__x7e-jn0PajxElk8f2eEAS_aQuxX4HHqv4xwUDoVak2Fn1XIQkO4=s322-k-no",
    fallback: "/clinic/image-e.jpg",
    title: "Sterilization & Clinical Standards",
    alt: "Clean clinical environment and sterilization standards at Esthetic Dental Care Kolkata"
  }
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    eyebrow: "ESTHETIC DENTAL CARE",
    headline: "A Healthier Smile Begins With the Right Care",
    description: "Professional dental care designed around your comfort, confidence and long-term oral health.",
    ctaText: "BOOK AN APPOINTMENT",
    ctaAction: "#appointment",
    secondaryCtaText: "CALL 093302 92202",
    secondaryCtaAction: "tel:09330292202",
    image: CLINIC_PHOTOS.imageA.url,
    fallbackImage: CLINIC_PHOTOS.imageA.fallback,
    alt: CLINIC_PHOTOS.imageA.alt,
    photoTitle: "Clinical Treatment Operatory"
  },
  {
    id: 2,
    eyebrow: "MODERN DENTAL CARE",
    headline: "Advanced Treatment With a Personal Touch",
    description: "From everyday dental care to restorative treatment, we focus on precision, hygiene and patient comfort.",
    ctaText: "DISCOVER OUR CARE",
    ctaAction: "#about",
    image: CLINIC_PHOTOS.imageC.url,
    fallbackImage: CLINIC_PHOTOS.imageC.fallback,
    alt: CLINIC_PHOTOS.imageC.alt,
    photoTitle: "Treatment Chair & Equipment Setup"
  },
  {
    id: 3,
    eyebrow: "PATIENT TRUST",
    headline: "Care That Patients Feel Good About",
    description: "Esthetic Dental Care is rated 5.0 stars based on 13 Google reviews, reflecting positive patient experiences and confidence in our care.",
    ctaText: "SEE PATIENT REVIEWS",
    ctaAction: "#reviews",
    image: CLINIC_PHOTOS.imageD.url,
    fallbackImage: CLINIC_PHOTOS.imageD.fallback,
    alt: CLINIC_PHOTOS.imageD.alt,
    photoTitle: "Patient Consultation & Planning Zone"
  },
  {
    id: 4,
    eyebrow: "YOUR SMILE MATTERS",
    headline: "Your Smile Deserves Thoughtful Care",
    description: "Take the first step toward healthier teeth and greater confidence with a professional dental consultation.",
    ctaText: "BOOK YOUR VISIT",
    ctaAction: "#appointment",
    image: CLINIC_PHOTOS.imageE.url,
    fallbackImage: CLINIC_PHOTOS.imageE.fallback,
    alt: CLINIC_PHOTOS.imageE.alt,
    photoTitle: "Strict Hygiene & Sterilization Standards"
  }
];

export const TRUST_POINTS = [
  { label: "5.0 ★ GOOGLE RATING", detail: "Highest patient satisfaction" },
  { label: "13 PATIENT REVIEWS", detail: "Consistent 5-star experiences" },
  { label: "COMFORT-FOCUSED CARE", detail: "Gentle approach to dentistry" },
  { label: "CONVENIENT KOLKATA LOCATION", detail: "Netaji Subhas Chandra Bose Rd" }
];

export const WHY_CHOOSE_US = [
  {
    id: "comfort",
    title: "Comfort First",
    description: "We aim to make every visit as comfortable and reassuring as possible.",
    num: "01"
  },
  {
    id: "personal",
    title: "Personal Attention",
    description: "Every patient deserves clear communication and care that considers their individual needs.",
    num: "02"
  },
  {
    id: "hygiene",
    title: "Hygiene & Cleanliness",
    description: "A clean and well-maintained clinical environment is essential for patient confidence.",
    num: "03"
  },
  {
    id: "professional",
    title: "Professional Care",
    description: "Focused dental care with attention to precision, safety and long-term oral health.",
    num: "04"
  },
  {
    id: "trust",
    title: "Patient Trust",
    description: "A 5.0-star Google rating reflects the positive experiences shared by our patients.",
    num: "05"
  }
];

export const DENTAL_SERVICES: ServiceItem[] = [
  {
    id: "general-care",
    title: "General Dental Care",
    description: "Essential care for everyday tooth and gum health, customized to your oral wellness needs.",
    details: "Treatment options can be discussed during consultation.",
    iconName: "ShieldCheck"
  },
  {
    id: "checkups",
    title: "Dental Checkups",
    description: "Thorough clinical examination to assess oral health, identify early issues, and maintain healthy smiles.",
    details: "Treatment options can be discussed during consultation.",
    iconName: "Stethoscope"
  },
  {
    id: "tooth-pain",
    title: "Tooth Pain & Dental Consultation",
    description: "Prompt, attentive diagnosis to determine the underlying cause of toothache or discomfort.",
    details: "Treatment options can be discussed during consultation.",
    iconName: "Activity"
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Careful treatment aimed at relieving pain and preserving natural teeth affected by deep infection.",
    details: "Treatment options can be discussed during consultation.",
    iconName: "HeartPulse"
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth Care",
    description: "Gentle assessment and management for problematic or impacted wisdom teeth with patient comfort prioritized.",
    details: "Treatment options can be discussed during consultation.",
    iconName: "Smile"
  },
  {
    id: "cleaning",
    title: "Dental Cleaning & Preventive Care",
    description: "Professional cleaning to remove plaque, prevent gum inflammation, and sustain clean oral hygiene.",
    details: "Treatment options can be discussed during consultation.",
    iconName: "Sparkles"
  },
  {
    id: "restorative",
    title: "Restorative Dental Treatment",
    description: "Approaches focused on restoring tooth structure, comfort, and function with durable care.",
    details: "Treatment options can be discussed during consultation.",
    iconName: "Layers"
  },
  {
    id: "oral-health",
    title: "Oral Health Consultation",
    description: "Dedicated discussions covering your dental questions, preventive practices, and tailored treatment paths.",
    details: "Treatment options can be discussed during consultation.",
    iconName: "MessageSquareHeart"
  }
];

export const PATIENT_JOURNEY = [
  {
    step: "01",
    title: "CONSULTATION",
    subtitle: "Understanding Your Needs",
    description: "Understand your concern and discuss your dental needs in a relaxed, open consultation."
  },
  {
    step: "02",
    title: "TREATMENT",
    subtitle: "Gentle, Precise Care",
    description: "Receive appropriate care with attention to comfort and precision in a clean environment."
  },
  {
    step: "03",
    title: "CONTINUED CARE",
    subtitle: "Sustaining Long-Term Health",
    description: "Get guidance for maintaining long-term oral health and regular preventive habits."
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Biswanath Paul",
    text: "My experience with Esthetic Dental Care and Dr. Ritunja Singh has been excellent. The clinic is neat, clean, and well-maintained, and Dr. Singh is highly skilled and professional.",
    rating: 5,
    badge: "Verified Patient"
  },
  {
    id: "rev-2",
    name: "Amardeep Chowdhury",
    text: "I visited for a wisdom tooth extraction, and I am amazed at how painless the experience was. The dentist was incredibly gentle and walked me through every step, which really put me at ease. The clinic was spotless, and they strictly adhered to all hygiene protocols.",
    rating: 5,
    badge: "Wisdom Tooth Extraction"
  },
  {
    id: "rev-3",
    name: "Ramesh Singh Singh",
    text: "Excellent diagnosis and treatment. Treated my tooth pain with RCT. Best in the area. Caring and soft behavior.",
    rating: 5,
    badge: "RCT Treatment"
  }
];

export const PATIENT_THEMES = [
  "PAINLESS TREATMENT",
  "CLEAN CLINIC",
  "CARING BEHAVIOR",
  "QUALITY TREATMENT"
];

// Provided exact gallery images from Google Maps listing
export const CLINIC_GALLERY: GalleryImage[] = [
  {
    id: "gallery-a",
    url: CLINIC_PHOTOS.imageA.url,
    fallbackUrl: CLINIC_PHOTOS.imageA.fallback,
    title: "Clinical Treatment Operatory",
    caption: "Hygienic, comfortable dental setup designed for patient ease and modern dental care.",
    aspect: "tall"
  },
  {
    id: "gallery-c",
    url: CLINIC_PHOTOS.imageC.url,
    fallbackUrl: CLINIC_PHOTOS.imageC.fallback,
    title: "Treatment Chair & Equipment",
    caption: "Well-maintained clinical equipment strictly adhering to hygiene protocols.",
    aspect: "square"
  },
  {
    id: "gallery-d",
    url: CLINIC_PHOTOS.imageD.url,
    fallbackUrl: CLINIC_PHOTOS.imageD.fallback,
    title: "Patient Consultation Zone",
    caption: "Clear discussions and diagnosis prior to any procedure.",
    aspect: "wide"
  },
  {
    id: "gallery-e",
    url: CLINIC_PHOTOS.imageE.url,
    fallbackUrl: CLINIC_PHOTOS.imageE.fallback,
    title: "Sterilization & Clinical Standards",
    caption: "Cleanliness and sterilization maintained for safety and peace of mind.",
    aspect: "tall"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How can I book an appointment?",
    answer: "You can request an appointment directly through our website booking form or by calling us directly at 093302 92202. Our team will assist in scheduling a convenient consultation date and time."
  },
  {
    id: "faq-2",
    question: "Where is Esthetic Dental Care located?",
    answer: "The clinic is located at 202/3, Netaji Subhas Chandra Bose Rd, near Usha Fire Brigade, Sahid Nagar Colony, Netaji Nagar, Kolkata, West Bengal 700047. It is easily accessible from Tollygunge and Netaji Nagar arterial routes."
  },
  {
    id: "faq-3",
    question: "How can I contact the clinic?",
    answer: "You can reach us by phone at 093302 92202 for appointment inquiries, location directions, and initial consultations."
  },
  {
    id: "faq-4",
    question: "What should I bring to my dental consultation?",
    answer: "Please bring any previous dental records or X-rays if available, a list of any current medications you may be taking, and any questions or concerns you would like to discuss with the dentist."
  },
  {
    id: "faq-5",
    question: "What should I do if I have sudden tooth pain?",
    answer: "If you experience sudden tooth pain, we recommend contacting the clinic at 093302 92202 as soon as possible to arrange an examination. Avoid placing aspirin directly against gums or applying extreme temperature packs directly to the tooth."
  },
  {
    id: "faq-6",
    question: "Are dental treatments painful?",
    answer: "Modern dental care emphasizes patient comfort and gentle technique. Local anesthesia and thoughtful pacing are used to ensure treatments are as comfortable and painless as possible. If you feel anxious, you are encouraged to discuss this during your consultation so the dentist can tailor the approach to your comfort."
  }
];
