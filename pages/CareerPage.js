// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const CareerPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     age: "",
//     gender: "",
//     about: "",
//     email: "",
//     phone: "",
//     position: "",
//     resume: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files[0],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { fullName, age, gender, about, email, phone, position, resume } = formData;

//     // Create a FormData object for the file
//     const form = new FormData();
//     form.append("resume", resume);

//     // Send form data via EmailJS
//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID", // Replace with your service ID
//         "YOUR_TEMPLATE_ID", // Replace with your template ID
//         e.target, // Target the form data
//         "YOUR_USER_ID" // Replace with your user ID
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully:", result.text);
//           alert("Application submitted successfully!");
//         },
//         (error) => {
//           console.log("Error sending email:", error.text);
//           alert("Error sending application. Please try again.");
//         }
//       );

//     // Optionally reset the form data after submission
//     setFormData({
//       fullName: "",
//       age: "",
//       gender: "",
//       about: "",
//       email: "",
//       phone: "",
//       position: "",
//       resume: null,
//     });
//   };

//   return (
//     <section className="bg-white text-blue-900 py-16 px-6 md:px-20">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl sm:text-5xl font-semibold mb-8">
//           Join Our Creative Team
//         </h2>
//         <p className="text-lg sm:text-xl mb-8">
//           We’re always on the lookout for passionate and talented individuals in the film and media industry. Whether you're in front of the camera or behind it, if you’ve got the drive — we want to hear from you!
//         </p>
//         <hr className="mb-8" />

//         <h3 className="text-2xl font-semibold mb-4">📋 Apply Now</h3>
//         <p className="mb-8">
//           Fill out the form below to apply for a role with us. We’ll get in touch with suitable candidates shortly.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Basic Information Section */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">👤 Basic Information</h4>
//             <div className="flex flex-col sm:flex-row sm:space-x-4">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
//                 required
//               />
//               <input
//                 type="number"
//                 name="age"
//                 placeholder="Age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <div className="flex flex-col sm:flex-row sm:space-x-4">
//               <label className="text-lg font-semibold">Gender:</label>
//               <div className="flex space-x-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Male"
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Male
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Female"
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Female
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Other"
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Other
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Prefer not to say"
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Prefer not to say
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* About You Section */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">🧾 About You</h4>
//             <textarea
//               name="about"
//               placeholder="Tell us about yourself: (short bio, experience, goals, etc.)"
//               value={formData.about}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-md"
//               rows="4"
//               required
//             />
//           </div>

//           {/* Contact Details Section */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">📞 Contact Details</h4>
//             <div className="flex flex-col sm:flex-row sm:space-x-4">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
//                 required
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//           </div>

//           {/* Position You’re Applying For Section */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">🎭 Position You’re Applying For</h4>
//             <select
//               name="position"
//               value={formData.position}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-md"
//               required
//             >
//               <option value="">Select a position</option>
//               <option value="Actor">Actor</option>
//               <option value="Cinematographer">Cinematographer</option>
//               <option value="Photographer">Photographer</option>
//               <option value="DOP">Director of Photography (DOP)</option>
//               <option value="Production Manager">Production Manager</option>
//               <option value="Sound Engineer">Sound Engineer</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           {/* Resume / Portfolio Upload */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">📎 Upload Resume / Portfolio (Optional)</h4>
//             <input
//               type="file"
//               name="resume"
//               onChange={handleFileChange}
//               className="w-full p-4 border border-gray-300 rounded-md"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="mt-6">
//             <button
//               type="submit"
//               className="w-full bg-blue-900 text-white font-bold py-3 px-6 rounded-full text-xl transition-all duration-300 hover:bg-blue-700"
//             >
//               Submit Application
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default CareerPage;


// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const CareerPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     age: "",
//     gender: "",
//     about: "",
//     email: "",
//     phone: "",
//     position: "",
//     resume: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files[0],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { fullName, age, gender, about, email, phone, position, resume } = formData;

//     // Send form data via EmailJS
//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID", // Replace with your service ID
//         "YOUR_TEMPLATE_ID", // Replace with your template ID
//         e.target, // Target the form data
//         "YOUR_PUBLIC_USER_ID" // Replace with your public user ID from EmailJS
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully:", result.text);
//           alert("Application submitted successfully!");
//         },
//         (error) => {
//           console.log("Error sending email:", error.text);
//           alert("Error sending application. Please try again.");
//         }
//       );

