import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Invalid prompt provided.' }, { status: 400 });
    }

    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful paraphrasing tool.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 300,
      }),
    });

    if (!openaiRes.ok) {
      const errorData = await openaiRes.json();
      console.error('OpenAI error:', errorData);
      return NextResponse.json({ error: 'Failed to get response from OpenAI.' }, { status: 502 });
    }

    const data = await openaiRes.json();
    const result = data.choices?.[0]?.message?.content?.trim();

    if (!result) {
      return NextResponse.json({ error: 'No paraphrased result received.' }, { status: 500 });
    }

    return NextResponse.json({ result });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Unexpected server error.' }, { status: 500 });
  }
}
