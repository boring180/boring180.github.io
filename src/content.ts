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
  photo:
    "https://media.licdn.com/dms/image/v2/D5603AQHM_mKavZKgHQ/profile-displayphoto-scale_400_400/B56Z7qlgq4H4Ag-/0/1782052164133?e=1783555200&v=beta&t=Px-TGO19ThqUlDtwPkIJBdU2mYdL783ORLUGHZsg_S4",
  github: "https://github.com/boring180",
  linkedin: "https://www.linkedin.com/in/borong-xu-52829a293",
  summary:
    "Research Assistant at the Shenzhen Loop Area Institute (SLAI) and a top 3% graduate of HKUST's Computer Engineering (CPEG) program. Passionate about robotics and embodied intelligence, with research experience spanning visual-inertial odometry, SLAM, multi-camera localization, and quadruped control, as well as deep learning, vision transformers, and LLM-based agent systems. Eager to push the boundaries of autonomous systems in real-world deployments.",
};

export const highlights = [
  {
    value: "Top 3%",
    label:
      "Ranked in the top 3% of 157 students in the HKUST Computer Engineering program, graduating in 2026.",
  },
  {
    value: "4.03 / 4.3",
    label:
      "Major GPA across all major requirement courses of the HKUST CPEG program.",
  },
];

export const projects: Project[] = [
  {
    title: "LLM Agent Development",
    role: "Undergraduate Research Opportunity (UROP)",
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
    role: "Course Project",
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
    role: "Research Practicum",
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
    role: "Final Year Project",
    period: "Jun 2025 - May 2026",
    supervisor: "Prof. Huan Yin & Prof. Fumin Zhang",
    description:
      "Developed a multi-camera vision-based localization system for tracking multiple Autonomous Underwater Vehicles, improving positioning accuracy to within 10cm in a 1m x 1m range under complex lighting.",
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
  { name: "Machine Learning", items: ["GLM", "SVM", "PCA", "XGBoost", "HMM", "Decision Trees"] },
  { name: "Deep Learning", items: ["YOLO", "ViT", "RNN", "GAN", "VAE", "Diffusion Models", "LLM"] },
  { name: "Robotics", items: ["SLAM", "VIO", "EKF", "ICP", "Path Planning", "Control Systems"] },
  { name: "Hardware", items: ["Circuit Design", "Soldering", "STM32", "ESP32"] },
  { name: "Fabrication", items: ["CAD", "3D Printing", "Laser Cutting", "Blender"] },
];

export const education: EducationItem[] = [
  {
    institution: "The Hong Kong University of Science and Technology (HKUST)",
    location: "Hong Kong SAR",
    degree: "Bachelor of Engineering in Computer Engineering",
    period: "Graduated June 2026",
    details: [
      "GPA 3.84/4.3 (Top 3% among 150 students)",
      "Major GPA 4.03/4.3",
    ],
  },
  {
    institution: "High School Affiliated to Renmin University of China (RDFZ)",
    location: "Beijing, China",
    degree: "High School Diploma (Gaokao)",
    period: "Graduated June 2022",
    details: [
      "FIRST Robotics Club, Chief Engineer (2021 season)",
      "FIRST Robotics Club, Alumni Mentor (2022-2024 seasons)",
    ],
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
    url: "https://zzhangje.vercel.app/",
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