//     // Optionally reset the form data after submission
//     setFormData({
//       fullName: "",
//       age: "",
//       gender: "",
//       about: "",
//       email: "",
//       phone: "",
//       position: "",
//       resume: null,
//     });
//   };

//   return (
//     <section className="bg-white text-blue-900 py-16 px-6 md:px-20">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl sm:text-5xl font-semibold mb-8">
//           Join Our Creative Team
//         </h2>
//         <p className="text-lg sm:text-xl mb-8">
//           We’re always on the lookout for passionate and talented individuals
//           in the film and media industry. Whether you&apos;re in front of the camera
//           or behind it, if you’ve got the drive — we want to hear from you!
//         </p>
//         <hr className="mb-8" />

//         <h3 className="text-2xl font-semibold mb-4">📋 Apply Now</h3>
//         <p className="mb-8">
//           Fill out the form below to apply for a role with us. We’ll get in
//           touch with suitable candidates shortly.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Basic Information Section */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">👤 Basic Information</h4>
//             <div className="flex flex-col sm:flex-row sm:space-x-4">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
//                 required
//               />
//               <input
//                 type="number"
//                 name="age"
//                 placeholder="Age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <div className="flex flex-col sm:flex-row sm:space-x-4">
//               <label className="text-lg font-semibold">Gender:</label>
//               <div className="flex space-x-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Male"
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Male
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Female"
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Female
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Other"
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Other
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Prefer not to say"
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Prefer not to say
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* About You Section */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">🧾 About You</h4>
//             <textarea
//               name="about"
//               placeholder="Tell us about yourself: (short bio, experience, goals, etc.)"
//               value={formData.about}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-md"
//               rows="4"
//               required
//             />
//           </div>

//           {/* Contact Details Section */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">📞 Contact Details</h4>
//             <div className="flex flex-col sm:flex-row sm:space-x-4">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
//                 required
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//           </div>

//           {/* Position You’re Applying For Section */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">🎭 Position You’re Applying For</h4>
//             <select
//               name="position"
//               value={formData.position}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-md"
//               required
//             >
//               <option value="">Select a position</option>
//               <option value="Actor">Actor</option>
//               <option value="Cinematographer">Cinematographer</option>
//               <option value="Photographer">Photographer</option>
//               <option value="DOP">Director of Photography (DOP)</option>
//               <option value="Production Manager">Production Manager</option>
//               <option value="Sound Engineer">Sound Engineer</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           {/* Resume / Portfolio Upload */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">📎 Upload Resume / Portfolio (Optional)</h4>
//             <input
//               type="file"
//               name="resume"
//               onChange={handleFileChange}
//               className="w-full p-4 border border-gray-300 rounded-md"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="mt-6">
//             <button
//               type="submit"
//               className="w-full bg-blue-900 text-white font-bold py-3 px-6 rounded-full text-xl transition-all duration-300 hover:bg-blue-700"
//             >
//               Submit Application
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default CareerPage;


// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const CareerPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     age: "",
//     gender: "",
//     about: "",
//     email: "",
//     phone: "",
//     position: "",
//     resume: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files[0],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { fullName, age, gender, about, email, phone, position, resume } = formData;

//     // Send form data via EmailJS
//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID", // Replace with your service ID
//         "YOUR_TEMPLATE_ID", // Replace with your template ID
//         e.target, // Target the form data
//         "YOUR_PUBLIC_USER_ID" // Replace with your public user ID from EmailJS
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully:", result.text);
//           alert("Application submitted successfully!");
//         },
//         (error) => {
//           console.log("Error sending email:", error.text);
//           alert("Error sending application. Please try again.");
//         }
//       );

//     // Optionally reset the form data after submission
//     setFormData({
//       fullName: "",
//       age: "",
//       gender: "",
//       about: "",
//       email: "",
//       phone: "",
//       position: "",
//       resume: null,
//     });
//   };

//   return (
//     <section className="bg-white text-blue-900 py-16 px-6 md:px-20">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl sm:text-5xl font-semibold mb-8">
//           Join Our Creative Team
//         </h2>
//         <p className="text-lg sm:text-xl mb-8">
//           We’re always on the lookout for passionate and talented individuals
//           in the film and media industry. Whether you&apos;re in front of the camera
//           or behind it, if you&apos;ve got the drive — we want to hear from you!
//         </p>
//         <hr className="mb-8" />

