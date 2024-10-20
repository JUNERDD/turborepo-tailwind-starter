import { Identify } from '@repo/ui/identify'
import Image from 'next/image'
import Link from 'next/link'

import { Button, buttonVariants } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <header className="row-start-1 flex justify-center">
        <Identify name="web" />
      </header>
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Image
          alt="Next.js logo"
          className="dark:invert"
          height={38}
          priority
          src="https://nextjs.org/icons/next.svg"
          width={180}
        />
        <ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
          <li className="mb-2">
            Get started by editing{' '}
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild>
            <Link
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt="Vercel logomark"
                className="dark:invert"
                height={20}
                src="https://nextjs.org/icons/vercel.svg"
                width={20}
              />
              Deploy now
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              rel="noopener noreferrer"
              target="_blank"
            >
              Read our docs
            </Link>
          </Button>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <Link
          className={buttonVariants({ variant: 'link' })}
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image alt="File icon" aria-hidden height={16} src="https://nextjs.org/icons/file.svg" width={16} />
          Learn
        </Link>
        <Link
          className={buttonVariants({ variant: 'link' })}
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image alt="Window icon" aria-hidden height={16} src="https://nextjs.org/icons/window.svg" width={16} />
          Examples
        </Link>
        <a
          className={buttonVariants({ variant: 'link' })}
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image alt="Globe icon" aria-hidden height={16} src="https://nextjs.org/icons/globe.svg" width={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  )
}
