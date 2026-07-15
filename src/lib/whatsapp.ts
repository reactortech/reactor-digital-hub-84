// WhatsApp Lead Rotator (Round Robin) — one visible CTA, silent distribution.
const ADMINS = [
  { name: "Sena", phone: "6285147861755" },
  { name: "Agus", phone: "62895365249696" },
  { name: "Arif", phone: "6285602298057" },
];

let cursor = 0;
export function nextAdmin() {
  const admin = ADMINS[cursor % ADMINS.length];
  cursor++;
  return admin;
}

export function buildWaUrl(text?: string) {
  const admin = nextAdmin();
  const base = `https://wa.me/${admin.phone}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function openWa(text?: string) {
  const url = buildWaUrl(text);
  window.open(url, "_blank", "noopener,noreferrer");
}

export function defaultConsultText() {
  return "Halo Reactor Digital, saya tertarik untuk konsultasi gratis mengenai performance marketing untuk brand saya.";
}

export function buildAuditText(v: {
  Nama: string;
  Nomor: string;
  LinkToko: string;
  Omzet: string;
  Kendala: string;
}) {
  return `Halo Reactor Digital, saya *${v.Nama}* baru saja mengisi formulir audit toko gratis di website dengan data berikut:\n\n• Nama: ${v.Nama}\n• Nomor WA: ${v.Nomor}\n• Link Toko: ${v.LinkToko}\n• Omzet Bulanan: ${v.Omzet}\n• Kendala Terbesar: ${v.Kendala}\n\nMohon bantuannya untuk dianalisis oleh tim Reactor Digital ya. Terima kasih!`;
}
