import BlankStar from "./BlankStar";
import FilledStar from "./FilledStart";
import WandSVG from "./WandSVG";

const SorceryButton = () => {
  return (
    <div className="h-8 w-8">
      <div className="h-2 w-full flex justify-around">
        <div className="w-1/3 h-full">
          <BlankStar classValues="blankStar w-full h-full" />
          <FilledStar classValues="filledStar hidden w-full h-full" />
        </div>
        <div className="w-1/3 h-full translate-y-1">
          <BlankStar classValues="blankStar w-full h-full" />
          <FilledStar classValues="filledStar hidden w-full h-full" />
        </div>
      </div>
      <div className="h-6 w-full flex justify-around">
        <div className="w-1/3 h-full flex items-center translate-x-0.5 translate-y">
          <BlankStar classValues="blankStar w-full h-full" />
          <FilledStar classValues="filledStar hidden w-full h-full" />
        </div>
        <div
          id="wandsvg"
          className="w-2/3 h-full duration-300 origin-bottom-right"
        >
          <WandSVG classValues="h-full scale-105 w-full -rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default SorceryButton;
