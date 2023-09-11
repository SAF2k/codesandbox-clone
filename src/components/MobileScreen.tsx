import Link from 'next/link';

const MobileScreen = () => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-[radial-gradient(circle_farthest-side_at_calc(300px)_calc(300px),_var(--color-secondary)_0%,_transparent_100%)] md:hidden">
      {/* This is a very ugly way of adding such a message, don't build it like this :) */}
      <p className="px-10 text-center text-xl text-white">
        Sorry, I only made this page work on desktop. Perhaps in a future update
        we can make this responsive as well 😁
        <br />
        <Link
          href="https://github.com/SAF2k/codesandbox-clone"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block underline"
        >
          Check the source code on GitHub
        </Link>
      </p>
    </div>
  );
}

export default MobileScreen