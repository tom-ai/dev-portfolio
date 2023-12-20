export default function ({ text }: { text: string }) {
  return (
    <div className="text mr-2 mt-1.5 inline-block cursor-default rounded-full bg-stone-900/10 px-3 py-1 text-sm font-medium tracking-tight dark:bg-stone-100/10">
      {text}
    </div>
  );
}