//         <h3 className="text-2xl font-semibold mb-4">📋 Apply Now</h3>
//         <p className="mb-8">
//           Fill out the form below to apply for a role with us. We&apos;ll get in
//           touch with suitable candidates shortly.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Basic Information Section */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">👤 Basic Information</h4>
//             <div className="flex flex-col sm:flex-row sm:space-x-4">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
//                 required
//               />
//               <input
//                 type="number"
//                 name="age"
//                 placeholder="Age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <div className="flex flex-col sm:flex-row sm:space-x-4">
//               <label className="text-lg font-semibold">Gender:</label>
//               <div className="flex space-x-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Male"
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Male
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Female"
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Female
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Other"
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Other
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Prefer not to say"
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Prefer not to say
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* About You Section */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">🧾 About You</h4>
//             <textarea
//               name="about"
//               placeholder="Tell us about yourself: (short bio, experience, goals, etc.)"
//               value={formData.about}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-md"
//               rows="4"
//               required
//             />
//           </div>

//           {/* Contact Details Section */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">📞 Contact Details</h4>
//             <div className="flex flex-col sm:flex-row sm:space-x-4">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
//                 required
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//           </div>

//           {/* Position You’re Applying For Section */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">🎭 Position You’re Applying For</h4>
//             <select
//               name="position"
//               value={formData.position}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-md"
//               required
//             >
//               <option value="">Select a position</option>
//               <option value="Actor">Actor</option>
//               <option value="Cinematographer">Cinematographer</option>
//               <option value="Photographer">Photographer</option>
//               <option value="DOP">Director of Photography (DOP)</option>
//               <option value="Production Manager">Production Manager</option>
//               <option value="Sound Engineer">Sound Engineer</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           {/* Resume / Portfolio Upload */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">📎 Upload Resume / Portfolio (Optional)</h4>
//             <input
//               type="file"
//               name="resume"
//               onChange={handleFileChange}
//               className="w-full p-4 border border-gray-300 rounded-md"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="mt-6">
//             <button
//               type="submit"
//               className="w-full bg-blue-900 text-white font-bold py-3 px-6 rounded-full text-xl transition-all duration-300 hover:bg-blue-700"
//             >
//               Submit Application
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default CareerPage;


// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const CareerPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     age: "",
//     gender: "",
//     about: "",
//     email: "",
//     phone: "",
//     position: "",
//     resume: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files[0],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { fullName, age, gender, about, email, phone, position, resume } = formData;

//     // Send form data via EmailJS
//     emailjs
//       .sendForm(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID, // Get service ID from .env
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Get template ID from .env
//         e.target, // Use e.target to get the form data
//         process.env.REACT_APP_EMAILJS_USER_ID // Get user ID from .env
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully:", result.text);
//           alert("Application submitted successfully!");
//         },
//         (error) => {
//           console.log("Error sending email:", error.text);
//           alert("Error sending application. Please try again.");
//         }
//       );

//     // Optionally reset the form data after submission
//     setFormData({
//       fullName: "",
//       age: "",
//       gender: "",
//       about: "",
//       email: "",
//       phone: "",
//       position: "",
//       resume: null,
//     });
//   };

//   return (
//     <section className="bg-white text-blue-900 py-16 px-6 md:px-20">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl sm:text-5xl font-semibold mb-8">
//           Join Our Creative Team
//         </h2>
//         <p className="text-lg sm:text-xl mb-8">
//           We’re always on the lookout for passionate and talented individuals
//           in the film and media industry. Whether you&apos;re in front of the camera
//           or behind it, if you&apos;ve got the drive — we want to hear from you!
//         </p>
//         <hr className="mb-8" />

