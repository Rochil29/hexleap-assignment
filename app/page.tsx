import Image from "next/image";
import Card from "./components/Card";
import Pic from './../public/pic.png'
import pic2 from './../public/pic1.jpg'
import pic3 from './../public/pic2.png'
import pic4 from './../public/pic3.png'
import Add from "./components/Add";
import { Button } from "@/components/ui/button";
import CollectionSpotlight from "./components/CollectionSpotlight";


export default function Home() {
  return (
    <main className="bg-white dark:bg-[#292B32] h-fit px-10 py-6">
      <div className="dark:text-white text-black font-bold text-2xl border-b-2 border-[#738FFF] w-fit">Sports</div>
      <div className="mt-6 flex flex-row gap-4 justify-around">
        <Card title="Sacramento River Cats" image={Pic} totalEvents={20} name="Basketball" />
        <Card title="Sacramento River Cats" image={pic2} totalEvents={20} name="Basketball" />
        <Card title="Sacramento River Cats" image={pic3} totalEvents={78} name="Basketball" />
        <Card title="Sacramento River Cats" image={pic4} totalEvents={20} name="Basketball" />
        <Add />
      </div>
      <div className="w-full flex items-center justify-center py-6 mt-8">
        <Button className="bg-[#2C9CF0] hover:bg-[#2c9bf0d5]">Show More</Button>
      </div>
      <div>
        <CollectionSpotlight />
      </div>
    </main>
  );
}
