
import { University, ScholarshipEntry, ReviewerLink, CourseCategory } from './types';

export const COURSE_CATEGORIES: CourseCategory[] = [
  'General', 
  'Medical', 
  'Engineering', 
  'Hospitality', 
  'Education', 
  'Business', 
  'Arts & Design', 
  'IT', 
  'Social Sciences', 
  'Cadet', 
  'Law'
];

export const ONBOARDING_QUESTIONS = [
  {
    id: 'preferredCourses',
    label: 'Anong mga kurso o track ang interesado ka? (Maaaring pumili ng marami)',
    field: 'preferredCourses',
    multiple: true,
    options: COURSE_CATEGORIES
  },
  {
    id: 'location',
    label: 'Saan ka po nag-aaral o nakatira?',
    field: 'location',
    options: ['Metro Manila', 'Laguna', 'Cavite', 'Batangas', 'Rizal', 'Other', 'Prefer not to say']
  },
  {
    id: 'examReady',
    label: 'Handa ka na ba kumuha ng entrance o scholarship exams?',
    field: 'examReady',
    options: ['Yes', 'No']
  },
  {
    id: 'gradesIndicator',
    label: 'Paano mo ilalarawan ang iyong huling GWA / grades?',
    field: 'gradesIndicator',
    options: ['95-100', '90-94', '80-89', 'Below 80', 'Prefer not to say']
  }
];

export const ACTION_TEMPLATES: Record<string, string[]> = {
  default: [
    'I-check ang mga pangunahing requirements at deadline sa official website ng mga napiling school.',
    'Mag-prepare ng dokumento: PSA, Form 137/138, Good Moral, 2x2 photo (White Background).',
    'Mag-apply online sa unibersidad at mag-register para sa entrance exam kung kailangan.'
  ],
  high_achiever: [
    'Dahil mataas ang grades mo, i-apply ang CHED Merit Scholarship at DOST Merit.',
    'I-target ang top private universities na may 100% tuition discount para sa high GWA.',
    'Kumuha ng Certificate of Honor/Ranking mula sa iyong school Principal.'
  ],
  exam_not_ready: [
    'Gamitin ang mga free reviewers sa "Reviewers" tab bago kumuha ng entrance exams.',
    'Mag-focus sa Math at Abstract Reasoning na madalas lumabas sa mga scholarship tests.',
    'I-download ang compilation ng mock exams sa aming Drive link.'
  ],
  low_grade: [
    'Mag-focus sa schools na may "Open Admission" policy o hindi masyadong strict sa GWA.',
    'Tignan ang mga vocational o tech-voc tracks sa TESDA na may allowance.',
    'Mag-inquire sa mga "Assistance Programs" ng local government (City Hall).'
  ]
};

