import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function Home() {
    return (
        <>
            <Header />
            <About />
            <Skills />
            <Work />
            <Contact />
        </>
    )
}