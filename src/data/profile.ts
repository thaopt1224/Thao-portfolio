export interface MultilangText {
  vi: string;
  en: string;
  ja: string;
  zh: string;
}

export interface Project {
  id: number;
  title: MultilangText;
  description: MultilangText;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface Education {
  id: number;
  school: MultilangText;
  degree: MultilangText;
  field: MultilangText;
  startDate: string;
  endDate: string;
  description: MultilangText;
}

export interface Certificate {
  id: number;
  name: MultilangText;
  issuer: MultilangText;
  date: string;
  description: MultilangText;
}

export interface Language {
  name: MultilangText;
  level: string;
  certificate?: MultilangText;
}

export interface Profile {
  name: MultilangText;
  title: MultilangText;
  about: MultilangText;
  email: string;
  phone: string;
  location: MultilangText;
  github: string;
  linkedin: string;
  skills: string[];
  education: Education[];
  certificates: Certificate[];
  languages: Language[];
  projects: Project[];
}

export const profileData: Profile = {
  name: {
    vi: "Phạm Thu Thảo",
    en: "Thao Pham",
    ja: "ファム・トゥ・タオ",
    zh: "Pham Thu Thao" //"范秋草"
  },
  title: {
    vi: "Kỹ sư phần mềm",
    en: "Software Engineer",
    ja: "ソフトウェアエンジニア",
    zh: "软件工程师"
  },
  about: {
    vi: "Với niềm đam mê công nghệ và những điều mới mẽ, cùng với đó là kinh nghiệm trong lĩnh vực phát triển ứng dụng di động hơn 2 năm, tôi hi vọng được cống hiến hết mình cho lĩnh vực lập trình.",
    en: "With a passion for technology and new things, along with over 2 years of experience in mobile application development, I hope to devote myself to the programming field.",
    ja: "テクノロジーと新しいことへの情熱、そして2年以上のモバイルアプリ開発経験を持ち、プログラミング分野に全力を尽くしたいと考えています。",
    zh: "怀着对科技和新事物的热情，以及两年以上移动应用开发经验，我希望全身心投入到编程领域。"
  },
  email: "thaopt.1224@gmail.com",
  phone: "+84 333 xxxx 79",
  location: {
    vi: "Việt Nam",
    en: "Vietnam",
    ja: "ベトナム",
    zh: "越南"
  },
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
      school: {
        vi: "Đại học Sư phạm Kỹ thuật Thành phố Hồ Chí Minh",
        en: "Ho Chi Minh City University of Technology and Education",
        ja: "ホーチミン市技術教育大学",
        zh: "胡志明市师范技术大学"
      },
      degree: {
        vi: "Cử nhân",
        en: "Bachelor",
        ja: "学士",
        zh: "学士"
      },
      field: {
        vi: "Công nghệ thông tin",
        en: "Information Technology",
        ja: "情報技術",
        zh: "信息技术"
      },
      startDate: "2015",
      endDate: "2019",
      description: {
        vi: "Chuyên ngành Kỹ thuật phần mềm",
        en: "Major in Software Engineering",
        ja: "ソフトウェア工学専攻",
        zh: "软件工程专业"
      }
    }
  ],
  certificates: [
    {
      id: 1,
      name: {
        vi: "Chứng chỉ Python cơ bản – PCEP",
        en: "Certified Entry-Level Python Programmer – PCEP",
        ja: "認定エントリーレベルPythonプログラマー – PCEP",
        zh: "Python初级程序员认证 – PCEP"
      },
      issuer: {
        vi: "pythoninstitute.org/pcep",
        en: "pythoninstitute.org/pcep",
        ja: "pythoninstitute.org/pcep",
        zh: "pythoninstitute.org/pcep"
      },
      date: "2025",
      description: {
        vi: "-",
        en: "-",
        ja: "-",
        zh: "-"
      }
    },
    {
      id: 2,
      name: {
        vi: "Phát triển phần mềm Agile với Scrum",
        en: "Agile software development with Scrum",
        ja: "スクラムによるアジャイルソフトウェア開発",
        zh: "Scrum敏捷软件开发"
      },
      issuer: {
        vi: "Scrum.org",
        en: "Scrum.org",
        ja: "Scrum.org",
        zh: "Scrum.org"
      },
      date: "2019",
      description: {
        vi: "Chứng chỉ quản lý dự án theo phương pháp Scrum",
        en: "Project management certificate with Scrum methodology",
        ja: "スクラム手法によるプロジェクト管理認定",
        zh: "基于Scrum方法的项目管理证书"
      }
    },
    {
      id: 3,
      name: {
        vi: "Chứng chỉ Lập trình viên AWS DVA-C02",
        en: "Amazon Web Services Certified Developer Certification DVA-C02",
        ja: "AWS認定開発者資格 DVA-C02",
        zh: "亚马逊云开发者认证 DVA-C02"
      },
      issuer: {
        vi: "Amazon Web Services",
        en: "Amazon Web Services",
        ja: "Amazon Web Services",
        zh: "Amazon Web Services"
      },
      date: "2025",
      description: {
        vi: "-",
        en: "-",
        ja: "-",
        zh: "-"
      }
    }
  ],
  languages: [
    {
      name: {
        vi: "Tiếng Anh",
        en: "English",
        ja: "英語",
        zh: "英语"
      },
      level: "TOEIC 990",
      certificate: {
        vi: "-",
        en: "-",
        ja: "-",
        zh: "-"
      }
    },
    {
      name: {
        vi: "Tiếng Nhật",
        en: "Japanese",
        ja: "日本語",
        zh: "日语"
      },
      level: "N2",
      certificate: {
        vi: "JLPT N2",
        en: "JLPT N2",
        ja: "JLPT N2",
        zh: "JLPT N2"
      }
    }
  ],
  projects: [
    {
      id: 1,
      title: {
        vi: "Ứng dụng di động Diễn đàn",
        en: "Forum Mobile App",
        ja: "フォーラムモバイルアプリ",
        zh: "论坛移动应用"
      },
      description: {
        vi: "Xây dựng một diễn đàn chia sẽ thông tin trên di động.",
        en: "Build a forum for sharing information on mobile.",
        ja: "モバイルで情報共有のためのフォーラムを構築。",
        zh: "构建一个移动端信息分享论坛。"
      },
      technologies: ["React-native", "Firebase"],
      imageUrl: "https://forum.vbulletin.com/images/misc/vb_logo_darkblue.svg",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: 2,
      title: {
        vi: "Ứng dụng Hỗ trợ học Hoá",
        en: "Chemistry Learning Support App",
        ja: "化学学習サポートアプリ",
        zh: "化学学习辅助应用"
      },
      description: {
        vi: "Ứng dụng tập hợp bài tập, phương trình hoá học cùng các kiến thức chương trình THCS, THPT của môn Hoá.",
        en: "An app that gathers exercises, chemical equations, and knowledge for secondary and high school chemistry.",
        ja: "中高の化学の練習問題、化学方程式、知識を集約したアプリ。",
        zh: "汇集初高中化学练习题、化学方程式及知识的应用。"
      },
      technologies: ["React-native", "Google Admob"],
      imageUrl: "https://bright-culture.com/wp-content/uploads/2021/06/5-Steps-to-Understand-Chemistry.png",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: 3,
      title: {
        vi: "Ứng dụng Vsub Idioms",
        en: "Vsub Idioms App",
        ja: "Vsubイディオムアプリ",
        zh: "Vsub成语应用"
      },
      description: {
        vi: "Ứng dụng tập hợp các idioms bằng tiếng Anh. Có ví dụ và minh hoạ cách dùng",
        en: "An app that collects English idioms with examples and usage illustrations.",
        ja: "英語のイディオムを集め、例文や使い方も掲載。",
        zh: "收集英语成语并附有例句和用法说明的应用。"
      },
      technologies: ["React-native", "Google Admob"],
      imageUrl: "https://www.frenchclass.in/wp-content/uploads/2024/04/Idioms-featured-image.webp",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: 4,
      title: {
        vi: "Web Văn phòng ảo",
        en: "Virtual Office Web",
        ja: "バーチャルオフィスWeb",
        zh: "虚拟办公室Web"
      },
      description: {
        vi: "Có thể gữi tin nhắn, call video cá nhân, theo nhóm, còn có thể share màn hình.",
        en: "Can send messages, make personal/group video calls, and share screen.",
        ja: "メッセージ送信、個人・グループビデオ通話、画面共有が可能。",
        zh: "可发送消息、个人/群组视频通话，还能共享屏幕。"
      },
      technologies: ["Flutter", "Java", "Swift"],
      imageUrl: "https://fltmag.com/wp-content/uploads/2021/03/Picture-4-1024x603.png",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: 5,
      title: {
        vi: "Ứng dụng Tích luỹ điểm",
        en: "Loyalty Points App",
        ja: "ポイント蓄積アプリ",
        zh: "积分累积应用"
      },
      description: {
        vi: "Ứng dụng tích điểm mua hàng thông qua việc đọc thẻ mua hàng bằng thiết bị ngoại vi.",
        en: "A loyalty app that accumulates points by reading shopping cards via external devices.",
        ja: "外部デバイスでショッピングカードを読み取り、ポイントを蓄積するアプリ。",
        zh: "通过外部设备读取购物卡来累积积分的应用。"
      },
      technologies: ["Flutter", "Java", "Swift"],
      imageUrl: "https://www.customology.com.au/wp-content/uploads/2019/10/Loyalty-Program-SS.jpg",
      githubUrl: "",
      demoUrl: ""
    }
  ]
}; 