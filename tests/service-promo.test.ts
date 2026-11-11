import { describe, expect, test } from "bun:test";
import { ADS_SERVICE_PROMOS, getJakartaMonthEndCountdown } from "../src/lib/service-promo";

describe("Ads Management promotion", () => {
  test("uses the requested regular and discounted monthly prices", () => {
    expect(ADS_SERVICE_PROMOS).toEqual({
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
    });
  });

  test("counts down to the last second of November in Jakarta time", () => {
    expect(getJakartaMonthEndCountdown(new Date("2026-11-11T19:07:00.000Z"))).toEqual({
      days: 18,
      hours: 21,
      minutes: 52,
      seconds: 59,
    });
  });
});