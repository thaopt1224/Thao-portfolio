import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  vi: {
    translation: {
      header: {
        home: 'Trang chủ',
        about: 'Giới thiệu',
        projects: 'Dự án',
        contact: 'Liên hệ',
      },
      about: {
        title: 'Giới Thiệu',
        education: 'Học Vấn',
        certificates: 'Bằng Cấp & Chứng Chỉ',
        languages: 'Ngoại Ngữ',
        skills: 'Kỹ Năng',
      },
      contact: {
        title: 'Liên Hệ',
        info: 'Thông Tin Liên Hệ',
        social: 'Mạng Xã Hội',
      },
      projects: {
        title: 'Các Dự Án',
      },
    },
  },
  en: {
    translation: {
      header: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
      },
      about: {
        title: 'About',
        education: 'Education',
        certificates: 'Certificates',
        languages: 'Languages',
        skills: 'Skills',
      },
      contact: {
        title: 'Contact',
        info: 'Contact Information',
        social: 'Social Network',
      },
      projects: {
        title: 'Projects',
      },
    },
  },
  ja: {
    translation: {
      header: {
        home: 'ホーム',
        about: '紹介',
        projects: 'プロジェクト',
        contact: '連絡先',
      },
      about: {
        title: '紹介',
        education: '学歴',
        certificates: '資格',
        languages: '言語',
        skills: 'スキル',
      },
      contact: {
        title: '連絡先',
        info: '連絡情報',
        social: 'ソーシャルネットワーク',
      },
      projects: {
        title: 'プロジェクト',
      },
    },
  },
  zh: {
    translation: {
      header: {
        home: '主页',
        about: '关于',
        projects: '项目',
        contact: '联系',
      },
      about: {
        title: '关于',
        education: '学历',
        certificates: '证书',
        languages: '语言',
        skills: '技能',
      },
      contact: {
        title: '联系',
        info: '联系信息',
        social: '社交网络',
      },
      projects: {
        title: '项目',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 