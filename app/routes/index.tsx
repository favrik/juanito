import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="max-w-7xl sm:px-6 lg:px-8">
            <div className="">
              <h1 className="text-center font-extrabold tracking-tight sm:text-8xl">
                Adopta un Perrito!
                
              </h1>
            </div>

        </div>
      </div>
    </main>
  );
}
