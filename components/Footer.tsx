import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center border-t border-gray-800 p-5">
      <p className="flex flex-row text-gray-400">
        Built by Anas with{" "}
        <a href="https://nextjs.org" target="__blank">
          <img
            src="/logos/nextjs.svg"
            style={{ filter:  "invert(1)" }}
            className="h-6 w-6 mx-1"
          />
        </a>{" "}
        <a href="https://tailwindcss.com" target="__blank">
          <img src="/logos/tailwind.svg" className="h-6 w-6 mx-1" />
        </a>{" "}
        and{" "}
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="__blank">
          &nbsp; 💙
        </a>
      </p>
    </footer>
  );
}
