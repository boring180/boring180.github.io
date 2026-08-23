export type Lang = "en" | "zh";

export type NavId =
  | "projects"
  | "skills"
  | "education"
  | "experience"
  | "honors"
  | "friends"
  | "resources"
  | "contact";

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

export type ResourceLink = {
  label: string;
  href: string;
  /** Official HKUST course title, per locale. Held on the shared link list
   *  rather than duplicated per locale, so the two can never drift apart. */
  course?: Record<Lang, string>;
};

export type ResourceGroup = {
  name: string;
  description: string;
  source?: ResourceLink;
  links: ResourceLink[];
};

export type UIStrings = {
  /** Text on the button that switches to the other language. */
  toggleLabel: string;
  toggleAria: string;
  nav: Record<NavId, string>;
  sections: Record<NavId, string>;
  heroSuffix: string;
  viewProjects: string;
  viewCv: string;
  getInTouch: string;
  languagesTitle: string;
  supervisorPrefix: string;
  resourcesLead: string;
  contactText: string;
  footerNote: string;
  documentTitle: string;
};

export type SiteContent = {
  ui: UIStrings;
  profile: {
    name: string;
    title: string;
    focus: string;
    email: string;
    website: string;
    cv: string;
    photo: string;
    github: string;
    linkedin: string;
    summary: string;
  };
  highlights: { value: string; label: string }[];
  projects: Project[];
  skills: SkillGroup[];
  languages: { language: string; fluency: string }[];
  degreeFigure: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  };
  education: EducationItem[];
  experience: ExperienceItem[];
  honors: Honor[];
  friends: Friend[];
  resources: ResourceGroup[];
  socials: SocialLink[];
};

export const navOrder: NavId[] = [
  "projects",
  "skills",
  "education",
  "experience",
  "honors",
  "friends",
  "resources",
  "contact",
];

// Resource targets are language independent, so they are declared once and
// shared by both locales to keep the two link lists from drifting apart.
const pdfLinks: ResourceLink[] = [
  {
    label: "PHYS 1003CS",
    href: "https://github.com/boring180/Notes/blob/main/PHYS%201003CS.pdf",
    course: { en: "Energy and Related Environmental Issues", zh: "能源与相关环境问题" },
  },
  {
    label: "COMP 2211",
    href: "https://github.com/boring180/Notes/blob/main/COMP%202211.pdf",
    course: { en: "Introduction to Artificial Intelligence", zh: "人工智能导论" },
  },
  {
    label: "COMP 2611",
    href: "https://github.com/boring180/Notes/blob/main/COMP%202611.pdf",
    course: { en: "Computer Organization", zh: "计算机组成原理" },
  },
  {
    label: "COMP 2711",
    href: "https://github.com/boring180/Notes/blob/main/COMP%202711.pdf",
    course: { en: "Discrete Mathematical Tools for Computer Science", zh: "面向计算机科学的离散数学" },
  },
  {
    label: "COMP 3711",
    href: "https://github.com/boring180/Notes/blob/main/COMP%203711.pdf",
    course: { en: "Design and Analysis of Algorithms", zh: "算法设计与分析" },
  },
  {
    label: "COMP5212 notes",
    href: "https://github.com/boring180/Notes/blob/main/COMP5212%20notes.pdf",
    course: { en: "Machine Learning", zh: "机器学习" },
  },
  {
    label: "COMP5212 CS",
    href: "https://github.com/boring180/Notes/blob/main/COMP5212%20CS.pdf",
    course: { en: "Machine Learning", zh: "机器学习" },
  },
];

