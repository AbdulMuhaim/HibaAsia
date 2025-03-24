import React from "react";
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

const HealthCheckupPage = () => {
  // Data array for dynamic rendering
  const packagesData = [
    {
      title: "HEALTH CHECKUP",
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
          image:
          hairfall,
        },
        {
          name: "Roaccutane Package",
          description:
            "Complete care for acne treatment, including liver function tests, lipid profile, and monitoring for Roaccutane therapy (CBC, Createnine, Urea, SGPT, SGOT, Cholesterol, Triglycerides).",
          price: "SAR 225 + VAT",
          image:
            roaccutane,
        },
      ],
    },
    {
      title: "DENTAL OFFERS",
      items: [
        {
          name: "Cleaning & Polishing",
          description:
            "Professional teeth cleaning and polishing to remove plaque, tartar, and stains for a brighter smile.",
          price: "SAR 89 + VAT",
          image:
          teethCleaning,
        },
        {
          name: "Treatment Plan + Panorama Xray, + Cephalometric Xray",
          description:
            "Comprehensive dental treatment plan including panoramic and cephalometric X-rays for accurate diagnosis and planning.",
          price: "SAR 150 + VAT",
          image:
          xray,
        },
        {
          name: "Orthodontics",
          description:
            "Customized orthodontic treatment to straighten teeth and improve bite alignment using braces or aligners.",
          price: "SAR 3499 + VAT",
          image:
          orthodontics,
        },
        {
          name: "Root Canal Treatment Anterior",
          description:
            "Root canal treatment for front teeth to remove infected pulp and restore tooth function.",
          price: "SAR 299 + VAT",
          image:
          rootCanal,
        },
        {
          name: "Root Canal Treatment Posterior",
          description:
            "Root canal treatment for back teeth to address infections and preserve natural teeth.",
          price: "SAR 499 + VAT",
          image:
          rootCanal2,
        },
        {
          name: "1 unit Porcelain",
          description:
            "Single porcelain crown for a durable and aesthetically pleasing restoration of damaged teeth.",
          price: "SAR 299 + VAT",
          image:
          porcelain,
        },
        {
          name: "Root Canal Treatment with Porcelain Anterior",
          description:
            "Root canal treatment for front teeth followed by a porcelain crown for enhanced strength and appearance.",
          price: "SAR 549 + VAT",
          image:
          porcelain2,
        },
        {
          name: "Root Canal Treatment with Porcelain Posterior",
          description:
            "Root canal treatment for back teeth combined with a porcelain crown for long-lasting results.",
          price: "SAR 649 + VAT",
          image:
          porcelain3,
        },
        {
          name: "1 unit Zircon",
          description:
            "Single zirconia crown for superior durability and a natural-looking tooth replacement.",
          price: "SAR 499 + VAT",
          image:
          zincron,
        },
        {
          name: "Root Canal Treatment with Zircon Anterior",
          description:
            "Root canal treatment for front teeth followed by a zirconia crown for exceptional strength and aesthetics.",
          price: "SAR 799 + VAT",
          image:
          zincronRootCanal,
        },
      ],
    },
    {
      title: "DERMATOLOGY & COSMETOLOGY OFFERS",
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
      ],
    },
  ];

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
              className="w-full border border-gray-300 p-2 text-slate-500 rounded text-sm"
            >
              <option value="">All Category</option>
              <option value="">DENTAL OFFERS</option>
              <option value="">DERMATOLOGY & COSMATOLOGY OFFERS</option>
              <option value="">CHILD HEALTH PACKAGES</option>
              <option value="">HEALTH PACKAGES</option>
              <option value="">WOMENS PACKAGES</option>
              <option value="">VITAMIN PACKAGES</option>
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
          {packagesData.map((section, index) => (
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