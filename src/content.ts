export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  role: string;
  period: string;
  supervisor?: string;
  description: string;
  tags: string[];
  links?: ProjectLink[];
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export type EducationItem = {
  institution: string;
  location: string;
  degree: string;
  period: string;
  details: string[];
};

export type ExperienceItem = {
  organization: string;
  location: string;
  role: string;
  period: string;
  details: string[];
};

export type Honor = {
  year: string;
  title: string;
  awarder: string;
};

export type Friend = {
  name: string;
  avatar: string;
  url: string;
  bio: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const profile = {
  name: "Borong Xu",
  title: "Research Assistant at SLAI",
  focus: "Robotics & Embodied Intelligence",
  email: "borongxu@outlook.com",
  website: "https://boring180.github.io/",
  cv: "https://boring180.github.io/CV/cv.pdf",
  photo: "/avatar.jpg",
  github: "https://github.com/boring180",
  linkedin: "https://www.linkedin.com/in/borong-xu-52829a293",
  summary:
    "Research Assistant at the Shenzhen Loop Area Institute (SLAI) and a graduate of HKUST's Computer Engineering (CPEG) program, ranked 1st of 98 by major GPA. Passionate about robotics and embodied intelligence, with research experience spanning visual-inertial odometry, SLAM, multi-camera localization, and quadruped control, as well as deep learning and LLM-based agent systems. Eager to push the boundaries of autonomous systems in real-world deployments.",
};

export const highlights = [
  {
    value: "1 / 98",
    label:
      "Ranked 1st of 98 students by major GPA in the HKUST Computer Engineering program.",
  },
  {
    value: "4.03 / 4.3",
    label:
      "Major GPA across all major requirement courses of the HKUST CPEG program.",
  },
];

export const projects: Project[] = [
  {
    title: "LEGO Assembly Understanding",
    role: "Ongoing Research Project, jointly supervised by HKUST RFL and SLAI",
    period: "Mar 2026 - Present",
    supervisor: "Prof. Ziqi Wang",
    description:
      "Research on the automatic understanding of LEGO assembly, combining computer vision and planning to recover step-by-step assembly structure from visual instructions and 3D models.",
    tags: ["Computer Vision", "Deep Learning", "Assembly Planning", "PyTorch"],
  },
  {
    title: "LLM Agent Development",
    role: "Undergraduate Research Opportunity (UROP), HKUST",
    period: "Jun 2024 - May 2026",
    supervisor: "Prof. Shenghui Song",
    description:
      "Designed and implemented a Large Language Model agent capable of playing board games, with comprehensive evaluation of agent strategies and performance.",
    tags: ["LLM", "Agents", "Evaluation", "Python"],
    links: [
      { label: "ChinesePokerAi", href: "https://github.com/boring180/ChinesePokerAi" },
    ],
  },
  {
    title: "Introduction to Aerial Robotics (ELEC5660)",
    role: "Course Project, HKUST",
    period: "Feb 2026 - May 2026",
    supervisor: "Prof. Shaojie Shen",
    description:
      "Developed aerial robot algorithms from scratch, including visual-inertial odometry, Extended Kalman Filter state estimation, and autonomous path planning in simulation for robust UAV localization, mapping, and navigation.",
    tags: ["VIO", "EKF", "Path Planning", "UAV"],
    links: [
      { label: "Simulations", href: "https://github.com/boring180/ELEC5660" },
      { label: "Drone deployment", href: "https://github.com/zhangone-smile/traj_test" },
      { label: "ELEC3210 lab", href: "https://github.com/boring180/elec3210-lab" },
    ],
  },
  {
    title: "Quadruped Robot Control",
    role: "Research Practicum, UNSW Sydney",
    period: "Feb 2025 - Aug 2025",
    supervisor: "Prof. Maurice Pagnucco & Prof. Yang Song",
    description:
      "Built and programmed a Unitree GO2 quadruped to perform complex tasks, integrating a depth camera for accurate object localization (error < 10cm) and LiDAR for SLAM.",
    tags: ["Unitree GO2", "SLAM", "LiDAR", "Depth Camera"],
    links: [
      {
        label: "Docker template contribution",
        href: "https://github.com/boring180/Docker_Unitree_Majoco",
      },
    ],
  },
  {
    title: "Underwater Localization System",
    role: "Final Year Project, HKUST",
    period: "Jun 2025 - May 2026",
    supervisor: "Prof. Huan Yin & Prof. Fumin Zhang",
    description:
      "Developed a multi-camera vision-based localization system for tracking multiple Autonomous Underwater Vehicles (AUVs). Reduced localization error in complex underwater lighting scenarios, improving positioning accuracy to within 10cm in a 1m × 1m range.",
    tags: ["Computer Vision", "Localization", "Multi-Camera", "AUV"],
    links: [
      { label: "MASEP_Local", href: "https://github.com/boring180/MASEP_Local" },
    ],
  },
];

export const skills: SkillGroup[] = [
  { name: "C / C++", items: ["Eigen", "PCL", "STL", "STM32", "ESP32"] },
  { name: "Python", items: ["PyTorch", "OpenCV", "NumPy"] },
  { name: "ROS / ROS2", items: ["Navigation2", "Gazebo", "Slam Toolbox", "TF"] },
  { name: "Robotics", items: ["SLAM", "VIO", "EKF", "ICP", "Path Planning", "Control"] },
  { name: "Deep Learning", items: ["YOLO", "ViT", "RNN", "GAN", "VAE", "Diffusion", "LLM"] },
  { name: "Machine Learning", items: ["GLM", "SVM", "PCA", "XGBoost", "HMM"] },
  { name: "Hardware", items: ["Circuit Design", "Soldering", "CAD", "3D Printing"] },
];

export const degreeFigure = {
  src: "/great-kid.jpg",
  width: 1200,
  height: 594,
  alt:
    "Film still of Tony Stark showing a hologram of Borong Xu in graduation gown, subtitled \"He's a great kid. Computer engineering degree.\"",
  caption: "Computer engineering degree, HKUST class of 2026.",
};

export const education: EducationItem[] = [
  {
    institution: "The Hong Kong University of Science and Technology (HKUST)",
    location: "Hong Kong SAR",
    degree: "Bachelor of Engineering in Computer Engineering, First Class Honors",
    period: "Graduated Jun 2026",
    details: [
      "GPA 3.84/4.3",
      "Major GPA 4.03/4.3 (Ranked 1/98 in program)",
    ],
  },
  {
    institution: "University of New South Wales (UNSW Sydney)",
    location: "Sydney, Australia",
    degree: "Visiting Student, Computer Science and Engineering",
    period: "Feb 2025 - May 2025",
    details: [],
  },
  {
    institution: "High School Affiliated to Renmin University of China (RDFZ)",
    location: "Beijing, China",
    degree: "High School Diploma (Gaokao)",
    period: "Graduated Jun 2022",
    details: [
      "FIRST Robotics Club, Chief Engineer (2021 season)",
      "FIRST Robotics Club, Alumni Mentor (2022-2024 seasons)",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    organization: "Shenzhen Loop Area Institute (SLAI)",
    location: "Shenzhen, China",
    role: "Research Assistant",
    period: "Jun 2026 - Present",
    details: ["Research on robotics and embodied intelligence."],
  },
];

export const honors: Honor[] = [
  { year: "2022-2026", title: "Dean's List (5 times)", awarder: "HKUST" },
  {
    year: "2023-2026",
    title: "Continuing Undergraduate Students Scholarship (10,000 HKD/year)",
    awarder: "HKUST",
  },
  {
    year: "2023",
    title: "Bronze Medal, Innovation Competition: Our Livable City, We Engineer",
    awarder: "HKIE",
  },
  { year: "2022", title: "Entry Scholarship (70,000 HKD)", awarder: "HKUST" },
];

export const languages = [
  { language: "English", fluency: "Fluent (IELTS 7.5)" },
  { language: "Mandarin", fluency: "Mother tongue" },
];

export const friends: Friend[] = [
  {
    name: "Leanne Ma",
    avatar: "https://meowww9.github.io/assets/images/my-avatar.png",
    url: "https://meowww9.github.io/",
    bio: "UNSW Engineering",
    description: "My only one",
  },
  {
    name: "ZhangzrJerry",
    avatar: "https://avatars.githubusercontent.com/u/87751816?v=4",
    url: "https://zhangzrjerry.github.io/",
    bio: "HKUST Robotics Institute",
    description: "睿神",
  },
  {
    name: "Yi Zhang",
    avatar: "https://zhangone-smile.github.io/profile.jpg",
    url: "https://zhangone-smile.github.io/",
    bio: "HKUST UAV Group",
    description: "",
  },
  {
    name: "Baixuan Xu",
    avatar: "https://tonyxu12138.github.io/assets/img/prof_pic.jpg?fccd3e0e845d9be976d02c8099156b6c",
    url: "https://tonyxu12138.github.io/",
    bio: "HKUST CSE",
    description: "🕶️🙂👍",
  },
];

export const socials: SocialLink[] = [
  { label: "Email", href: "mailto:borongxu@outlook.com" },
  { label: "GitHub", href: "https://github.com/boring180" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/borong-xu-52829a293" },
  { label: "CV", href: "https://boring180.github.io/CV/cv.pdf" },
];
