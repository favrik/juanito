import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

const linkClass = 'shadow-inner text-center py-4 block shadow-cyan-500/50 rounded-xl';
const traitClass = '';

const menu = [
  { link: '/', title: 'Adopta!' },
  { link: '/historia', title: 'Historia' },
  { link: '/porque', title: 'Porque' },
  { link: '/contacto', title: 'Contacto' },
];

const perritos = [
  { name: 'Cony', age: 2, traits: ['sociable con su manada', 'un poco desconfiada', 'juguetona con su manada'], notes: 'Le gusta mordisquear las cosas' },
  { name: 'Prietita', age: 2, traits: ['amigable', 'sociable con su manada', 'juguetona con su manada'], notes: 'Nació sin un ojo' },
];

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

            <ul className="flex flex-row">
              {menu.map(({ link, title }) =>
                <li className="flex-1"><Link className={linkClass} to={link}>{title}</Link></li>)}
            </ul>

            <div className="">
              {perritos.map(({ name, age, traits, notes }) =>
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-1"><img src="" /></div>
                  <div className="col-span 2">
                    <h2>Mi Nombre es <span className="">{name}</span></h2>
                    <p>Edad: <span className="">{age} años</span></p>
                    <p>{traits.map((trait) => <span className={traitClass}>{trait}</span>)}</p>
                    {notes && (<div>
                    <h3>Notas:</h3>
                    <p>{notes}</p></div>)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
