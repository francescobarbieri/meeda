import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import NetworthChart from '@/components/charts/networth';
import { Select, SelectTrigger, SelectValue, SelectGroup, SelectItem, SelectContent } from '@/components/ui/select';
import { TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className='w-[100%] flex justify-center'>
      <Card className='w-[70%]'>
        <CardHeader>
          <div className='flex justify-between'>
            <div>
              <CardTitle>NetWorth</CardTitle>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-2">
                512,255$
              </h3>
              <CardDescription className='flex items-center gap-2 font-medium leading-none mt-2 text-green-600'>
                  Trending up by 5.2% this year <TrendingUp className="h-4 w-4" />
              </CardDescription>
            </div>
            <Select defaultValue='2024'>
              <SelectTrigger className='w-32'>
                <SelectValue/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <NetworthChart />
        </CardContent>
      </Card>
    </div>
  );
}
 
export default Dashboard;