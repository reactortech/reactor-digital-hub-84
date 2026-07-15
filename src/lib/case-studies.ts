export type CaseStudy = {
  id: number;
  platform: "TikTok Ads" | "Shopee Ads" | "CPAS Ads" | "Meta Ads" | "Affiliate Mgt";
  category: "Fashion" | "Skin Care" | "F&B" | "Tech & Gadget" | "Service" | "Kids" | "Personal Beauty";
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
  { id: 1, platform: "TikTok Ads", category: "Fashion", metric: "269.2 Juta", subMetric: "ROI 11.2x", title: "Accessories Fashion",
    table: [
      { label: "Ad Spend", before: "Rp 12.900.000", after: "Rp 24.100.000" },
      { label: "Revenue", before: "Rp 160.500.000", after: "Rp 269.200.000" },
      { label: "ROI", before: "12.0x", after: "11.2x" },
    ],
    masalah: "Ketergantungan brand tinggi pada satu hero product, penetrasi SKU lain terabaikan. Berdampak pada rendahnya Average Order Value (AOV). Tantangan mendiversifikasi penjualan guna mendongkrak AOV sambil menjaga stabilitas ROI di atas 10.x.",
    strategi: "Menggabungkan strategi Ads dan organik. Meningkatkan AOV dengan A/B testing video baru untuk mempromosikan produk lain agar penjualan terdistribusi." },
  { id: 2, platform: "TikTok Ads", category: "Kids", metric: "2.1 Miliar", subMetric: "ROI 16.3x", title: "Kidswear Brand",
    table: [
      { label: "Ad Spend", before: "Rp 31.600.000", after: "Rp 133.700.000" },
      { label: "Revenue", before: "Rp 458.000.000", after: "Rp 2.100.000.000" },
      { label: "ROI", before: "14.5x", after: "16.3x" },
    ],
    masalah: "Beralih ke GMV Max dengan tantangan pengelolaan katalog ratusan produk aktif. Produksi konten organik tinggi namun kualitas konversi tertinggal.",
    strategi: "Merapikan katalog melalui pemetaan (mapping) ratusan produk agar algoritma GMV Max bekerja maksimal mendorong setiap produk sesuai potensinya." },
  { id: 3, platform: "TikTok Ads", category: "Skin Care", metric: "8.6 Miliar", subMetric: "ROI 13.72x", title: "Skincare Glowing", badge: "Best Growth",
    table: [
      { label: "Ad Spend", before: "Rp 155.000.000", after: "Rp 630.700.000" },
      { label: "Revenue", before: "Rp 2.900.000.000", after: "Rp 8.600.000.000" },
      { label: "ROI", before: "19.20x", after: "13.72x" },
    ],
    masalah: "Ingin scaling up omzet bulanan secara masif tanpa kehilangan efisiensi, serta menemukan formula konten untuk audiens lebih luas.",
    strategi: "Optimasi penuh fitur GMV Max menyasar audiens daya beli tinggi. Analisis mendalam performa kreatif agar konten video tepat sasaran.",
    achieve: "Omzet drastis naik 3x lipat menjadi Rp 8,6 Miliar. Iklan di-scale up ke Rp 630,7 Juta dengan ROI sangat sehat di 13.72x." },
  { id: 4, platform: "TikTok Ads", category: "Fashion", metric: "3.0 Miliar", subMetric: "ROI 7.46x", title: "Fashion Apparel",
    table: [
      { label: "Ad Spend", before: "Rp 205.900.000", after: "Rp 404.800.000" },
      { label: "Revenue", before: "Rp 1.400.000.000", after: "Rp 3.000.000.000" },
      { label: "ROI", before: "6.93x", after: "7.46x" },
    ],
    masalah: "Pertumbuhan omzet stuck. Produk laku keras sering out of stock, sedangkan restock lama sehingga mengganggu momentum penjualan.",
    strategi: "Perbaikan konten fokus pada winning product, ditambah riset pengujian produk alternatif (ban serep) agar iklan tetap optimal saat stok utama habis.",
    achieve: "Revenue lipat ganda menjadi Rp 3,0 Miliar. Diversifikasi produk efisien, ROI naik ke 7.46x meski budget dinaikkan ke Rp 404,8 Juta." },
  { id: 5, platform: "Shopee Ads", category: "Fashion", metric: "1.0 Miliar", subMetric: "ROAS 14.14x", title: "Fashion Outdoor",
    table: [
      { label: "Ad Spend", before: "Rp 47.100.000", after: "Rp 73.400.000" },
      { label: "Revenue", before: "Rp 643.500.000", after: "Rp 1.000.000.000" },
      { label: "ROAS", before: "13.66x", after: "14.14x" },
    ],
    masalah: "Ketergantungan pada traffic organik dan 1-2 produk utama. Kurangnya cross-selling membuat basket size retensi pembeli kurang optimal.",
    strategi: "Restrukturisasi Shopee Ads, integrasi strategi voucher subsidi silang, dan optimasi rekomendasi pilihan toko untuk memicu pembelian multi-produk.",
    achieve: "Menembus revenue ceiling hingga Rp 1,0 Miliar. Voucher menyumbang omzet Rp 216,5 Juta dan ROAS efisien di angka 14.14x." },
  { id: 6, platform: "TikTok Ads", category: "Skin Care", metric: "2.6 Miliar", subMetric: "ROI 3.2x", title: "Skin & Body Care",
    table: [
      { label: "Ad Spend", before: "Rp 1.100.000.000", after: "Rp 811.100.000" },
      { label: "Revenue", before: "Rp 2.700.000.000", after: "Rp 2.600.000.000" },
      { label: "ROI", before: "2.3x", after: "3.2x" },
    ],
    masalah: "Alokasi budget raksasa (Rp 1,1 Miliar) kurang efisien. Pengeluaran perlu ditekan namun ROI ditargetkan stabil di atas 3.0x.",
    strategi: "Audit dan pangkas campaign boncos. Optimasi presisi pada struktur GMV Max dan lower-funnel agar penargetan efisien.",
    achieve: "Budget berhasil dihemat hampir Rp 300 Juta, namun Revenue tetap stabil di Rp 2,6 Miliar dengan peningkatan efisiensi ROI melesat ke 3.2x." },
  { id: 7, platform: "TikTok Ads", category: "F&B", metric: "7.4 Miliar", subMetric: "ROI 103.x", title: "Supplement High-Risk",
    table: [
      { label: "Ad Spend", before: "Rp 62.000.000", after: "Rp 72.000.000" },
      { label: "Revenue", before: "Rp 3.900.000.000", after: "Rp 7.400.000.000" },
      { label: "ROI", before: "63.x", after: "103.x" },
    ],
    masalah: "Kategori high-risk, rentan moderasi ketat TikTok. Akun sering kena pelanggaran/suspend, menghambat stabilitas performa.",
    strategi: "Transisi dari gaya hard-selling ke soft-sell edukatif. Memastikan seluruh materi fully compliant terhadap kebijakan TikTok agar proses scaling aman." },
  { id: 8, platform: "Shopee Ads", category: "Tech & Gadget", metric: "329.7 Juta", subMetric: "ROAS 9.2x", title: "Diet Supplement",
    table: [
      { label: "Ad Spend", before: "Rp 12.400.000", after: "Rp 35.800.000" },
      { label: "Revenue", before: "Rp 84.500.000", after: "Rp 329.700.000" },
      { label: "ROAS", before: "6.8x", after: "9.2x" },
    ],
    masalah: "Terlalu bergantung pada figur owner. Shopee Ads belum dimaksimalkan sama sekali, toko kehilangan momentum traffic.",
    strategi: "Optimasi intensi pencarian Shopee Ads. Merapikan halaman toko dan deskripsi produk agar profesional dan menutupi kelemahan trust dari Instagram." },
  { id: 9, platform: "TikTok Ads", category: "Fashion", metric: "2.7 Miliar", subMetric: "ROI 8.69x", title: "Fashion Muslim Abaya",
    table: [
      { label: "Ad Spend", before: "Rp 67.570.361", after: "Rp 316.531.893" },
      { label: "Revenue", before: "Rp 301.895.688", after: "Rp 2.750.703.709" },
      { label: "ROI", before: "4.47x", after: "8.69x" },
    ],
    masalah: "CPA tergolong cukup tinggi di angka Rp 54.891 dengan volume pesanan yang masih tertahan (1.231 orders). Toko kesulitan scale-up budget karena khawatir ROI merosot atau boncos.",
    strategi: "Creative testing intensif mencari winning video. Memperbaiki struktur GMV Max, menyeleksi audiens relevan, dan scaling agresif pada campaign winning.",
    achieve: "Scale-up budget hampir 5x lipat. CPA ditekan turun menjadi Rp 28.445. Gross Revenue meroket tajam lebih dari 9x lipat menjadi Rp 2,7 Miliar dalam sebulan dengan 11.128 orders." },
  { id: 10, platform: "TikTok Ads", category: "Fashion", metric: "1.06 Miliar", subMetric: "ROI 92.28x", title: "Fashion Streetwear", badge: "New Launch",
    table: [
      { label: "Ad Spend", before: "Rp 0", after: "Rp 11.526.056" },
      { label: "Revenue", before: "Rp 0", after: "Rp 1.063.649.482" },
      { label: "ROI", before: "0.00", after: "92.28x" },
    ],
    masalah: "Belum pernah ads dan baru mulai ads ketika kami handle dari nol.",
    strategi: "Membangun fondasi dari nol via GMV Max. Creative testing format UGC relevan (outfit ideas/mix-and-match). Broad targeting di awal agar machine learning mencari CPA termurah.",
    achieve: "Mencetak omset fantastis Rp 1 Miliar di bulan pertama dengan ad spend hanya Rp 11,5 Jutaan. CPA sangat murah (Rp 501 per pesanan), mendatangkan total 23.008 pesanan." },
  { id: 11, platform: "TikTok Ads", category: "Skin Care", metric: "5.8 Miliar", subMetric: "ROI 9.66x", title: "Body Care",
    table: [
      { label: "Ad Spend", before: "Rp 51.520.378", after: "Rp 605.360.644" },
      { label: "Revenue", before: "Rp 272.133.024", after: "Rp 5.850.762.529" },
      { label: "ROI", before: "5.28x", after: "9.66x" },
    ],
    masalah: "ROI stuck di kisaran 5x, toko kesulitan scaling besar-besaran karena khawatir performa menurun dan CPA membengkak.",
    strategi: "Perombakan total creative video (angle before-after, tekstur, honest review). Memaksimalkan fase learning GMV Max, lalu scaling agresif berkala sembari menekan CPA.",
    achieve: "Ad spend di-scale 11x lipat (ke Rp 605 Juta). Gross Revenue meroket tajam 21x lipat menembus Rp 5,8 Miliar sebulan. CPA turun dari Rp 10.844 ke Rp 5.892 dengan 102.748 pesanan." },
  { id: 12, platform: "TikTok Ads", category: "Kids", metric: "871 Juta", subMetric: "ROI 23.81x", title: "Slime Anak (TikTok)",
    table: [
      { label: "Ad Spend", before: "Rp 43.438.356", after: "Rp 36.608.443" },
      { label: "Revenue", before: "Rp 477.474.523", after: "Rp 871.785.418" },
      { label: "ROI", before: "10.99x", after: "23.81x" },
    ],
    masalah: "ROI di bawah target (10.99), padahal target minimal 14x.",
    strategi: "Efisiensi budget mematikan campaign boncos. Penyegaran video eye-catching untuk anak & ortu (ASMR slime, review seru). Optimasi targeting GMV Max menekan CPA.",
    achieve: "Melampaui target ROI signifikan ke angka 23.81. Ad spend turun ke Rp 36 Jutaan, tapi Revenue meroket hampir 2x lipat ke Rp 871 Juta. CPA dipangkas dari Rp 1.931 ke Rp 976 per pesanan (37.510 orders)." },
  { id: 13, platform: "TikTok Ads", category: "Personal Beauty", metric: "42.5 Juta", subMetric: "ROI 7.06x", title: "Eyelash Beauty", badge: "New Store",
    table: [
      { label: "Ad Spend", before: "Rp 0", after: "Rp 6.034.050" },
      { label: "Revenue", before: "Rp 0", after: "Rp 42.572.583" },
      { label: "ROI", before: "0.00", after: "7.06x" },
    ],
    masalah: "Toko baru dan belum pernah iklan secara proper. Target awal ROI di angka 3x.",
    strategi: "Fokus creative testing video beauty (before-after pemakaian eyelash, tutorial pemasangan). Menggunakan GMV Max untuk machine learning intensi beli tinggi, disusul scaling terukur.",
    achieve: "Launching sukses besar! Modal Rp 6 Jutaan mencetak omset Rp 42,5 Juta di bulan pertama. Target 3x terlampaui ke 7.06x dengan mendatangkan 463 orders (CPA Rp 13.033)." },
  { id: 14, platform: "TikTok Ads", category: "F&B", metric: "369 Juta", subMetric: "ROI 13.01x", title: "Food & Beverage",
    table: [
      { label: "Ad Spend", before: "Rp 0", after: "Rp 28.393.378" },
      { label: "Revenue", before: "Rp 0", after: "Rp 369.499.024" },
      { label: "ROI", before: "0.00", after: "13.01x" },
    ],
    masalah: "Belum pernah beriklan sebelumnya. Target ROI klien di angka 10x.",
    strategi: "Membangun GMV Max dari nol. Uji video appetizing (kepedasan & ASMR crunchy) pemicu impulse buying. Broad targeting mencari CPA termurah, lalu scaling di winning creative.",
    achieve: "Bulan pertama langsung tembus omset Rp 369,4 Juta. Target 10x dilampaui nyaman ke 13.01. Volume pesanan 6.151 orders dengan CPA sangat efisien Rp 4.616 per pesanan." },
  { id: 15, platform: "TikTok Ads", category: "Kids", metric: "247 Juta", subMetric: "ROI 13.14x", title: "Fashion Anak",
    table: [
      { label: "Ad Spend", before: "Rp 4.705.140", after: "Rp 18.846.922" },
      { label: "Revenue", before: "Rp 48.919.709", after: "Rp 247.710.691" },
      { label: "ROI", before: "10.40x", after: "13.14x" },
    ],
    masalah: "Target menjaga ROAS di atas 10x dengan kenaikan revenue.",
    strategi: "Scaling up budget terukur pada GMV Max, dibarengi penyegaran video (kenyamanan bahan / OOTD anak) agar CPA tidak membengkak saat budget diperbesar.",
    achieve: "Ad spend naik 4x lipat, omset melesat tajam 5x lipat menembus Rp 247,7 Juta. ROI tidak drop, justru meningkat dari 10.40 ke 13.14." },
  { id: 16, platform: "TikTok Ads", category: "Personal Beauty", metric: "1.62 Miliar", subMetric: "ROI 10.22x", title: "Beauty (Softlens)",
    table: [
      { label: "Ad Spend", before: "Rp 41.606.537", after: "Rp 158.672.240" },
      { label: "Revenue", before: "Rp 603.327.175", after: "Rp 1.621.879.338" },
      { label: "ROI", before: "14.50x", after: "10.22x" },
    ],
    masalah: "Target omset 1 Miliar dengan ROI di atas 10x.",
    strategi: "Scaling agresif GMV Max. Untuk mengimbangi budget, injeksi variasi video berkala (try-on warna softlens berbagai skin tone) untuk jangkauan audiens luas dan stabilisasi CPA.",
    achieve: "Target terlampaui! Omset tembus Rp 1,62 Miliar. Meski spend di-scale hampir 4x lipat, performa terkendali dengan ROI 10.22 (total pesanan masif 15.953 orders)." },
  { id: 17, platform: "Meta Ads", category: "Service", metric: "1.240 Leads", subMetric: "CPL Rp 18.500", title: "Property Lead Gen",
    table: [
      { label: "Ad Spend", before: "Rp 18.000.000", after: "Rp 23.000.000" },
      { label: "Leads", before: "412", after: "1.240" },
      { label: "CPL", before: "Rp 43.689", after: "Rp 18.548" },
    ],
    masalah: "Cost per Lead terlalu tinggi, sales tim kekurangan kualitas leads untuk closing.",
    strategi: "Restrukturisasi funnel Meta Lead Ads, form pre-qualifying, dan retargeting warm audience via lookalike." },
  { id: 18, platform: "CPAS Ads", category: "Fashion", metric: "1.9 Miliar", subMetric: "ROAS 14.31x", title: "Fashion Pria",
    table: [
      { label: "Ad Spend", before: "Rp 62.500.000", after: "Rp 132.700.000" },
      { label: "Revenue", before: "Rp 780.000.000", after: "Rp 1.900.000.000" },
      { label: "ROAS", before: "12.48x", after: "14.31x" },
    ],
    masalah: "Momentum campaign musiman tidak termaksimalkan karena Meta & Shopee funnel belum saling menopang.",
    strategi: "Menyambung Meta creative dengan katalog Shopee lewat CPAS. Dynamic product ads difokuskan pada winning SKU." },
  { id: 19, platform: "Affiliate Mgt", category: "Skin Care", metric: "62 Aktif", subMetric: "GMV 480 Juta", title: "Skincare Affiliate Boost",
    table: [
      { label: "Affiliate Aktif", before: "12", after: "62" },
      { label: "GMV Affiliate", before: "Rp 65.000.000", after: "Rp 480.000.000" },
      { label: "Konversi Kreator", before: "18%", after: "41%" },
    ],
    masalah: "Kreator affiliate stagnan, hanya menghasilkan traffic recehan tanpa konversi.",
    strategi: "Kurasi ulang affiliate high-intent, brief video winning-hook, dan reward tier progressive." },
  { id: 20, platform: "Shopee Ads", category: "F&B", metric: "410 Juta", subMetric: "ROAS 8.9x", title: "Minuman Sehat",
    table: [
      { label: "Ad Spend", before: "Rp 22.500.000", after: "Rp 46.100.000" },
      { label: "Revenue", before: "Rp 128.000.000", after: "Rp 410.000.000" },
      { label: "ROAS", before: "5.69x", after: "8.90x" },
    ],
    masalah: "Traffic Shopee besar tapi konversi rendah karena ads dan halaman produk belum sinkron.",
    strategi: "Restructure kata kunci high-intent, revamp deskripsi produk, dan atur voucher toko strategis." },
  { id: 21, platform: "Meta Ads", category: "Tech & Gadget", metric: "820 Juta", subMetric: "ROAS 6.2x", title: "Gadget Aksesoris",
    table: [
      { label: "Ad Spend", before: "Rp 55.000.000", after: "Rp 132.000.000" },
      { label: "Revenue", before: "Rp 245.000.000", after: "Rp 820.000.000" },
      { label: "ROAS", before: "4.45x", after: "6.21x" },
    ],
    masalah: "Cold audience jenuh dan CTR menurun tajam menjelang scaling.",
    strategi: "Rotasi hook video mingguan, funnel Advantage+ shopping, plus retargeting berbasis engagement 30 hari." },
];

export const PLATFORMS = ["All Platforms", "TikTok Ads", "Shopee Ads", "CPAS Ads", "Meta Ads", "Affiliate Mgt"] as const;
export const CATEGORIES = ["All Categories", "Fashion", "Skin Care", "F&B", "Tech & Gadget", "Service"] as const;
