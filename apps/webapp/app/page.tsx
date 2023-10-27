"use client"

import Banner from "./components/organisms/Banner";
import Navbar from "./components/organisms/Navbar";
import Methodologies from './components/organisms/Methodologies';

export default async function Index() {

  return (
    <div>
       <Navbar/>
       <Banner/>
       <Methodologies/>
    </div>
  );
}
