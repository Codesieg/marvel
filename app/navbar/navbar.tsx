import Link from 'next/link';

const Navbar = () => {
    return (
            <nav className="flex justify-between w-4/5 mx-auto my-5 bg-slate-50 rounded-full px-3 py-4 ">
               <span className="ml-5">
                    <Link href="/">Pokédex</Link>
               </span>
                <ul className="flex w-32 px-2">
                    <li className="px-2">
                        <Link href="/">Liste</Link>
                    </li>
                    <li>
                        <Link href="/types">Types</Link>
                    </li>
                </ul>
            </nav>
    );
};


export default Navbar;