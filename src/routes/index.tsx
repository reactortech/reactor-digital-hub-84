import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  MessageCircle,
  Minus,
  Plus,
  Sparkles,
  X,
} from "lucide-react";
import logo from "@/assets/logo_reactordigital.png";
import { buildAuditText, buildWaUrl, defaultConsultText, openWa } from "@/lib/whatsapp";
import { CASE_STUDIES, CATEGORIES, PLATFORMS, type CaseStudy } from "@/lib/case-studies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reactor Digital — Performance Marketing Agency" },
      {
        name: "description",
        content:
          "Scale-up brand berbasis data. TikTok Ads, Shopee Ads, CPAS, Meta Ads oleh Reactor Digital.",
      },
    ],
  }),
  component: Landing,
});

const GOOGLE_SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycby31xRJsbR7rEkyGVo2SvIEg84WY9HuAcwYfPdBhKMLK2WOCSRFrJ8O8PWk2lBj4ZM0kA/exec";

/* ---------------- utilities ---------------- */

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen, threshold]);
  return { ref, seen };
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-sage">{children}</span>;
}

/* ---------------- header ---------------- */

const NAV = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#layanan", label: "Layanan" },
  { href: "#proses", label: "Proses" },
  { href: "#faq", label: "FAQ" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="glass-header sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="Reactor Digital" width={140} height={40} className="h-8 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => openWa(defaultConsultText())}
            className="hidden items-center gap-2 rounded-full bg-sage px-4 py-2 text-sm font-semibold text-sage-foreground transition-transform hover:scale-[1.02] md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Konsultasi Gratis
          </button>
          <button
            className="rounded-md border border-hairline p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-hairline bg-background/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground"
              >
                {n.label}
              </a>
            ))}
            <button
              onClick={() => openWa(defaultConsultText())}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-sage px-4 py-2.5 text-sm font-semibold text-sage-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Konsultasi Gratis
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- hero ---------------- */

function FloatCard({
  top,
  metric,
  bottom,
  className = "",
  style,
}: {
  top: React.ReactNode;
  metric: React.ReactNode;
  bottom: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={
        "rounded-2xl border border-hairline bg-surface/80 p-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)] backdrop-blur-md " +
        className
      }
      style={style}
    >
      <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {top}
      </div>
      <div className="mt-1 font-display text-2xl font-bold text-sage">{metric}</div>
      <div className="mt-1 text-xs text-muted-foreground">{bottom}</div>
    </div>
  );
}

function Hero() {
  const tags = [
    "TIKTOK ADS",
    "META ADS",
    "SHOPEE ADS",
    "CPAS",
    "AFFILIATE MANAGEMENT",
    "PRIVATE MENTORING",
  ];
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.86_0.09_138_/_0.08),transparent_70%)]"
      />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-14 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pt-20">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-sage/40 bg-sage/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-sage">
            <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse-dot" />
            Performance Marketing Specialist
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-[44px] lg:text-5xl">
            Scale-Up Brand Anda Bersama <Highlight>Reactor Digital</Highlight>. Jadikan{" "}
            <Highlight>Data Strategis</Highlight> Sebagai Pondasi Pertumbuhan Nyata.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Kami adalah agensi Performance Marketing spesialis akselerasi growth yang telah
            dipercaya lebih dari puluhan brand sebagai growth partner. Berfokus pada TikTok Ads,
            Shopee Ads, CPAS, dan Meta Ads, kami tidak sekadar mengelola dan mengoptimasi iklan,
            tetapi juga memberikan insight bisnis up-to-date melalui komunikasi dua arah yang
            intens dan transparansi data sepenuhnya..
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={() => openWa(defaultConsultText())}
              className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-semibold text-sage-foreground transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" /> Diskusi Strategi di WhatsApp
            </button>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-sage/60 px-5 py-3 text-sm font-semibold text-sage transition-colors hover:bg-sage/10"
            >
              Lihat Case Study <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-sage/30 bg-surface/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: floating cards */}
        <div className="relative min-h-[520px]">
          <FloatCard
            className="absolute left-0 top-2 w-[240px] animate-float"
            top={
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse-dot" />
                Agency Identity
              </div>
            }
            metric={<span className="text-foreground text-lg">Reactor Digital</span>}
            bottom={
              <>
                Yogyakarta Based Team
                <br />
                Available Remote Collaboration
              </>
            }
          />
          <FloatCard
            className="absolute right-0 top-10 w-[210px] animate-float-alt"
            style={{ animationDelay: "0.6s" }}
            top="TikTok Ads"
            metric="8,6 Miliar"
            bottom="Highest Scale"
          />
          <FloatCard
            className="absolute left-8 top-[210px] w-[220px] animate-float"
            style={{ animationDelay: "1.1s" }}
            top="Brand Partner"
            metric=">16 Brand"
            bottom="Trusted more than 16 national brands"
          />
          <FloatCard
            className="absolute right-4 top-[240px] w-[220px] animate-float-alt"
            style={{ animationDelay: "0.3s" }}
            top="Across Platforms"
            metric="10M+"
            bottom="Revenue Dikelola"
          />
          <FloatCard
            className="absolute left-1/2 top-[400px] w-[240px] -translate-x-1/2 animate-float"
            style={{ animationDelay: "1.4s" }}
            top="Our Media Buying Experience"
            metric="3+ Tahun"
            bottom="Akselerasi Brand"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- stats banner ---------------- */

