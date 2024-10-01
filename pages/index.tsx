import Head from "next/head";
// import { Head, Main } from "next/document";
import About from "@/Components/About";
import Experience from "@/Components/Experience";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { FaArrowUp } from "react-icons/fa";
import Certificates from "@/Components/Certificates";
import AnimatedSection from "@/Components/AnimatedSection/AnimatedSection";
 import "../utils/i18n"
export default function Home() {


  return (
<>
    <Head>
<title>Nermin Memmedova</title>
<meta name="description" content="NarminMammadova's portfolio"/>
<meta property="og:title"content="Nermin Memmedova" />
<meta property="og:type" content="website"/>
    </Head>
   <main className="px-6">
    <div id="header">
  <Header/>
  </div>


<AnimatedSection>
<About/>
</AnimatedSection>



<AnimatedSection>
<Projects/>

</AnimatedSection>

<AnimatedSection >

<Skills/>

</AnimatedSection>
<AnimatedSection>

<Certificates/>

</AnimatedSection>

<AnimatedSection>
<Experience/>

</AnimatedSection>


<Contact/>
<button className=" w-16 h-16 border border-purplemain  fixed  bottom-0 z-20 right-10 cursor-pointer rounded-full flex items-center justify-center shadow-shadowCustom">
<a href="#header"><FaArrowUp className=" text-4xl text-purplemain" />


</a>

</button>
  
  
    </main>
   <Footer/>

  </>
  );
}
