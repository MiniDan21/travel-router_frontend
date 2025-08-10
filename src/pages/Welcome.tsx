import { WelcomeHeader } from './components/Header'
import { SubHero } from './components/SubHero'
import BigLogoReveal from './components/BigLogoReveal';
import Footer from './components/Footer';



export default function Welcome() {
    return <>
        <WelcomeHeader />
        <SubHero />
        <BigLogoReveal />
        <Footer />
    </>
}