function Counter({ target, seen }: { target: string; seen: boolean }) {
  const [display, setDisplay] = useState(seen ? target : "0");
  useEffect(() => {
    if (!seen) return;
    const match = target.match(/([\d.,]+)/);
    if (!match) {
      setDisplay(target);
      return;
    }
    const numStr = match[1];
    const isDecimal = numStr.includes(".") || numStr.includes(",");
    const endNum = parseFloat(numStr.replace(",", "."));
    if (Number.isNaN(endNum)) {
      setDisplay(target);
      return;
    }
    const dur = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = endNum * eased;
      const formatted = isDecimal ? cur.toFixed(1) : Math.round(cur).toString();
      setDisplay(target.replace(numStr, formatted));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, target]);
  return <span>{display}</span>;
}

function StatsBanner() {
  const { ref, seen } = useInView<HTMLDivElement>(0.3);
  const stats = [
    { n: "16+", t: "Brand Partner", s: "Puluhan brand dipercayakan" },
    { n: "ROI 92x", t: "Return on Investment", s: "Tertinggi di kategori fashion" },
    { n: "Rp 10M+", t: "Revenue Dikelola", s: "Lintas platform iklan" },
    { n: "3+", t: "Tahun Pengalaman", s: "Proven scale-up strategy" },
  ];
  return (
    <section className="bg-[oklch(0.185_0_0)]" ref={ref}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-hairline px-5 py-14 md:grid-cols-4 md:divide-x lg:px-8">
        {stats.map((s, i) => (
          <div key={i} className="px-4 py-4 text-center md:text-left">
            <div className="font-display text-3xl font-bold text-sage md:text-4xl">
              <Counter target={s.n} seen={seen} />
            </div>
            <div className="mt-2 text-sm font-semibold text-foreground">{s.t}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- section header helpers ---------------- */

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-sage/40 bg-sage/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-sage">
      {children}
    </span>
  );
}

/* ---------------- case studies ---------------- */

function CaseCard({ item, onOpen }: { item: CaseStudy; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group relative flex flex-col rounded-2xl border border-hairline bg-[oklch(0.185_0_0)] p-5 text-left transition-all hover:-translate-y-0.5 hover:border-sage/40"
    >
      <div className="relative flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        <span>{item.platform}</span>
        {item.badge && (
          <span className="absolute left-1/2 -translate-x-1/2 rounded-full bg-sage/15 px-2 py-0.5 text-[10px] font-semibold text-sage">
            {item.badge}
          </span>
        )}
        <span>{item.category}</span>
      </div>

      <div className="mt-6">
        <div className="font-display text-3xl font-bold text-sage">{item.metric}</div>
        <div className="mt-1 text-xs font-medium text-muted-foreground">{item.subMetric}</div>
      </div>
      <div className="mt-5 border-t border-hairline pt-4">
        <div className="text-sm font-semibold text-foreground">{item.title}</div>
        <div className="mt-1 flex items-center gap-1 text-xs text-sage opacity-0 transition-opacity group-hover:opacity-100">
          Lihat detail <ArrowRight className="h-3 w-3" />
        </div>
      </div>
    </button>
  );
}

function CaseModal({ item, onClose }: { item: CaseStudy; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl origin-center animate-fade-up rounded-2xl border border-hairline bg-surface p-6 md:p-8"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-hairline p-1.5 text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          <span>{item.platform}</span>
          <span>•</span>
          <span>{item.category}</span>
          {item.badge && (
            <span className="rounded-full bg-sage/15 px-2 py-0.5 text-sage">{item.badge}</span>
          )}
        </div>
        <h3 className="mt-2 font-display text-2xl font-bold text-foreground">{item.title}</h3>
        <div className="mt-1 text-sage font-display text-3xl font-bold">
          {item.metric}
          <span className="ml-3 text-sm font-semibold text-muted-foreground">{item.subMetric}</span>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-hairline">
          <table className="w-full text-sm">
            <thead className="bg-[oklch(0.185_0_0)] text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-2.5 text-left font-semibold">Metrik</th>
                <th className="px-4 py-2.5 text-left font-semibold">Sebelum Handle</th>
                <th className="px-4 py-2.5 text-left font-semibold text-sage">Saat Handle ✓</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              {item.table.map((row) => (
                <tr key={row.label}>
                  <td className="px-4 py-2.5 text-muted-foreground">{row.label}</td>
                  <td className="px-4 py-2.5">{row.before}</td>
                  <td className="px-4 py-2.5 font-semibold text-sage">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 space-y-4 text-sm">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Masalah Awal
            </div>
            <p className="mt-1 leading-relaxed text-foreground/90">{item.masalah}</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Strategi Singkat
            </div>
            <p className="mt-1 leading-relaxed text-foreground/90">{item.strategi}</p>
          </div>
          {item.achieve && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-sage">
                Achieve
              </div>
              <p className="mt-1 leading-relaxed text-foreground/90">{item.achieve}</p>
            </div>
          )}
        </div>

        <button
          onClick={() => openWa(`Halo Reactor Digital, saya tertarik membahas case study "${item.title}".`)}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-semibold text-sage-foreground"
        >
          <MessageCircle className="h-4 w-4" /> Diskusi Strategi Serupa
        </button>
      </div>
    </div>
  );
}

function CaseStudies() {
  const [platform, setPlatform] = useState<(typeof PLATFORMS)[number]>("All Platforms");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All Categories");
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<CaseStudy | null>(null);

  const filtered = useMemo(
    () =>
      CASE_STUDIES.filter(
        (c) =>
          (platform === "All Platforms" || c.platform === platform) &&
          (category === "All Categories" || c.category === category),
      ),
    [platform, category],
  );
  const visible = showAll ? filtered : filtered.slice(0, 8);

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="text-center">
        <SectionBadge>Portofolio & Case Studies</SectionBadge>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground md:text-[34px]">
          Dari strategi yang berbasis data dengan proses yang selalu bertumbuh memberikan hasil yang
          nyata
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
          12 case study lintas platform dengan angka yang bisa diverifikasi. Setiap keputusan
          berbasis data, setiap hasil bisa dipertanggungjawabkan.
        </p>
      </div>

      <div className="mt-10 space-y-3">
        <div className="flex flex-wrap justify-center gap-2">
          {PLATFORMS.map((p) => (
            <button
              key={p}
              onClick={() => {
                setPlatform(p);
                setShowAll(false);
              }}
              className={
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors " +
                (platform === p
                  ? "border-sage bg-sage text-sage-foreground"
                  : "border-hairline text-muted-foreground hover:text-foreground")
              }
            >
              {p}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCategory(c);
                setShowAll(false);
              }}
              className={
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors " +
                (category === c
                  ? "border-sage bg-sage text-sage-foreground"
                  : "border-hairline text-muted-foreground hover:text-foreground")
              }
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((c) => (
          <CaseCard key={c.id} item={c} onOpen={() => setActive(c)} />
        ))}
      </div>

      {filtered.length > 8 && !showAll && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="rounded-full border border-sage/60 px-6 py-2.5 text-sm font-semibold text-sage transition-colors hover:bg-sage/10"
          >
            Lihat Porto Lainnya
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="mt-10 text-center text-sm text-muted-foreground">
          Tidak ada case study untuk filter ini.
        </div>
      )}

      {active && <CaseModal item={active} onClose={() => setActive(null)} />}
    </section>
  );
}

/* ---------------- workflow stepper ---------------- */

const STEPS = [
  {
    n: "01",
    t: "Audit Data Iklan Lama",
    d: "Melakukan bedah total terhadap data iklan lama, performa toko, kualitas aset kreatif, serta analisis kompetitor. Dari sini, kami menyusun custom strategy roadmap yang paling relevan untuk scale-up brand Anda.",
  },
  {
    n: "02",
    t: "Take Over Account & Setup",
    d: "Proses penyelarasan akses (Dashboard, BM, Pixel, dsb) secara aman dan profesional. Kita akan melakukan sesi kick-off singkat untuk menyamakan target, ekspektasi, dan timeline eksekusi.",
  },
  {
    n: "03",
    t: "Paid Ads Tactical Testing",
    d: "Memasuki fase krusial di mana iklan mulai dijalankan secara terukur. Fokus di tahap ini adalah melakukan testing secara intensif untuk memahami respons pasar, menemukan winning creative, serta target audiens terbaik.",
  },
  {
    n: "04",
    t: "Optimization & Aggressive Scaling",
    d: "Setelah data dan pola berhasil ditemukan, budget iklan tidak langsung dinaikkan asal-asalan. Kami akan melakukan optimasi bid, menyaring keyword/creative terbaik, lalu melakukan scaling budget secara agresif namun tetap menjaga efisiensi biaya.",
  },
  {
    n: "05",
    t: "Data Reporting & Evaluation",
    d: "Transparansi adalah kunci kemitraan kita. Setiap pergerakan data akan dilaporkan secara berkala (harian/mingguan) dan dievaluasi total melalui monthly meeting untuk merumuskan roadmap di bulan berikutnya.",
  },
];

function Workflow() {
  return (
    <section id="proses" className="bg-[oklch(0.14_0_0)]">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="text-center">
          <SectionBadge>How It Works</SectionBadge>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[34px]">
            Workflow Kerja Tim Kami
          </h2>
        </div>
        <div className="relative mt-14">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px beam-line lg:block" />
          <div className="grid items-start gap-5 lg:grid-cols-5">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="group relative h-auto self-start rounded-2xl border border-hairline bg-surface p-5 transition-all hover:border-sage/50 hover:-translate-y-1"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-sage/40 bg-background font-display text-sm font-bold text-sage">
                  {s.n}
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{s.t}</h3>
                <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] lg:group-hover:mt-3">
                  <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                    {s.d}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:hidden">
                  {s.d}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------------- how we collaborate ---------------- */

function Collaborate() {
  const left = [
    "Brand, stok dan produksi",
    "Operasional harian e-commerce",
    "Koordinasi fungsi internal",
    "Penyediaan aset kreatif (foto/video) sesuai arahan roadmap",
  ];
  const right = [
    "Memprioritaskan peluang growth yang lebih terarah",
    "Menjalankan eksperimen campaign yang lebih terukur",
    "Menjaga efisiensi budget dan konsistensi performa",
    "Memberikan insight untuk eksekusi yang data-driven",
    "Mengawal implementasi hingga memberi impact",
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="text-center">
        <SectionBadge>How We Collaborate</SectionBadge>
        <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[34px]">
          Strategic Growth, Measurable Execution
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          { title: "Tim internal Anda tetap berfokus pada:", items: left },
          { title: "Kami mengoptimalkan potensi yang sudah ada dengan:", items: right },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-sage/25 bg-surface p-7"
          >
            <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
            <ul className="mt-5 space-y-3">
              {c.items.map((it) => (
                <li key={it} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-sage" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- services ---------------- */

type Service = {
  title: string;
  price: string;
  sub: string;
  features: string[];
};

const SERVICE_TABS: Record<string, Service[]> = {
  "Ads Management": [
    {
      title: "TikTok Shop Ads",
      price: "Rp 3.500.000 / Bulan",
      sub: "(Untuk 1 Toko)",
      features: [
        "Testing dan optimasi",
        "Setup ads campaign",
        "Referensi brief konten",
        "Analisa performa",
        "Brainstorm",
        "Monthly report",
        "Daily WhatsApp group consultation",
      ],
    },
    {
      title: "Shopee Ads",
      price: "Rp 2.500.000 / Bulan",
      sub: "(Untuk 1 Toko)",
      features: [
        "Testing dan optimasi",
        "Setup ads campaign",
        "Analisa performa",
        "Brainstorm",
        "Monthly report",
        "Daily WhatsApp group consultation",
      ],
    },
    {
      title: "CPAS Ads",
      price: "Rp 2.500.000 / Bulan",
      sub: "(Untuk 1 Toko)",
      features: [
        "Testing dan optimasi",
        "Setup ads campaign",
        "Referensi brief konten",
        "Analisa performa",
        "Brainstorm",
        "Monthly report",
        "Daily WhatsApp group consultation",
      ],
    },
    {
      title: "Meta Ads (Lead Gen)",
      price: "Rp 3.500.000 / Bulan",
      sub: "(Suplai leads untuk 1 brand/produk)",
      features: [
        "Testing dan optimasi",
        "Setup ads campaign",
        "Referensi brief konten",
        "Analisa performa",
        "Brainstorm",
        "Monthly report",
        "Daily WhatsApp group consultation",
      ],
    },
    {
      title: "All Channel Omnichannel",
      price: "Rp 11.000.000 / Bulan",
      sub: "(Omnichannel Ads Management)",
      features: [
        "Testing dan optimasi",
        "Setup ads campaign",
        "Referensi brief konten",
        "Analisa performa",
        "Brainstorm",
        "Forecasting",
        "Monthly meeting & reporting",
        "Daily WhatsApp group consultation",
      ],
    },
  ],
  "Affiliate Management": [
    {
      title: "Basic Package",
      price: "Rp 2.000.000 / Bulan",
      sub: "(Untuk 1 SKU Unggulan)",
      features: [
        "Rekrut 50 Affiliate aktif sebulan",
        "Riset affiliate potensial",
        "Kontroling performa",
        "Komunikasi harian",
        "Laporan bulanan",
        "Pembuatan konsep brief/SOW",
        "Eksekusi program SKU unggulan",
      ],
    },
    {
      title: "Pro Package",
      price: "Rp 3.000.000 / Bulan",
      sub: "(Untuk 2 SKU Produk)",
      features: [
        "Rekrut 70 Affiliate aktif sebulan",
        "Riset affiliate potensial",
        "Kontroling performa",
        "Komunikasi harian",
        "Laporan bulanan",
        "Pembuatan konsep brief/SOW",
        "Eksekusi program 2 SKU",
      ],
    },
  ],
  "Private Mentoring": [
    {
      title: "TikTok Shop Ads Mentoring",
      price: "Rp 2.500.000",
      sub: "",
      features: [
        "Materi fundamental algoritma TikTok Ads",
        "Membaca metrik dashboard",
        "Setup struktur campaign dasar",
        "Fase testing awal",
        "Template penunjang",
        "Rekaman sesi",
        "Free 1 sesi konsultasi 30 menit via Zoom",
      ],
    },
    {
      title: "Shopee Ads Mentoring",
      price: "Rp 1.500.000",
      sub: "",
      features: [
        "Materi fundamental Shopee",
        "Membaca metrik dashboard",
        "Setup struktur campaign dasar",
        "Fase testing awal",
        "Evaluasi & optimasi ads/organic",
        "Template penunjang",
        "Rekaman sesi",
      ],
    },
    {
      title: "CPAS Ads Mentoring",
      price: "Rp 2.000.000",
      sub: "",
      features: [
        "Materi fundamental CPAS",
        "Membaca metrik dashboard",
        "Setup struktur campaign dasar",
        "Fase testing awal",
        "Evaluasi & optimasi ads/organic",
        "Template penunjang",
        "Rekaman sesi",
      ],
    },
    {
      title: "Meta Ads Mentoring",
      price: "Rp 2.000.000",
      sub: "",
      features: [
        "Materi fundamental Meta Ads",
        "Membaca metrik dashboard",
        "Setup struktur campaign dasar",
        "Fase testing awal",
        "Evaluasi & optimasi ads/organic",
        "Template penunjang",
        "Rekaman sesi",
      ],
    },
  ],
  "Strategic Consulting": [
    {
      title: "Deep Dive Audit",
      price: "Rp 500.000 / Sesi",
      sub: "(Durasi 90 Menit)",
      features: [
        "Sesi konsultasi tatap muka online (Meet/Zoom)",
        "Bedah total dashboard iklan berjalan",
        "Identifikasi titik kebocoran budget (bottleneck)",
        "Merumuskan roadmap strategi baru",
        "Feedback langsung aset kreatif",
        "Sesi QnA solusi konkrit",
      ],
    },
  ],
};

function Services() {
  const tabs = Object.keys(SERVICE_TABS);
  const [tab, setTab] = useState(tabs[0]);
  const services = SERVICE_TABS[tab];
  return (
    <section id="layanan" className="bg-[oklch(0.14_0_0)]">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="text-center">
          <SectionBadge>Services & Investment</SectionBadge>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[34px]">
            Investasi Growth Yang Terukur
          </h2>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={
                "rounded-full border px-4 py-2 text-xs font-semibold transition-colors " +
                (tab === t
                  ? "border-sage bg-sage text-sage-foreground"
                  : "border-hairline text-muted-foreground hover:text-foreground")
              }
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "Private Mentoring" && (
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-sage/25 bg-surface p-5 text-sm text-muted-foreground">
            <span className="font-semibold text-sage">Benefit:</span> Sesi privat via Google Meet/Zoom,
            praktik langsung dengan dashboard bisnis Anda sendiri, rekaman sesi pembelajaran, dan
            akses tanya-jawab via WhatsApp selama periode program berjalan.
          </div>
        )}

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-2xl border border-hairline bg-surface p-6 transition-colors hover:border-sage/40"
            >
              <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
              <div className="mt-3 font-display text-2xl font-bold text-sage">{s.price}</div>
              <div className="text-xs text-muted-foreground">{s.sub}</div>
              <ul className="mt-5 flex-1 space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-sage" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openWa(`Halo Reactor Digital, saya tertarik dengan layanan *${s.title}*.`)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-sage px-4 py-2.5 text-sm font-semibold text-sage-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Ambil Layanan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const FAQS = [
  {
    q: "Bagaimana proses Brand Audit di tahap awal kerja sama?",
    a: "Tahap pertama (Fase 1) dari alur kerja kami adalah melakukan Brand Audit. Sesi ini dilakukan secara eksklusif melalui Zoom Meeting. Dalam sesi tersebut, kita akan berdiskusi dua arah untuk membedah kondisi bisnis Anda saat ini, menganalisa riwayat performa toko/iklan sebelumnya, serta memetakan target dan strategi scale-up yang paling tepat sebelum kita melangkah ke eksekusi kampanye.",
  },
  {
    q: "Apakah bisa langsung dapat omset besar dan ROI tinggi?",
    a: "Pencapaian omset besar dan ROI tinggi membutuhkan proses yang terstruktur dan kolaborasi erat. Kami tidak menjanjikan hasil instan di minggu pertama. Alur kerja kami selalu dimulai dengan fase testing untuk membaca respons pasar, dilanjutkan dengan optimasi kampanye untuk menekan biaya (efisiensi), dan barulah masuk ke fase scale up saat data performa sudah terbukti solid. Selain strategi iklan dari kami, keberhasilan ini juga sangat menuntut peran aktif tim internal brand Anda dalam aktivasi kampanye—terutama dalam konsistensi memproduksi aset kreatif (konten) yang tajam serta kesiapan operasional (CS/Admin) untuk memaksimalkan setiap traffic yang masuk.",
  },
  {
    q: "Siapa yang menyiapkan budget dan aset kreatif?",
    a: "Budget iklan sepenuhnya disediakan oleh pihak brand/klien. Untuk aset kreatif (foto/video/copywriting), tim internal brand yang menyiapkannya berdasarkan creative brief, sudut pandang (angle) kompetitor, dan referensi konten tren yang saya berikan saat sesi brainstorm.",
  },
  {
    q: "Tim apa yang harus disiapkan dari sisi klien?",
    a: "Klien idealnya memiliki tim internal yang terdiri dari Content Creator (untuk memproduksi video/foto aset iklan secara mandiri), tim affiliate spesialis untuk mencari affiliator baru, tim Admin Sales yang responsif untuk melayani pesanan yang masuk dari kampanye iklan.",
  },
  {
    q: "Berapa lama kontrak kerja sama?",
    a: "Untuk hasil yang optimal dan terukur, kami merekomendasikan komitmen kerja sama minimal 3 bulan. Bulan pertama biasanya difokuskan pada fase testing dan pengumpulan data, sedangkan bulan kedua dan ketiga adalah fase optimasi dan scaling secara masif.",
  },
  {
    q: "Apakah saya bisa memulai dengan budget kecil?",
    a: "Tentu bisa. Kami selalu merekomendasikan untuk memulai dengan budget testing yang terukur dan rasional sesuai dengan objektif kampanye. Setelah data menunjukkan indikator performa (ROI/ROAS) yang positif, barulah budget akan ditingkatkan (di-scale) secara bertahap.",
  },
  {
    q: "Apakah layanan Ads Management juga termasuk mencari affiliate dan membuat brief konten harian?",
    a: "Untuk layanan Ads Management, fokus utama kami murni pada eksekusi dan optimasi iklan berbayar (Performance Ads). Pencarian kreator affiliate dan penyusunan brief konten harian tidak termasuk secara teknis di dalam paket ini. Namun, kami akan tetap memberikan saran dan action plan strategis—seperti insight angle konten yang winning atau rekomendasi aktivasi kampanye—untuk menunjang performa GMV Anda secara keseluruhan. (Catatan: Jika brand Anda membutuhkan bantuan pengelolaan kreator, kami memiliki paket layanan terpisah yaitu Affiliate Management).",
  },
  {
    q: "Bagaimana sistem pelaporan?",
    a: "Komunikasi harian dilakukan melalui grup WhatsApp untuk update cepat dan konsultasi. Selain itu, akan ada laporan performa komprehensif (monthly report) setiap akhir bulan yang membedah metrik utama, evaluasi kampanye, dan rencana strategi untuk bulan berikutnya.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24 lg:px-8">
      <div className="text-center">
        <SectionBadge>FAQ</SectionBadge>
        <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[34px]">
          Pertanyaan yang Sering Ditanyakan
        </h2>
      </div>
      <div className="mt-10 divide-y divide-hairline rounded-2xl border border-hairline bg-surface">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left"
              >
                <span className="flex-1 text-sm font-semibold text-foreground md:text-base">
                  {f.q}
                </span>
                <span
                  className={
                    "flex h-7 w-7 flex-none items-center justify-center rounded-full transition-colors " +
                    (isOpen
                      ? "bg-sage text-sage-foreground"
                      : "border border-hairline text-muted-foreground")
                  }
                >
                  {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- audit form ---------------- */

const OMZET_OPTS = [
  "Di bawah Rp 50 Juta",
  "Rp 50 Juta - Rp 250 Juta",
  "Rp 250 Juta - Rp 1 Miliar",
  "Di atas Rp 1 Miliar",
];

function AuditForm() {
  const [form, setForm] = useState({
    Nama: "",
    Nomor: "",
    LinkToko: "",
    Omzet: OMZET_OPTS[0],
    Kendala: "",
  });
  const [loading, setLoading] = useState(false);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    if (!form.Nama || !form.Nomor || !form.LinkToko || !form.Kendala) return;
    setLoading(true);

    const waUrl = buildWaUrl(buildAuditText(form));
    let redirected = false;
    const goToWa = () => {
      if (redirected) return;
      redirected = true;
      window.location.href = waUrl;
    };

    // fallback if fetch takes > 2s
    const fallback = window.setTimeout(goToWa, 2000);

    try {
      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(form),
      });
    } catch {
      /* ignore — we still redirect */
    } finally {
      window.clearTimeout(fallback);
      goToWa();
    }
  }

  return (
    <section id="audit" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionBadge>Audit Toko Gratis</SectionBadge>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-[34px]">
            Mulai dari <Highlight>Data Brand Anda</Highlight>, Bukan Asumsi.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Isi formulir berikut dan tim kami akan menghubungi Anda via WhatsApp untuk sesi audit
            toko gratis — fokus pada peluang scale-up yang paling cepat memberikan dampak.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Review performa iklan & funnel saat ini",
              "Identifikasi peluang growth utama",
              "Rekomendasi strategi prioritas",
            ].map((i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 flex-none text-sage" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-hairline bg-surface p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)] md:p-8"
        >
          {[
            {
              k: "Nama" as const,
              label: "Nama Lengkap & Posisi *",
              ph: "Contoh: Budi — Owner",
              type: "text",
            },
            {
              k: "Nomor" as const,
              label: "Nomor WhatsApp Aktif *",
              ph: "08xxxxxxxxxxx",
              type: "tel",
            },
            {
              k: "LinkToko" as const,
              label: "Link Toko / Brand / Social Media *",
              ph: "https://shopee.co.id/...",
              type: "text",
            },
          ].map((f) => (
            <div key={f.k} className="mb-4">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                {f.label}
              </label>
              <input
                required
                type={f.type}
                value={form[f.k]}
                onChange={(e) => update(f.k, e.target.value)}
                placeholder={f.ph}
                maxLength={200}
                className="w-full rounded-lg border border-hairline bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-sage"
              />
            </div>
          ))}
          <div className="mb-4">
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Omzet Bulanan Saat Ini *
            </label>
            <select
              value={form.Omzet}
              onChange={(e) => update("Omzet", e.target.value)}
              className="w-full rounded-lg border border-hairline bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-sage"
            >
              {OMZET_OPTS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-5">
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Kendala Terbesar Saat Ini *
            </label>
            <textarea
              required
              rows={4}
              value={form.Kendala}
              onChange={(e) => update("Kendala", e.target.value)}
              placeholder="Ceritakan tantangan utama brand Anda..."
              maxLength={1000}
              className="w-full resize-none rounded-lg border border-hairline bg-background px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-sage"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-semibold text-sage-foreground transition-transform hover:scale-[1.01] disabled:opacity-70"
          >
            <MessageCircle className="h-4 w-4" />
            {loading ? "Menyimpan data..." : "Kirim & Lanjutkan ke WhatsApp"}
          </button>
        </form>
      </div>
    </section>
  );
}

/* ---------------- testimonials ---------------- */

const TESTIS = [
  {
    q: "Reactor digital sangat transparan dalam menyajikan data. Setiap rupiah yang kami keluarkan untuk iklan bisa dilacak hasilnya. Dalam 3 bulan, revenue kami naik 4x lipat dengan spend yang efisien.",
    a: "Budi Santoso",
    r: "Owner, Toko Body Care Jakarta",
    p: "TikTok Ads",
    b: "9.66x ROI",
  },
  {
    q: "Komunikasi tim sangat responsif. Bahkan di luar jam kerja, laporan dan update selalu diberikan tepat waktu. Scale-up ROI yang kami capai melebihi ekspektasi kami.",
    a: "Siti Rahayu",
    r: "Marketing Manager, Brand Fashion Muslim",
    p: "TikTok Ads",
    b: "8.69x ROI",
  },
  {
    q: "Untuk brand baru, ROI 92x itu luar biasa. Tim paham betul cara testing yang efisien sehingga budget tidak terbuang percuma. Strategi launch-nya sangat solid.",
    a: "Rian Hidayat",
    r: "Founder, Streetwear Brand Bandung",
    p: "TikTok Ads",
    b: "92.28x ROI",
  },
  {
    q: "Shopee Ads yang dikelola Reactor digital memberikan hasil konsisten setiap bulan. Laporan bulanannya sangat detail dan mudah dipahami. Saya bisa fokus ke produksi karena ads sudah ditangani dengan baik.",
    a: "Dewi Kusuma",
    r: "Owner, Brand Skincare Surabaya",
    p: "Shopee Ads",
    b: "66.64x ROI",
  },
  {
    q: "CPAS strategy yang diterapkan tim berbeda. Tidak hanya soal angka, tapi juga edukasi strategi yang membuat tim internal kami makin paham tentang performance marketing.",
    a: "Hendra Wijaya",
    r: "CEO, Fashion Pria Yogyakarta",
    p: "CPAS",
    b: "14.31x ROI",
  },
];

function Testimonials() {
  const loop = [...TESTIS, ...TESTIS];
  return (
    <section className="bg-[oklch(0.14_0_0)] py-24">
      <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
        <SectionBadge>Testimoni Klien</SectionBadge>
        <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[34px]">
          Mereka Sudah Merasakan Hasilnya.
        </h2>
      </div>
      <div className="group relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[oklch(0.14_0_0)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[oklch(0.14_0_0)] to-transparent" />
        <div
          className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ animationDuration: "60s" }}
        >
          {loop.map((t, i) => (
            <article
              key={i}
              className="w-[340px] flex-none rounded-2xl border border-hairline bg-[oklch(0.22_0.01_260)] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.p}
                </span>
                <span className="rounded-full bg-sage/15 px-2.5 py-0.5 text-[11px] font-semibold text-sage">
                  {t.b}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.q}"</p>
              <div className="mt-5 border-t border-hairline pt-4">
                <div className="text-sm font-semibold text-foreground">{t.a}</div>
                <div className="text-xs text-muted-foreground">{t.r}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- final CTA + footer ---------------- */

function FinalCta() {
  return (
    <section className="bg-[#09090B]">
      <div className="mx-auto max-w-4xl px-5 py-28 text-center lg:px-8">
        <SectionBadge>Slot Konsultasi Agensi Terbatas</SectionBadge>
        <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-foreground md:text-[34px]">
          Ciptakan <Highlight>Pertumbuhan Brand</Highlight> Dari Presisi Data Bersama Kami!
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Kami memaksimalkan setiap langkah optimasi berdasarkan data nyata. Kolaborasi ini fokus
          pada pertumbuhan jangka panjang bisnis Anda. Jika Anda siap, silakan audit toko Anda
          terlebih dahulu dengan tim kami.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => openWa(defaultConsultText())}
            className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-semibold text-sage-foreground"
          >
            <MessageCircle className="h-4 w-4" /> Coba Audit Toko Gratis
          </button>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-sage/60 px-5 py-3 text-sm font-semibold text-sage transition-colors hover:bg-sage/10"
          >
            Lihat Portofolio Lengkap <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#09090B] border-t border-hairline">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center lg:px-8">
        <div>
          <img src={logo} alt="Reactor Digital" width={140} height={40} className="h-8 w-auto" />
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            Yogyakarta, Indonesia. Available for Remote Collaboration.
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 md:items-end">
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Pribadi</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground">Syarat & Ketentuan</a>
          </div>
          <div className="text-[11px] text-muted-foreground">
            © 2026 Reactor Digital. Yogyakarta, Indonesia. Privasi | Syarat & Ketentuan
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- page ---------------- */

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <StatsBanner />
        <CaseStudies />
        <Workflow />
        <Collaborate />
        <Services />
        <Faq />
        <AuditForm />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

// Silence unused-icon lint if any
void Sparkles;
