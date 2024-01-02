
import type { Metadata } from 'next'
import Contador from "@/components/Contador";




export const metadata: Metadata = {
  title: 'Contador',
  description: 'Un simple contador',
}




export default function CounterPage() {



  return (
    <Contador value={ 100 } />
  );
}