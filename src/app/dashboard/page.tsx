"use client"

import FormData from "@/components/Dashboard Comps/FormData";
import ModalDashCard from "@/components/Dashboard Comps/ModalDashCard";
import Footer from "@/components/Footer";
import ExploreSection from "@/components/Home Comps/ExploreSection";
import Navbar from "@/components/Navbar";
import { ProgramType } from "@/constants/ProgramData.constant";
import { redirect } from 'next/navigation';
import { useState } from "react";


export default function Dashboard() {

    const [programData, setProgramData] = useState<ProgramType | null>(null);
    const [cardAdminOpen, setCardAdminOpen ] = useState<boolean>(false);

 

    const isAdmin = true; 

    if (!isAdmin) {
        redirect('/not-authorized'); 
    }



    return (
        <>
        <Navbar />
        <div className="pointer-events-none fixed inset-0 -z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
            <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
        </div>

        {cardAdminOpen && <ModalDashCard program={programData} onCardClose={() => setCardAdminOpen(false)} />}

        <FormData />
        <ExploreSection onOpen={() => setCardAdminOpen(true)} selectedCard={setProgramData}/>
        <Footer />

        </>
    );
}