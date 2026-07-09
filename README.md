# 🌿 CRCK2 Aphivath – Farm 2 Dashboard

Dashboard khai thác mủ cao su – Đội Sản Xuất 02 | PWA 4 phiên A/B/C/D

**Live:** https://tonyhunggemini.github.io/crck2-farm2-dashboard/

---

## 📱 Tính năng

- **4 phiên cạo A / B / C / D** với dữ liệu riêng biệt
- **8 khu vực** KV1–KV8 với KPIs chi tiết
- **Biểu đồ trực quan**: NSBQ theo KV, sản lượng, phân bố, xu hướng
- **Bảng xếp hạng**: Top 10 & Bottom 10 công nhân
- **Cảnh báo kỹ thuật**: Brown Bast, CN mới, KT quá dày, bốc mủ
- **PWA**: Cài trên điện thoại, hoạt động offline

---

## 📅 Lịch Sử Dữ Liệu

App hỗ trợ xem dữ liệu các tháng trước:

1. Bấm **📅 Lịch Sử** trên header
2. Chọn tháng cần xem (VD: Tháng 6/2026)
3. Vào **⚙️ Cài Đặt** để nhập Google Sheet CSV links

### Thêm tháng mới:

1. Mở **⚙️ Cài Đặt**
2. Bấm **➕ Thêm Tháng Mới**
3. Nhập 4 link Google Sheet CSV cho phiên A/B/C/D
4. Bấm **💾 Lưu**

---

## 🔗 Kết nối Google Sheet

### Hướng dẫn:

1. Mở Google Sheet → **File** → **Share** → **"Publish to web"**
2. Chọn tab cần thiết (VD: "Phiên A")
3. Định dạng: **CSV**
4. Nhấn **Publish**
5. Copy URL và dán vào app

### Lưu ý:
- Mỗi phiên A/B/C/D cần URL riêng (gid khác nhau)
- URL có dạng: `https://docs.google.com/spreadsheets/d/e/.../pub?output=csv`
- App tự nhớ URL sau khi lưu

---

## 🛠️ Cài đặt PWA

**Android (Chrome):**
- Mở link → menu ⋮ → **"Cài đặt ứng dụng"**
- Hoặc: menu ⋮ → **"Thêm vào màn hình chính"**

**iPhone (Safari):**
- Mở link → nút Chia sẻ → **"Thêm vào MH chính"**

---

## 📊 Cấu trúc dữ liệu Google Sheet

Sheet cần có các cột:
- Cột A: STT
- Cột B: Mã tổ (chứa "KV1", "KV2"...)
- Cột C: Mã công nhân
- Cột ~101: Tổng sản lượng (kg)
- Cột ~103: Tổng nhát cạo

---

## 🔧 Cập nhật app

1. Chỉnh sửa file `index.html`
2. Upload lên GitHub repo `TonyHungGemini/crck2-farm2`
3. GitHub Pages tự deploy sau 1-2 phút

---

## 📂 Cấu trúc repo

```
crck2-farm2/
├── index.html      # Dashboard chính
├── manifest.json   # PWA config
├── sw.js          # Service Worker
├── icons/         # App icons
└── README.md     # Tài liệu này
```

---

## 📋 Thông số Farm

| Thông tin | Giá trị |
|-----------|---------|
| Tên Farm | CRCK2 Aphivath – Đội 2 |
| Diện tích | 2,081.93 ha |
| Số cây | 984,085 cây |
| KH Sản lượng | 3,790,000 kg/năm |
| Số KV | 8 (KV1–KV8) |
| Số công nhân | ~322 người |

---

*Tony Studio 2026*
