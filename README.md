## Mô hình kết nói app Mobile vs Vercel
Cách phối hợp Vercel trong dự án Flutter + Backend
'''
[Điện thoại người dùng]                  [Đám mây Vercel]
┌─────────────────────┐                 ┌──────────────────────┐
│  Flutter Mobile App │  --(REST API)-->│  Backend (Node.js)   │
│  (Chạy trên máy)    │  <--(JSON)------│  (Chạy trên Vercel)  │
└─────────────────────┘                 └──────────────────────┘
                                                    │
                                                    ▼
                                         [Database (Supabase/Neon)]

'''
## Tóm lại: 
Có thể viết Backend bằng Node.js (Express), đưa lên Vercel, kết nối với MongoDB Atlas / Supabase (PostgreSQL), sau đó từ Flutter gọi API đến Vercel để lấy dữ liệu. Đây là mô hình làm đồ án sinh viên rất gọn và hoàn toàn miễn phí!
