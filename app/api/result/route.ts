import { postCalculateResult } from '@/api/questions';
export async function POST(request: Request) {
  const res = await request.json();
  const calculatedResult = await postCalculateResult(res);

  return Response.json(calculatedResult[0].specialtyCode);
}
