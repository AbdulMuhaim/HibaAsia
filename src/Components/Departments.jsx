
function Departments() {

    const departments = [
        {
          name: "Pediatric",
          img: "https://www.bluewaterresearch.in/public/Blogs/1686309816.jpeg",
        },
        {
          name: "Radiology",
          img: "https://www.yashodahealthcare.com/blogs/wp-content/uploads/2023/01/radiology-diagnostic-imaging-at-yashoda-hospital.webp",
        },
        {
          name: "Cardiology",
          img: "https://www.nm.org/-/media/northwestern/healthbeat/images/health%20library/nm-ten-signs-cardiologist_preview.jpg",
        },
        {
          name: "Urology",
          img: "https://media.istockphoto.com/id/1339092350/photo/unrecognizable-doctor-caring-highlighted-red-handrawn-bladder-and-kidneys-medical.jpg?s=612x612&w=0&k=20&c=oXJPyi0bBZh5nKbdCppcq0UUTBNIS6m7_XBnEcFuQ6I=",
        },
        {
          name: "Orthopedic",
          img: "https://d3b6u46udi9ohd.cloudfront.net/wp-content/uploads/2022/07/14133118/orthopedic.jpg",
        },
        {
          name: "Dermatology",
          img: "https://www.oasisdermatology.com/wp-content/uploads/2022/12/What-is-Cosmetic-Dermatology-Oasis-Dermatology-1000x658.jpg",
        },
        {
          name: "Dentistry",
          img: "https://mytowncenterdental.com/wp-content/uploads/2023/10/dentist-in-cedar-park-tx-town-center-dental-cedar-park.jpg",
        },
        {
          name: "Ophthalmology",
          img: "https://www.westernlasereye.com/wp-content/uploads/shutterstock_1565916823-1.jpg",
        },
      ];
    

  return (
    <div className="sm:mt-16 border-b-4 py-14 px-3 ">
    <h1 className="text-3xl xl:text-4xl font-bold">Departments</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 pt-8">
      {/* Child div 1 */}
      {departments.map((department, index) => (
        <div key={index}>
          <p className="department-name">{department.name}</p>
          <div className="child-div">
            <img src={department.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  </div>  )
}

export default Departments