export const UNIVERSITIES: University[] = [
  { 
    name: "Adamson University", 
    address: "900 San Marcelino St, Ermita, Manila", 
    categories: ["General"], 
    type: "Private", 
    link: "https://www.adamson.edu.ph/2018/", 
    requirements: ["Back-to-Back copies of Grade 12 grades", "Upload latest 2x2 picture (white background)"],
    offersScholarship: true,
    applicationFee: "₱500"
  },
  { 
    name: "De La Salle Medical and Health Sciences Institute", 
    categories: ["Medical"], 
    type: "Private", 
    link: "https://academics.dlsmhsi.edu.ph/admissions", 
    requirements: ["Photocopy of Birth Certificate", "Original Form 138 (Grade 12 Card)", "Photocopy of HS Diploma"],
    offersScholarship: true,
    applicationFee: "₱600"
  },
  { 
    name: "Mapua Malayan Colleges Laguna", 
    categories: ["Engineering", "IT"], 
    type: "Private", 
    link: "https://mcl.edu.ph/admissions/", 
    requirements: ["Original Grade 12 Report Card", "Good Moral Certificate", "PSA Birth Certificate", "Parent's Valid ID", "1.5 x 1.5 ID Picture"],
    offersScholarship: true,
    applicationFee: "₱500"
  },
  { 
    name: "Philippine Women’s University", 
    address: "1743 Taft Ave, Malate, Manila", 
    categories: ["General"], 
    type: "Private", 
    link: "https://www.pwu.edu.ph/", 
    requirements: ["Form 138 (Original & Photocopy)", "Letter of Recommendation", "Good Moral Certificate", "PSA Birth Certificate", "Two 1.5 x 1.5 ID Pictures"],
    offersScholarship: true,
    applicationFee: "₱500"
  },
  { 
    name: "University of the East", 
    address: "2219 Recto Ave, Manila", 
    categories: ["General"], 
    type: "Private", 
    link: "https://www.ue.edu.ph/mla/", 
    requirements: ["Original Form 138 (or Form 137A)", "Latest Good Moral Certificate", "PSA Authenticated Birth Certificate"],
    offersScholarship: true,
    applicationFee: "₱600"
  },
  { 
    name: "University of Santo Tomas", 
    categories: ["General", "Medical", "Engineering", "Arts & Design"], 
    type: "Private", 
    link: "https://ustet.ust.edu.ph/", 
    requirements: ["2x2 ID Picture", "PSA/NSO Birth Certificate", "USTET Application Grades Form", "Grade 12 Report Card", "Cert of Top 10% (if applicable)"],
    offersScholarship: true,
    applicationFee: "₱600 (USTET)"
  },
  { 
    name: "Dualtech Training Center", 
    categories: ["General", "IT", "Engineering"], 
    type: "Private", 
    link: "https://www.dualtech.org.ph/", 
    requirements: ["Male HS Graduate", "18-22 years old", "Willing to work", "Accept terms and conditions"],
    offersScholarship: true,
    applicationFee: "FREE"
  },
  { 
    name: "Far Eastern University - NRMF", 
    categories: ["Medical"], 
    type: "Private", 
    link: "https://www.feu-nrmf.edu.ph/admission-procedure", 
    requirements: ["PSA Birth Certificate", "Good Moral Character", "Scholastic Records", "STEM Strand or 80% GWA"],
    offersScholarship: true,
    applicationFee: "₱600"
  },
  { 
    name: "University of Asia and the Pacific", 
    address: "Pasig City", 
    categories: ["General", "Business"], 
    type: "Private", 
    link: "https://uap.asia/", 
    requirements: ["Online Application", "Proof of Payment", "PSA Birth Certificate", "Recent Photo", "School ID", "Copy of Grades"],
    offersScholarship: true,
    applicationFee: "₱1,000"
  },
  { 
    name: "Our Lady of Fatima University", 
    categories: ["General", "Medical"], 
    type: "Private", 
    link: "https://fatima.edu.ph/all-about-enrollment/", 
    requirements: ["Original Grade 12 Card", "Original F137", "Certificate of Good Moral", "PSA Birth Certificate"],
    offersScholarship: true,
    applicationFee: "₱500"
  },
  { 
    name: "San Beda University - Manila", 
    categories: ["General", "Law"], 
    type: "Private", 
    link: "https://www.sanbeda.edu.ph/manila/admissions", 
    requirements: ["Grade 11 & 12 Report Cards", "PSA Birth Certificate", "2x2 ID Picture", "Good Moral", "Certificate of Indigency (if scholar)"],
    offersScholarship: true,
    applicationFee: "₱600"
  },
  { 
    name: "Centro Escolar University", 
    categories: ["General", "Medical"], 
    type: "Private", 
    link: "https://admission2.ceu.edu.ph/", 
    requirements: ["Original Form 138 or Grade 12 Card", "Good Moral Certificate", "Birth Certificate"],
    offersScholarship: true,
    applicationFee: "₱500"
  },
  { 
    name: "The National Aviation Academy of the Philippines", 
    categories: ["General", "Engineering", "IT"], 
    type: "Private", 
    link: "https://naap.edu.ph/admission-office/", 
    requirements: ["Senior High School Card", "Good Moral Character", "2 pcs 1x1 colored picture"],
    offersScholarship: false,
    applicationFee: "₱500"
  },
  { 
    name: "National University - Manila", 
    categories: ["General", "IT", "Engineering"], 
    type: "Private", 
    link: "https://onlineapp.national-u.edu.ph/quest/register.php", 
    requirements: ["PSA Birth Certificate", "2x2 Picture (White BG)", "Good Moral Character", "Grade 12 Report Card"],
    offersScholarship: true,
    applicationFee: "₱400"
  },
  { 
    name: "University of Perpetual Help Dr. Jose G. Tamayo", 
    categories: ["Medical"], 
    type: "Private", 
    link: "https://uphdjgtmedicaluniversity.edu.ph/", 
    requirements: ["F-138 (Report Card)", "Good Moral Character", "PSA Birth Certificate", "4 pcs 2x2 ID picture"],
    offersScholarship: true,
    applicationFee: "₱500"
  },
  { 
    name: "Colegio de San Juan de Letran", 
    address: "Intramuros, Manila", 
    categories: ["General"], 
    type: "Private", 
    link: "https://letpass.letran.edu.ph", 
    requirements: ["School ID (Check site for details)"],
    offersScholarship: true,
    applicationFee: "₱500"
  },
  { 
    name: "Southville International School", 
    address: "Las Piñas", 
    categories: ["General"], 
    type: "Private", 
    link: "https://www.southville.edu.ph/", 
    requirements: ["2 pcs 2x2 pictures", "Clear PSA Birth Certificate"],
    offersScholarship: true,
    applicationFee: "₱1,000"
  },
  { 
    name: "Lyceum of the Philippines University - Laguna", 
    categories: ["Hospitality", "Business"], 
    type: "Private", 
    link: "https://lpulaguna.edu.ph/admission/", 
    requirements: ["Form 138", "Good Moral Character", "PSA Birth Certificate", "2x2 ID Photo", "Form 137 (Student Permanent Record)"],
    offersScholarship: true,
    applicationFee: "₱500"
  },
  { 
    name: "De La Salle University", 
    categories: ["Business", "General", "Engineering"], 
    type: "Private", 
    link: "https://www.dlsu.edu.ph/admissions", 
    requirements: ["PSA Birth Certificate", "Secondary Scholastic Record", "2x2 Photo", "Good Moral"],
    offersScholarship: true,
    applicationFee: "₱600"
  },
  { 
    name: "De La Salle-College of Saint Benilde", 
    categories: ["General", "Arts & Design", "Hospitality"], 
    type: "Private", 
    link: "https://www.benilde.edu.ph/admissions/", 
    requirements: ["PSA Birth Certificate", "Scholastic Record", "AHWLD Form", "2x2 Photo"],
    offersScholarship: true,
    applicationFee: "₱600"
  },
  { 
    name: "Ateneo de Manila University", 
    categories: ["General", "Social Sciences", "Law", "Business"], 
    type: "Private", 
    link: "https://www.ateneo.edu/admissions", 
    requirements: ["Personal Essay", "High School Record", "Recommendation Forms", "PSA Birth Certificate"],
    offersScholarship: true,
    applicationFee: "₱600"
  },
  { 
    name: "Laguna College of Business and Arts", 
    categories: ["Business"], 
    type: "Private", 
    link: "https://lcba.edu.ph/online-enrollment", 
    requirements: ["Form 138", "Good Moral", "SF 10 (Form 137)", "PSA Birth Certificate", "2x2 ID Picture"],
    offersScholarship: true,
    applicationFee: "₱300"
  },
  { 
    name: "FEU Institute of Technology", 
    categories: ["IT", "Engineering"], 
    type: "Private", 
    link: "https://www.feutech.edu.ph/feutech/admission", 
    requirements: ["FEUOCAT result", "Admissions form", "SF9 / Grade 12 report card", "Good Moral", "PSA Birth Certificate"],
    offersScholarship: true,
    applicationFee: "₱500"
  },
  { 
    name: "PHINMA Rizal College of Laguna", 
    categories: ["General", "Business"], 
    type: "Private", 
    link: "https://laguna.phinma.edu.ph/", 
    requirements: ["Transcript of Records", "Honorable Dismissal", "PSA Birth Certificate", "2x2 ID Photo"],
    offersScholarship: true,
    applicationFee: "₱300"
  },
  { 
    name: "MOL Magsaysay Maritime Academy", 
    categories: ["Cadet"], 
    type: "Private", 
    link: "https://sms.mmma.edu.ph/padmission", 
    requirements: ["GWA 83%+", "Form 138", "Good Moral", "PSA Birth Certificate", "Single, 17-21 years old"],
    offersScholarship: true,
    applicationFee: "₱500"
  },

  { 
    name: "Pamantasan ng Cabuyao", 
    address: "Cabuyao, Laguna", 
    categories: ["General"], 
    type: "State", 
    link: "https://iadmit.pnc.edu.ph/", 
    requirements: ["Affidavit of Undertaking (Notarized)", "Certificate of Enrollment", "PSA Birth Certificate", "Good Moral", "Voter's Certificate", " Two copies of 2x2 and Four copies of 1x1 colored ID picture with nametag",
                  "long white folder and long plastic envelope"] 
  },
  { 
    name: "University of the Philippines - Manila", 
    categories: ["Medical", "General"], 
    type: "State", 
    link: "https://upcat.up.edu.ph/", 
    requirements: ["Certified True Copy of Form 137", "2x2 Picture with signature and nametag", "Parent Certification"] 
  },
  { 
    name: "Technological University of the Philippines - Manila", 
    categories: ["General", "Engineering"], 
    type: "State", 
    link: "https://tup.edu.ph/undergraduate/admission/", 
    requirements: ["SHS Form 138-A", "Two 2x2 pictures", "Grade 11 Report Card", "Good Moral Character"] 
  },
  { 
    name: "Technological University of the Philippines - Taguig", 
    categories: ["Engineering"], 
    type: "State", 
    link: "https://www.tupt.edu.ph/progoff", 
    requirements: ["Photocopy of Grade 11 Report Card", "Printed ERS Application Form", "Transcript of Records (Transferees)"] 
  },
  { 
    name: "University of the Philippines - Diliman", 
    categories: ["General", "Law", "Education"], 
    type: "State", 
    link: "https://upcat.up.edu.ph/", 
    requirements: ["Certified True Copy of Form 137", "2x2 Picture with signature", "Parent Certification"] 
  },
  { 
    name: "Pamantasan Lungsod ng Maynila", 
    address: "Intramuros, Manila", 
    categories: ["General"], 
    type: "State", 
    link: "https://plm.edu.ph/admissions", 
    requirements: ["PSA Birth Certificate", "Grade 11 Report Card", "Certification of GWA - Grade 11", "ALS completers and Accreditation & Equivalency - Certificate of Completion"] 
  },
  { 
    name: "Batangas State University", 
    address: "Batangas", 
    categories: ["General"], 
    type: "State", 
    link: "https://batstateu.edu.ph/admissions/", 
    requirements: ["E-copy of Application Form", "Passport size picture", "Certified Grades", "Grade Form 1 (regular admission", "Grades Form 2 (ALS)", 
                  "JHS and SHS Form 137", "Certification of Completion of SHS and Strand", "Certification of Enrollment (if not completed)"] 
  },
  { 
    name: "Laguna State Polytechnic University", 
    address: "Sta. Cruz, Laguna", 
    categories: ["General", "IT"], 
    type: "State", 
    link: "https://admissions.lspusys.com/", 
    requirements: ["Recent 2x2 ID picture on white background", "Certified True Copy of Grade 11 report card", "Original Form 137", "Certificate of Good Moral", "Birth Certificate"] 
  },
  { 
    name: "Philippine Normal University", 
    categories: ["Education"], 
    type: "State", 
    link: "https://www.pnu.edu.ph/admissions/", 
    requirements: ["Signed PWEBSS Form", "High School Scholastic Record", "Certificate of Enrollment or Registration", "Declaration as a New Student", "Recommendation Form", "Personal Statement",
                  "Research Interest (For gap year students only / for BS-MA applicants only)"] 
  },
  { 
    name: "Laguna University", 
    address: "Sta. Cruz, Laguna", 
    categories: ["IT", "General"], 
    type: "State", 
    link: "https://lu.edu.ph/", 
    requirements: ["Scanned Grade 12 Report Card", "Form 137-A / SF10", "Certificate of Good Moral", "Birth Certificate"] 
  },
  { 
    name: "City College of Calamba", 
    address: "Calamba, Laguna", 
    categories: ["General", "Education"], 
    type: "State", 
    link: "https://ccc.edu.ph/admissions", 
    requirements: ["Online Admission Form", "Photocopy of Grade 11 & 12 Cards", "Photocopy of PSA/NSO Birth Certificate", "Photocopy of Certificate of Good Moral", "Barangay Certificate of Residency", "Voter's ID", "Three copies of 2x2 ID picture on white background"] 
  },
  { 
    name: "University of the Philippines - Los Baños", 
    categories: ["Social Sciences"], 
    type: "State", 
    link: "https://upcat.up.edu.ph/", 
    requirements: ["Certified True Copy of Form 137", "2x2 Picture with signature", "Parent Certification"] 
  },
  { 
    name: "Rizal Technological University", 
    categories: ["General", "IT", "Engineering"], 
    type: "State", 
    link: "https://www.rtu.edu.ph/", 
    requirements: ["2x2 ID Picture on blue background", "Report Cards", "Certificate of Good Moral", "Valid ID", "Complete Online Application"] 
  },
  { 
    name: "Philippine Military Academy", 
    categories: ["Cadet"], 
    type: "Government", 
    link: "https://admission.pma.edu.ph", 
    requirements: ["Scanned PSA Birth Certificate", "Scanned Form 137 / Form 138"] 
  },
  { 
    name: "Philippine National Police Academy", 
    categories: ["Cadet"], 
    type: "Government", 
    link: "https://www.pnpacatoas.com", 
    requirements: ["PSA Birth Certificate", "2x2 Picture", "Filled-out PNPA BMI Form"] 
  },
  { 
    name: "Philippine Merchant Marine Academy", 
    categories: ["Cadet"], 
    type: "Government", 
    link: "https://admissions.pmma.edu.ph/", 
    requirements: ["Principal's Certification of current enrollment", "2x2 ID Picture"],
    applicationFee: "₱500"
  },
  { 
    name: "Polytechnic University of the Philippines - Manila", 
    categories: ["General", "IT", "Engineering", "Hospitality"], 
    type: "State", 
    link: "https://www.pup.edu.ph/applicants/", 
    requirements: ["2x2 colored photo", "Grade 11 report card with GWA"] 
  }
];

