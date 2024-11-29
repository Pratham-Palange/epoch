import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-rootColor pt-28 pb-12">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[84rem] mx-auto gap-12 md:gap-0">
        <div className="text-2xl syne-semibold">EPOCH</div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
          <Link
            href="#"
            className="open-semibold text-lg leading-[18px] tracking-wide"
          >
            X
          </Link>
          <Link
            href="#"
            className="open-semibold text-lg leading-[18px] tracking-wide"
          >
            Instagram
          </Link>
          <Link
            href="#"
            className="open-semibold text-lg leading-[18px] tracking-wide"
          >
            Dribbble
          </Link>
          <Link
            href="#"
            className="open-semibold text-lg leading-[18px] tracking-wide"
          >
            Behance
          </Link>
          <Link
            href="#"
            className="open-semibold text-lg leading-[18px] tracking-wide"
          >
            LinkedIn
          </Link>
        </div>
        <div className="text-base text-right open-regular whitespace-nowrap">
          Design and Development
          <br />
          by <strong>@luisomarti</strong>
        </div>
      </div>
    </footer>
  );
}
