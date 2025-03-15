import React from 'react';

const HealthCheckupPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 px-4 mb-8">
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-bold mb-2">All Category</label>
            <select id="category" className="w-full border border-gray-300 p-2 rounded">
              <option value="">All Category</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="region" className="block text-gray-700 font-bold mb-2">All Region</label>
            <select id="region" className="w-full border border-gray-300 p-2 rounded">
              <option value="">All Region</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="branches" className="block text-gray-700 font-bold mb-2">All Branches</label>
            <select id="branches" className="w-full border border-gray-300 p-2 rounded">
              <option value="">All Branches</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="departments" className="block text-gray-700 font-bold mb-2">All Departments</label>
            <select id="departments" className="w-full border border-gray-300 p-2 rounded">
              <option value="">All Departments</option>
            </select>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 px-4">
          <h1 className="text-2xl font-bold mb-4 ">HEALTH CHECKUP</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Bronze Package */}
            <div className="bg-white shadow-md rounded overflow-hidden">
              <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/doctor-doing-a-medical-exam-1296x728-header.jpg?w=1155&h=1528" alt="Bronze Package" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Health Checkup - Bronze</h2>
                <p className="text-gray-700 mb-4">
                  The Health Checkup Bronze Package is a comprehensive health assessment that includes a range of essential tests. It covers...
                </p>
                <p className="text-red-600 font-bold text-right mb-4">SAR 199</p>
                <div className="flex justify-between items-center">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Pay with tabby
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Silver Package */}
            <div className="bg-white shadow-md rounded overflow-hidden">
              <img src="https://www.swaconhospital.com/wp-content/uploads/2019/09/34-5-reasons-why-you-need-a-regular-checkup-feat-1080x600.jpg" alt="Silver Package" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Health Checkup - Silver</h2>
                <p className="text-gray-700 mb-4">
                  The Health Checkup Silver Package includes a comprehensive set of medical tests and evaluations to assess your overall health.
                </p>
                <p className="text-red-600 font-bold text-right mb-4">SAR 399</p>
                <div className="flex justify-between items-center">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Pay with tabby
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Gold Package */}
            <div className="bg-white shadow-md rounded overflow-hidden">
              <img src="https://medlineplus.gov/images/WomensHealthCheckup_Share.jpg" alt="Gold Package" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Health Checkup - Gold</h2>
                <p className="text-gray-700 mb-4">
                  The Health Checkup Gold Package is a comprehensive set of medical tests aimed at assessing various aspects of your health. It...
                </p>
                <p className="text-red-600 font-bold text-right mb-4">SAR 999</p>
                <div className="flex justify-between items-center">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Pay with tabby
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCheckupPage;