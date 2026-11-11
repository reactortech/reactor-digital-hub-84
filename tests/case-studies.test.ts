import { describe, expect, test } from "bun:test";
import { CASE_STUDIES } from "../src/lib/case-studies";

describe("CPAS case studies", () => {
  test("records the first-month skincare launch metrics", () => {
    const study = CASE_STUDIES.find((item) => item.id === 13);

    expect(study).toMatchObject({
      platform: "CPAS Ads",
      category: "Skin Care",
      metric: "507 Juta / Bulan",
      subMetric: "ROAS 17.67x",
      title: "Skincare",
      badge: "New Launch",
      table: [
        { label: "Ad Spend", before: "Rp 0 (Juni)", after: "Rp 28.680.605 (Juli)" },
        { label: "Revenue", before: "Rp 0 (Juni)", after: "Sekitar Rp 507 Juta (Juli)" },
        { label: "Purchases", before: "—", after: "2.051 (Juli)" },
        { label: "ROAS", before: "—", after: "17.67x (Juli)" },
      ],
    });
  });

  test("records the September-to-October accessories growth metrics", () => {
    const study = CASE_STUDIES.find((item) => item.id === 14);

    expect(study).toMatchObject({
      platform: "CPAS Ads",
      category: "Aksesoris",
      metric: "449 Juta / Bulan",
      subMetric: "ROAS 23.41x",
      title: "Aksesoris",
      badge: "Best Growth",
      table: [
        { label: "Ad Spend", before: "Rp 17.583.937 (September)", after: "Rp 19.171.750 (Oktober)" },
        { label: "Revenue", before: "Rp 375 Juta (September)", after: "Rp 449 Juta (Oktober)" },
        { label: "Purchases", before: "3.980 (September)", after: "4.656 (Oktober)" },
        { label: "ROAS", before: "21.35x (September)", after: "23.41x (Oktober)" },
      ],
    });
  });
});