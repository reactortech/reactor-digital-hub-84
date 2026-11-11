export const ADS_SERVICE_PROMOS = {
  "TikTok Shop Ads": {
    regularPrice: "Rp 4.500.000 / Bulan",
    promoPrice: "Rp 3.600.000 / Bulan",
  },
  "Shopee Ads": {
    regularPrice: "Rp 4.000.000 / Bulan",
    promoPrice: "Rp 3.200.000 / Bulan",
  },
  "CPAS Ads": {
    regularPrice: "Rp 4.500.000 / Bulan",
    promoPrice: "Rp 3.600.000 / Bulan",
  },
  "Meta Ads (Lead Gen)": {
    regularPrice: "Rp 4.500.000 / Bulan",
    promoPrice: "Rp 3.600.000 / Bulan",
  },
  "All Channel Omnichannel": {
    regularPrice: "Rp 13.000.000 / Bulan",
    promoPrice: "Rp 10.400.000 / Bulan",
  },
} as const;

export function getJakartaMonthEndCountdown(now: Date) {
  const dateParts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "numeric",
  }).formatToParts(now);
  const year = Number(dateParts.find((part) => part.type === "year")?.value);
  const month = Number(dateParts.find((part) => part.type === "month")?.value);
  const deadline = Date.UTC(year, month, 0, 16, 59, 59, 999);
  const remainingSeconds = Math.max(0, Math.floor((deadline - now.getTime()) / 1000));

  return {
    days: Math.floor(remainingSeconds / 86400),
    hours: Math.floor((remainingSeconds % 86400) / 3600),
    minutes: Math.floor((remainingSeconds % 3600) / 60),
    seconds: remainingSeconds % 60,
  };
}