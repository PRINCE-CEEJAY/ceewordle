import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';

export default function Start() {
  return (
    <div>
      <Card className='w-full max-w-md text-center'>
        <CardHeader>
          <CardTitle>WORDLE GAME</CardTitle>
          <CardDescription>
            Choose your Options to Start the Game
          </CardDescription>
        </CardHeader>
        <CardContent>{/* Content goes here */}</CardContent>
        <CardFooter className='flex-col gap-2'>
          <Button
            type='submit'
            className='w-full cursor-pointer'
          >
            Start Game Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
