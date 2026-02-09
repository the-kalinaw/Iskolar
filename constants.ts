
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
    address: "Dasmariñas City, Cavite",
    categories: ["Medical"], 
    type: "Private", 
    link: "https://academics.dlsmhsi.edu.ph/admissions", 
    requirements: ["Photocopy of Birth Certificate", "Original Form 138 (Grade 12 Card)", "Photocopy of HS Diploma"],
    offersScholarship: true,
    applicationFee: "₱1,000"
  },
  { 
    name: "Mapua Malayan Colleges Laguna", 
    address: "Cabuyao, Laguna",
    categories: ["Engineering", "IT"], 
    type: "Private", 
    link: "https://mcl.edu.ph/admissions/", 
    requirements: ["Original Grade 12 Report Card", "Good Moral Certificate", "PSA Birth Certificate", "Parent's Valid ID", "1.5 x 1.5 ID Picture"],
    offersScholarship: true,
    applicationFee: "₱400"
  },
  { 
    name: "Philippine Women’s University", 
    address: "1743 Taft Ave, Malate, Manila", 
    categories: ["General", "Education", "Arts & Design", "Social Sciences"], 
    type: "Private", 
    link: "https://www.pwu.edu.ph/", 
    requirements: ["Form 138 (Original & Photocopy)", "Letter of Recommendation", "Good Moral Character Certificate", "PSA Birth Certificate", "Two 1.5 x 1.5 ID Pictures", "Art Test for Bachelor of Fine Arts (BFA) or Bachelor of Science in Interior Design (BSID)", "Video Audition for Bachelor of Music (BM) applicants"],
    offersScholarship: true,
    applicationFee: "₱500"
  },
  { 
    name: "University of the East", 
    address: "2219 Recto Ave, Manila", 
    categories: ["General", "Social Sciences", ], 
    type: "Private", 
    link: "https://www.ue.edu.ph/mla/", 
    requirements: ["Original Form 138 (or Form 137A)", "Latest Good Moral Character Certificate", "PSA Authenticated Birth Certificate", "Certificate of Academic Ranking (for Valedictorian & Salutatorian)", "Certificate of Employment (for full-time working students)"],
    offersScholarship: true,
    applicationFee: "₱600"
  },
  { 
    name: "University of Santo Tomas", 
    address: "España St, Sampaloc, Manila",
    categories: ["General", "Medical", "Business", "Arts & Design", "Law"], 
    type: "Private", 
    link: "https://ustet.ust.edu.ph/", 
    requirements: ["2x2 ID Picture", "PSA/NSO Birth Certificate", "USTET Application Grades Form", "Grade 12 Report Card", "Certification of Top 10% Ranking and DSWD Certificate of Indigency (for application waiver)"],
    offersScholarship: true,
    applicationFee: "₱600 (USTET)"
  },
  { 
    name: "Dualtech Training Center", 
    address: "Canlubang, Calamba",
    categories: ["IT", "Engineering"], 
    type: "Private", 
    link: "https://www.dualtech.org.ph/", 
    requirements: ["Male HS Graduate", "18-22 years old", "Willing to work", "Accept terms and conditions"],
    offersScholarship: true,
    applicationFee: "FREE"
  },
  { 
    name: "Far Eastern University - NRMF",
    address: "Quezon City", 
    categories: ["Medical"], 
    type: "Private", 
    link: "https://www.feu-nrmf.edu.ph/admission-procedure", 
    requirements: ["PSA Birth Certificate", "Certificate of Good Moral Character", "Scholastic Records (Grade 11 & 12 report cards)", "Passport size colored ID pictures", "STEM Strand or 80% GWA (for Accelerated Pathway for Medicine APMed)"],
    offersScholarship: true,
    applicationFee: "₱600"
  },
  { 
    name: "University of Asia and the Pacific", 
    address: "Pasig City", 
    categories: ["General", "Business", "Law"], 
    type: "Private", 
    link: "https://uap.asia/", 
    requirements: ["Online Application", "Proof of Payment", "PSA Birth Certificate", "Recent Photo", "School ID", "Copy of Grades"],
    offersScholarship: true,
    applicationFee: "₱1,000 (Private school), ₱500 (Public school)"
  },
  { 
    name: "Our Lady of Fatima University", 
    address: "Sta. Rosa, Laguna & Valenzuela City",
    categories: ["General", "Medical"], 
    type: "Private", 
    link: "https://fatima.edu.ph/all-about-enrollment/", 
    requirements: ["Original Grade 12 Card", "Original Form-137", "Certificate of Good Moral Character", "PSA Birth Certificate", "Grade 12 SHS Diploma", "Two (2) copies of 2x2 studio photo (white BG)"],
    offersScholarship: true,
    applicationFee: "₱500"
  },
  { 
    name: "San Beda University - Manila", 
    address: "Manila", 
    categories: ["General", "Law"], 
    type: "Private", 
    link: "https://www.sanbeda.edu.ph/manila/admissions", 
    requirements: ["Grade 11 & 12 Report Cards", "PSA Birth Certificate", "2x2 ID Picture", "Certificate of Good Moral Character", "Certificate of Indigency & Certificate of Academic Ranking (for applicants applying for scholarship))"],
    offersScholarship: true,
    applicationFee: "₱800"
  },
  { 
    name: "Centro Escolar University", 
    address: "Manila",
    categories: ["General", "Medical"], 
    type: "Private", 
    link: "https://admission2.ceu.edu.ph/", 
    requirements: ["Original Form 138 or Grade 12 Card", "Good Moral Character Certificate", "Certified True Copy of Birth Certificate", "2x2 ID Picture", "PWD ID (if applicable)"],
    offersScholarship: true,
    applicationFee: "₱550"
  },
  { 
    name: "The National Aviation Academy of the Philippines", 
    address: "Pasay City",
    categories: ["Engineering", "IT"], 
    type: "State", 
    link: "https://naap.edu.ph/admission-office/", 
    requirements: ["Senior High School Card", "Certificate of Good Moral Character", "2 pcs 1x1 colored picture"],
  },
  { 
    name: "National University - Manila", 
    address: "Manila",
    categories: ["General", "IT", "Engineering"], 
    type: "Private", 
    link: "https://onlineapp.national-u.edu.ph/quest/register.php", 
    requirements: ["PSA Birth Certificate", "2x2 Picture (White BG)", "Certificate of Good Moral Character", "Grade 12 Report Card"],
    offersScholarship: true,
    applicationFee: "FREE"
  },
  { 
    name: "University of Perpetual Help Dr. Jose G. Tamayo", 
    address: "Biñan, Laguna",
    categories: ["Medical"], 
    type: "Private", 
    link: "https://uphdjgtmedicaluniversity.edu.ph/", 
    requirements: ["Form-138 (Report Card)", "Certificate of Good Moral Character", "PSA/NSO Birth Certificate", "4 pcs 2x2 ID picture"],
    offersScholarship: true,
    applicationFee: "FREE"
  },
  { 
    name: "Colegio de San Juan de Letran", 
    address: "Calamba, Laguna", 
    categories: ["General"], 
    type: "Private", 
    link: "https://www.letran-calamba.edu.ph/admission", 
    requirements: ["1x1 ID Picture", "Certified True Copy of Grades/Transcript of Records","PSA Birth Certificate","Certificate of Good Moral Character", "SF9/Form 138 (Report Card)", "SF10/Form 137 (permanent record)"],
    offersScholarship: true,
    applicationFee: "₱200"
  },
  { 
    name: "Southville International School", 
    address: "Las Piñas", 
    categories: ["General"], 
    type: "Private", 
    link: "https://www.southville.edu.ph/", 
    requirements: ["2 pcs 2x2 pictures", "Clear PSA Birth Certificate", "Report Card/Transcript of Records", "Certificate of Good Moral Character"],
    offersScholarship: true,
    applicationFee: "₱1,000"
  },
  { 
    name: "Lyceum of the Philippines University - Laguna",
    address: "Calamba, Laguna", 
    categories: ["Hospitality", "Business", "Social Sciences"], 
    type: "Private", 
    link: "https://lpulaguna.edu.ph/admission/", 
    requirements: ["Form 138", "Certificate of Good Moral Character", "PSA Birth Certificate", "2x2 ID Photo", "Form 137 (Student Permanent Record)"],
    offersScholarship: true,
    applicationFee: "0"
  },
  { 
    name: "De La Salle University", 
    address: "Taft Avenue, Manila",
    categories: ["Business", "General", "Engineering", "Medical", "Law", "IT", "Social Sciences"], 
    type: "Private", 
    link: "https://www.dlsu.edu.ph/admissions", 
    requirements: ["PSA Birth Certificate", "Secondary Scholastic Record (provided)", "2x2 Photo", "Certificate of Good Moral Character"],
    offersScholarship: true,
    applicationFee: "₱800"
  },
  { 
    name: "De La Salle-College of Saint Benilde", 
    address: "Taft Avenue, Manila",
    categories: ["General", "Arts & Design", "Hospitality"], 
    type: "Private", 
    link: "https://www.benilde.edu.ph/admissions/", 
    requirements: ["PSA Birth Certificate", "Secondary Scholastic Record (provided)", "Applicant Health, Well-being, & Learning Disclosure (AHWLD) Form", "Recent 2x2 colored photo in JPEG or PNG"],
    offersScholarship: true,
    applicationFee: "₱800"
  },
  { 
    name: "Ateneo de Manila University", 
    address: "Katipunan Avenue,Quezon City",
    categories: ["General", "Social Sciences", "Law", "Business"], 
    type: "Private", 
    link: "https://www.ateneo.edu/admissions", 
    requirements: ["Personal Essay", "High School Record", "Subject Teacher and Adviser Recommendation Forms", "Report card from Grade 9-11", "PSA Birth Certificate", " 1x1 ID Picture", "Certificate of Academic Ranking & DSWD Certificate of Indigency (for application waiver) and Public HS and public science high school students are exempted from the application fee."],
    offersScholarship: true,
    applicationFee: "₱600"
  },
  { 
    name: "Laguna College of Business and Arts", 
    address: "Calamba, Laguna",
    categories: ["Business", "Arts & Design"], 
    type: "Private", 
    link: "https://lcba.edu.ph/online-enrollment", 
    requirements: ["Form 138 (SHS Report Card)", "Certificate of Good Moral Character", "SF 10 (Form 137)", "PSA Birth Certificate", "2x2 ID Picture"],
    offersScholarship: true,
    applicationFee: "0"
  },
  { 
    name: "FEU Institute of Technology", 
    address: "Sampaloc, Manila",
    categories: ["IT", "Engineering"], 
    type: "Private", 
    link: "https://www.feutech.edu.ph/feutech/admission", 
    requirements: ["FEUOCAT result", "Admissions form", "SF9 / Grade 12 report card", "Certificate of Good Moral Character", "PSA Birth Certificate"],
    offersScholarship: true,
    applicationFee: "₱500"
  },
  { 
    name: "PHINMA Rizal College of Laguna", 
    address: "Calamba, Laguna",
    categories: ["General", "Business", "Cadet", "Social Sciences"], 
    type: "Private", 
    link: "https://laguna.phinma.edu.ph/", 
    requirements: ["Transcript of Records", "Honorable Dismissal", "PSA Birth Certificate", "2x2 ID Photo"],
    offersScholarship: true,
    applicationFee: "₱1, 500 (enrollment fee)"
  },
  { 
    name: "MOL Magsaysay Maritime Academy", 
    address: "Dasmariñas City, Cavite",
    categories: ["Cadet"], 
    type: "Private", 
    link: "https://sms.mmma.edu.ph/padmission", 
    requirements: ["with SHS GWA of 83%+", "Form 138", "Certificate of Good Moral Character", "PSA Birth Certificate", "Single, 17-21 years old", "Physically fit, no pre-existing medical conditions"],
    offersScholarship: true,
    applicationFee: "₱500"
  },
  {
    name: "University of Perpetual Health System Dalta- Calamba",
    address: "Calamba, Laguna",
    categories: ["Medical", "Education", "Engineering", "Business", "Hospitality"],
    type: "Private", 
    link: "https://perpetualdalta.edu.ph/new/calamba-campus-home/", 
    requirements: ["SF9 (Original Report Card)", "Certificate of Good Moral Character", "PSA Birth Certificate", "2x2 picture (3pcs.)", "Ishihara Medical Test Result forDoctor of Dental Medicine and Aviation Electronic Technology"],
    offersScholarship: true,
    applicationFee: "FREE"
  },
  {
  name: "Calamba Doctors College",
    address: "Calamba, Laguna",
    categories: ["Medical"],
    type: "Private", 
    link: "https://calambadoctorscollege.edu.ph/", 
    requirements: ["Form 138 (SHS Card)", "Form 137 with remarks “Copy for Calamba Doctors’ College” (original)", "Certificate of Good Moral Character with school dry seal", "PSA Birth Certificate", "2x2 picture (formal, white background)", "Photocopy of SHS Diploma"],
    offersScholarship: true,
    applicationFee: "FREE"

  },
  {
    name: "National University - Calamba",
    address: "Calamba, Laguna",
    categories: ["Engineering", "IT", "Education"],
    type: "Private", 
    link: "https://www.national-u.edu.ph/nu-laguna/", 
    requirements: ["Grade 12 Report Card", "Certificate of Good Moral Character", "PSA Birth Certificate", "2x2 colored ID picture", "Photocopy of Diploma (for ALS A&E passers)", "Certificate of Passing & Certificate of Rating (for Philippine Educational Placement Test (PEPT) and Alternative Learning System Accreditation and Equivalency (ALS A&E)"],
    offersScholarship: true,
    applicationFee: "FREE"
  },
  {
    name: "Saint Michael's College of Laguna",
    address: "Biñan, Laguna",
    categories: ["Business","Hospitality","IT","Education"],
    type: "Private", 
    link: "https://www.smcl.edu.ph/", 
    requirements: ["Grade 12 Report Card (Form 138", "Certificate of Good Moral Character", "PSA Birth Certificate", "1x1 ID picture", "Completed Application Form"],
    offersScholarship: true,
    applicationFee: "FREE"

  },
  {
    name: "STI College - Calamba",
    address: "Calamba, Laguna",
    categories: ["IT", "Hospitality", "Arts & Design"],
    type: "Private", 
    link: "https://www.sti.edu/admissions.asp", 
    requirements: ["Form 138 (SHS Card)", "Form 137", "Certificate of Good Moral Character or Recommendation from the Principal", "PSA Birth Certificate", "Medical Certificate of Chect X-ray results", "Medical Certificate of Hepatitis A & B Screening (for BS Hopitality Management, BS Culinary Management, Hotel & Restaurant Administration, or Hospitality and Restaurant Services)"],
    offersScholarship: true,
    applicationFee: "₱1,000"
  },
  {
    name: "Phil-Nippon Technical College Inc. - Calamba",
    address: "Calamba, Laguna",
    categories: ["Engineering"],
    type: "Private", 
    link: "https://www.facebook.com/p/PNTC-Phil-Nippon-Technical-College-61557287609672/", 
    requirements: ["Duly accomplished application form", "Certificate of Good Moral Character", "PSA Birth Certificate", "Transcript of Records/ Report Card"],
    offersScholarship: true,
    applicationFee: "0"
  },
  {
    name: "AMA Computer College - Calamba",
    address: "Calamba, Laguna",
    categories: ["Engineering", "IT", "Business"],
    type: "Private", 
    link: "http://www.ama.edu.ph/index.html", 
    requirements: ["Accomplished application form", "Certificate of Good Moral Character with school dry seal", "PSA Birth Certificate", "Original Report Card (Form 138)", "2x2 Pictures w/ White BG and name tag"],
    offersScholarship: true,
    applicationFee: "1,000"
  },
  {
    name: "Colegio De Los Baños",
    address: "Los Baños, Laguna",
    categories: ["IT", "Education", "Business"],
    type: "Private", 
    link: "https://www.cdlb.edu.ph/", 
    requirements: ["Photocopy of SHS Diploma", "Certificate of Good Moral Character", "PSA/NSO Birth Certificate", "Form 137 & Form 138 (Grade 12)", "2x2 ID Picture (2 pcs.)", "1x1 ID Picture (2 pcs.)"],
    offersScholarship: true,
    applicationFee: "1,000"
  },
  {
    name: "Dos Bosco College - Canlubang",
    address: "Calamba, Laguna",
    categories: ["Engineering", "IT", "Education"],
    type: "Private", 
    link: "https://donboscocanlubang.edu.ph/#", 
    requirements: ["Baptismal Certificate", "DBC Application Form", "DBS Recommendation Form", "PSA Birth Certificate", "Report Card (Form 138)/ Transcript of Records", "2x2 ID Picture"],
    offersScholarship: true,
    applicationFee: "400"
  },
  {
    name: "Mary Help of Christians College - Salesians Sisters, Inc - Canlubang",
    address: "Calamba, Laguna",
    categories: ["Education"],
    type: "Private", 
    link: "https://www.maryhelpcanlubang.com/", 
    requirements: ["Original Copy ofPSA Birth Certificate", "Original Copy of Current Report Card"],
    offersScholarship: true,
    applicationFee: "0"
  },
  {
    name: "San Pablo Colleges",
    address: "San Pablo City, Laguna",
    categories: ["Education"],
    type: "Private", 
    link: "https://sanpablocolleges.edu.ph/", 
    requirements: ["Original Copy ofPSA Birth Certificate", "Original Copy of Current Report Card"],
    offersScholarship: true,
    applicationFee: "0"
  },
  { 
    name: "Pamantasan ng Cabuyao", 
    address: "Cabuyao, Laguna", 
    categories: ["General"], 
    type: "State", 
    link: "https://iadmit.pnc.edu.ph/", 
    requirements: ["Affidavit of Undertaking (Notarized)", "Certificate of Enrollment", "PSA Birth Certificate", "Certificate of Good Moral Character", "Voter's Certificate", " Two copies of 2x2 and Four copies of 1x1 colored ID picture with nametag", "long white folder and long plastic envelope"] 
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
    address: "Manila",
    categories: ["General", "Engineering", "Arts & Design", "IT"], 
    type: "State", 
    link: "https://tup.edu.ph/undergraduate/admission/", 
    requirements: ["SHS Form 138-A", "Two 2x2 pictures", "Grade 11 Report Card", "Certificate ofGood Moral Character"] 
  },
  { 
    name: "Technological University of the Philippines - Taguig", 
    address: "Taguig, Manila",
    categories: ["Engineering", "IT"], 
    type: "State", 
    link: "https://www.tupt.edu.ph/progoff", 
    requirements: ["Photocopy of Grade 11 Report Card", "Printed ERS Application Form", "Transcript of Records (Transferees)"] 
  },
  { 
    name: "University of the Philippines - Diliman", 
    address: "Quezon City",
    categories: ["General", "Law", "Education", "Hospitality", "Engineering", "Arts & Design", "Social Sciences"], 
    type: "State", 
    link: "https://upcat.up.edu.ph/", 
    requirements: ["Certified True Copy of Form 137", "2x2 Picture with signature", "Parent Certification"] 
  },
  { 
    name: "Pamantasan Lungsod ng Maynila", 
    address: "Intramuros, Manila", 
    categories: ["General", "Business", "Medical"], 
    type: "State", 
    link: "https://plm.edu.ph/admissions", 
    requirements: ["PSA Birth Certificate", "Grade 11 Report Card", "Certification of GWA - Grade 11", "ALS completers and Accreditation & Equivalency - Certificate of Completion"] 
  },
  { 
    name: "Batangas State University", 
    address: "Batangas", 
    categories: ["General", "Engineering", "Education", "Hospitality", "Business"], 
    type: "State", 
    link: "https://batstateu.edu.ph/admissions/", 
    requirements: ["E-copy of Application Form", "Passport size picture", "Certified Grades", "Grade Form 1 (regular admission", "Grades Form 2 (ALS)", 
                  "JHS and SHS Form 137", "Certification of Completion of SHS and Strand", "Certification of Enrollment (if not completed)"] 
  },
  { 
    name: "Laguna State Polytechnic University", 
    address: "Sta. Cruz, Laguna", 
    categories: ["General", "IT", "Engineering", "Education", "Business", "Hospitality"], 
    type: "State", 
    link: "https://admissions.lspusys.com/", 
    requirements: ["Recent 2x2 ID picture on white background", "Certified True Copy of Grade 11 report card", "Original Form 137", "Certificate of Good Moral", "PSA/NSO Birth Certificate"] 
  },
  { 
    name: "Philippine Normal University", 
    address: "Manila",
    categories: ["Education", "Social Sciences"], 
    type: "State", 
    link: "https://www.pnu.edu.ph/admissions/", 
    requirements: ["Signed PWEBSS Form", "High School Scholastic Record", "Certificate of Enrollment or Registration", "Declaration as a New Student", "Recommendation Form", "Personal Statement",
                  "Research Interest (For gap year students only / for BS-MA applicants only)"] 
  },
  { 
    name: "Laguna University", 
    address: "Sta. Cruz, Laguna", 
    categories: ["IT", "General", "Education", "Business", "Social Sciences"], 
    type: "State", 
    link: "https://lu.edu.ph/", 
    requirements: ["Scanned Grade 12 Report Card", "Form 137-A / SF10", "Certificate of Good Moral Character", "Birth Certificate"] 
  },
  { 
    name: "City College of Calamba", 
    address: "Calamba, Laguna", 
    categories: ["Business", "Education", "IT"], 
    type: "State", 
    link: "https://ccc.edu.ph/admissions", 
    requirements: ["Online Admission Form", "Photocopy of Grade 11 & 12 Cards", "Photocopy of PSA/NSO Birth Certificate", "Photocopy of Certificate of Good Moral Character", "Barangay Certificate of Residency", "Voter's ID", "Three copies of 2x2 ID picture on white background"] 
  },
  { 
    name: "University of the Philippines - Los Baños", 
    address: "Los Baños, Laguna",
    categories: ["Social Sciences", "Medical", "Social Sciences", "General", "Business", "Engineering"], 
    type: "State", 
    link: "https://upcat.up.edu.ph/", 
    requirements: ["Certified True Copy of Form 137", "2x2 Picture with signature", "Parent Certification"] 
  },
  { 
    name: "Rizal Technological University", 
    address: "Mandaluyong City",
    categories: ["General", "IT", "Engineering", "Business", "Education"], 
    type: "State", 
    link: "https://www.rtu.edu.ph/", 
    requirements: ["2x2 ID Picture on blue background", "Report Cards", "Certificate of Good Moral Character", "Valid ID", "Complete Online Application"] 
  },
  { 
    name: "Philippine Military Academy", 
    address: "Baguio City",
    categories: ["Cadet"], 
    type: "Government", 
    link: "https://admission.pma.edu.ph", 
    requirements: ["Scanned PSA Birth Certificate", "Scanned Form 137 / Form 138"] 
  },
  { 
    name: "Philippine National Police Academy", 
    address: "Silng, Cavite",
    categories: ["Cadet"], 
    type: "Government", 
    link: "https://www.pnpacatoas.com", 
    requirements: ["PSA Birth Certificate", "2x2 Picture", "Filled-out PNPA BMI Form"] 
  },
  { 
    name: "Philippine Merchant Marine Academy", 
    address: "Zambales City",
    categories: ["Cadet"], 
    type: "Government", 
    link: "https://admissions.pmma.edu.ph/", 
    requirements: ["Principal's Certification of current enrollment", "2x2 ID Picture"],
    applicationFee: "₱500"
  },
  { 
    name: "Polytechnic University of the Philippines - Manila", 
    address: "Manila",
    categories: ["General", "IT", "Engineering", "Hospitality", "Business", "Arts & Design", "Education", "Social Sciences"], 
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
    eligibility: ["Grade 10 completers from public schools", 
      "Grade 10 completers from State Universities and Colleges (SUCs) and Local Universities and Colleges (LUCs)", 
      "Grade 10 completers from private schools who are current Education Service Contracting (ESC) grantees",
      "Passers of the ALS Accreditation and Equivalency (A&E) Test", 
      "Passers of the Philippine Education Placement Test (PEPT)", 
      "Filipino Citizen"
    ],
    requirements: [
      "Voucher Application Form (VAF-1)", 
      "Original PSA Birth Certificate", 
      "Photocopy of Grade 10 Report Card", 
      "Proof of Financial Status (ITR, Certificate of Unemployment, or Certificate of Indigency)", 
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
    eligibility: ["Filipino Citizen", "SHS graduate", "annual gross income should not exceed ₱500,000"],
    link: "https://ched.gov.ph/",
    requirements: [
      "Complete Online Application Form", 
      "Certified True Copy of Form 138 (GWA at least 93% for Merit, 96% for Premium)", 
      "PSA/NSO Birth Certificate", 
      "Parents' ITR / Certificate of Indigency / Certificate of Tax Exemption",
      "Certified true copy of latest contract or proof of income",
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
      "Form H (DOST-SEI scholarship examination/award)",
      "Form I (Applicant’s Certification of No-Post Secondary Units)",
      "Form J (Signed Declaration of Applicant and the Parent/Legal Guardian)",
      "Recent passport size (4.5 cm x 3.5 cm) picture", 
      "PSA Birth Certificate", 
      "Proof of Parent's Income (ITR/Indigency/Pension)",
      "Notarized Affidavit of Guardianship"
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
    eligibility: [
      "children or siblings of active OWWA member",
      "must be single",
      "not older than 21 years old",
      "must be a graduating Grade 12 student",
      "GWA of at least 80%, with no failing grade",
      "must be willing to enroll in any four or five-year baccalaureate course in a Philippine-based college"
    ],
    requirements: [
      "Valid passport (OFW)",
      "Valid school ID or any Valid ID of applicant",
      "Proof of OWWA Membership (Official Receipt or Certificate)",
      "PSA Birth Certificate of applicant",
      "Form 137/138 (GWA of at least 80% with no failing grade)",
      "Certificate of Good Moral Character",
      "2x2 ID pictures with white background and signature",
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
    title: "OWWA (CMWSP)", 
    provider: "Government", 
    level: "College", 
    tags: ["OFW Dependent", "GWA 80%"], 
    link: "https://scholarship.owwa.gov.ph/",
    eligibility: ["OFW","child of sibling of a single or married but childless OFW who is an active OWWA member", 
      "not older ther 21 years old", "annual income of less than $2,400", 
      "GWA of at least 80%, with no failing grade", 
      "must be willing in courses under Science and Technology in any Philippine-based college"],
    requirements: [
      "Valid passport (OFW)",
      "Valid school ID or any Valid ID of applicant",
      "Proof of OWWA Membership (Official Receipt or Certificate)",
      "PSA Birth Certificate of applicant",
      "Form 137/138 (GWA of at least 80% with no failing grade)",
      "2x2 ID pictures with white background and signature",
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
    eligibility: ["must be active GSIS member with 3+ years of servers or permanent total disability (PTD) below 60 yrs old", 
      "must have SHS GWA 90%", "must be incoming 1st-year college student under a STEM course", 
      "chosen college must be CHED recognized"],
    requirements: ["SHS final report card", "service record", "latest payslip (verified SG 15 status","GSIS touch account", "updated IDs and certifications (if Solo Parent / IP / PWD)"]
  },
  { 
    title: "Xavier School Nuvali Grant-in-Aid (GIA)", 
    provider: "Private", 
    level: "SHS/JHS", 
    tags: ["Financial Aid"], 
    link: "https://xsn.edu.ph/financial-aid/scholarship-application",
    eligibility: ["incoming grade 7 students and transferees"],
    requirements: ["Completed GIA application form", "Letter of Intent", 
      "recent 1.5 x 1.5 photo of the student (taken within the latest three months)",
      "recent 3R family picture (taken within the last three months)", 
      "Photocopy of the report card from the previous school year and the current school year - 1st Quarter should not have no failing marks",
      "Location Map of Residence", "recent 3R picture of permanent residence", "recent 3R picture of kitchen",
      "Certificate of Employment", "Business Registration, Permit, License, or Accreditation Certificate from DTI, SEC, LFTRB, City Hall",
      "Payslip of Parent/s and working sibling/s (latest, 2 months)", "Last available payslip and ITR for those who lost their job",
      "A copy of parent/s of latest ITR; or BIR Certification of Exemption from filing ITR; or Annual Income Tax Return for those who have their own businesses", 
      "Certification of Tuition Fee payment of children studying (previous school year and current school year)",
      "Electric bills, Cable bills (March, April, and May)", "Water bills (March, April, and May)", 
      "Telephone, Cellphone, and Internet bills (latest, 2 months)", "All Credit Card bills (March, April, and May)", 
      "All Bank Certificates for all investment (time deposits, stocks, bonds, etc.)", 
      "All Passbook (savings, current, online account, personal and business)", "Passport (student and parents; photocopy only pages with immigration stamp)", 
      "Mortgage document and Official Receipts (latest, 2 months)", "Loan Payment Receipt"],
      steps: [
      "Apply online via the Xavier Nuvali website .",
      "Download the GIA application form.",
    ]
  },
  { 
    title: "Ateneo de Manila University SHS Financial Aid", 
    provider: "Private", 
    level: "SHS/JHS", 
    tags: ["Financial Aid"], 
    link: "https://www.ateneo.edu/ajhs/admissions/scholarships",
    eligibility: ["Incoming grade 7 students are offered to applicants from public elementary schools, top students are invited to apply through the help of our Tulong-Dunong program."],
    requirements: ["PSA/NSO Birth Certificate (include page 2)", "Recent ID picture", "Completed report card (Grade 5/6/7/8, whichever would apply)", "Most recent official copy of current grade level card (Grade 6/7/8/9, whichever applies)",
      "Signed Letter of Recommendation from the Homeroom Teacher of the current year (The teacher should send the digital copy of this letter to the parent, so the parent can upload it to the form", "Pictures of the family residence", "Pictures of any vehicles owned, borrowed, etc.", "One Family picture",
      "ITR/Certificate of Indigency/Certificate of non-filing of each parent", "Payslips for each parent covering the most recent Three months", "Utility bills covering a three-month period (electricity, phone, internet, water, credit cards)", "Letter of intent, stating the reason/s for requesting financial aid"
    ],
      steps: ["Application for scholarship and financial aid is done on a yearly basis. The application period is announced on this site. Please SUBMIT ON TIME, so that the Financial Aid Committee can have enough time to deliberate on the applications.",
      "Applications for RENEWAL OF FINANCIAL AID/SCHOLARSHIPS should also be submitted ON TIME.",
      "Application is through an ONLINE FORM, which will be opened during the application period. Accomplish the form and upload all the requirements.",
      "SCANNED documents and pictures will be uploaded to the form, so prepare the following ahead of time in order for submission to be done WITHIN the application period.",
    ]
  },
  { 
    title: "APEC Schools Financial Assistance Programs", 
    provider: "Private", 
    level: "SHS/JHS", 
    tags: ["Financial Aid"], 
    link: "https://apecschools.edu.ph/scholarship/",
    eligibility: [
      "(Family Discount) must have at least 2 immediate family members enrolled in APEC schools", "(Ayala Group Discount) applicable to all qualified dependents of Ayala Group employees",
    ],
    requirements: ["PSA/NSO Birth Certificate (include page 2)", "Recent ID picture", "Completed report card (Grade 5/6/7/8, whichever would apply)", "Most recent official copy of current grade level card (Grade 6/7/8/9, whichever applies)",
      "Signed Letter of Recommendation from the Homeroom Teacher of the current year (The teacher should send the digital copy of this letter to the parent, so the parent can upload it to the form", "Pictures of the family residence", "Pictures of any vehicles owned, borrowed, etc.", "One Family picture",
      "ITR/Certificate of Indigency/Certificate of non-filing of each parent", "Payslips for each parent covering the most recent Three months", "Utility bills covering a three-month period (electricity, phone, internet, water, credit cards)", "Letter of intent, stating the reason/s for requesting financial aid"
    ],
      steps: ["Application for scholarship and financial aid is done on a yearly basis. The application period is announced on this site. Please SUBMIT ON TIME, so that the Financial Aid Committee can have enough time to deliberate on the applications.",
      "Applications for RENEWAL OF FINANCIAL AID/SCHOLARSHIPS should also be submitted ON TIME.",
      "Application is through an ONLINE FORM, which will be opened during the application period. Accomplish the form and upload all the requirements.",
      "SCANNED documents and pictures will be uploaded to the form, so prepare the following ahead of time in order for submission to be done WITHIN the application period.",
    ]
  },
  { 
    title: "SM Scholarship Program", 
    provider: "Private", 
    level: "College", 
    tags: ["Merit", "Income < 150k", "GWA 92%"], 
    link: "https://www.sm-foundation.org/",
    eligibility: ["Grade 12 graduates from public and private schools in the areas covered", "Applicants from private schools must have a DepEd voucer and must be Grade 10 finishers from public high schools",
      "GWA of at least 92%", "annual income of less than ₱250,000"
    ],
    requirements: [
      "Online Application Form",
      "Birth Certificate",
      "Latest Grade 12 report card",
      "Latest ITR of parent/s or guardian",
      "Certificate of Non-Filing of Income",
      "Certificate of Indigency",
      "Two copies of 2x2 ID picture",
      "Sketch of home location to the nearest SM mall"
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
    eligibility: [
      "must be a Filipino citizen", "must be a Female",
      "incoming 1st year, 2nd year, or 3rd year college students",
      "must be taking a 5-year course",
      "must be enrolled in a public or state university",
      "GPA of at least 85%",
      "without any disciplinary issue or administrative cases"
    ],
    requirements: [
      "Accomplished Application Form",
      "Registration or Enrollment Certificate",
      "Certified True Copy of Grades (GWA 85% or higher)",
      "Proof of Family Income (ITR or Certificate of Indigency)",
      "Latest copy of water bill and/or electricity bill",
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
    title: "Aboitiz Foundation", 
    provider: "Private", 
    level: "College", 
    tags: ["Leadership", "GWA 88%"], 
    link: "https://aboitiz.com/our-businesses/aboitiz-foundation/aboitiz-future-leaders-scholarship ",
    eligibility: [
      "A sophomore student enrolled in any of the partner universities", "Enrolled in a degree identified by the Foundation",
      "First year college GPA/GWA of at least 88% or equivalent",
      " No failing/incomplete grade in any subject",
      "must be enrolled in a public or state university",
      "No record of disciplinary action"
    ],
    requirements: [
      "Copy of Student ID",
      "Copy of Certificate of Good Moral Character",
      "Copy of 1st Year College Grades / - Transcript of Records",
      "Copy of Certificate of Enrollment/Registration",
      "Copy of Certificates of College Leadership / Awards / Seminars",
    ],
    benefits: [
      "Financial assistance",
      "Monthly Allowance",
      "Connectivity Allowance and Laptop", "Board Exam Subsidy"
    ],
    steps: [
      "Accss the online the application form",
      "Create an account by providing your personal details and a valid email address",
      "Fill out the application form with accurate information.",
      "Scan and upload the necessary documents, including your academic records and proof of financial need.",
      "Review all details before submitting your application online."
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
  "May sapat na dokumento: PSA Birth Certificate, Form 137 / 138, Certificate of Good Moral Character",
  "Handang sumailalim sa entrance exam o scholarship screening (depende sa school)",
  "Mayroong updated 2x2 ID photo at contact information"
];

export const REQUIREMENTS_GUIDE = {
  barangay: {
    title: "Barangay Indigency",
    steps: [
      "Pumunta sa Barangay Hall at mag-fill up ng request form.",
      "Ibigay sa Barangay Officer ang form at magdala ng valid ID, request letter, at proof of no business.",
      "Sabihin na para sa College Application o Scholarship program ang pagkuha.",
      "Libre ito at walang babayaran."
    ]
  },
  Calamba: {
    title: "PSA Birth Certificate (SM Calamba)",
    steps: [
      "Pumunta sa SM Calamba 3rd Floor (Satellite Office) o City Hall.",
      "Mag-request ng PSA Application Form para sa Birth Certificate.",
      "Kumpletuhin ito at ipakita ang iyong valid government-issued ID.",
      "Magbayad ng processing/service fee (approx. ₱195).",
      "Kunin ang claim stub at bumalik pagkalipas ng 3-5 araw."]
    },
    cityHall: {
    title: "PSA Birth Certificate (City Hall)",
    steps: [
      "Pumunta sa Container Van 2 - Window 5 at humingi ng PSA form.",
      "Sagutan ang PSA form na ibibigay ng kanilang empleyado.",
      "Ipasa ang PSA form at ipakita ang valid ID.",
      "Magbibigay ng order of payment para sa service fee na babayaran sa Container Van 3 - Window 8.",
      "Bumalik sa Container Van 2 - Window 5 at bayaran naman ang makukuhang PSA birth certificate.",
      "Bibigyan kayo ng claim stub para malaman kung kailan maaaring makuha ang PSA copy.",
    ]
  },
  school: {
    title: "Paaralan (Admin/Principal)",
    steps: [
      "Pumunta sa Principal's Office o Admin at mag-request ng mga kailangang requirements.",
      "Tanungin ito sa Admin kung magkano ang requirements at bayaran.",
      "Hintayin ang email o mensahe mula sa kanila kung kailan ito maaaring makuha.",
      "Narito ang mga requirements na maaaring makuha: Certified True Copy of Grades / Transcript of Records (TOR), Certificate of Good Moral Character, Form 137 / Form 138",
    ]
  }
};

export const APPLICATION_STEPS = [
  "Alamin ang mga requirements at deadlines ng unibersidad.",
  "Mag-register para sa admission test (karaniwang online).",
  "Ihanda at ipasa ang mga dokumento (Birth Certificate, Form 137, Certificate of Good Moral Character).",
  "Maghintay ng test permit (via email o website).",
  "Kumuha ng exam o interview (kung mayroon).",
  "Hintayin ang resulta ng entrance exam.",
  "Ipasa ang scholarship requirements.",
  "Hintayin ang resulta ng scholarship grant.",
  "Kumpirmahin ang enrollment at magbayad ng fee (kung meron)."
];
