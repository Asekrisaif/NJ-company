import Banner from "@/ui/Banner";
import BasicProducts from "@/ui/BasicProducts";
import Clients from "@/ui/Clients";
import HighPerformance from "@/ui/HighPerformance";

export default function Home() {
  return (
    <main>
      <Banner />
      <BasicProducts />
      <HighPerformance />
      <Clients/>
    </main>
  );
}
