import DrAswaq from "../assets/HibaDoctors/01. Dr. Aswaq.jpg";
import DrAzza from "../assets/HibaDoctors/02. Dr. Azza.jpg";
import DrRamadan from "../assets/HibaDoctors/03. Dr. Ramadan.jpg";
import DrHussam from "../assets/HibaDoctors/04. Dr. Hussam.jpg";
import DrShahin from "../assets/HibaDoctors/05. Dr. Shahin.jpg";
import DrSamad from "../assets/HibaDoctors/06. Dr. Samad.jpg";
import DrMajedMouris from "../assets/HibaDoctors/07. Dr. Majed Mouris.jpg";
import DrMohammedAnwar from "../assets/HibaDoctors/08. Dr. Mohammed Anwar.jpg";
import DrSherifHelmy from "../assets/HibaDoctors/09. Dr. Sherif Helmy.jpg";
import DrTaha from "../assets/HibaDoctors/10. Dr. Taha.jpg";
import DrRashaMohamed from "../assets/HibaDoctors/11. Dr. Rasha Mohamed.jpg";
import DrShukoor from "../assets/HibaDoctors/12. Dr. Shukoor.jpg";
import DrMurtaza from "../assets/HibaDoctors/13. Dr. Murtaza.jpg";
import DrJavedIqbal from "../assets/HibaDoctors/14. Dr. Javed Iqbal.jpg";
import DrBahaIbrahim from "../assets/HibaDoctors/15. Dr. Baha Ibrahim.jpg";
import DrFathimathuZuhra from "../assets/HibaDoctors/16. Dr. Fathimathu Zuhra.jpg";
import DrAminaKhan from "../assets/HibaDoctors/17. Dr. Amina Khan.jpg";
import DrKhaleel from "../assets/HibaDoctors/18. Dr. Khaleel.jpg";
import DrIramQadirReshi from "../assets/HibaDoctors/19. Dr. Iram Qadir Reshi.jpg";
import DrAbdirizak from "../assets/HibaDoctors/20. Dr. Abdirizak.jpg";
import DrKatherIbrahim from "../assets/HibaDoctors/21. dr. Kather Ibrahim.jpg";
import DrAbdullahBayazeed from "../assets/HibaDoctors/22. Dr. Abdullah Bayazeed.jpg";
import DrAbdulAzeezalZahrani from "../assets/HibaDoctors/23. Dr. Abdul Azeez al Zahrani.jpg";
import DrShahadBinMahfouz from "../assets/HibaDoctors/24. Dr. Shahad Bin Mahfouz.jpg";
import DrNoufQasem from "../assets/HibaDoctors/25. Dr. Nouf Qasem.jpg";
import DrJensonJohn from "../assets/HibaDoctors/26. Dr. Jenson John.jpg";
import DrLintuMol from "../assets/HibaDoctors/27. Dr. Lintu Mol.jpg";
import DrMaryamAhmed from "../assets/HibaDoctors/28. Dr. Maryam Ahmed.jpg";
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
        {
          name: "Mohamad Sherif Helmy",
          image: DrSherifHelmy,
          department: "Cardiology",
        },
        {
          name: "Muhammed Anwar",
          image: DrMohammedAnwar,
          department: "Pediatrics",
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
        { name: "Hana Aimora", image: DrRashaMohamed, department: "Dermatology" },
        { name: "Shukoor", image: DrShukoor, department: "Radiology" },
        { name: "Hussam Alagha", image: DrHussam, department: "Internist" },
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
      ];



      return (
        <>
        <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
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