

import DrAswaq from "../assets/HibaDoctors/01._Dr._Aswaq-removebg-preview.png";
import DrAzza from "../assets/HibaDoctors/02._Dr._Azza-removebg-preview.png";
import DrRamadan from "../assets/HibaDoctors/03._Dr._Ramadan-removebg-preview.png";
import DrHussam from "../assets/HibaDoctors/04._Dr._Hussam-removebg-preview.png";
import DrShahin from "../assets/HibaDoctors/05._Dr._Shahin-removebg-preview.png";
import DrSamad from "../assets/HibaDoctors/06._Dr._Samad-removebg-preview.png";
import DrMajedMouris from "../assets/HibaDoctors/07._Dr._Majed_Mouris-removebg-preview.png";
import DrMohammedAnwar from "../assets/HibaDoctors/08._Dr._Mohammed_Anwar-removebg-preview.png";
import DrSherifHelmy from "../assets/HibaDoctors/09._Dr._Sherif_Helmy-removebg-preview.png";
import DrTaha from "../assets/HibaDoctors/10._Dr._Taha-removebg-preview.png";
import DrHanaOmara from "../assets/HibaDoctors/11._Hana_Omara-removebg-preview.png";
import DrShukoor from "../assets/HibaDoctors/12._Dr._Shukoor-removebg-preview.png";
import DrMurtaza from "../assets/HibaDoctors/13._Dr._Murtaza-removebg-preview.png";
import DrJavedIqbal from "../assets/HibaDoctors/14._Dr._Javed_Iqbal-removebg-preview.png";
import DrBahaIbrahim from "../assets/HibaDoctors/15._Dr._Baha_Ibrahim-removebg-preview.png";
import DrFathimathuZuhra from "../assets/HibaDoctors/16._Dr._Fathimathu_Zuhra-removebg-preview.png";
import DrAminaKhan from "../assets/HibaDoctors/17._Dr._Amina_Khan-removebg-preview.png";
import DrKhaleel from "../assets/HibaDoctors/18._Dr._Khaleel-removebg-preview.png";
import DrIramQadirReshi from "../assets/HibaDoctors/19._Dr._Iram_Qadir_Reshi-removebg-preview.png";
import DrAbdirizak from "../assets/HibaDoctors/20._Dr._Abdirizak-removebg-preview.png";
import DrKatherIbrahim from "../assets/HibaDoctors/21._Dr._Kather_Ibrahim-removebg-preview.png";
import DrAbdullahBayazeed from "../assets/HibaDoctors/22._Dr._Abdullah_Bayazeed-removebg-preview.png";
import DrAbdulAzeezalZahrani from "../assets/HibaDoctors/23._Dr._Abdul_Azeez_al_Zahrani-removebg-preview.png";
import DrShahadBinMahfouz from "../assets/HibaDoctors/24._Dr._Shahad_Bin_Mahfouz-removebg-preview.png";
import DrNoufQasem from "../assets/HibaDoctors/25._Dr._Nouf_Qasem-removebg-preview.png";
import DrJensonJohn from "../assets/HibaDoctors/26._Dr._Jenson_John-removebg-preview.png";
import DrLintuMol from "../assets/HibaDoctors/27._Dr._Lintu_Mol-removebg-preview.png";
import DrMaryamAhmed from "../assets/HibaDoctors/28._Dr._Maryam_Ahmed-removebg-preview.png";
import DrSamahObaid from "../assets/HibaDoctors/29._Dr._Samah_Obaid-removebg-preview.png"
import DrElhamyFawzyMohamedAbed from "../assets/HibaDoctors/30._Dr._Elhamy_Fawzy_Mohamed_Abed-removebg-preview.png";



import DoctorCard from "./DoctorCard";


function DoctorsList() {

    const doctors = [
        {
          name: "Aswaq Ahmed",
          image: DrAswaq,
          department: "Obstetric & Gynecology",
        },
        {
          name: "Azza Hussein Ahmed",
          image: DrAzza,
          department: "Obstetric & Gynecology",
        },
        { name: "Hanaa Hussein Omara", image: DrHanaOmara, department: "Dermatology" },
        {
          name: "Muhammed Anwar",
          image: DrMohammedAnwar,
          department: "Pediatrics",
        },
        {
          name: "Mohamad Sherif Helmy",
          image: DrSherifHelmy,
          department: "Cardiology",
        },
        { name: "Majed Mouris", image: DrMajedMouris, department: "Surgeon" },
        { name: "Samad Moideen", image: DrSamad, department: "Orthopedics" },
        {
          name: "Abdullah Bayazeed",
          image: DrAbdullahBayazeed,
          department: "Orthodontics",
        },
        { name: "Mohammed Ramadan Ahmad", image: DrRamadan, department: "Urology" },
        { name: "Taha Abouelenin", image: DrTaha, department: "Ophthalmology" },
        { name: "Mahmoud Shahin", image: DrShahin, department: "ENT Specialist" },
        { name: "Shukoor", image: DrShukoor, department: "Radiology" },
        { name: "Hussam Alagha", image: DrHussam, department: "Internist" },
        {
          name: "Elhamy Fawzy Mohamed Abed",
          image: DrElhamyFawzyMohamedAbed,
          department: "Dentist",
        },
        {
          name: "Abdul Aziz AlZahrani",
          image: DrAbdulAzeezalZahrani,
          department: "Dentist",
        },
        {
          name: "Shahad Bin Mehfouz",
          image: DrShahadBinMahfouz,
          department: "Dentist",
        },
        { name: "Nouf Qasem Mohammed", image: DrNoufQasem, department: "Dentist" },
        { name: "Jenson John", image: DrJensonJohn, department: "Dentist" },
        { name: "Lintu Mol", image: DrLintuMol, department: "Dentist" },
        { name: "Maryam Ahmed", image: DrMaryamAhmed, department: "Dentist" },
        { name: "Samah Obaid", image: DrSamahObaid, department: "Dentist" },
        {
          name: "Murtaza Bakhsh",
          image: DrMurtaza,
          department: "General Physician",
        },
        {
          name: "Abdirizak",
          image: DrAbdirizak,
          department: "General Physician",
        },
        {
          name: "Javed Iqbal",
          image: DrJavedIqbal,
          department: "General Physician",
        },
        {
          name: "Baha Ibrahim",
          image: DrBahaIbrahim,
          department: "General Physician",
        },
        {
          name: "Fathimathu Zuhra",
          image: DrFathimathuZuhra,
          department: "General Physician",
        },
        {
          name: "Amina Khan Shafi",
          image: DrAminaKhan,
          department: "General Physician",
        },
        { name: "Khaleel", image: DrKhaleel, department: "General Physician" },
        {
          name: "Iram Qadir Reshi",
          image: DrIramQadirReshi,
          department: "General Physician",
        },
        {
          name: "Kather Ibrahim",
          image: DrKatherIbrahim,
          department: "General Physician",
        },

      ];



      return (
        <>
        <div className="min-h-screen p-8 flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {doctors.map((doctor, index) => (
                    <DoctorCard key={index} doctor={doctor} />
                ))}
            </div>
        </div>
        </>
      );
    }

export default DoctorsList