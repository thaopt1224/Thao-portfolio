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
  about: "Tôi là một lập trình viên đam mê với công nghệ và luôn tìm kiếm những thách thức mới. Với kinh nghiệm trong việc phát triển web và ứng dụng, tôi luôn cố gắng tạo ra những sản phẩm chất lượng và trải nghiệm người dùng tốt nhất.",
  email: "example@email.com",
  phone: "+84 123 456 789",
  location: "Hà Nội, Việt Nam",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "HTML/CSS",
    "Git",
    "Docker"
  ],
  education: [
    {
      id: 1,
      school: "Đại học Bách Khoa Hà Nội",
      degree: "Cử nhân",
      field: "Công nghệ thông tin",
      startDate: "2018",
      endDate: "2022",
      description: "Chuyên ngành Kỹ thuật phần mềm"
    }
  ],
  certificates: [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Chứng chỉ chuyên gia về kiến trúc giải pháp AWS"
    },
    {
      id: 2,
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2022",
      description: "Chứng chỉ quản lý dự án theo phương pháp Scrum"
    }
  ],
  languages: [
    {
      name: "Tiếng Anh",
      level: "IELTS 7.5",
      certificate: "IELTS Academic"
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
      title: "E-commerce Website",
      description: "Website thương mại điện tử với đầy đủ chức năng mua sắm, thanh toán và quản lý đơn hàng.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      imageUrl: "/images/project1.jpg",
      githubUrl: "https://github.com/yourusername/project1",
      demoUrl: "https://project1-demo.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Ứng dụng quản lý công việc với các tính năng như tạo task, phân công, theo dõi tiến độ.",
      technologies: ["React", "TypeScript", "Firebase"],
      imageUrl: "/images/project2.jpg",
      githubUrl: "https://github.com/yourusername/project2",
      demoUrl: "https://project2-demo.com"
    }
  ]
}; 