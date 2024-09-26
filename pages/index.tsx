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
import {animated} from "react-spring"
import { useAnimatedStyles } from "@/hooks/useAnimated";
import AnimatedSection from "@/Components/AnimatedSection/AnimatedSection";

export default function Home() {


  return (
<>
    <Head>
<title>Nermin Memmedova</title>
<meta></meta>

    </Head>
   <main className="px-6">
    <div id="header">
  <Header/>
  </div>


<AnimatedSection>
<About/>
</AnimatedSection>

<AnimatedSection>
<Experience/>

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

<Contact/>
<div className=" w-16 h-16 border border-purplemain  fixed  bottom-0 z-20 right-10 cursor-pointer rounded-full flex items-center justify-center shadow-shadowCustom">
<a href="#header"><FaArrowUp className=" text-4xl text-purplemain" />


</a>

</div>
  
  
    </main>
   <Footer/>

  </>
  );
}