export const SCHOLARSHIPS: ScholarshipEntry[] = [
  { 
    title: "DepEd SHS Voucher Program", 
    provider: "Government", 
    level: "SHS/JHS", 
    tags: ["Voucher", "Public/Private Grade 10"], 
    link: "https://ovap.peac.org.ph/",
    eligibility: ["Grade 10 completers from public schools", "Grade 10 completers from State Universities and Colleges (SUCs) and Local Universities and Colleges (LUCs)", "Grade 10 completers from private schools who are current Education Service Contracting (ESC) grantees",
                 "Passers of the ALS Accreditation and Equivalency (A&E) Test", "Passers of the Philippine Education Placement Test (PEPT)", "Filipino Citizen"],
    requirements: [
      "Voucher Application Form (VAF-1)", 
      "Original PSA Birth Certificate", 
      "Photocopy of Grade 10 Report Card", 
      "Proof of Financial Status (ITR, Cert of Unemployment, or Cert of Indigency)", 
      "2 copies of 2x2 ID photo", 
      "Signed Parent/Guardian Consent Form"
    ],
    benefits: [
      "Tuition subsidy ranging from ₱14,000 to ₱22,500 (amount depends on location)",
      "Valid for use in private SHS or SUCs/LUCs offering SHS"
    ],
    steps: [
      "Check eligibility (Automatic for Public JHS completers; Application needed for Private JHS non-ESC).",
      "Create an account on the OVAP (Online Voucher Application Portal).",
      "Fill out the application form and upload required scanned documents.",
      "Wait for the posting of results on the PEAC website.",
      "Download and print your QVR (Qualified Voucher Recipient) Certificate.",
      "Present the QVR to the school upon enrollment."
    ]
  },
  { 
    title: "CHED Scholarship Program (CSP)", 
    provider: "Government", 
    level: "College", 
    tags: ["Merit", "GWA 93%", "Income < 400k"], 
    link: "https://ched.gov.ph/",
    eligibility: ["Filipino Citizen", "SHS graduate"],
    requirements: [
      "Complete Online Application Form", 
      "Certified True Copy of Form 138 (GWA at least 93% for Merit, 96% for Premium)", 
      "PSA Birth Certificate", 
      "Parents' ITR / Cert of Indigency / Cert of Tax Exemption",
      "Certificate of Good Moral Character"
    ],
    benefits: [
      "Full Merit: ₱30,000/sem (Private) or ₱20,000/sem (SUC)",
      "Half Merit: ₱15,000/sem (Private) or ₱10,000/sem (SUC)",
      "Book allowance and stipend included in the grant"
    ],
    steps: [
      "Wait for the CHED Regional Office to open the application season (usually March-May).",
      "Prepare all documentary requirements in digital format (PDF/JPEG).",
      "Submit application via the CHED Online Portal for your region (e.g., CHEDRO 4A for Laguna).",
      "Wait for the release of the list of qualifiers.",
      "If qualified, submit hard copies of documents to the CHED Regional Office."
    ]
  },
  { 
    title: "DOST-SEI Undergraduate Scholarship", 
    provider: "Government", 
    level: "College", 
    tags: ["STEM", "Merit", "Top 5% Non-STEM"], 
    link: "https://science-scholarships.ph/",
    requirements: [
      "Form C (Certificate of Good Moral Character)", 
      "Form D (Certificate of Good Health)", 
      "Form E1/E2 (Principal's Certification of Grades/Strand)", 
      "Form F (Certificate of Residency)", 
      "Form G (Parent’s Certification)",
      "Recent passport size (4.5 cm x 3.5 cm) picture", 
      "PSA Birth Certificate", 
      "Proof of Parent's Income (ITR/Indigency)"
    ],
    benefits: [
      "Tuition and school fees subsidy (₱40,000/year)",
      "Monthly Living Allowance (₱7,000/month)",
      "Book Allowance (₱10,000/year)",
      "Clothing Allowance (₱1,000 first sem)",
      "Transportation Allowance (for those studying outside home province)"
    ],
    steps: [
      "Register at the E-Scholarship Application System.",
      "Fill out the form and upload all required documents.",
      "Select a test center for the qualifying exam.",
      "Download and print your Test Permit.",
      "Take the DOST-SEI Scholarship Examination on the scheduled date.",
      "Wait for the release of passers via national newspapers or the DOST website."
    ]
  },
  { 
    title: "OWWA (EDSP)", 
    provider: "Government", 
    level: "College", 
    tags: ["OFW Dependent", "GWA 80%"], 
    link: "https://scholarship.owwa.gov.ph/",
    requirements: [
      "Proof of OWWA Membership (Official Receipt or Cert)",
      "PSA Birth Certificate of applicant",
      "Form 137/138 (GWA of at least 80% with no failing grade)",
      "2x2 ID Pictures",
      "Certificate of Good Moral Character"
    ],
    benefits: [
      "Financial assistance of ₱60,000.00 per school year",
      "Covers tuition and other academic fees"
    ],
    steps: [
      "Visit the nearest OWWA Regional Welfare Office.",
      "Submit the application form and documentary requirements.",
      "Wait for the schedule of the qualifying examination (DOST exam is usually used as basis).",
      "Check results online or at the OWWA office.",
      "Attend the orientation and contract signing if qualified."
    ]
  },
  { 
    title: "Iskolar ni Gob (Laguna)", 
    provider: "Government", 
    level: "College", 
    tags: ["Provincial", "Financial Aid"], 
    link: "https://www.facebook.com/LagunaProvincialCapitol",
    requirements: [
      "Duly accomplished Application Form",
      "Certificate of Registration/Enrollment (COR)",
      "Report Card / Copy of Grades (No failing grade)",
      "Voter's ID or Certification of Parent/Applicant",
      "Barangay Indigency",
      "Community Tax Certificate (Cedula)"
    ],
    benefits: [
      "Cash allowance per semester (amount varies, usually ₱5,000 - ₱10,000)",
      "Priority in provincial government internships"
    ],
    steps: [
      "Wait for the announcement from the Laguna Provincial Government or Youth Development Affairs Office.",
      "Submit requirements to your Municipal Coordinator or Provincial Capitol.",
      "Wait for the validation and screening process.",
      "Attend the mass payout distribution if approved."
    ]
  },
  { 
    title: "GSIS STEM Scholarship Program", 
    provider: "Government", 
    level: "College", 
    tags: ["Financial Aid", "GWA 90%", "STEM"], 
    link: "https://www.gsis.gov.ph",
    eligibility: ["must be active GSIS member with 3+ years of servers or permanent total disability (PTD) below 60 yrs old", "must have SHS GWA 90%", "must be incoming 1st-year college student under a STEM course", "chosen collegemust be CHED recognized"],
    requirements: ["SHS final report card", "service record", "latest payslip (verified SG 15 status","GSIS touch account", "updated IDs and certifications (if Solo Parent / IP / PWD"]
  },
  { 
    title: "SM Scholarship Program", 
    provider: "Private", 
    level: "College", 
    tags: ["Merit", "Income < 150k", "GWA 88%"], 
    link: "https://www.sm-foundation.org/",
    requirements: [
      "Online Application Form",
      "High School Report Card (GWA 88% or better)",
      "Parents' ITR or Certificate of Non-Filing of Tax (Income < ₱150,000/year)",
      "Utility Bills (Electricity/Water) to prove residency",
      "Sketch of home location"
    ],
    benefits: [
      "Full Tuition and Miscellaneous Fees",
      "Monthly Allowance",
      "Part-time job opportunities during break",
      "Exclusive job offer with SM Group upon graduation"
    ],
    steps: [
      "Apply online via the SM Foundation website (usually open Jan-Mar).",
      "Take the online qualifying exam.",
      "Undergo an interview with SM Foundation representatives.",
      "Wait for the home visit validation.",
      "Sign the scholarship contract."
    ]
  },
  { 
    title: "Ayala Foundation Scholarship", 
    provider: "Private", 
    level: "College", 
    tags: ["Leadership", "Filipino", "GWA 85%"], 
    link: "https://ayalafoundation.org/",
    requirements: [
      "Accomplished Application Form",
      "Certified True Copy of Grades (GWA 85% or higher)",
      "Proof of Family Income (ITR or Indigency)",
      "Recommendation Letter from Principal/Guidance Counselor",
      "Essay on leadership and community service"
    ],
    benefits: [
      "Financial assistance for tuition and books",
      "Leadership development training (Ayala Young Leaders Congress)",
      "Mentorship from Ayala executives"
    ],
    steps: [
      "Fill out the online application form.",
      "Upload scanned copies of requirements.",
      "Wait for shortlist notification.",
      "Attend the panel interview.",
      "Participate in the leadership camp (if part of the program)."
    ]
  },
  { 
    title: "Gokongwei Brothers Foundation", 
    provider: "Private", 
    level: "College", 
    tags: ["STEM", "GWA 85%"], 
    link: "https://www.gokongweibrothersfoundation.org/programs/for-learners/scholarships",
    requirements: [
      "Certified True Copy of Grades (GWA 85%, Math/Science 85%)",
      "Proof of Enrollment in a STEM course",
      "PSA Birth Certificate",
      "Certificate of Good Moral Character",
      "Proof of Household Income (max ₱200k/year)"
    ],
    benefits: [
      "Fixed annual financial grant (₱60,000 - ₱85,000 depending on course/school)",
      "Employment opportunities in Gokongwei Group companies",
      "Scholar development programs"
    ],
    steps: [
      "Submit online application via GBF website.",
      "Take the qualifying examination.",
      "Pass the live interview.",
      "Submit hard copies of requirements upon acceptance."
    ]
  },
  { 
    title: "BPI Foundation (Pagpupugay)", 
    provider: "Private", 
    level: "College", 
    tags: ["Medical Frontliner Dependent", "GWA 85%"], 
    link: "https://www.bpifoundation.org/programs/special-projects/pagpupugay-scholarship",
    requirements: [
      "Proof of relationship to a medical frontliner (deceased or active)",
      "COVID-19 admission/death certificate of parent (if applicable)",
      "Report Card (GWA 85% or higher)",
      "Proof of admission to a college/university"
    ],
    benefits: [
      "Full Tuition and Miscellaneous Fees subsidy",
      "Book and Living Allowance",
      "Scholarship is valid for the entire duration of the course (must maintain grades)"
    ],
    steps: [
      "Visit the BPI Foundation Pagpupugay website.",
      "Complete the online application form.",
      "Submit supporting documents regarding parent's frontliner status.",
      "Wait for screening and evaluation results."
    ]
  }
];

