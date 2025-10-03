import Link from "next/link";
const NoAuthPageMMessage = () => {
  return (
    <section className="max-w-8xl flex flex-col items-center justify-center mt-22">
      <h1 className="text-8xl text-red-500 font-semibold tracking-wide animate-pulse-fast">
        HEY!
      </h1>
      <h2 className="text-5xl font-semibold tracking-wide mb-6">
        YOU CAN&apos;T BE IN HERE...
      </h2>
      <Link href="/">
        <h3 className="text-2xl font-semibold tracking-wide hover:text-sky-600">
          - GO BACK AN SIGN IN PLEASE -
        </h3>
      </Link>
    </section>
  );
};

export default NoAuthPageMMessage;
