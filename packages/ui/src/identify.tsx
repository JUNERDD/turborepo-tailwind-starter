export function Identify({ name }: { name: string }): JSX.Element {
  return (
    <p className="flex border-b border-neutral-800 bg-zinc-800/30 bg-gradient-to-b from-inherit px-4 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:bg-zinc-800/30 lg:p-4">
      examples/with-tailwind -&nbsp;
      <code className="font-mono font-bold">{name}</code>
    </p>
  )
}
