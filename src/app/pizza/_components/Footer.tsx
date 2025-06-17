import Link from "next/link";

export default function Footer() {
    
    const footerClass = "flex flex-col fixed bottom-[0] justify-between items-center w-full bg-black border-gray-500 border-t";
    const linkClass = "hover:text-zinc-200 no-underline underline underline-offset-[2.5px]";

    return (
        <div id="Footer" className={footerClass}>
            <div className="flex flex-row w-[90%] justify-between text-[0.8rem] text-zinc-500 p-[4px]">
                <p>Pizzalicious - <Link href="https://github.com/smexykatarina" rel="noopener noreferrer" target="_blank" className={linkClass}>Titus Mercier-Hachey</Link></p>
                <Link href="https://github.com/smexykatarina/template-websites/" rel="noopener noreferrer" target="_blank" className={linkClass}>See the code here</Link>
            </div>
        </div>
    );
}