export type CaseStudy = {
  id: number;
  platform: "TikTok Ads" | "Shopee Ads" | "CPAS Ads" | "Meta Ads" | "Affiliate Mgt";
  category: "Fashion" | "Skin Care" | "F&B" | "Tech & Gadget" | "Service" | "Kids" | "Personal Beauty" | "Supplement";
  metric: string;
  subMetric: string;
  title: string;
  badge?: string;
  table: { label: string; before: string; after: string }[];
  masalah: string;
  strategi: string;
  achieve?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    platform: "TikTok Ads",
    category: "Fashion",
    metric: "269.2 Juta",
    subMetric: "ROI 11.2x",
    title: "Accessories Fashion",
    table: [
      { label: "Ad Spend", before: "Rp 12.9 Juta", after: "Rp 24.1 Juta" },
      { label: "Revenue", before: "Rp 160.5 Juta", after: "Rp 269.2 Juta" },
      { label: "ROI", before: "12.0x", after: "11.2x" },
    ],
    masalah:
      "Ketergantungan brand yang sangat tinggi pada satu winning hero product, sementara penetrasi katalog SKU lainnya terabaikan. Ketimpangan distribusi penjualan ini berdampak langsung pada rendahnya angka Average Order Value (AOV).",
    strategi:
      "Menggabungkan strategi Ads dan organik untuk meningkatkan AOV, sambil melakukan A/B testing video baru untuk mempromosikan produk lain agar penjualan tidak bergantung pada 1 produk terlaris.",
  },
  {
    id: 2,
    platform: "TikTok Ads",
    category: "Kids",
    metric: "2.1 Miliar",
    subMetric: "ROI 16.3x",
    title: "Kidswear",
    table: [
      { label: "Ad Spend", before: "Rp 31.6 Juta", after: "Rp 133.7 Juta" },
      { label: "Revenue", before: "Rp 458 Juta", after: "Rp 2.1 Miliar" },
      { label: "ROI", before: "14.5x", after: "16.3x" },
    ],
    masalah:
      "Peralihan ke sistem GMV Max dengan tantangan pengelolaan ratusan produk aktif. Kualitas konten belum maksimal sehingga performa organik masih tertinggal.",
    strategi:
      "Merapikan katalog melalui pemetaan (mapping) ratusan produk. Dengan pengelompokan yang jelas, algoritma GMV Max bekerja jauh lebih maksimal mendorong setiap produk sesuai potensinya.",
  },
  {
    id: 3,
    platform: "TikTok Ads",
    category: "Skin Care",
    metric: "8.6 Miliar",
    subMetric: "ROI 13.72x",
    title: "Skincare",
    table: [
      { label: "Ad Spend", before: "Rp 155 Juta", after: "Rp 630.7 Juta" },
      { label: "Revenue", before: "Rp 2.9 Miliar", after: "Rp 8.6 Miliar" },
      { label: "ROI", before: "19.20x", after: "13.72x" },
    ],
    masalah:
      "Brand ingin meningkatkan omzet signifikan dan menaikkan skala iklan (scaling up) tanpa kehilangan efisiensi.",
    strategi:
      "Optimasi penuh fitur GMV Max menyasar target audiens daya beli tinggi. Analisis mendalam performa kreatif memastikan konten video tepat sasaran. Hasilnya omzet naik 3x lipat.",
  },
  {
    id: 4,
    platform: "TikTok Ads",
    category: "Fashion",
    metric: "3.0 Miliar",
    subMetric: "ROI 7.46x",
    title: "Fashion Apparel",
    table: [
      { label: "Ad Spend", before: "Rp 205.9 Juta", after: "Rp 404.8 Juta" },
      { label: "Revenue", before: "Rp 1.4 Miliar", after: "Rp 3.0 Miliar" },
      { label: "ROI", before: "6.93x", after: "7.46x" },
    ],
    masalah:
      "Pertumbuhan omzet jalan di tempat. Manajemen stok bermasalah; produk laku keras sering out of stock sehingga mengganggu momentum penjualan.",
    strategi:
      "Rekomendasi perbaikan konten pada winning product dan riset cepat pengujian produk alternatif (ban serep) agar roda periklanan tetap optimal saat stok utama habis.",
  },
  {
    id: 5,
    platform: "Shopee Ads",
    category: "Fashion",
    metric: "1.0 Miliar",
    subMetric: "ROAS 14.14x",
    title: "Fashion Outdoor",
    table: [
      { label: "Ad Spend", before: "Rp 47.1 Juta", after: "Rp 73.4 Juta" },
      { label: "Revenue", before: "Rp 643.5 Juta", after: "Rp 1.0 Miliar" },
      { label: "ROAS", before: "13.66x", after: "14.14x" },
    ],
    masalah:
      "Omzet stuck karena ketergantungan organik. Kurangnya pemanfaatan fitur promosi mikro dan cross-selling membuat basket size kurang optimal.",
    strategi:
      "Restrukturisasi kampanye Shopee Ads, integrasi voucher subsidi silang di halaman produk winning, dan optimasi rekomendasi toko untuk memicu pembelian multi-produk.",
  },
  {
    id: 6,
    platform: "TikTok Ads",
    category: "Skin Care",
    metric: "2.6 Miliar",
    subMetric: "ROI 3.2x",
    title: "Skin & Body Care",
    table: [
      { label: "Ad Spend", before: "Rp 1.1 Miliar", after: "Rp 811.1 Juta" },
      { label: "Revenue", before: "Rp 2.7 Miliar", after: "Rp 2.6 Miliar" },
      { label: "ROI", before: "2.3x", after: "3.2x" },
    ],
    masalah:
      "Alokasi budget iklan sangat besar (> Rp 700 Juta/bulan) namun konversi kurang maksimal. Pengeluaran perlu diefisiensikan agar ROI stabil di atas 3.0x.",
    strategi:
      "Audit dan pangkas kampanye boncos. Optimasi presisi struktur GMV Max dan lower-funnel, berhasil menghemat biaya iklan hampir Rp 300 Juta dengan revenue yang tetap stabil.",
  },
  {
    id: 7,
    platform: "TikTok Ads",
    category: "Supplement",
    metric: "7.4 Miliar",
    subMetric: "ROI 103.x",
    title: "Supplement High-Risk",
    table: [
      { label: "Ad Spend", before: "Rp 62 Juta", after: "Rp 72 Juta" },
      { label: "Revenue", before: "Rp 3.9 Miliar", after: "Rp 7.4 Miliar" },
      { label: "ROI", before: "63.x", after: "103.x" },
    ],
    masalah:
      "Kategori high-risk, rentan filter moderasi TikTok. Sering terkena penalti dan pelanggaran konten yang menghambat scaling.",
    strategi:
      "Restrukturisasi re-positioning angle konten dari hard-selling ke soft-sell edukatif. Memastikan seluruh materi fully compliant terhadap kebijakan platform.",
  },
  {
    id: 8,
    platform: "Shopee Ads",
    category: "Supplement",
    metric: "329.7 Juta",
    subMetric: "ROAS 9.2x",
    title: "Diet Supplement",
    table: [
      { label: "Ad Spend", before: "Rp 12.4 Juta", after: "Rp 35.8 Juta" },
      { label: "Revenue", before: "Rp 84.5 Juta", after: "Rp 329.7 Juta" },
      { label: "ROAS", before: "6.8x", after: "9.2x" },
    ],
    masalah:
      "Fondasi branding lemah, Instagram tidak optimal. Shopee Ads belum dimaksimalkan sama sekali, toko kehilangan momentum traffic dan jangkauan audiens baru.",
    strategi:
      "Optimasi intensi pencarian Shopee Ads. Bersamaan dengan itu, merapikan halaman toko dan deskripsi produk agar terlihat lebih profesional dan terpercaya.",
  },
  {
    id: 9,
    platform: "TikTok Ads",
    category: "Fashion",
    metric: "2.7 Miliar",
    subMetric: "ROI 8.69x",
    title: "Fashion Muslim Abaya",
    table: [
      { label: "Ad Spend", before: "Rp 67.5 Juta", after: "Rp 316.5 Juta" },
      { label: "Revenue", before: "Rp 301.8 Juta", after: "Rp 2.75 Miliar" },
      { label: "ROI", before: "4.47x", after: "8.69x" },
    ],
    masalah:
      "CPA tinggi di angka Rp 54.891 dengan volume pesanan tertahan. Kesulitan scale-up budget karena khawatir ROI merosot atau boncos.",
    strategi:
      "Creative testing intensif, seleksi audiens relevan untuk menekan CPA, lalu scaling agresif pada campaign winning. CPA turun menjadi Rp 28.445 dan revenue meroket 9x lipat.",
  },
  {
    id: 10,
    platform: "TikTok Ads",
    category: "Fashion",
    metric: "1.06 Miliar",
    subMetric: "ROI 92.28x",
    title: "Fashion Streetwear",
    badge: "New Launch",
    table: [
      { label: "Ad Spend", before: "Rp 0", after: "Rp 11.5 Juta" },
      { label: "Revenue", before: "Rp 0", after: "Rp 1.06 Miliar" },
      { label: "ROI", before: "0.00", after: "92.28x" },
    ],
    masalah: "Belum pernah beriklan sama sekali dan baru mulai ads dari nol.",
    strategi:
      "Membangun fondasi via GMV Max. Creative testing format UGC relevan (outfit ideas/mix-and-match). Broad targeting di awal untuk mencari CPA termurah (Rp 501/pesanan).",
  },
  {
    id: 11,
    platform: "Shopee Ads",
    category: "Skin Care",
    metric: "900.8 Juta",
    subMetric: "ROAS 66.64x",
    title: "Skincare",
    badge: "Best Growth",
    table: [
      { label: "Ad Spend", before: "Rp 13.3 Juta", after: "Rp 13.5 Juta" },
      { label: "Revenue", before: "Rp 360 Juta", after: "Rp 900.8 Juta" },
      { label: "ROAS", before: "26.98x", after: "66.64x" },
    ],
    masalah: "Target menjaga ROAS stabil di atas 20x.",
    strategi:
      "Mengubah keyword boncos dari broad ke exact match pada Iklan Pencarian, serta optimasi bid Iklan Produk Serupa untuk merebut trafik kompetitor tanpa menambah budget harian.",
  },
  {
    id: 12,
    platform: "Meta Ads",
    category: "Service",
    metric: "350 Juta",
    subMetric: "CPL Super",
    title: "Konveksi (Kustom Baju/Tas)",
    table: [
      { label: "Ad Spend", before: "N/A", after: "Rp 2.5 Juta" },
      { label: "Revenue", before: "N/A", after: "Rp 350 Juta" },
      { label: "CPL", before: "N/A", after: "Rp 9.343" },
    ],
    masalah:
      "Objektif lead dengan target CPL maksimal Rp 15.000 sekaligus membutuhkan fondasi branding bisnis di media digital.",
    strategi:
      "Testing audiens, produksi konten visual relevan, optimasi copywriting iklan, dan manajemen fanpage. CPL sukses ditekan ke angka Rp 9.343.",
  },
];

export const PLATFORMS = ["All Platforms", "TikTok Ads", "Shopee Ads", "Meta Ads"] as const;
export const CATEGORIES = ["All Categories", "Fashion", "Kids", "Skin Care", "Supplement", "Service"] as const;
