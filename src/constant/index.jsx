import { images } from '../assets/images';


export const heroData = [
  {
    id: 1,
    name: 'Alice Johnson',
    slogan: "Together We Can Do It All!",
    description: "Unite, inspire, and achieve greatness together.",
    image: images.buhari, // Replace with the actual image paths
  },
  {
    id: 2,
    name: 'Bob Smith',
    slogan: 'Leadership That Matters',
    description: 'Building a Better Future, Together.',
    image: images.jona, // Replace with the actual image paths
  },
  {
    id: 3,
    name: 'Clara Davis',
    slogan: 'Your Voice, Your Choice',
    description: 'Empowering Students for a Brighter Tomorrow.',
    image: images.tini, // Replace with the actual image paths
  },
];

export const cardData = [
  {
    id: 1,
    title: "Election Details",
    description: "Find out the election dates, instructions, and more.",
    icon: images.details,
    buttonText: "Learn More",
    link: "#",
  },
  {
    id: 2,
    title: "Candidate Profiles",
    description: "Explore each candidate's profile, biography, and manifesto.",
    icon: images.candidates,
    buttonText: "View Profiles",
    link: "/candidates",
  },
  {
    id: 3,
    title: "Voting Now!",
    description: "Select your preferred candidate and cast your vote.",
    icon: images.vote1,
    buttonText: "Vote Now",
    link: "/vote",
  },
];


export const events = [
  {
    id: 1,
    title: "Election Registration Opens",
    description: "Voter registration opens. Be sure to sign up to vote before the deadline.",
  },
  {
    id: 2,
    title: "Debates Begin",
    description: "Candidates start engaging with the public through debates on key issues.",
  },
  {
    id: 3,
    title: "Polling Stations Open",
    description: "The day has arrived! Head to your polling station and cast your vote.",
  },
  {
    id: 4,
    title: "Voting Ends",
    description: "Polling stations close, and the counting process begins.",
  },
  {
    id: 5,
    title: "Election Results Announced",
    description: "Stay tuned for live updates and the announcement of election results.",
  },
];

export const candidate = [
  {
    id: 1,
    name: "Comr Shie Paul",
    bio: "Experienced leader with a strong track record in student governance and advocacy.",
    manifesto: "Promising better education opportunities, enhanced student welfare, and inclusivity.",
    photo: images.buhari,
    achievements: [
      "Organized the annual Student Leadership Summit.",
      "Introduced a mentorship program for freshmen.",
      "Secured funding for campus-wide events.",
    ],
    timeline: [
      { year: "2021", event: "Elected as Class Representative" },
      { year: "2022", event: "Became Vice President of SU" },
      { year: "2023", event: "Led a campus-wide sustainability campaign" },
    ]
  },
  {
    id: 2,
    name: "Comr John Tarka",
    bio: "Dedicated organizer committed to fostering unity and promoting innovative student programs.",
    manifesto: "Focused on providing innovative programs, improved campus facilities, and student empowerment.",
    photo: images.jona,
    achievements: [
      "Launched a successful food drive for underprivileged students.",
      "Initiated tech training workshops for students.",
      "Coordinated inter-departmental sports events.",
    ],
    timeline: [
      { year: "2020", event: "Became Head of Sports Committee" },
      { year: "2021", event: "Elected as SU Sports Director" },
      { year: "2023", event: "Introduced campus-wide tech training" },
    ]
  },
  {
    id: 3,
    name: "Comr James Akombo",
    bio: "Dedicated organizer committed to fostering unity and promoting innovative student programs.",
    manifesto: "Focused on providing innovative programs, improved campus facilities, and student empowerment.",
    photo: images.tini,
    achievements: [
      "Launched a successful food drive for underprivileged students.",
      "Initiated tech training workshops for students.",
      "Coordinated inter-departmental sports events.",
    ],
    timeline: [
      { year: "2020", event: "Became Head of Sports Committee" },
      { year: "2021", event: "Elected as SU Sports Director" },
      { year: "2023", event: "Introduced campus-wide tech training" },
    ],
  }
]



export const Database = [
  {
    id: 1,
    email: 'igwe12@gmail.com'
  },
  {
    id: 2,
    email: 'mike12@gmail.com'
  },
  {
    id: 3,
    email: 'john12@gmail.com'
  },
  {
    id: 4,
    email: 'paul12@gmail.com'
  },
  {
    id: 5,
    email: 'peter12@gmail.com'
  },
]