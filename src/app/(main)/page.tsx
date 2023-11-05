import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 pb-20 pt-16 sm:pb-24 sm:pt-20">
      <h1 className="max-w-[46rem] text-center text-4xl font-black sm:text-5xl sm:leading-[3.3rem]">
        Your favourite Web3 Protocol
      </h1>
      <p className="max-w-[36rem] text-center  text-base-content-neutral sm:text-xl">
        We are building your favourite Web3 Protocol
      </p>
      <Button>Get started</Button>

      <div className="flex flex-col gap-3 items-center w-full mt-14">
        <h3 className="font-bold text-2xl">Receive news and updates</h3>
        <p className="max-w-[340px] text-center">
          Stay up to date with our ecosystem, never miss an opportunity
        </p>
        <iframe
          src="http://localhost:3001/0x26FddC1C2c84e61457734a17C6818a6E063644ec"
          className="w-full h-[400px]"
        ></iframe>
      </div>
    </div>
  );
}
