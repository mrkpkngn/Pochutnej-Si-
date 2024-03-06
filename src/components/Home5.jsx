import React, { useState } from 'react';

function Home5() {
    return (
        <div className="flex flex-col items-center py-16 gap-6 lg:gap-10">
        <div className="text-center px-6">
          <h1 className="font-header text-2xl lg:text-4xl pb-6 lg:pb-8">Stůl si u nás můžete rezervovat on-line nebo telefonicky na čísle: <br></br>+420 775 93 22 73.</h1>
          <a href="https://pochutnej-si.choiceqr.com/booking" className='p-3 lg:p-4 bg-white text-s xs:text-xl md:text-2xl rounded-xl text-orange font-header drop-shadow-md hover:bg-yellow hover:text-white'>ONLINE REZERVACE STOLU</a>
        </div>
        <div className='text-center px-6 text-xs lg:text-lg text-white'>
          <p class="font-body">Podle zákona o evidenci tržeb je prodávající povinen vystavit kupujícímu účtenku. Zároveň je povinen zaevidovat přijatou tržbu <br></br>u správce daně online; v případě technického výpadku pak nejpozději do 48 hodin.</p>
        </div>
      </div>
    )
}

export default Home5