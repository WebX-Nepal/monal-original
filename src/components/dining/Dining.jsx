import "./dining.css"

import dining from "./dining.png"
export default function Dining() {
  return (
<section className="flex bg-black ">
    <div className="p-2  w-[49%] h-[80%]">
<img src={dining} alt="people dining"   className="bg-cover overflow-hidden"/>
    </div>
    <div className="  flex flex-col gap-16  text-white w-[50%] p-8">
        <p className="mt-24 text-4xl   ">Monal Dining</p>
        <p className="w-[75%]">From its upper-level vantage point, the mezzanine captures the excitement from the resturent below whilst offering a more exclusive and intimate setting in three private function spaces. These rooms can be closed off to be used individually or opened up to be utilised as a larger space</p>
        <p className="uppercase mt-8">Find out more</p>
    </div>
</section>
    )
}
