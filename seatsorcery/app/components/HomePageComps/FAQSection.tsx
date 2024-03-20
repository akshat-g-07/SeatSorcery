import { FAQs } from "./FAQs";
import FAQTemplate from "./FAQTemplate";

export default function FAQSection() {
  return (
    <>
      <div className="bg-[#ededed] h-auto w-full py-4">
        <div className="font-bold p-5 text-lg lg:text-2xl">FAQs</div>
        <div className="w-full px-5">
          {FAQs.map((item, index) => {
            return <FAQTemplate key={index} ques={item.ques} ans={item.ans} />;
          })}
        </div>
      </div>
    </>
  );
}
