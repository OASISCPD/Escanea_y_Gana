import { useMediaQuery } from 'react-responsive';
import { HomeMobile } from '../components/mobile/HomeMobile';
import { HomeTablet } from '../components/mobile/HomeTablet';
import { HomeDesktop } from '../components/desktop/HomeDesktop';

export function PageHome() {
    const isMobile = useMediaQuery({ query: '(max-width: 639px)' }); // hasta sm
    const isTablet = useMediaQuery({ query: '(min-width: 640px) and (max-width: 1023px)' }); // desde sm hasta md
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' }); // desde md en adelante

    return (
        <>
            {isMobile && <HomeMobile />}
            {isTablet && <HomeTablet />}
            {isDesktop && <HomeDesktop />}
        </>
    );
}
