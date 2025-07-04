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
        share: 'Chia sẻ',
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
        facebook: 'Facebook',
        instagram: 'Instagram',
        qrCode: 'Mã QR',
        qrType: 'Loại QR Code',
        qrVCard: 'Danh thiếp điện tử',
        qrEmail: 'Email',
        qrPhone: 'Số điện thoại',
        qrWebsite: 'Website',
        qrFacebook: 'Facebook',
        qrInstagram: 'Instagram',
        qrScan: 'Quét mã QR để lấy thông tin',
        close: 'Đóng',
      },
      projects: {
        title: 'Các Dự Án',
      },
      share: {
        title: 'Chia sẻ thông tin liên hệ',
        qrTitle: 'Mã QR truy cập nhanh trang liên hệ',
        qrDescription: 'Quét mã QR này để mở trang liên hệ của tôi hoặc chia sẻ với bạn bè, đồng nghiệp.',
        copyLink: 'Sao chép đường dẫn',
        copied: 'Đã sao chép vào clipboard!',
        share: 'Chia sẻ mã QR',
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
        share: 'Share',
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
        facebook: 'Facebook',
        instagram: 'Instagram',
        qrCode: 'QR Code',
        qrType: 'QR Code Type',
        qrVCard: 'Electronic Business Card',
        qrEmail: 'Email',
        qrPhone: 'Phone Number',
        qrWebsite: 'Website',
        qrFacebook: 'Facebook',
        qrInstagram: 'Instagram',
        qrScan: 'Scan QR code to get information',
        close: 'Close',
      },
      projects: {
        title: 'Projects',
      },
      share: {
        title: 'Share my contact info',
        qrTitle: 'Quick access QR code for contact page',
        qrDescription: 'Scan this QR code to open my contact page or share it with your friends and colleagues.',
        copyLink: 'Copy link',
        copied: 'Copied to clipboard!',
        share: 'Share QR code',
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
        share: 'シェア',
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
        facebook: 'Facebook',
        instagram: 'Instagram',
        qrCode: 'QRコード',
        qrType: 'QRコードタイプ',
        qrVCard: '電子名刺',
        qrEmail: 'メール',
        qrPhone: '電話番号',
        qrWebsite: 'ウェブサイト',
        qrFacebook: 'Facebook',
        qrInstagram: 'Instagram',
        qrScan: 'QRコードをスキャンして情報を取得',
        close: '閉じる',
      },
      projects: {
        title: 'プロジェクト',
      },
      share: {
        title: '連絡先情報を共有',
        qrTitle: '連絡先ページへのクイックアクセスQRコード',
        qrDescription: 'このQRコードをスキャンして連絡先ページを開くか、友人や同僚と共有してください。',
        copyLink: 'リンクをコピー',
        copied: 'クリップボードにコピーしました！',
        share: 'QRコードを共有',
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
        share: '分享',
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
        facebook: 'Facebook',
        instagram: 'Instagram',
        qrCode: '二维码',
        qrType: '二维码类型',
        qrVCard: '电子名片',
        qrEmail: '邮箱',
        qrPhone: '电话号码',
        qrWebsite: '网站',
        qrFacebook: 'Facebook',
        qrInstagram: 'Instagram',
        qrScan: '扫描二维码获取信息',
        close: '关闭',
      },
      projects: {
        title: '项目',
      },
      share: {
        title: '分享我的联系信息',
        qrTitle: '联系页面的快速访问二维码',
        qrDescription: '扫描此二维码以打开我的联系页面，或与您的朋友和同事分享。',
        copyLink: '复制链接',
        copied: '已复制到剪贴板！',
        share: '分享二维码',
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