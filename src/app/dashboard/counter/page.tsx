
import { useState } from "react";
import type { Metadata } from 'next'
import ContadorPage from "@/app/components/Contador";
import Contador from "@/app/components/Contador";



export const metadata: Metadata = {
  title: 'Contador',
  description: 'Un simple contador',
}




export default function CounterPage() {



  return (
    <Contador value={ 100 } />
  );
}