const notionLinks: ResourceLink[] = [
  {
    label: "COMP 2011",
    href: "https://boring180.notion.site/Notes-39caa8bace414374a3eb7952aade134d",
    course: { en: "Programming with C++", zh: "C++ 程序设计" },
  },
  {
    label: "COMP 2012",
    href: "https://boring180.notion.site/Notes-81ec774891134e2f8e32b933ec3ce98c",
    course: { en: "Object-Oriented Programming and Data Structures", zh: "面向对象程序设计与数据结构" },
  },
  {
    label: "COMP 2611 (MIPS part)",
    href: "https://boring180.notion.site/MIPS-notes-bca2f6ed46b141458c9ec8bc251a2b20",
    course: { en: "Computer Organization", zh: "计算机组成原理" },
  },
  {
    label: "ELEC 1200",
    href: "https://boring180.notion.site/ELEC-1200-269e3093facc80839d58fa374645eac6",
    course: { en: "A System View of Communications: from Signals to Packets", zh: "通信系统概览：从信号到数据包" },
  },
  {
    label: "ELEC 2100",
    href: "https://boring180.notion.site/ELEC-2100-269e3093facc80e99733c092b7bbbca7",
    course: { en: "Signals and Systems", zh: "信号与系统" },
  },
  {
    label: "ELEC 3300",
    href: "https://boring180.notion.site/ELEC-3300-269e3093facc80a9918de4a34f29f42c",
    course: { en: "Introduction to Embedded Systems", zh: "嵌入式系统导论" },
  },
  {
    label: "ELEC 4320",
    href: "https://boring180.notion.site/ELEC-4320-269e3093facc80cc8d83c73622deaa33",
    course: { en: "FPGA-based Design: From Theory to Practice", zh: "基于 FPGA 的设计：从理论到实践" },
  },
  {
    label: "ELEC 5660",
    href: "https://boring180.notion.site/ELEC5660-2fce3093facc80618de3c02e3babbdc9",
    course: { en: "Introduction to Aerial Robotics", zh: "空中机器人导论" },
  },
  {
    label: "ISDN 2601",
    href: "https://boring180.notion.site/ISDN-2601-4b8d3a379c1a434283f7b69c4c9d93fa",
    course: { en: "Exploring the World through Smart Mechatronics", zh: "智能机电系统探索" },
  },
];

const selfStudyLinks: ResourceLink[] = [
  {
    label: "STM32",
    href: "https://boring180.notion.site/STM32-208e3093facc808fa96dc6ae5c390633",
  },
  {
    label: "Optimal Control",
    href: "https://boring180.notion.site/Optimal-control-275e3093facc802092dfee01f7947192",
  },
  {
    label: "Probability Robotics",
    href: "https://boring180.notion.site/Probability-Robotics-2dae3093facc80619879fed73c611b03",
  },
];

