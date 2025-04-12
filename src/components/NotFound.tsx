import { Link } from "@tanstack/react-router";

export function NotFound({ children }: { children?: any }) {
  return (
    <div className="space-y-2 p-2 text-slate-500 flex flex-col items-center justify-center h-screen bg-[image:repeating-linear-gradient(315deg,_#e2e8f0_0,_#e2e8f0_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed">
      <div className="">{children || <h1 className="text-6xl">404.</h1>}</div>
      <p className="flex items-center gap-2 flex-wrap">
        <Link to="/" className=" ">
          Back Home
        </Link>
      </p>
    </div>
  );
}
