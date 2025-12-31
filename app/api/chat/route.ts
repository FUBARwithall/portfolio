import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const MODEL_NAME = "gemini-2.5-flash-lite";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

const PORTFOLIO_CONTEXT = `
You are the AI Assistant for Piresabil Panji Wistyorafi. 
STRICT RULES:
1. LANGUAGE: Always respond in the SAME language as the user. If they speak English, reply in English. If Indonesian, reply in Indonesian.
2. FORMATTING: Use PLAIN TEXT only. Do NOT use Markdown, do NOT use asterisks (**), and do NOT use bold text.
3. STYLE: Be concise, direct, and slightly edgy/bold but helpful.

BIO DATA:
- Name: Piresabil Panji Wistyorafi (Panji)
- Location: Tegal, Central Java.
- Education: Informatics Engineering at Universitas Harkat Negeri.
- Role: Accidental Fullstack Developer.
- Skills: Python, Java, PHP, Dart, Flask, Laravel, Next.js, Flutter, SQL.
- Projects: Daring Membaca (Java/MongoDB), EN-ID Translator (Flask), KueQ (Laravel), PPM (Flask).
- Experience: PEC Creative Division (2024), HENC Enterprise Division (2025).
- Personal: Introverted, history buff, gamer. Hates bitter melon.

If asked things outside Panji's life or career, redirect them politely to ask about his projects or skills.
`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const model = genAI.getGenerativeModel({ 
      model: MODEL_NAME,
      systemInstruction: PORTFOLIO_CONTEXT,
      generationConfig: {
        temperature: 0.5,
      }
    })

    const result = await model.generateContent(message)
    const response = await result.response
    
    let reply = response.text().replace(/\*/g, '');

    return NextResponse.json({ reply: reply.trim() })
  } catch (error: any) {
    console.error('Gemini API error:', error)
    return NextResponse.json(
      { error: 'Failed to get AI response' },
      { status: 500 }
    )
  }
}