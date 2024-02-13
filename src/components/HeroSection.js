import { Link } from 'react-router-dom';

const HeroSection = () => (
    <div className="text-center py-20 bg-pale-shade text-white">
      <h1 className="text-5xl font-bold mb-4">Empowering Healthier Decisions with Clarity in Medication Management</h1>
      <h2 className="text-2xl font-bold mb-4">Ready to simplify your medication management?</h2>
      <Link to="/register" className="inline-block bg-base-dark-blue hover:bg-lighter-shade text-white font-bold py-2 px-4 rounded transition duration-300">
        Register Now
      </Link>
    </div>
  );

  export default HeroSection;