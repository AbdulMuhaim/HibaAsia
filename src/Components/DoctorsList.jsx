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


function DoctorsList() {

    const doctors = [
        {
          name: "Aswaq Ahmed",
          image: DrAswaq,
          department: "Obstetrics & Gynecology",
        },
        {
          name: "Azza Hussein Ahmed",
          image: DrAzza,
          department: "Obstetrics & Gynecology",
        },
        {
          name: "Mohamad Sherif Helmy",
          image: DrSherifHelmy,
          department: "Cardiologist",
        },
        {
          name: "Muhammed Anwar",
          image: DrMohammedAnwar,
          department: "Pediatrician",
        },
        { name: "Majed Mouris", image: DrMajedMouris, department: "Surgeon" },
        { name: "Samad Moideen", image: DrSamad, department: "Orthopedics" },
        {
          name: "Abdullah Bayazeed",
          image: DrAbdullahBayazeed,
          department: "Orthodontist",
        },
        { name: "Mohammed Ramadan Ahmad", image: DrRamadan, department: "Urology" },
        { name: "Taha Abouelenin", image: DrTaha, department: "Ophthalmology" },
        { name: "Mahmoud Shahin", image: DrShahin, department: "ENT Specialist" },
        { name: "Rasha Mohamed", image: DrRashaMohamed, department: "Dermatology" },
        { name: "Shukoor", image: DrShukoor, department: "Radiologist" },
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



      const doctorsByDepartment = {
        "Obstetrics & Gynecology": [
          { name: "Aswaq Ahmed", image: DrAswaq },
          { name: "Azza Hussein Ahmed", image: DrAzza },
        ],
        Cardiologist: [
          { name: "Mohamad Sherif Helmy", image: DrSherifHelmy },
        ],
        Pediatrician: [
          { name: "Muhammed Anwar", image: DrMohammedAnwar },
        ],
        Surgeon: [
          { name: "Majed Mouris", image: DrMajedMouris },
        ],
        Orthopedics: [
          { name: "Samad Moideen", image: DrSamad },
        ],
        Orthodontist: [
          { name: "Abdullah Bayazeed", image: DrAbdullahBayazeed },
        ],
        Urology: [
          { name: "Mohammed Ramadan Ahmad", image: DrRamadan },
        ],
        Ophthalmology: [
          { name: "Taha Abouelenin", image: DrTaha },
        ],
        "ENT Specialist": [
          { name: "Mahmoud Shahin", image: DrShahin },
        ],
        Dermatology: [
          { name: "Rasha Mohamed", image: DrRashaMohamed },
        ],
        Radiologist: [
          { name: "Shukoor", image: DrShukoor },
        ],
        Internist: [
          { name: "Hussam Alagha", image: DrHussam },
        ],
        "General Physician": [
          { name: "Murtaza Bakhsh", image: DrMurtaza },
          { name: "Abdirizak", image: DrAbdirizak },
          { name: "Javed Iqbal", image: DrJavedIqbal },
          { name: "Baha Ibrahim", image: DrBahaIbrahim },
          { name: "Fathimathu Zuhra", image: DrFathimathuZuhra },
          { name: "Amina Khan Shafi", image: DrAminaKhan },
          { name: "Khaleel", image: DrKhaleel },
          { name: "Iram Qadir Reshi", image: DrIramQadirReshi },
          { name: "Kather Ibrahim", image: DrKatherIbrahim },
        ],
        Dentist: [
          { name: "Abdul Aziz AlZahrani", image: DrAbdulAzeezalZahrani },
          { name: "Shahad Bin Mehfouz", image: DrShahadBinMahfouz },
          { name: "Nouf Qasem Mohammed", image: DrNoufQasem },
          { name: "Jenson John", image: DrJensonJohn },
          { name: "Lintu Mol", image: DrLintuMol },
          { name: "Maryam Ahmed", image: DrMaryamAhmed },
        ]
      }

      return (
        <>
          {/* {Object.entries(doctorsByDepartment).map(([department, doctors], index) => ( */}
            <div className="mt-3 py-14 px-10">
              {/* <p className="uppercase font-bold opacity-70 text-2xl">{department}</p> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-8">
                {doctors.map((doctor) => (
                  <div
                    key={doctor.name}
                    className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform hover:bg-sky-50 duration-1000"
                  >
                    <img
                      src={doctor.image}
                      alt=""
                      className="object-cover max-w-[7rem] rounded-full mx-auto"
                    />
                    <h2 className="text-xl font-semibold mt-2 text-center">
                      Dr. {doctor.name}
                    </h2>
                    <div className="flex items-center justify-center">
                      <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7">
                        + Connect
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          {/* ))} */}
        </>
      );
    };

export default DoctorsList