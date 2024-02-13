const FeaturesOverview = () => (
  <div className="py-12 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-dark-shade">Why MedInfoSimplify?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Each feature card */}
        <div className="flex flex-col bg-very-pale-shade shadow-md rounded-lg p-4 h-full">
          <h3 className="text-xl font-bold text-base-dark-blue mb-2">Secure Data Management</h3>
          <p className="text-lighter-shade flex-grow">Your health information is sensitive. 
                    That's why we prioritize secure authentication and data protection, 
                    ensuring your medical details stay confidential and safe.</p>
        </div>
        
        <div className="flex flex-col bg-very-pale-shade shadow-md rounded-lg p-4 h-full">
          <h3 className="text-xl font-bold text-base-dark-blue mb-2">Simplified Drug Label Summaries</h3>
          <p className="text-lighter-shade flex-grow">Struggle to understand complex drug labels? Upload an image of your medication label, and receive a simplified text summary. It's that easy.</p>
        </div>

        <div className="flex flex-col bg-very-pale-shade shadow-md rounded-lg p-4 h-full">
          <h3 className="text-xl font-bold text-base-dark-blue mb-2">Time-saving for Healthcare Professionals</h3>
          <p className="text-lighter-shade flex-grow">Healthcare professionals can leverage MedInfoSimplify to provide clear, concise drug information to patients, optimizing the time spent on patient care.</p>
        </div>
        
        <div className="flex flex-col bg-very-pale-shade shadow-md rounded-lg p-4 h-full">
          <h3 className="text-xl font-bold text-base-dark-blue mb-2">Enhanced Patient Comprehension</h3>
          <p className="text-lighter-shade flex-grow">Our simplified texts ensure that patients and caregivers can easily understand their medication, fostering better adherence to treatment plans.</p>
        </div>
        
        <div className="flex flex-col bg-very-pale-shade shadow-md rounded-lg p-4 h-full">
          <h3 className="text-xl font-bold text-base-dark-blue mb-2">Reduced Medication Errors</h3>
          <p className="text-lighter-shade flex-grow">By making complex instructions straightforward, we help minimize the risk of medication errors, contributing to safer health management.</p>
        </div>
        
        <div className="flex flex-col bg-very-pale-shade shadow-md rounded-lg p-4 h-full">
          <h3 className="text-xl font-bold text-base-dark-blue mb-2">Demystifying Medical Jargon</h3>
          <p className="text-lighter-shade flex-grow">We translate complex medical terms into simple language, empowering you to make informed health decisions with confidence.</p>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturesOverview;
