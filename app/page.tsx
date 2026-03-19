// import Canvas from "@/components/canvas";

import Beranda from "./_components/beranda";
import Kemitraan from "./_components/kemitraan";
import TentangKami from "./_components/tentang-kami";
import Varian from "./_components/varian";


export default async function Home() {
  return (<>
    <section id="beranda">
      {/* <Canvas /> */}
      <Beranda />
    </section>
    <section id="varian">
      <Varian />
    </section>
    <section id="kemitraan">
      <Kemitraan />
    </section>
    <section id="tentang-kami">
      <TentangKami />
    </section>
  </>
  );
}
