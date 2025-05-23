import React, { useState } from "react";
import tabbyImage from "../assets/pandora_payment_tabby.png";
import diabetes from "../assets/hand-holding-blood-glucose-meter-measuring-blood-sugar-background-is-stethoscope-chart-file-2-972x625.jpg";
import digestive from "../assets/Week-1-Digestive-Issues-Among-Children.jpeg";
import liver from "../assets/intro-1666128692.jpg";
import thyroid from "../assets/thyroid-conditions-hero-image.jpg";
import gynec from "../assets/uLtoIrow0J4lRpCrGJ6AO2Qh4eKmNTZz65BKI1Cf.jpg";
import hairfall from "../assets/womans-hand-grabs-missing-hair-brush-isolated-white-background-hair-that-has-fall.webp";
import roaccutane from "../assets/DAILY_BLOG_BANNER_-_IMAGE_vaishnavi_5.webp";
import teethCleaning from "../assets/ascent-dental-care-blog-header-46.jpg";
import xray from "../assets/ccwellu-image-069.avif";
import orthodontics from "../assets/Orthodontic2.jpg";
import rootCanal from "../assets/5ea9be9e1dc3904f703bf1e4_rootcanal.jpg";
import rootCanal2 from "../assets/shutterstock_1530279239-1-1024x682.webp";
import porcelain from "../assets/dental-crowns-after2.jpg";
import porcelain2 from "../assets/root-canal-com.jpg";
import porcelain3 from "../assets/643e25fa0c6754817ec50aba_Root Canals.webp";
import zincron from "../assets/tooth-bridge.jpg";
import zincronRootCanal from "../assets/Dental-Crowns.jpg";
import smile from "../assets/Gummy-smile-before-and-after-2.jpg";
import aroundEye from "../assets/6410154796dd6d82f67127d6_Smooth skin with botox - blue eyes.jpg";
import sweatness from "../assets/botox-units-hyperhidrosis-featured.webp";
import coldPeeling from "../assets/Amelan-Peel-Cost-in-Riyadh-scaled.webp";
import lipAndeyebrow from "../assets/lighten-eyebrows-at-home-1.jpg";
import faceAndeyebrow from "../assets/Woman with finished brow lamination .jpg";
import faceAndeyebrowAndcleansing from "../assets/deep-1024x514.jpg";
import faceAndeyebrowAndcleansingAndcarbonlaser from "../assets/Asset-2-100-2-1024x577.jpg";
import scarcuttingwithplasmaanddermapen from "../assets/dermapen-nedir.jpg";
import fractionalSession from "../assets/big-85050.webp";
import fractionalSessionAndPlasma from "../assets/Laser-Rusurfacing-1000x500-1.webp";
import plasmaHairSession from "../assets/hair-plasma-session-img005.jpg";
import faceAndarmpitAndbikini from "../assets/shutterstock_2198034647-jpg.webp";
import fullBody from "../assets/understanding-laser-hair-removal-on-the-penis-featured.webp";
import fullBodyAndCleansing from "../assets/woman-spending-time-spa-with-face-mask-treatment_23-2149871949.jpg";
import injection from "../assets/microneedling-vs-prp-featured.webp";


