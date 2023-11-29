'use client';
import { JSX } from "react";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Banner from './components/organisms/Banner';
import MainNavbar from './components/organisms/MainNavbar';
import Methodologies from './components/organisms/Methodologies';
import Stories from './components/organisms/Stories';
import ProfileOfOurExperts from './components/organisms/ProfileOfOurExperts';
import Flow from './components/organisms/Flow';
import Footer from "./components/organisms/Footer";
import IndustryOrBuild from "./components/organisms/IndustryOrBuild";
import CatalogIndustry from "./components/organisms/CatalogIndustry";
import CatalogBuild from "./components/organisms/CatalogBuild";
import Glue from "./components/molecules/Glue";
import Helper from './components/molecules/Helper';
export default async function Index(): Promise<JSX.Element> {
  return (
    <div className="overflow-hidden">
      <MainNavbar data-testid="MainNavbar"/>
      <Banner />
      <Methodologies />
      <IndustryOrBuild/>
      <CatalogIndustry/>
      <CatalogBuild/>
      <Stories />
      <Flow/>
      <ProfileOfOurExperts />
      <Helper/>
      <Footer/>
      <Glue/>
    </div>
  );
}
