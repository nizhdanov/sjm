import { postCalculateResult } from '@/api/questions';

export async function POST(request: Request) {
  const res = await request.json();
  const data = await postCalculateResult(res);
  console.log('@ POST route', data);
  return Response.json(data);
}