const HealthCheckupPage = () => {

  const [selectedCategory, setSelectedCategory] = useState("");

  // Data array for dynamic rendering
  const packagesData = [
    {
      title: "HEALTH PACKAGES",
      category: "HEALTH PACKAGES",
      items: [
        {
          name: "Diabetes Package",
          description:
            "Includes tests for diabetes and related conditions (RBS/FBS, HbA1c, Creatinine, Cholesterol, Triglycerides).",
          price: "SAR 145 + VAT",
          image: diabetes,
        },
        {
          name: "Digestive System Package",
          description:
            "Comprehensive evaluation of digestive health, including tests for liver function, kidney function, and gastrointestinal markers (H.Pylori in Stool, Stool analysis, CBC).",
          price: "SAR 245 + VAT",
          image: digestive,
        },
        {
          name: "Comprehensive Liver Package",
          description:
            "Detailed assessment of liver health, including tests for liver enzymes, and other key indicators (Globulin Test, Total Protein, Albumin, Total Bilirubin, Direct Bilirubin, AST, ALT, ALP).",
          price: "SAR 145 + VAT",
          image: liver,
        },
        {
          name: "Thyroid Package",
          description:
            "Evaluation of thyroid function, including TSH, T3, and T4 tests to diagnose and monitor thyroid disorders (T3, T4, TSH).",
          price: "SAR 155 + VAT",
          image: thyroid,
        },
      ],
    },
    {
      title: "WOMEN'S PACKAGES",
      category: "WOMENS PACKAGES",
      items: [
        {
          name: "Gyne Follow-Up Package",
          description:
            "Comprehensive follow-up care for gynecological health, including tests for hormonal balance, ultrasound, and consultation (CBC, RBS, Urine Analysis, Blood Group).",
          price: "SAR 145 + VAT",
          image: gynec,
        },
        {
          name: "Hair Fall Package",
          description:
            "Specialized evaluation and treatment plan for hair fall, including blood tests for nutrient deficiencies and scalp analysis. (Ferritin, CBC, Vitamin D, Vitamin B12, Zinc)",
          price: "SAR 375 + VAT",
          image: hairfall,
        },
        {
          name: "Roaccutane Package",
          description:
            "Complete care for acne treatment, including liver function tests, lipid profile, and monitoring for Roaccutane therapy (CBC, Createnine, Urea, SGPT, SGOT, Cholesterol, Triglycerides).",
          price: "SAR 225 + VAT",
          image: roaccutane,
        },
      ],
    },
    {
      title: "DENTAL OFFERS",
      category: "DENTAL OFFERS",
      items: [
        {
          name: "Cleaning & Polishing",
          description:
            "Professional teeth cleaning and polishing to remove plaque, tartar, and stains for a brighter smile.",
          price: "SAR 89 + VAT",
          image: teethCleaning,
        },
        {
          name: "Treatment Plan + Panorama Xray, + Cephalometric Xray",
          description:
            "Comprehensive dental treatment plan including panoramic and cephalometric X-rays for accurate diagnosis and planning.",
          price: "SAR 150 + VAT",
          image: xray,
        },
        {
          name: "Orthodontics",
          description:
            "Customized orthodontic treatment to straighten teeth and improve bite alignment using braces or aligners.",
          price: "SAR 3499 + VAT",
          image: orthodontics,
        },
        {
          name: "Root Canal Treatment Anterior",
          description:
            "Root canal treatment for front teeth to remove infected pulp and restore tooth function.",
          price: "SAR 299 + VAT",
          image: rootCanal,
        },
        {
          name: "Root Canal Treatment Posterior",
          description:
            "Root canal treatment for back teeth to address infections and preserve natural teeth.",
          price: "SAR 499 + VAT",
          image: rootCanal2,
        },
        {
          name: "1 unit Porcelain",
          description:
            "Single porcelain crown for a durable and aesthetically pleasing restoration of damaged teeth.",
          price: "SAR 299 + VAT",
          image: porcelain,
        },
        {
          name: "Root Canal Treatment with Porcelain Anterior",
          description:
            "Root canal treatment for front teeth followed by a porcelain crown for enhanced strength and appearance.",
          price: "SAR 549 + VAT",
          image: porcelain2,
        },
        {
          name: "Root Canal Treatment with Porcelain Posterior",
          description:
            "Root canal treatment for back teeth combined with a porcelain crown for long-lasting results.",
          price: "SAR 649 + VAT",
          image: porcelain3,
        },
        {
          name: "1 unit Zircon",
          description:
            "Single zirconia crown for superior durability and a natural-looking tooth replacement.",
          price: "SAR 499 + VAT",
          image: zincron,
        },
        {
          name: "Root Canal Treatment with Zircon Anterior",
          description:
            "Root canal treatment for front teeth followed by a zirconia crown for exceptional strength and aesthetics.",
          price: "SAR 799 + VAT",
          image: zincronRootCanal,
        },
      ],
    },
    {
      title: "DERMATOLOGY & COSMETOLOGY OFFERS",
      category: "DERMATOLOGY & COSMATOLOGY OFFERS",
      items: [
        {
          name: "Botox for gummy smile or nose",
          description:
            "Targeted Botox injections to reduce a gummy smile or reshape the nose for a more balanced facial appearance.",
          price: "SAR 245 + VAT",
          image: smile,
        },
        {
          name: "Botox for face or around the eyes + eyebrow bleaching",
          description:
            "Botox treatment to smooth fine lines and wrinkles on the face or around the eyes, combined with eyebrow bleaching for a refreshed look.",
          price: "SAR 645 + VAT",
          image: aroundEye,
        },
        {
          name: "Botox for sweating",
          description:
            "Medical-grade Botox injections to reduce excessive sweating (hyperhidrosis) in targeted areas for long-lasting results.",
          price: "SAR 1097 + VAT",
          image: sweatness,
        },
        {
          name: "Cold Peeling",
          description:
          "A gentle and non-invasive skin rejuvenation treatment that exfoliates dead skin cells, refines pores, and improves skin texture without irritation. Ideal for sensitive skin types.",
          price: "SAR 395 + VAT",
          image: coldPeeling,
        },
        {
          name: "Lip Lightening or Eyebrow Bleaching",
          description:
          "A safe and effective treatment to lighten lip pigmentation or bleach eyebrows for a natural, refreshed look. Ideal for enhancing facial features and achieving an even skin tone.",
          price: "SAR 72 + VAT",
          image: lipAndeyebrow,
        },
        {
          name: "Face & Eyebrow Bleaching",
          description:
          "A specialized treatment to lighten facial pigmentation and enhance eyebrow color for a more radiant appearance. Perfect for achieving a brighter complexion and well-defined brows.",
          price: "SAR 122 + VAT",
          image: faceAndeyebrow,
        },
        {
          name: "Face & Eyebrow Bleaching + Deep Skin Cleansing",
          description:
          "A comprehensive treatment that combines face and eyebrow bleaching with deep skin cleansing to remove impurities, brighten the complexion, and enhance overall skin health. Ideal for a refreshed and rejuvenated look.",
          price: "SAR 196 + VAT",
          image: faceAndeyebrowAndcleansing,
        },
        {
          name: "Face & Eyebrow Bleaching + Deep Skin Cleansing + Carbon Laser",
          description:
          "A complete skincare package that includes face and eyebrow bleaching, deep skin cleansing, and carbon laser treatment for a thorough cleanse, brightened complexion, and improved skin texture. Perfect for achieving a radiant and youthful appearance.",
          price: "SAR 255 + VAT",
          image: faceAndeyebrowAndcleansingAndcarbonlaser,
        },
        {
          name: "Scar cutting session with classic plasma With dermapen",
          description:
          "A specialized treatment that combines scar cutting with classic plasma therapy using a dermapen for effective scar reduction and skin rejuvenation. Ideal for improving skin texture and minimizing the appearance of scars.",
          price: "SAR 297 + VAT",
          image: scarcuttingwithplasmaanddermapen,
        },
        {
          name: "Fractional session for face",
          description:
          "A fractional laser treatment designed to improve skin texture, reduce wrinkles, and promote collagen production for a more youthful appearance. Ideal for addressing fine lines and uneven skin tone.",
          price: "SAR 199 + VAT",
          image: fractionalSession,
        },
        {
          name: "Fractional session for face + plasma",
          description:
          "A combination treatment that includes fractional laser therapy and plasma application for enhanced skin rejuvenation, improved texture, and reduced signs of aging. Perfect for achieving a smoother and more radiant complexion.",
          price: "SAR 297 + VAT",
          image: fractionalSessionAndPlasma,
        },
        {
          name: "Plasma session for hair + 3 mesotherapy for hair",
          description:
          "A specialized treatment that combines plasma therapy for hair rejuvenation with three mesotherapy sessions to promote hair growth and improve scalp health. Ideal for addressing hair thinning and promoting fuller, healthier hair.",
          price: "SAR 497 + VAT",
          image: plasmaHairSession,
        },
        {
          name: "Face, Armpit or bikini laser session with touch-ups",
          description:
          "A laser hair removal session for the face, armpits, or bikini area, including touch-ups for optimal results. Ideal for achieving smooth and hair-free skin.",
          price: "SAR 99 + VAT",
          image: faceAndarmpitAndbikini,
        },
        {
          name: "Full body laser session with touch-ups and free deep skin cleansing",
          description:
          "A comprehensive laser hair removal session for the entire body, including touch-ups and a complimentary deep skin cleansing treatment. Perfect for achieving smooth skin all over.",
          price: "SAR 199 + VAT",
          image: fullBody,
        },
        {
          name: "5 full body laser session with touch-ups + face & eyebrow bleaching + deep skin cleansing",
          description:
          "A package that includes five full body laser hair removal sessions with touch-ups, along with face and eyebrow bleaching and deep skin cleansing for a complete skincare experience. Ideal for achieving smooth skin and a refreshed appearance.",
          price: "SAR 999 + VAT",
          image: fullBodyAndCleansing,
        },
        {
          name: "Classic plasma injection session for face or hair with Dermapen",
          description:
          "A rejuvenating treatment that combines classic plasma injections for the face or hair with dermapen therapy for enhanced results. Ideal for improving skin texture and promoting hair growth.",
          price: "SAR 150 + VAT",
          image: injection,
        },
      ],
    },
  ];



    // Filter data based on selected category
    const filteredData =
    selectedCategory === ""
      ? packagesData
      : packagesData.filter((section) => section.category === selectedCategory);

      console.log(selectedCategory)
      console.log(filteredData)

  return (
    <div className="flex justify-center mt-6">
      <div className="flex flex-wrap p-3 sm:py-10 sm:px-16 max-w-[1315px] w-full">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Categories
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border border-gray-300 p-2 text-slate-500 rounded text-sm"
            >
              <option value="">All Category</option>
              <option value="DENTAL OFFERS">DENTAL OFFERS</option>
              <option value="DERMATOLOGY & COSMATOLOGY OFFERS">DERMATOLOGY & COSMATOLOGY OFFERS</option>
              <option value="CHILD HEALTH PACKAGES">CHILD HEALTH PACKAGES</option>
              <option value="HEALTH PACKAGES">HEALTH PACKAGES</option>
              <option value="WOMENS PACKAGES">WOMENS PACKAGES</option>
              <option value="VITAMIN PACKAGES">VITAMIN PACKAGES</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="branches"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Branches
            </label>
            <select
              id="branches"
              className="w-full border border-gray-300 text-slate-500 p-2 rounded text-sm"
            >
              <option value="">All Branches</option>
              <option value="">Al-Wazeeriyah</option>
              <option value="">Al-Sanabel</option>
              <option value="">Al-Zahra</option>
            </select>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 px-4">
          {filteredData.map((section, index) => (
            <div key={index} className="mb-12">
              <h1 className="text-2xl font-bold text-center md:text-left mb-4 font-Tahoma opacity-90">
                {section.title}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-36 object-cover"
                    />
                    <div className="p-4 flex flex-col h-[calc(100%-9rem)]">
                      <div>
                        <h2 className="text-lg font-bold text-[#1c648f] mb-2">
                          {item.name}
                        </h2>
                        <p className="text-xs text-gray-600 mb-3">
                          {item.description}
                        </p>
                        <p className="text-red-600 font-bold text-right mb-3 text-sm">
                          {item.price}
                        </p>
                      </div>
                      {/* Bottom Section */}
                      <div className="mt-auto">
                        <hr className="border-t border-gray-200 mb-3" />
                        <div className="flex items-center justify-between">
                          <img
                            src={tabbyImage}
                            alt="Payment Options"
                            className="w-12 h-auto"
                          />
                          <button className="bg-gradient-to-r from-[#1c648f] to-[#02999c] hover:bg-gradient-to-r hover:from-[#02999c] hover:to-[#1c648f] text-white font-medium py-1.5 px-4 rounded-lg text-xs">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthCheckupPage;
