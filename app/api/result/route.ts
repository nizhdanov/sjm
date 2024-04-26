import { postCalculateResult } from '@/api/questions';

export async function POST(request: Request) {
  const res = await request.json();
  const data = await postCalculateResult(res);
  console.log(data);
  return new Response(JSON.stringify({ data }), { status: 200 });
}
