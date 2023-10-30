'use client';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Banner from './components/organisms/Banner';
import Navbar from './components/organisms/Navbar';
import Methodologies from './components/organisms/Methodologies';
import Stories from './components/organisms/Stories';
import ProfileOfOurExperts from './components/organisms/ProfileOfOurExperts';
import { JSX } from "react";
export default async function Index(): Promise<JSX.Element> {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Banner />
      <Methodologies />
      <Stories />
      <ProfileOfOurExperts />
      <Banner />
    </div>
  );
}
