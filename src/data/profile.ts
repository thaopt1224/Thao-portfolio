export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface Education {
  id: number;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description: string;
}

export interface Language {
  name: string;
  level: string;
  certificate?: string;
}

export interface Profile {
  name: string;
  title: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  skills: string[];
  education: Education[];
  certificates: Certificate[];
  languages: Language[];
  projects: Project[];
}

export const profileData: Profile = {
  name: "Phạm Thu Thảo",
  title: "Software Engineer",
  about: "Với niềm đam mê công nghệ và những điều mới mẽ, cùng với đó là kinh nghiệm trong lĩnh vực phát triển ứng dụng di động hơn 2 năm, tôi hi vọng được cống hiến hết mình cho lĩnh vực lập trình.",
  email: "thaopt.1224@gmail.com",
  phone: "+84 333 xxxx 79",
  location: "Việt Nam",
  github: "https://github.com/thaopt1224",
  linkedin: "https://linkedin.com/in/thaopt1224",
  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "HTML/CSS",
    "Git",
    "Firebase",
    "Flutter"
  ],
  education: [
    {
      id: 1,
      school: "Đại học Sư phạm Kỹ thuật Thành phố Hồ Chí Minh",
      degree: "Cử nhân",
      field: "Công nghệ thông tin",
      startDate: "2015",
      endDate: "2019",
      description: "Chuyên ngành Kỹ thuật phần mềm"
    }
  ],
  certificates: [
    {
      id: 1,
      name: "Certified Entry-Level Python Programmer – PCEP",
      issuer: "pythoninstitute.org/pcep",
      date: "2025",
      description: "-"
    },
    {
      id: 2,
      name: "Agile software development with Scrum",
      issuer: "Scrum.org",
      date: "2019",
      description: "Chứng chỉ quản lý dự án theo phương pháp Scrum"
    },
    {
      id: 3,
      name: "Amazon Web Services Certified Developer Certification DVA-C02",
      issuer: "Amazon Web Services",
      date: "2025",
      description: "-"
    },
  ],
  languages: [
    {
      name: "Tiếng Anh",
      level: "TOEIC 990",
      certificate: "-"
    },
    {
      name: "Tiếng Nhật",
      level: "N2",
      certificate: "JLPT N2"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Ứng dụng di động Diễn đàn",
      description: "Xây dựng một diễn đàn chia sẽ thông tin trên di động.",
      technologies: ["React-native", "Firebase"],
      imageUrl: "https://forum.vbulletin.com/images/misc/vb_logo_darkblue.svg",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: 2,
      title: "Ứng dụng Hỗ trợ học Hoá",
      description: "Ứng dụng tập hợp bài tập, phương trình hoá học cùng các kiến thức chương trình THCS, THPT của môn Hoá.",
      technologies: ["React-native", "Google Admob"],
      imageUrl: "https://bright-culture.com/wp-content/uploads/2021/06/5-Steps-to-Understand-Chemistry.png",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: 3,
      title: "Ứng dụng Vsub Idioms",
      description: "Ứng dụng tập hợp các idioms bằng tiếng Anh. Có ví dụ và minh hoạ cách dùng",
      technologies: ["React-native", "Google Admob"],
      imageUrl: "https://www.frenchclass.in/wp-content/uploads/2024/04/Idioms-featured-image.webp",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: 4,
      title: "Web Văn phòng ảo",
      description: "Có thể gữi tin nhắn, call video cá nhân, theo nhóm, còn có thể share màn hình.",
      technologies: ["Flutter", "Java", "Swift"],
      imageUrl: "https://fltmag.com/wp-content/uploads/2021/03/Picture-4-1024x603.png",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: 5,
      title: "Ứng dụng Tích luỹ điểm",
      description: "Ứng dụng tích điểm mua hàng thông qua việc đọc thẻ mua hàng bằng thiết bị ngoại vi.",
      technologies: ["Flutter", "Java", "Swift"],
      imageUrl: "https://www.customology.com.au/wp-content/uploads/2019/10/Loyalty-Program-SS.jpg",
      githubUrl: "",
      demoUrl: ""
    }
  ]
}; 