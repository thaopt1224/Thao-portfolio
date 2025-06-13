# Portfolio Website

Đây là website portfolio được xây dựng bằng React và Material-UI, với màu sắc chủ đạo là đen và cam.

## Tính năng

- Trang chủ với thông tin giới thiệu
- Trang dự án hiển thị các dự án đã thực hiện
- Trang liên hệ với thông tin liên lạc
- Responsive design
- Dark theme với màu sắc chủ đạo là đen và cam

## Cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd thao-portfolio
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy dự án ở môi trường development:
```bash
npm start
```

## Deploy lên GitHub Pages

1. Cài đặt gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Thêm các scripts sau vào file `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Thêm `homepage` field vào `package.json`:
```json
{
  "homepage": "https://<username>.github.io/thao-portfolio"
}
```

4. Deploy:
```bash
npm run deploy
```

## Công nghệ sử dụng

- React
- TypeScript
- Material-UI
- React Router
- GitHub Pages

## Cấu trúc dự án

```
src/
  ├── components/     # React components
  ├── data/          # Data files
  ├── theme.ts       # Material-UI theme configuration
  ├── App.tsx        # Main App component
  └── index.tsx      # Entry point
```

## Tùy chỉnh

Để thay đổi thông tin cá nhân, chỉnh sửa file `src/data/profile.ts`.

Để thay đổi theme, chỉnh sửa file `src/theme.ts`.
