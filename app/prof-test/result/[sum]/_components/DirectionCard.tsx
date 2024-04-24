import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/card';

export const DirectionCard = (props: any) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.direction}</CardTitle>
        <CardDescription>{props.koef}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
