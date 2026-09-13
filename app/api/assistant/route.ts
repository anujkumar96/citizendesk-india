import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { message, language } = await request.json().catch(() => ({ message: "", language: "en" }));
  const apiUrl = process.env.CITIZENDESK_AI_API_URL;
  const apiKey = process.env.CITIZENDESK_AI_API_KEY;

  if (!apiUrl || !apiKey || typeof message !== "string" || message.trim().length < 3) {
    return NextResponse.json({ reply: null, source: "fallback" });
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        language,
        message: message.slice(0, 2000),
        system:
          "You are CitizenDesk India's grievance guidance assistant. Give practical, cautious guidance for Indian complaint paths. Do not claim to be government, do not invent portals, deadlines, statistics, or legal outcomes, and remind users to verify official sources.",
      }),
    });

    if (!response.ok) return NextResponse.json({ reply: null, source: "fallback" });
    const data = await response.json();
    const reply = typeof data.reply === "string" ? data.reply : typeof data.text === "string" ? data.text : null;
    return NextResponse.json({ reply, source: reply ? "provider" : "fallback" });
  } catch {
    return NextResponse.json({ reply: null, source: "fallback" });
  }
}
