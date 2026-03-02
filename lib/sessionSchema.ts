import { z } from "zod";

export const LookSchema = z.object({
  title: z.string().min(2),
  vibeTags: z.array(z.string()).min(3).max(8),
  silhouetteNotes: z.string().min(10),
  paletteHex: z.array(z.string()).min(3).max(6),
  items: z.array(
    z.object({
      category: z.enum(["top", "bottom", "dress", "outerwear", "shoes", "accessory"]),
      name: z.string().min(2),
      notes: z.string().optional(),
    })
  ).min(5).max(10),
  budget: z.object({
    targetTotalUSD: z.number().int().positive(),
    swaps: z.array(
      z.object({
        itemName: z.string(),
        cheaperAlt: z.string().optional(),
        premiumAlt: z.string().optional(),
      })
    ).optional(),
  }),
  whyItWorks: z.string().min(20).max(280),
});

export const SessionSchema = z.object({
  sessionTitle: z.string().min(2),
  createdAtISO: z.string(),
  intakeSummary: z.string().min(10),
  looks: z.array(LookSchema).length(3),
});

export type Session = z.infer<typeof SessionSchema>;
