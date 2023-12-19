import { JetBrains_Mono } from "next/font/google";

interface SectionHeadingProps {
  text: string;
  hiddenOnLg?: boolean;
}

const jetBrains = JetBrains_Mono({ subsets: ["latin"] });
export default function SectionHeading({
  text,
  hiddenOnLg = false,
}: SectionHeadingProps) {
  return (
    <h3
      className={`${
        jetBrains.className
      } mb-6 text-lg font-bold uppercase tracking-widest ${
        hiddenOnLg && "lg:hidden"
      } `}
    >
      {text}
    </h3>
  );
}
