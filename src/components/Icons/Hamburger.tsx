import { useMenuContext } from '../../context/MobileMenuContext';

export default function Hamburger() {
    const { setMenuOpened, menuOpened } = useMenuContext();
    return (
        <button
            aria-label="Open mobile navigation menu"
            aria-expanded={menuOpened}
            aria-controls="mobile-nav"
            className="hidden cursor-pointer flex-col justify-center gap-y-1.75 max-md:flex max-sm:gap-y-1.5"
            onClick={() => setMenuOpened(true)}
        >
            <div className="h-[0.15rem] w-7 shrink-0 grow-0 rounded-3xl bg-orange-500 max-sm:h-[0.125rem] max-sm:w-6" />
            <div className="h-[0.15rem] w-7 shrink-0 grow-0 rounded-3xl bg-orange-500 max-sm:h-[0.125rem] max-sm:w-6" />
            <div className="h-[0.15rem] w-7 shrink-0 grow-0 rounded-3xl bg-orange-500 max-sm:h-[0.125rem] max-sm:w-6" />
        </button>
    );
}
