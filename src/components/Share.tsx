import React, { useEffect } from 'react';

const Share: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      const QRCode = window.QRCode;
      const mainCanvas = document.getElementById('mainCanvas') as HTMLCanvasElement;
      if (!mainCanvas) return;
      const ctxMain = mainCanvas.getContext('2d');
      const qrCanvas = document.createElement('canvas');
      qrCanvas.width = 300;
      qrCanvas.height = 300;
      const ctxQR = qrCanvas.getContext('2d');
      // @ts-ignore
      QRCode.toCanvas(qrCanvas, 'https://example.com', { width: 300, margin: 0 }, function (error: any) {
        if (error) {
          console.error(error);
          return;
        }
        ctxMain?.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
        // Vẽ nền xanh lam nhẹ nhàng cho canvas chính
        ctxMain!.fillStyle = '#e3f2fd';
        ctxMain!.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
        // Vẽ text ở trên cùng
        ctxMain!.font = '20px Arial';
        ctxMain!.fillStyle = 'black';
        const line1 = 'This is qr code';
        let x = (mainCanvas.width - ctxMain!.measureText(line1).width) / 2;
        ctxMain!.fillText(line1, x, 30);
        ctxMain!.drawImage(qrCanvas, 0, 50);
        ctxMain!.font = 'bold 18px Arial';
        const address = 'Address: FGH66FGrfvKKKK';
        x = (mainCanvas.width - ctxMain!.measureText(address).width) / 2;
        ctxMain!.fillText(address, x, 370);
        ctxMain!.font = '18px Arial';
        const price = 'Price: 0.4566';
        x = (mainCanvas.width - ctxMain!.measureText(price).width) / 2;
        ctxMain!.fillText(price, x, 400);
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleShare = () => {
    const mainCanvas = document.getElementById('mainCanvas') as HTMLCanvasElement;
    if (!mainCanvas) return;
    mainCanvas.toBlob(async (blob) => {
      if (!blob) return;
      const file = new File([blob], 'qr-code-with-text.png', { type: 'image/png' });
      // @ts-ignore
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          // @ts-ignore
          await navigator.share({
            files: [file],
            title: 'QR Code with Text',
            text: 'This is QR code with relative info!',
          });
          alert('Đã chia sẻ thành công!');
        } catch (err: any) {
          alert('Lỗi khi chia sẻ: ' + err.message);
        }
      } else {
        alert('Thiết bị hoặc trình duyệt không hỗ trợ chia sẻ file.');
      }
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 100 }}>
      <canvas id="mainCanvas" width={300} height={420} style={{ border: '1px solid #000' }}></canvas>
      <br />
      <button onClick={handleShare} style={{ marginTop: 16, padding: '8px 24px', fontSize: 16 }}>Share Image</button>
    </div>
  );
};

export default Share; 