import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="font-sans text-gray-900">
          {/* Banner Section */}
          <div className="bg-northern-air text-white p-12 text-center">
            <h1 className="text-4xl font-bold mb-2">Empowering Healthier Decisions with Clarity in Medication Management</h1>
            <p className="text-xl">MedInfoSimplify: Where understanding medication becomes simpler for patients and caregivers.</p>
          </div>
    
          {/* Introduction Section */}
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>Welcome to MedInfoSimplify – your partner in demystifying medication instructions.
                 In a world where medical jargon can be a barrier to effective healthcare, 
                 we bring a solution designed to enhance drug label comprehension for patients, 
                 caregivers, and healthcare professionals alike. 
                 Our mission is to facilitate better healthcare outcomes by making medication management accessible, 
                 understandable, and secure.
            </p>
          </div>
    
          {/* Features Section */}
          <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-4">Why MedInfoSimplify?</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li><b>Secure Data Management:</b> Your health information is sensitive. 
                    That's why we prioritize secure authentication and data protection, 
                    ensuring your medical details stay confidential and safe.
                </li>
                <li>
                    <b>Simplified Drug Label Summaries:</b> 
                    Struggle to understand complex drug labels? Upload an image of your medication label,
                    and receive a simplified text summary. It's that easy.
                </li>
                <li>
                    <b>Time-saving for Healthcare Professionals:</b> 
                    Healthcare professionals can leverage MedInfoSimplify to provide clear,
                    concise drug information to patients, optimizing the time spent on patient care.
                </li>
                <li>
                <b>Enhanced Patient Comprehension:</b> Our simplified texts ensure that
                patients and caregivers can easily understand their medication, fostering better adherence to treatment plans.
                </li>
                <li>
                <b>Reduced Medication Errors:</b> By making complex instructions straightforward, 
                we help minimize the risk of medication errors, contributing to safer health management.
                </li>
                <li>
                <b>Demystifying Medical Jargon:</b> We translate
                 complex medical terms into simple language, empowering you to make informed health decisions with confidence.
                </li>
              </ul>
            </div>
          </div>
    
          {/* Vision Section */}
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p>At MedInfoSimplify, we envision a world where everyone can manage their health and medication with ease and confidence. 
                Whether you're a patient seeking clarity about your prescriptions, a caregiver managing medication for a loved one, 
                or a healthcare professional aiming to improve patient communication, MedInfoSimplify is here to transform how drug information is understood and utilized.
            </p>
          </div>
    
          {/* Call to Action Section */}
          <div className="bg-northern-air text-white text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to simplify your medication management?</h2>
            <p>Join MedInfoSimplify today and experience the peace of mind that comes with understanding your health better.</p>
            <p className="mt-3">Get started by choosing an option below:</p>
                <div className="mt-5">
                     <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l mr-2">Login</Link>
                     <Link to="/register" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r">Register</Link>
                </div>
          </div>
    
        
        </div>
      );
    // return (
    //     <div>
    //         <div className="text-center mt-10">
    //             <h1 className="text-2xl font-bold">Welcome to Our Application</h1>
    //             <p className="mt-3">Get started by choosing an option below:</p>
    //             <div className="mt-5">
    //                  <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l mr-2">Login</Link>
    //                  <Link to="/register" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r">Register</Link>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default Home;