export type Cell =
  | { kind: "dash" }
  | { kind: "check" }
  | { kind: "text"; value: string; tone?: "default" | "magic" };

export type Row = {
  label: string;
  info?: string;
  badge?: string;
  basic: Cell;
  pro: Cell;
  gold: Cell;
};

export type Section = { title: string; rows: Row[] };

const dash: Cell = { kind: "dash" };
const check: Cell = { kind: "check" };
const text = (v: string, tone: "default" | "magic" = "default"): Cell => ({
  kind: "text",
  value: v,
  tone,
});

export const SECTIONS: Section[] = [
  {
    title: "AI Features",
    rows: [
      {
        label: "AI Credits (annual)",
        info: "Annual credits consumed by AI tasks",
        basic: text("1,500"),
        pro: text("5,000"),
        gold: text("50,000"),
      },
      {
        label: "AI models",
        info: "Choose from basic to frontier AI models for smarter content, sharper designs, and better output quality.",
        basic: text("Standard"),
        pro: text("Advanced"),
        gold: text("Frontier Models", "magic"),
      },
      {
        label: "Generation Speed",
        info: "Controls how fast AI generates your slides. Higher tiers unlock faster generation for quicker turnarounds.",
        basic: text("Medium"),
        pro: text("Fast"),
        gold: text("Ultra", "magic"),
      },
      {
        label: "Presentation Refresh",
        info: "One-shot update to refresh your presentation's data. Charts and summaries update when your numbers change.",
        badge: "Coming Soon",
        basic: check,
        pro: check,
        gold: check,
      },
      {
        label: "Project knowledge",
        info: "Upload supporting documents, brand guides, and reference material into a project so the AI references them every time it creates a slide.",
        basic: dash,
        pro: dash,
        gold: check,
      },
      {
        label: "Agents",
        info: "AI agent that autonomously researches, plans, and builds full presentations on your behalf.",
        badge: "Coming Soon",
        basic: dash,
        pro: dash,
        gold: check,
      },
    ],
  },
  {
    title: "Sharing & Export",
    rows: [
      {
        label: "PowerPoint/PDF Export",
        info: "Download your presentations as PDF or PowerPoint files for offline use and sharing.",
        basic: check,
        pro: check,
        gold: check,
      },
      {
        label: "Presentation Embed",
        info: "Embed your presentation on websites, blogs, or internal tools with a simple embed code.",
        basic: check,
        pro: check,
        gold: check,
      },
      {
        label: "Unbranded Public Links",
        info: "Share presentations via public links without any Presentations.ai branding.",
        basic: check,
        pro: check,
        gold: check,
      },
      {
        label: "Password-Protected Links",
        info: "Add a password to your shared presentation links for an extra layer of security.",
        basic: dash,
        pro: check,
        gold: check,
      },
    ],
  },
  {
    title: "Collaboration",
    rows: [
      {
        label: "Guests",
        info: "Invite external collaborators to view or edit specific projects without a full workspace seat.",
        basic: text("Up to 5 guests"),
        pro: text("Up to 10 guests"),
        gold: text("Unlimited guests", "magic"),
      },
      {
        label: "Present Remotely",
        info: "Share a live presentation session with remote audiences in real-time.",
        basic: check,
        pro: check,
        gold: check,
      },
    ],
  },
  {
    title: "Brand kit",
    rows: [
      {
        label: "Custom Brand Colors",
        info: "Set your brand's color palette so every presentation stays on-brand automatically.",
        basic: check,
        pro: check,
        gold: check,
      },
      {
        label: "Custom Brand Fonts",
        info: "Upload and apply your brand's fonts across all presentations for a consistent look.",
        basic: check,
        pro: check,
        gold: check,
      },
      {
        label: "Custom Templates",
        info: "Create and save your own branded templates to reuse across projects.",
        basic: dash,
        pro: dash,
        gold: check,
      },
      {
        label: "Custom Brand Assets",
        info: "Upload logos, images, and other brand assets for AI to use when generating slides.",
        basic: dash,
        pro: text("10 MB"),
        gold: text("Unlimited storage", "magic"),
      },
      {
        label: "Custom Brand Voice",
        info: "Train the AI to write in your brand's unique tone and style.",
        badge: "Coming Soon",
        basic: dash,
        pro: text("1 voice"),
        gold: text("Unlimited voices", "magic"),
      },
    ],
  },
  {
    title: "Analytics",
    rows: [
      {
        label: "Views",
        info: "Track how many times your presentation was viewed.",
        basic: check,
        pro: check,
        gold: check,
      },
      {
        label: "Slide Engagement",
        info: "See time spent on each slide and where viewers drop off.",
        basic: dash,
        pro: check,
        gold: check,
      },
      {
        label: "Viewer Demographics",
        info: "Understand who is viewing your presentations — country, device, and more.",
        basic: dash,
        pro: text("Standard"),
        gold: text("Advanced", "magic"),
      },
      {
        label: "Email Capture",
        info: "Collect viewer emails before they can access your presentation.",
        basic: dash,
        pro: dash,
        gold: check,
      },
      {
        label: "Visit Notifications",
        info: "Get notified in real-time when someone views your deck.",
        basic: dash,
        pro: dash,
        gold: check,
      },
    ],
  },
  {
    title: "Integrations",
    rows: [
      {
        label: "PowerPoint",
        info: "Use Presentations.ai directly inside PowerPoint.",
        basic: check,
        pro: check,
        gold: check,
      },
      {
        label: "Google Slides",
        info: "Use Presentations.ai directly inside Google Slides.",
        basic: check,
        pro: check,
        gold: check,
      },
      {
        label: "Notion",
        info: "Pull in pages and databases from Notion into your presentations.",
        basic: dash,
        pro: dash,
        gold: check,
      },
      {
        label: "Google Drive",
        info: "Import content and files directly from Google Drive into your presentations.",
        basic: dash,
        pro: check,
        gold: check,
      },
      {
        label: "Salesforce CRM",
        info: "Pull CRM data directly into your presentations — deals, pipelines, and account info.",
        badge: "Coming Soon",
        basic: dash,
        pro: dash,
        gold: check,
      },
      {
        label: "HubSpot",
        info: "Sync marketing and sales data from HubSpot into your decks.",
        badge: "Coming Soon",
        basic: dash,
        pro: dash,
        gold: check,
      },
      {
        label: "Slack",
        info: "Share and receive presentation updates directly in Slack channels.",
        badge: "Coming Soon",
        basic: dash,
        pro: dash,
        gold: check,
      },
      {
        label: "Workflow Automation",
        info: "Trigger deck creation via Zapier or webhooks. Auto-generate presentations when forms are submitted or projects start.",
        badge: "Coming Soon",
        basic: dash,
        pro: dash,
        gold: check,
      },
    ],
  },
];
