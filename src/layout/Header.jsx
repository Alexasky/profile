import { Logo } from '../components/Logo/Logo';
import { Menu } from '../components/Navigation/Menu/Menu';

function Header() {
    return (
        <header>
            <Logo />
            <Menu />
        </header>
    );
}

export { Header };
