#Mô hình kết nói app Mobile vs Vercel
Cách phối hợp Vercel trong dự án Flutter + Backend

[Điện thoại người dùng]                  [Đám mây Vercel]
┌─────────────────────┐                 ┌──────────────────────┐
│  Flutter Mobile App │  --(REST API)-->│  Backend (Node.js)   │
│  (Chạy trên máy)    │  <--(JSON)------│  (Chạy trên Vercel)  │
└─────────────────────┘                 └──────────────────────┘
                                                    │
                                                    ▼
                                         [Database (Supabase/Neon)]
