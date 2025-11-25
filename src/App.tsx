import Loader from './components/Loader';
import Start from './components/Start';
export default function App() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <Loader />
      <Start />
    </div>
  );
}
