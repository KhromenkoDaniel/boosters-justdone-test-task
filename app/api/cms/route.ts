import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    title: 'AI Text Paraphraser by JustDone',
    subtitle: 'Transform your writing from good to great with our Paraphraser tool.',
  });
}
