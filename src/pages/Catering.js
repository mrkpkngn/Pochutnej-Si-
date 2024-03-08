import React from 'react'
import Navbar from '../components/CateringNavbar'
import FrostEffect from '../components/FrostEffectSecond'
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../components/Footer';

function Catering() {
    AOS.init();
  return (
    <div>
        <Navbar />
        <FrostEffect />
        <div className="flex flex-col md:py-20 px-6 md:px-32 items-center">
            <h1 className="font-header text-white text-4xl md:text-7xl text-center pt-24">Nabídka cateringu</h1>
            <h2 className="font-body text-white text-2xl py-6 text-center font-bold md:text-4xl">Ze všech lásek nejupřímnější je láska k jídlu. <br></br>(G. B. Shaw)</h2>
            <p className="font-body text-white md:text-2xl text-center">Plánujete svatbu, rodinnou oslavu nebo firemní večírek? Starosti o jídlo a pití nechte na nás - vy si svůj den užijte naplno! S výběrem pochoutek vám rádi pomůžeme: umíme připravit tradiční pokrmy, ale také nás moc baví moderní a zahraniční kuchyně. S cateringem máme bohaté zkušenosti, každý připravujeme přesně na míru podle přání zákazníka. Jídla připravujeme buď v naší restauraci nebo - a to je naše specialita - vaříme přímo u vás doma, ve firmě nebo v místě konání svatby. V takovém případě můžete koukat kuchařům pod ruce a vychutnat si opravdu čerstvé dobroty přímo z grilu. Hostům nabídneme také čepované či chlazené nápoje. Jídlo nás prostě baví a uděláme všechno pro to, aby vaše akce byla pro vás i vaše hosty příjemným gastronomickým zážitkem.</p>
            <div className='flex flex-col py-8 gap-8'>
                <h2 className="font-body text-white text-2xl lg:pt-14 text-center font-bold md:text-4xl">Minimální hodnota objednávky je 4000,- Kč.<br></br>Při zapůjčení našeho inventáře si účtujeme vratnou zálohu.</h2>
                <div className="grid gap-6 xl:grid-cols-4 xl:grid-rows-3">
                    <div id="anchor" className="flex xl:text-3xl md:text-2xl bg-black text-white font-body rounded-2xl text-center justify-center items-center xl:col-span-3 p-6" data-aos="fade-up" data-aos-duration="1000">Mini burger s trhaným masem (75 g) … 126,-<br></br>Mini hot dog s párkem z Řeznictví U bobra (25 g) … 96,- <br></br>Mini tortilla s trhaným vepřovým masem (75 g) … 102,- <br></br>Mini tortilla s kuřecími stripsy (75 g) … 102,-<br></br>Taco s trhaným vepřovým masem (50 g) … 60,-</div>
                    <div className="flex xl:text-2xl md:text-2xl bg-black text-white font-body rounded-2xl text-center justify-center items-center p-6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="250" data-aos-anchor="#anchor">Hovězí tatarák 200 g s topinkami (12 ks)<br></br>600,-<br></br><br></br>Lososový tataráček 200 g s opečenými toasty (12 půlek) <br></br>780,-</div>
                    <div className="flex xl:text-xl md:text-2xl bg-black text-white font-body rounded-2xl text-center justify-center items-center p-6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" data-aos-anchor="#anchor">Lehký bramborový salát 500 g ... 220,-<br></br>Salát coleslaw 500 g ... 220,-<br></br>Zeleninový salát s mangem 500 g ... 230,-<br></br>Asijský salátek 500 g ... 175,-<br></br>Ovocný salát 500 g ... 600,-</div>
                    <div className="flex xl:text-2xl md:text-2xl bg-black text-white font-body rounded-2xl text-center justify-center items-center p-6 xl:col-span-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="750" data-aos-anchor="#anchor">Lehký bramborový salát 500 g ... 220,-<br></br>Kuřecí PadThai 500 g … 325,-<br></br>Dlouze pečený Hoisin bůček 500 g … 325,-<br></br>Losos po asijsku 200 g … 390,-<br></br>Restované nudle se zeleninou a asijskou omáčkou 500 g … 300,-<br></br>Jarní závitky 3 kusy … 90,-<br></br>Krevetky v bramborovém hnízdě 3 kusy … 90,-<br></br>Krevetky v tempuře 3kusy … 90,-<br></br>Sushi set (4 ks sushi rolky rozkrájené na špalíčky) … 840,-<br></br>Řasa wakame 100 g … 70,-<br></br>Nakládaný zázvor 100 g … 45,-</div>
                    <div className="flex xl:text-3xl md:text-2xl bg-black text-white font-body rounded-2xl text-center justify-center items-center p-6 xl:col-span-2" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" data-aos-anchor="#anchor">Jelítka (10 kusů) 500 g … 220,-<br></br>Jitrnice (10 kusů) 500 g … 220,-<br></br>Pečená kachna celá 1 kg … 360,- Kč (váha celé kachny cca 2,5 kg)<br></br>Zelí 500 g … 120,-<br></br>Hovězí guláš pro 10 osob … 2160,- (v ceně guláše není příloha – lze domluvit dle přání za příplatek)</div>
                    <div className="flex xl:text-2xl md:text-2xl bg-black text-white font-body rounded-2xl text-center justify-center items-center p-6 xl:col-span-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1250" data-aos-anchor="#anchor">Kuřecí řízečky v kukuřičné strouhance 500 g … 385,-<br></br>Vepřové řízečky z panenky 500 g … 445,-<br></br>Vepřové řízečky z krkovičky 500 g … 300,-<br></br>Smažené kuřecí špalíčky 1 kg … 290,-<br></br>BBQ vepřová žebírka 500 g … 660,-<br></br>Masové vepřové koule s parmazánem 500 g … 300,-<br></br>Smažené cibulové kroužky 500 g … 180,-</div>
                </div>
                <div className="flex flex-col gap-8 py-8">
                    <h2 className="font-body text-white text-2xl lg:pt-14 text-center font-bold md:text-4xl">Individuální kalkulace na obědy – z oblíbených jídel vybíráme např.:</h2>
                    <div className='grid xl:grid-cols-3 gap-6'>
                    <div className="flex xl:text-2xl md:text-2xl bg-black text-white font-body rounded-2xl text-center justify-center items-center p-6 xl:col-span-2" data-aos="fade-up" data-aos-duration="1000">Cordon bleu s bramborovou kaší<br></br><br></br>Španělský ptáček z krkovičky plněný chorizem s basmati rýž<br></br><br></br>Lasagne bolognes<br></br><br></br>Grilovaná krkovička</div>
                    <div className="flex xl:text-2xl md:text-2xl bg-black text-white font-body rounded-2xl text-center justify-center items-center p-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">Hovězí vývar s masem, zeleninou a nudlemi<br></br><br></br>Hráškový krém s mátou</div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Catering