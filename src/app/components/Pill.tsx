export default function ({ text }: { text: string }) {
  return (
    <div className="mt-1.5 mr-2 cursor-default rounded-full px-3 text-sm text py-1 inline-block text-teal-400 font-medium tracking-tight bg-teal-400/10">
      {text}
    </div>
  );
}
