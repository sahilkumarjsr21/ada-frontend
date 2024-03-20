import HomePage from "@/components/HeroComponent";
import Image from "next/image";
import DiffComponent from "@/components/DiffView";
import LoadingComponent from "@/components/LoadingComponent";
import {DiffContextProvider} from "@/components/DiffView/context/diffcontext";
export default function Home() {
  return (
    <main>
        <DiffContextProvider>
          <HomePage/>
          <DiffComponent/>
      </DiffContextProvider>
    </main>
  );
}