//         <h3 className="text-2xl font-semibold mb-4">📋 Apply Now</h3>
//         <p className="mb-8">
//           Fill out the form below to apply for a role with us. We&apos;ll get in
//           touch with suitable candidates shortly.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Basic Information Section */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">👤 Basic Information</h4>
//             <div className="flex flex-col sm:flex-row sm:space-x-4">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
//                 required
//               />
//               <input
//                 type="number"
//                 name="age"
//                 placeholder="Age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <div className="flex flex-col sm:flex-row sm:space-x-4">
//               <label className="text-lg font-semibold">Gender:</label>
//               <div className="flex space-x-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Male"
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Male
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Female"
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Female
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Other"
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Other
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Prefer not to say"
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Prefer not to say
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* About You Section */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">🧾 About You</h4>
//             <textarea
//               name="about"
//               placeholder="Tell us about yourself: (short bio, experience, goals, etc.)"
//               value={formData.about}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-md"
//               rows="4"
//               required
//             />
//           </div>

//           {/* Contact Details Section */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">📞 Contact Details</h4>
//             <div className="flex flex-col sm:flex-row sm:space-x-4">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
//                 required
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//           </div>

//           {/* Position You’re Applying For Section */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">🎭 Position You’re Applying For</h4>
//             <select
//               name="position"
//               value={formData.position}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-md"
//               required
//             >
//               <option value="">Select a position</option>
//               <option value="Actor">Actor</option>
//               <option value="Cinematographer">Cinematographer</option>
//               <option value="Photographer">Photographer</option>
//               <option value="DOP">Director of Photography (DOP)</option>
//               <option value="Production Manager">Production Manager</option>
//               <option value="Sound Engineer">Sound Engineer</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           {/* Resume / Portfolio Upload */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">📎 Upload Resume / Portfolio (Optional)</h4>
//             <input
//               type="file"
//               name="resume"
//               onChange={handleFileChange}
//               className="w-full p-4 border border-gray-300 rounded-md"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="mt-6">
//             <button
//               type="submit"
//               className="w-full bg-blue-900 text-white font-bold py-3 px-6 rounded-full text-xl transition-all duration-300 hover:bg-blue-700"
//             >
//               Submit Application
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default CareerPage;


import React, { useState } from "react";
import emailjs from "emailjs-com";

const CareerPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    about: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, age, gender, about, email, phone, position, resume } = formData;

    // Send form data via EmailJS
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Service ID from .env
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID from .env
        e.target, // The form itself
        process.env.REACT_APP_EMAILJS_USER_ID // User ID from .env
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Application submitted successfully!");
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("Error sending application. Please try again.");
        }
      );

    // Optionally reset the form data after submission
    setFormData({
      fullName: "",
      age: "",
      gender: "",
      about: "",
      email: "",
      phone: "",
      position: "",
      resume: null,
    });
  };

  return (
    <section className="bg-white text-blue-900 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-8">
          Join Our Creative Team
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          We’re always on the lookout for passionate and talented individuals
          in the film and media industry. Whether you&apos;re in front of the camera
          or behind it, if you&apos;ve got the drive — we want to hear from you!
        </p>
        <hr className="mb-8" />

        <h3 className="text-2xl font-semibold mb-4">📋 Apply Now</h3>
        <p className="mb-8">
          Fill out the form below to apply for a role with us. We&apos;ll get in
          touch with suitable candidates shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">👤 Basic Information</h4>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
                required
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <label className="text-lg font-semibold">Gender:</label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Other
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Prefer not to say"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Prefer not to say
                </label>
              </div>
            </div>
          </div>

          {/* About You Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">🧾 About You</h4>
            <textarea
              name="about"
              placeholder="Tell us about yourself: (short bio, experience, goals, etc.)"
              value={formData.about}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md"
              rows="4"
              required
            />
          </div>

          {/* Contact Details Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">📞 Contact Details</h4>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          {/* Position You’re Applying For Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">🎭 Position You’re Applying For</h4>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select a position</option>
              <option value="Actor">Actor</option>
              <option value="Cinematographer">Cinematographer</option>
              <option value="Photographer">Photographer</option>
              <option value="DOP">Director of Photography (DOP)</option>
              <option value="Production Manager">Production Manager</option>
              <option value="Sound Engineer">Sound Engineer</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Resume / Portfolio Upload */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">📎 Upload Resume / Portfolio (Optional)</h4>
            <input
              type="file"
              name="resume"
              onChange={handleFileChange}
              className="w-full p-4 border border-gray-300 rounded-md"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-bold py-3 px-6 rounded-full text-xl transition-all duration-300 hover:bg-blue-700"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CareerPage;
