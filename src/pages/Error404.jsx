import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

const Error404 = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card>
        <CardHeader />
        <CardContent>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Ooops!
          </h1>
        </CardContent>
        <CardFooter className='flex justify-center'>
          Error 404
        </CardFooter>
      </Card>
    </div>
  );
}
 
export default Error404;