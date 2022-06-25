import { Link } from "@remix-run/react";

import menu from "~/components/menu";
import perritos from "~/models/perritos";

export default function Index() {
  return (
    <main className="relative bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="max-w-7xl sm:px-6 lg:px-8">
          <div className="">
            <h1 className="p-5 text-center text-6xl font-extrabold tracking-tight">
              Adopta un Perrito!
            </h1>

            <ul className="flex flex-row">
              {menu.map(({ link, title, icon }) => (
                <li className="flex-1">
                  <Link className="" to={link}>
                    <span className="flex ">{icon}</span>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="p-10 text-xl font-bold shadow-xl">
              Todos los perritos se entregan desparasitados, esterilizados y
              vacunados (con carnet).
            </p>
            <div className="">
              {perritos.map(({ name, age, traits, images, notes }) => (
                <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-3">
                  <div className="col-span-1">
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={`/images/${images[0]}`}
                    />
                  </div>
                  <div className="col-span-2">
                    <h2>
                      Mi nombre es <span className="">{name}</span>.
                    </h2>
                    <p>
                      Tengo <span className="">{age} años</span> de edad.
                    </p>
                    <p>
                      Soy:{" "}
                      {traits
                        .map<React.ReactNode>((trait) => (
                          <span className="">{trait}</span>
                        ))
                        .reduce((prev, curr) => [prev, ", ", curr])}
                    </p>
                    {notes && (
                      <div>
                        <h3>Notas:</h3>
                        <p>{notes}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
