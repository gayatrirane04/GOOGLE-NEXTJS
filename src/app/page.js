import HomeHeader from "@/components/HomeHeader";
import Image from 'next/image';
import HomeSearch from "@/components/HomeSearch";

export default function Home() {
  return (
   <>
   <header>
      <div className="flex flex-col items-center mt-24">
      <HomeHeader/>
        <Image
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
         alt ='Google Logo'
         width={300}
         height={100}
         priority
          style ={{width :'auto'}}
         />
          <HomeSearch />
      </div>
   </header>
   </>
  );
}