const en: SiteContent = {
  ui: {
    toggleLabel: "中文",
    toggleAria: "Switch to Chinese",
    nav: {
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      experience: "Experience",
      honors: "Honors",
      friends: "Friends",
      resources: "Resources",
      contact: "Contact",
    },
    sections: {
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      experience: "Experience",
      honors: "Honors",
      friends: "Friends",
      resources: "Resources",
      contact: "Contact",
    },
    heroSuffix: "HKUST CPEG Graduate",
    viewProjects: "View Projects",
    viewCv: "View CV",
    getInTouch: "Get in Touch",
    languagesTitle: "Languages",
    supervisorPrefix: "Supervised by ",
    resourcesLead:
      "Course notes from my HKUST coursework, shared for anyone taking the same classes.",
    contactText: "Open to robotics and embodied intelligence opportunities.",
    footerNote: "Built with React + Vite",
    documentTitle: "Borong Xu | Homepage",
  },
  profile: {
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
  },
  highlights: [
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
  ],
  projects: [
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
  ],
  skills: [
    { name: "C / C++", items: ["Eigen", "PCL", "STL", "STM32", "ESP32"] },
    { name: "Python", items: ["PyTorch", "OpenCV", "NumPy"] },
    { name: "ROS / ROS2", items: ["Navigation2", "Gazebo", "Slam Toolbox", "TF"] },
    { name: "Robotics", items: ["SLAM", "VIO", "EKF", "ICP", "Path Planning", "Control"] },
    { name: "Deep Learning", items: ["YOLO", "ViT", "RNN", "GAN", "VAE", "Diffusion", "LLM"] },
    { name: "Machine Learning", items: ["GLM", "SVM", "PCA", "XGBoost", "HMM"] },
    { name: "Hardware", items: ["Circuit Design", "Soldering", "CAD", "3D Printing"] },
  ],
  languages: [
    { language: "English", fluency: "Fluent (IELTS 7.5)" },
    { language: "Mandarin", fluency: "Mother tongue" },
  ],
  degreeFigure: {
    src: "/great-kid.jpg",
    width: 1200,
    height: 594,
    alt:
      "Film still of Tony Stark showing a hologram of Borong Xu in graduation gown, subtitled \"He's a great kid. Computer engineering degree.\"",
    caption: "Computer engineering degree, HKUST class of 2026.",
  },
  education: [
    {
      institution: "The Hong Kong University of Science and Technology (HKUST)",
      location: "Hong Kong SAR",
      degree: "Bachelor of Engineering in Computer Engineering, First Class Honors",
      period: "Graduated Jun 2026",
      details: ["GPA 3.84/4.3", "Major GPA 4.03/4.3 (Ranked 1/98 in program)"],
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
  ],
  experience: [
    {
      organization: "Shenzhen Loop Area Institute (SLAI)",
      location: "Shenzhen, China",
      role: "Research Assistant",
      period: "Jun 2026 - Present",
      details: ["Research on robotics and embodied intelligence."],
    },
  ],
  honors: [
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
  ],
  friends: [
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
  ],
  resources: [
    {
      name: "Handwritten Notes",
      description:
        "Scanned handwritten notes from my HKUST coursework, kept on GitHub so the files stay reachable.",
      source: {
        label: "boring180/Notes",
        href: "https://github.com/boring180/Notes",
      },
      links: pdfLinks,
    },
    {
      name: "Notion Notes",
      description: "Typed course notes published as public Notion pages.",
      links: notionLinks,
    },
    {
      name: "Self-Study Notes",
      description:
        "Notes from reading and side projects outside the HKUST curriculum.",
      links: selfStudyLinks,
    },
  ],
  socials: [
    { label: "Email", href: "mailto:borongxu@outlook.com" },
    { label: "GitHub", href: "https://github.com/boring180" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/borong-xu-52829a293" },
    { label: "CV", href: "https://boring180.github.io/CV/cv.pdf" },
  ],
};

const zh: SiteContent = {
  ui: {
    toggleLabel: "EN",
    toggleAria: "切换到英文",
    nav: {
      projects: "项目",
      skills: "技能",
      education: "教育经历",
      experience: "工作经历",
      honors: "荣誉奖项",
      friends: "友情链接",
      resources: "资源",
      contact: "联系方式",
    },
    sections: {
      projects: "项目经历",
      skills: "技能",
      education: "教育经历",
      experience: "工作经历",
      honors: "荣誉奖项",
      friends: "友情链接",
      resources: "资源",
      contact: "联系方式",
    },
    heroSuffix: "香港科技大学计算机工程毕业生",
    viewProjects: "查看项目",
    viewCv: "查看简历",
    getInTouch: "联系我",
    languagesTitle: "语言",
    supervisorPrefix: "指导老师：",
    resourcesLead: "我的课程笔记，分享给修读相同课程的同学。",
    contactText: "欢迎机器人与具身智能相关的合作与工作机会。",
    footerNote: "使用 React + Vite 构建",
    documentTitle: "许博容 | 主页",
  },
  profile: {
    name: "许博容",
    title: "深圳河套学院（SLAI）研究助理",
    focus: "机器人与具身智能",
    email: "borongxu@outlook.com",
    website: "https://boring180.github.io/",
    cv: "https://boring180.github.io/CV/cv_ch.pdf",
    photo: "/avatar.jpg",
    github: "https://github.com/boring180",
    linkedin: "https://www.linkedin.com/in/borong-xu-52829a293",
    summary:
      "我现任深圳河套学院（SLAI）研究助理，毕业于香港科技大学计算机工程专业（专业排名 1/98）。我对机器人与具身智能技术充满热情，研究经历涵盖视觉惯性里程计（VIO）、SLAM、多相机定位与四足机器人控制，并涉及深度学习以及基于大语言模型的智能体系统。期待在真实场景的部署中不断拓展自主系统的边界。",
  },
  highlights: [
    {
      value: "1 / 98",
      label: "香港科技大学计算机工程专业，专业课程 GPA 排名 1/98。",
    },
    {
      value: "4.03 / 4.3",
      label: "香港科技大学计算机工程专业全部专业必修课程的 GPA。",
    },
  ],
  projects: [
    {
      title: "乐高装配理解",
      role: "在研项目，由香港科技大学机器人建造实验室（RFL）与深圳河套学院联合指导",
      period: "2026年3月 - 至今",
      supervisor: "汪子琦教授",
      description:
        "研究乐高装配的自动化理解，结合计算机视觉与规划方法，从可视化装配说明与三维模型中还原逐步装配结构。",
      tags: ["计算机视觉", "深度学习", "装配规划", "PyTorch"],
    },
    {
      title: "大语言模型智能体开发",
      role: "本科生研究机会计划（UROP），香港科技大学",
      period: "2024年6月 - 2026年5月",
      supervisor: "宋胜辉教授",
      description:
        "设计并实现了能够进行棋牌类博弈的大语言模型智能体，并对其策略与性能进行了系统评估。",
      tags: ["大语言模型", "智能体", "评估", "Python"],
      links: [
        { label: "ChinesePokerAi", href: "https://github.com/boring180/ChinesePokerAi" },
      ],
    },
    {
      title: "空中机器人导论（ELEC5660）",
      role: "课程项目，香港科技大学",
      period: "2026年2月 - 2026年5月",
      supervisor: "沈劭劼教授",
      description:
        "从零开始实现空中机器人算法，包括视觉惯性里程计（VIO）、扩展卡尔曼滤波（EKF）状态估计以及自主路径规划，在仿真环境中实现了稳健的无人机定位、建图与导航。",
      tags: ["VIO", "EKF", "路径规划", "无人机"],
      links: [
        { label: "Simulations", href: "https://github.com/boring180/ELEC5660" },
        { label: "Drone deployment", href: "https://github.com/zhangone-smile/traj_test" },
        { label: "ELEC3210 lab", href: "https://github.com/boring180/elec3210-lab" },
      ],
    },
    {
      title: "四足机器人控制",
      role: "科研实习，新南威尔士大学",
      period: "2025年2月 - 2025年8月",
      supervisor: "Maurice Pagnucco教授和Yang Song教授",
      description:
        "构建并编程宇树 GO2 四足机器人以执行复杂任务，集成深度相机进行准确的物体定位（误差小于 10cm），并使用激光雷达完成 SLAM 建图。",
      tags: ["宇树 GO2", "SLAM", "激光雷达", "深度相机"],
      links: [
        {
          label: "Docker template contribution",
          href: "https://github.com/boring180/Docker_Unitree_Majoco",
        },
      ],
    },
    {
      title: "水下多相机定位系统",
      role: "毕业设计，香港科技大学",
      period: "2025年6月 - 2026年5月",
      supervisor: "尹欢教授和张福民教授",
      description:
        "开发了基于多相机视觉的定位系统，用于跟踪多个自主水下航行器（AUV）。降低了水下复杂光线场景下的定位误差，在 1m × 1m 范围内将定位精度提升至 10cm 以内。",
      tags: ["计算机视觉", "定位", "多相机", "AUV"],
      links: [
        { label: "MASEP_Local", href: "https://github.com/boring180/MASEP_Local" },
      ],
    },
  ],
  skills: [
    { name: "C / C++", items: ["Eigen", "PCL", "STL", "STM32", "ESP32"] },
    { name: "Python", items: ["PyTorch", "OpenCV", "NumPy"] },
    { name: "ROS / ROS2", items: ["Navigation2", "Gazebo", "Slam Toolbox", "TF"] },
    { name: "机器人", items: ["SLAM", "VIO", "EKF", "ICP", "路径规划", "控制"] },
    { name: "深度学习", items: ["YOLO", "ViT", "RNN", "GAN", "VAE", "Diffusion", "LLM"] },
    { name: "机器学习", items: ["GLM", "SVM", "PCA", "XGBoost", "HMM"] },
    { name: "硬件", items: ["电路设计", "焊接", "CAD", "3D打印"] },
  ],
  languages: [
    { language: "英语", fluency: "流利（雅思 7.5）" },
    { language: "中文", fluency: "母语" },
  ],
  degreeFigure: {
    src: "/great-kid.jpg",
    width: 1200,
    height: 594,
    alt:
      "电影截图：托尼·斯塔克展示许博容身着学位服的全息影像，字幕为“He's a great kid. Computer engineering degree.”",
    caption: "香港科技大学计算机工程学士，2026届。",
  },
  education: [
    {
      institution: "香港科技大学（HKUST）",
      location: "中国香港特别行政区",
      degree: "计算机工程学士（一等荣誉）",
      period: "2026年6月毕业",
      details: ["GPA 3.84/4.3", "专业课程 GPA 4.03/4.3（专业排名 1/98）"],
    },
    {
      institution: "新南威尔士大学（UNSW Sydney）",
      location: "澳大利亚悉尼",
      degree: "访问学生，计算机科学与工程",
      period: "2025年2月 - 2025年5月",
      details: [],
    },
    {
      institution: "中国人民大学附属中学",
      location: "中国北京",
      degree: "高中文凭（高考）",
      period: "2022年6月毕业",
      details: [
        "FIRST 机器人俱乐部，总工程师（2021赛季）",
        "FIRST 机器人俱乐部，校友导师（2022-2024赛季）",
      ],
    },
  ],
  experience: [
    {
      organization: "深圳河套学院（SLAI）",
      location: "中国深圳",
      role: "研究助理",
      period: "2026年6月 - 至今",
      details: ["从事机器人与具身智能方向的研究工作。"],
    },
  ],
  honors: [
    { year: "2022-2026", title: "院长嘉许名单（5次获奖）", awarder: "香港科技大学" },
    {
      year: "2023-2026",
      title: "继续学业本科生奖学金（每年 10,000 港币）",
      awarder: "香港科技大学",
    },
    {
      year: "2023",
      title: "【未来城市·一同创造】创新设计比赛 铜奖",
      awarder: "香港工程师学会",
    },
    { year: "2022", title: "入学奖学金（70,000 港币）", awarder: "香港科技大学" },
  ],
  friends: [
    {
      name: "Leanne Ma",
      avatar: "https://meowww9.github.io/assets/images/my-avatar.png",
      url: "https://meowww9.github.io/",
      bio: "新南威尔士大学 工程学院",
      description: "My only one",
    },
    {
      name: "ZhangzrJerry",
      avatar: "https://avatars.githubusercontent.com/u/87751816?v=4",
      url: "https://zhangzrjerry.github.io/",
      bio: "香港科技大学 机器人研究院",
      description: "睿神",
    },
    {
      name: "Yi Zhang",
      avatar: "https://zhangone-smile.github.io/profile.jpg",
      url: "https://zhangone-smile.github.io/",
      bio: "香港科技大学 无人机组",
      description: "",
    },
    {
      name: "Baixuan Xu",
      avatar: "https://tonyxu12138.github.io/assets/img/prof_pic.jpg?fccd3e0e845d9be976d02c8099156b6c",
      url: "https://tonyxu12138.github.io/",
      bio: "香港科技大学 计算机科学与工程系",
      description: "🕶️🙂👍",
    },
  ],
  resources: [
    {
      name: "手写笔记",
      description:
        "香港科技大学课程的手写笔记扫描件，存放在 GitHub 上以保证长期可访问。",
      source: {
        label: "boring180/Notes",
        href: "https://github.com/boring180/Notes",
      },
      links: pdfLinks,
    },
    {
      name: "Notion 笔记",
      description: "以公开 Notion 页面形式整理的课程笔记。",
      links: notionLinks,
    },
    {
      name: "自学笔记",
      description: "课程之外的阅读与个人项目笔记。",
      links: selfStudyLinks,
    },
  ],
  socials: [
    { label: "邮箱", href: "mailto:borongxu@outlook.com" },
    { label: "GitHub", href: "https://github.com/boring180" },
    { label: "领英", href: "https://www.linkedin.com/in/borong-xu-52829a293" },
    { label: "简历", href: "https://boring180.github.io/CV/cv_ch.pdf" },
  ],
};

export const site: Record<Lang, SiteContent> = { en, zh };
