import React, { useEffect, useState } from 'react';
import lukas from '../assets/img/lukas.png'
import casopis from '../assets/img/casopis.png'
import AOS from "aos";
import "aos/dist/aos.css";


function Home4() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
      <div className="flex flex-col items-center">
        <div className="pt-16 px-6 md:px-40 text-center">
          <h1 className="font-header text-4xl md:text-7xl">Napsali o nás</h1>
          <div className="flex flex-col align-center items-center gap-6 py-6 xl:py-16 xl:flex-row">
            <div className="xl:px-24">
            <span className="font-body font-extrabold xl:text-4xl">Gastromapa Lukáše Hejlíka (2. 1. 2019)</span>
            <p className=" text-left md:text-2xl"><br></br>Třinec, Pochutnej si Bistro (2.1.19) - byli jsme se v listopadu podívat v Třinci do nového bistra, za kterým stojí Tomáš Nový aka chilliman, který tu už na jiné adrese měl obchod a eshop s deli. A musíme sebekriticky říct, že to úplně předčilo naše očekávání. Jak interiér, který naprosto oživil budovu třineckého architektonického brutalismu (ne, nerozumíme tomu, jen se snažíme říct, že je to tam brutální), tak především nabídka.<br></br><br></br> Se svým kuchařem Davidem Kušteinem, ale zdálo se že celý tým začíná být sehraný, si to teda dávaj. Ten Reuben sandwich byl naproto úžasný! Měli jsme ho asi na šesti místech v Česku, tady nás vysloveně usadil! S delikátním pastrami od Řeznictví & uzenářství U Bobra, řádná dávka čedaru, která skvěle kontrastovala se zelím.<br></br><br></br> Ale nekončí to. Měli jsme i hot dog - takový, že by se na Long Islandu styděli. Nebo ten báječný roastbeef ve focaccie s wakame! Nádherný fusion v ruce. Určitě se dají dát další amérský pecky jako BBQ ribs anebo ve všech patrech propracovaný burger z citlivě namletého a připraveného masa. Slyšeli jsme (ale nebyli jsme v další burgrárně, ale rádi zajdem), že se tu zatím řeší, proč v Třinci dělají burgery i za polovinu. Nemůžeme soudit jak tam, ale ale tady jsou super suroviny, vyváženost, porce opulentní, plating skvělý.<br></br><br></br>O víkendu se prý vaří dál, než za americký streetfood. Jako Ramen v Třinci - omg! Navíc za 75,-!!! Píšeme Albertovi, že dáváme velkou vlajku na Mapu. Zatím to tam bylo krušné, ale dost věříme, že tohle probudí hlad, tedy i hlad po kvalitě. Hlad po tom zaplatit adekvátní peníze za pěkný jídlo. Snad to neselže lidsky, protože kuchařsky je to super! Ještě že tak často v Třinci hrajem, protože sem se budeme rádi vracet!<br></br><br></br>Na čepu IPA od milované krnovské Nachmelená opice (ale taky Pivovar Ogar a tohle se asi bude střídat). Kluci z Coffee Culture sem dávají výběrovku, a k tomu pořád ten obchod s delikatesami. My si odnesli medovou hořčici a BBQ omáčku. Takže hurá, dávejte vědět vaše dojmy, těšíme se na to moc. Pochutnali jste si?</p>
            </div>
            <img src={lukas} className="h-72 md:h-[30rem]"></img>
          </div>
        </div>
        <div className="flex flex-col items-center">
        <div className="pb-16 text-center">
          <span className="font-body font-extrabold md:text-4xl pb-3 md:pb-6 text-center">Časopis F.O.O.D. (vydání Leden 2019)</span>
          <img src={casopis}></img>
        </div>
        </div>
        <div className='xl:px-32 md:px-24 px-6 flex flex-col items-center bg-facebookbg w-full py-16 bg-fixed gap-6'>
          <span className="font-body font-extrabold text-center md:text-4xl p-3 lg:p-6 text-white bg-black/60 rounded-3xl">Napsali jste nám na Facebooku</span>
        <div className="grid lg:grid-cols-3 grid-rows-3 gap-4 xl">
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-black/60 backdrop-blur-lg text-white p-6 rounded-3xl md:text-md lg:text-sm xl:text-xl xl:px-10 flex items-center text-center font-body row-span-3">"Prijemna, rychla, usmevava a efektivni obsluha, otevrena kuchyn - beru jako velky bonus, kuchar vam pripravi super kulinarsky zazitek, chute sou propojene, kvalita produktu je znat a naservirovani u drazsich jidel je konecne na urovni =))). Menu neni vubec rozsahle - coz mi muze pripadat jako skoda, ale vybrala jsem si i tak (vege moznosti beru jako 10000% +) - kuchar je v kuchyni sam, tak je super na to brat ohled - nam to vubec nevadilo, zprijemnili sme si to proseccem =D Bistro je prijemne, teple, byla jsem poprve a urcite ne naposled. Vrele doporucuju !!!"<br></br><br></br>Hildegarda</div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="bg-black/60 backdrop-blur-lg text-white p-6 rounded-3xl md:text-md lg:text-sm xl:text-xl xl:px-10 flex items-center text-center font-body row-span-2">"A tak jsme si k Vám dneska zavítali jako správní kavárenští povaleči a gastro-objevovatelé jsme byli nadšení! Kafe boží, nejlepší, poklona coffeeculture. Třinec konečně trochu ožívá, snad se i třinecký lid naučí pít dobré kafe a dát nějakou tu kačku navíc milému personálu, což je vždycky přidaná hodnota žejo. No jste skvělí, fandíme Vám a těšíme se až zase jen půjdem kolem."<br></br><br></br>Marie</div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="bg-black/60 backdrop-blur-lg text-white p-6 rounded-3xl md:text-md lg:text-sm xl:text-xl xl:px-10 flex items-center text-center font-body">"V Třinci vyjímečné místo, s fajn atmosférou a naprosto skvělým jídlem. Milá, a moc vstřícná obsluha. Prostě super. Všechno co jsme ochutnali bylo vynikající."<br></br><br></br>Eva</div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="bg-black/60 backdrop-blur-lg text-white p-6 rounded-3xl md:text-md lg:text-sm xl:text-xl xl:px-10 flex items-center text-center font-body row-span-2">"Navštívil jsem bistro dnes večer a naprostá spokojenost. Dal jsem si hot dog s hranolky a můžu jen říct, že jsem lepší hot dog ještě nejedl, a to jsem jedl hot dog už v USA i v Kanadě a nakonec ten nejlepší byl stejně u nás v Pochutnej si Bistro. Mimochodem hranolky byly taky skvělé, nebyly vůbec mastné. Těším se na další návštěvu a personálu přeji ať se jim daří a byznys jen kvete."<br></br><br></br>Zdeněk</div>
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-black/60 backdrop-blur-lg text-white p-6 rounded-3xl md:text-md lg:text-sm xl:text-xl xl:px-10 flex items-center text-center font-body">"Dnes jsem s rodinou a přáteli navštívila vaše bistro a byli jsme všichni moc spokojeni. Jak s obsluhou, tak i s jídlem. Interiér je super, celý koncept se mi moc líbí. Držím vám palce, vydržte. Děkujeme, určitě se zas vrátíme."<br></br><br></br>Veronika</div>
      </div>
      </div>
      </div>
    )
}

export default Home4