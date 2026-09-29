import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Standard Letter size: 612 x 792 pt
  const pageWidth = 612;
  const pageHeight = 792;
  const margin = 54; // 0.75 in
  const contentWidth = pageWidth - margin * 2;

  // Helper to wrap text
  function wrapText(text: string, font: typeof fontRegular, size: number, maxWidth: number): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const width = font.widthOfTextAtSize(testLine, size);
      if (width <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  function drawBullet(page: any, x: number, y: number) {
    page.drawCircle({
      x,
      y: y + 3,
      size: 2,
      color: rgb(0.1, 0.1, 0.1),
    });
  }

  // --- PAGE 1 ---
  const page1 = pdfDoc.addPage([pageWidth, pageHeight]);
  let y = pageHeight - margin - 10;

  // Name (centered, bold, 16pt)
  const name = 'KAUSHAL PRASAD';
  const nameWidth = fontBold.widthOfTextAtSize(name, 16);
  page1.drawText(name, {
    x: (pageWidth - nameWidth) / 2,
    y,
    size: 16,
    font: fontBold,
    color: rgb(0, 0, 0),
  });
  y -= 18;

  // Title / Subheading (centered, 10.5pt)
  const title = 'AI Product Manager | Remote / Bengaluru';
  const titleWidth = fontRegular.widthOfTextAtSize(title, 10.5);
  page1.drawText(title, {
    x: (pageWidth - titleWidth) / 2,
    y,
    size: 10.5,
    font: fontRegular,
    color: rgb(0.1, 0.1, 0.1),
  });
  y -= 16;

  // Contact info (centered, 9.5pt)
  const contactText = 'prasadkaushal3@gmail.com | +91 8093786521 | LinkedIn | Portfolio';
  const contactWidth = fontRegular.widthOfTextAtSize(contactText, 9.5);
  page1.drawText(contactText, {
    x: (pageWidth - contactWidth) / 2,
    y,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.1, 0.1, 0.1),
  });
  y -= 26;

  // SECTION HEADER HELPER
  function drawSectionHeader(page: any, text: string, currentY: number): number {
    page.drawText(text, {
      x: margin,
      y: currentY,
      size: 11,
      font: fontBold,
      color: rgb(0, 0, 0),
    });
    return currentY - 14;
  }

  // SUMMARY
  y = drawSectionHeader(page1, 'SUMMARY', y);
  const summaryText =
    'Product Manager with 3.5 years of experience shipping LLM products to production: RAG support agents, AI learning platforms, and conversational bots. Hands-on builder who prototypes with n8n, Lovable, and Supabase before engineering commits.';
  const summaryLines = wrapText(summaryText, fontRegular, 9.5, contentWidth);
  for (const line of summaryLines) {
    page1.drawText(line, {
      x: margin,
      y,
      size: 9.5,
      font: fontRegular,
      color: rgb(0.15, 0.15, 0.15),
    });
    y -= 13;
  }
  y -= 12;

  // EXPERIENCE
  y = drawSectionHeader(page1, 'EXPERIENCE', y);

  // Job 1: Worlder Team
  page1.drawText('Product Manager — Worlder Team', {
    x: margin,
    y,
    size: 10,
    font: fontBold,
    color: rgb(0, 0, 0),
  });
  const wtRight = '| Remote | Oct 2024 – Present';
  page1.drawText(wtRight, {
    x: margin + fontBold.widthOfTextAtSize('Product Manager — Worlder Team ', 10),
    y,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.2, 0.2, 0.2),
  });
  y -= 15;

  const wtBullets = [
    'Led 0->1 launch of a RAG-based support agent; defined the retrieval and grounding approach and an eval set of 100 real queries, reducing support tickets by 28% over 3 months at 90% answer accuracy.',
    'Scoped and shipped an AI-powered Employee LMS MVP (personalized learning paths + performance analytics) that helped close a $0.5M enterprise contract with Hot Staff.',
    'Owned UAT and release gating across 4 AI products; introduced test checklists & eval gates, cutting release defects by 17%.',
    'Rebuilt onboarding for Improver( a video-conferencing product), removing unwanted steps; sign-up completion rose from 60% to 86%.',
  ];

  for (const b of wtBullets) {
    drawBullet(page1, margin + 10, y);
    const bLines = wrapText(b, fontRegular, 9, contentWidth - 24);
    for (let i = 0; i < bLines.length; i++) {
      page1.drawText(bLines[i], {
        x: margin + 22,
        y: y - i * 12,
        size: 9,
        font: fontRegular,
        color: rgb(0.15, 0.15, 0.15),
      });
    }
    y -= bLines.length * 12 + 5;
  }
  y -= 8;

  // Job 2: Ultrahuman
  page1.drawText('Product Specialist — Ultrahuman', {
    x: margin,
    y,
    size: 10,
    font: fontBold,
    color: rgb(0, 0, 0),
  });
  const uhRight = '| Remote | Feb 2024 – Jul 2024';
  page1.drawText(uhRight, {
    x: margin + fontBold.widthOfTextAtSize('Product Specialist — Ultrahuman ', 10),
    y,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.2, 0.2, 0.2),
  });
  y -= 15;

  const uhBullets = [
    'Launched a WhatsApp AI support bot deflecting 35% of repetitive queries; CSAT rose from 4.1 to 4.5.',
    'Diagnosed drop-offs via funnel analysis and UX audits; shipped 3 fixes that lifted weekly retention by 20%.',
  ];

  for (const b of uhBullets) {
    drawBullet(page1, margin + 10, y);
    const bLines = wrapText(b, fontRegular, 9, contentWidth - 24);
    for (let i = 0; i < bLines.length; i++) {
      page1.drawText(bLines[i], {
        x: margin + 22,
        y: y - i * 12,
        size: 9,
        font: fontRegular,
        color: rgb(0.15, 0.15, 0.15),
      });
    }
    y -= bLines.length * 12 + 5;
  }
  y -= 8;

  // Job 3: RewardWise
  page1.drawText('Associate Product Manager — RewardWise', {
    x: margin,
    y,
    size: 10,
    font: fontBold,
    color: rgb(0, 0, 0),
  });
  const rwRight = '| Remote | Mar 2023 – Feb 2024';
  page1.drawText(rwRight, {
    x: margin + fontBold.widthOfTextAtSize('Associate Product Manager — RewardWise ', 10),
    y,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.2, 0.2, 0.2),
  });
  y -= 15;

  const rwBullets = [
    'Owned the product 0->1: defined the roadmap, KPIs, and rollout plan from 200+ user interviews and competitor research.',
    'Acquired the first 100 customers through demos and outreach, turning their feedback into a specific roadmap change.',
  ];

  for (const b of rwBullets) {
    drawBullet(page1, margin + 10, y);
    const bLines = wrapText(b, fontRegular, 9, contentWidth - 24);
    for (let i = 0; i < bLines.length; i++) {
      page1.drawText(bLines[i], {
        x: margin + 22,
        y: y - i * 12,
        size: 9,
        font: fontRegular,
        color: rgb(0.15, 0.15, 0.15),
      });
    }
    y -= bLines.length * 12 + 5;
  }
  y -= 10;

  // Internships
  page1.drawText('Internships:', {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: rgb(0, 0, 0),
  });
  const internText =
    'PriceLabs (Jan–Feb 2023) redesigned the property listing flow; FanVideo (Mar–May 2022) wrote PRDs and ran user research that shaped feature prioritization.';
  const internLines = wrapText(internText, fontRegular, 9, contentWidth - 75);
  for (let i = 0; i < internLines.length; i++) {
    page1.drawText(internLines[i], {
      x: i === 0 ? margin + 68 : margin,
      y: y - i * 13,
      size: 9,
      font: fontRegular,
      color: rgb(0.15, 0.15, 0.15),
    });
  }
  y -= internLines.length * 13 + 14;

  // PRODUCTS I'VE BUILT HEADER
  y = drawSectionHeader(page1, "PRODUCTS I'VE BUILT", y);

  // --- PAGE 2 ---
  const page2 = pdfDoc.addPage([pageWidth, pageHeight]);
  let y2 = pageHeight - margin - 20;

  // Product 1: The Noob PM
  drawBullet(page2, margin + 10, y2);
  page2.drawText('The Noob PM — Founder', {
    x: margin + 22,
    y: y2,
    size: 9.5,
    font: fontBold,
    color: rgb(0.05, 0.35, 0.8),
  });
  const noobHead = ' (2024–2025): Grew a PM community to 3,000+ members in';
  page2.drawText(noobHead, {
    x: margin + 22 + fontBold.widthOfTextAtSize('The Noob PM — Founder', 9.5),
    y: y2,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.15, 0.15, 0.15),
  });
  y2 -= 13;

  const noobLines = [
    'under 8 months; Rs. 2L revenue, 30+ placements. Relaunching as a platform with an AI',
    'mock interview studio, a PM resume auditor, and a LinkedIn optimiser.',
  ];
  for (const nl of noobLines) {
    page2.drawText(nl, {
      x: margin + 22,
      y: y2,
      size: 9.5,
      font: fontRegular,
      color: rgb(0.15, 0.15, 0.15),
    });
    y2 -= 13;
  }
  y2 -= 8;

  // Product 2: Reqroot
  drawBullet(page2, margin + 10, y2);
  page2.drawText('Reqroot:', {
    x: margin + 22,
    y: y2,
    size: 9.5,
    font: fontBold,
    color: rgb(0.05, 0.35, 0.8),
  });
  const reqHead = ' AI candidate-screening app that turns a JD into a scoring rubric and ranks';
  page2.drawText(reqHead, {
    x: margin + 22 + fontBold.widthOfTextAtSize('Reqroot:', 9.5),
    y: y2,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.15, 0.15, 0.15),
  });
  y2 -= 13;

  const reqLines = [
    'applicants with confidence scores and reasons. Stack: Lovable, n8n, Claude, Google',
    'Sheets.',
  ];
  for (const rl of reqLines) {
    page2.drawText(rl, {
      x: margin + 22,
      y: y2,
      size: 9.5,
      font: fontRegular,
      color: rgb(0.15, 0.15, 0.15),
    });
    y2 -= 13;
  }
  y2 -= 20;

  // SKILLS
  y2 = drawSectionHeader(page2, 'SKILLS', y2);

  const skillGroups = [
    {
      label: 'Product:',
      text: 'Strategy, Roadmapping, PRDs, Experimentation, Funnel & Retention Analysis, UAT, Pricing',
    },
    {
      label: 'AI:',
      text: 'RAG, Prompt Engineering, LLM Evals (Braintrust), Agent Workflows (n8n), Pinecone',
    },
    {
      label: 'Tools:',
      text: 'SQL, Mixpanel, Jira, Figma, Postman, Claude Code, Lovable, Supabase, Vercel',
    },
  ];

  for (const sg of skillGroups) {
    page2.drawText(sg.label, {
      x: margin,
      y: y2,
      size: 9.5,
      font: fontBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    const labelWidth = fontBold.widthOfTextAtSize(sg.label + ' ', 9.5);
    const sgLines = wrapText(sg.text, fontRegular, 9.5, contentWidth - labelWidth);
    for (let i = 0; i < sgLines.length; i++) {
      page2.drawText(sgLines[i], {
        x: i === 0 ? margin + labelWidth : margin,
        y: y2 - i * 13,
        size: 9.5,
        font: fontRegular,
        color: rgb(0.2, 0.2, 0.2),
      });
    }
    y2 -= sgLines.length * 13 + 5;
  }
  y2 -= 16;

  // EDUCATION
  y2 = drawSectionHeader(page2, 'EDUCATION', y2);
  const eduItems = [
    'M.Sc. IT, Lovely Professional University (Distance, 2022–24)',
    "BCA, St. Joseph's College, Bangalore (2018–21)",
  ];

  for (const edu of eduItems) {
    page2.drawText(edu, {
      x: margin,
      y: y2,
      size: 9.5,
      font: fontRegular,
      color: rgb(0.15, 0.15, 0.15),
    });
    y2 -= 15;
  }

  const pdfBytes = await pdfDoc.save();

  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'Kaushal_Prasad_Resume.pdf'), pdfBytes);
  fs.writeFileSync(path.join(publicDir, 'resume.pdf'), pdfBytes);
  console.log('Successfully generated Kaushal_Prasad_Resume.pdf and resume.pdf in public/');
}

generateResume().catch(console.error);