export const REVIEWERS: ReviewerLink[] = [
  {
    channel: "Team Lyqa",
    url: "https://www.youtube.com/watch?v=6r1rJDA924w&list=PLtQqxDEgSqMDyRaFrZAHoLpdAmJFcIZeD",
    about: "Math, English, and Science tutorials focusing on formulas and common CET topics."
  },
  {
    channel: "Review Central",
    url: "https://www.youtube.com/@ReviewCentralAcademy/playlists",
    about: "Playlists for specific university exams (DCAT, PLMAT, ACET, DOST, etc.)."
  }
];

export const DRIVE_LINK = "https://drive.google.com/drive/folders/1eg7_IZbBT66tWWx69Q5uQy7V8--kLxL_";

export const GENERAL_QUALIFICATIONS: string[] = [
  "Nakatapos ng Grade 12 o ALS/PEPT (or equivalent)",
  "May sapat na dokumento: PSA Birth Certificate, Form 137 / 138, Certificate of Good Moral",
  "Handang sumailalim sa entrance exam o scholarship screening (depende sa school)",
  "Magkaroon ng updated 2x2 ID photo at contact information"
];

export const REQUIREMENTS_GUIDE = {
  barangay: {
    title: "Barangay Indigency",
    steps: [
      "Pumunta sa Barangay Hall at mag-fill up ng request form.",
      "Ibigay sa Barangay Officer ang form at magdala ng valid ID, request letter, at proof of no business.",
      "Libre ito at walang babayaran."
    ]
  },
  cityHall: {
    title: "PSA Birth Certificate (SM Calamba)",
    steps: [
      "Pumunta sa SM Calamba 3rd Floor (Satellite Office) o City Hall.",
      "Mag-request ng PSA Application Form para sa Birth Certificate.",
      "Magbayad ng processing/service fee (approx. ₱195).",
      "Kunin ang claim stub at bumalik pagkalipas ng 3-5 araw."
    ]
  },
  school: {
    title: "Paaralan (Admin/Principal)",
    steps: [
      "Pumunta sa Principal's Office o Admin at mag-request ng mga kailangang requirements",
      "Tanungin ito sa Admin kung magkano ang requirements",
      "Hintayin ang email o mensahe mula sa kanila kung kailan ito maaaring makuha",
      "Certified True Copy of Grades / Transcript of Records (TOR)",
      "Certificate of Good Moral Character",
      "Form 137 / Form 138"
    ]
  }
};

export const APPLICATION_STEPS = [
  "Alamin ang mga requirements at deadlines ng unibersidad.",
  "Mag-register para sa admission test (karaniwang online).",
  "Ihanda at ipasa ang mga dokumento (Birth Cert, Form 137, Good Moral).",
  "Maghintay ng test permit (via email o website).",
  "Kumuha ng exam o interview (kung mayroon).",
  "Hintayin ang resulta ng entrance exam.",
  "Ipasa ang scholarship requirements.",
  "Hintayin ang resulta ng scholarship grant.",
  "Kumpirmahin ang enrollment at magbayad ng fee (kung meron)."
];
