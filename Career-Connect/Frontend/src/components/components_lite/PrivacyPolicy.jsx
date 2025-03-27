import React from 'react';
<<<<<<< HEAD
import Navbar from './Navbar';
import Footer from './Footer';

function PrivacyPolicy() {
  return (
    <>
    <Navbar/>
    <div className="privacy-policy-container p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">Privacy Policy</h1>
      <p className="text-lg mb-4">
        At <strong>Career Connect</strong>, your privacy is of utmost importance to us. This privacy policy document outlines the types of personal information that is collected and how we use it.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
      <p className="text-lg mb-4">
        We collect personal information that you provide when using Career Connect, such as:
        <ul className="list-disc pl-8 mt-2">
          <li>Your name, email, and contact details</li>
          <li>Employment history, skills, and resume information</li>
          <li>Usage data for site functionality and improvement</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
      <p className="text-lg mb-4">
        Your personal information is used to:
        <ul className="list-disc pl-8 mt-2">
          <li>Provide and personalize job opportunities for you</li>
          <li>Improve and optimize the website experience</li>
          <li>Communicate with you about job listings and updates</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
      <p className="text-lg mb-4">
        We implement strong security measures to protect your personal data from unauthorized access, alteration, or disclosure. However, please note that no method of internet transmission is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
      <p className="text-lg mb-4">
        You have the right to access, update, or delete your personal information at any time. To make any changes to your account or for any questions, please contact us.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Changes to This Privacy Policy</h2>
      <p className="text-lg mb-4">
        We may update this privacy policy from time to time. Any changes will be reflected on this page with the updated date. Please review this policy periodically to stay informed.
      </p>

      <p className="text-lg mt-6">
        If you have any questions about this privacy policy, feel free to <a href="/contact" className="text-blue-600 underline">contact us</a>.
      </p>
    </div>
    <Footer/>
    </>
  );
}

export default PrivacyPolicy;
=======
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
  <div>
    <Navbar/>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Link 
            to="/"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition duration-150"
          >
            ← Back to Home
          </Link>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">
            At JobPortal, we are committed to protecting your personal information and your right to privacy.
            This policy outlines our practices regarding data collection, use, and disclosure.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="md:col-span-1 bg-white rounded-xl shadow-md p-6 h-fit sticky top-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Sections</h2>
            <nav className="space-y-2">
              {['Information Collection', 'Data Usage', 'Data Protection', 'Your Rights', 
                'Cookies', 'Third Parties', 'Policy Changes'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-600 hover:text-blue-600 text-sm transition duration-150"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-8">
            <Section 
              id="information-collection"
              title="Information We Collect"
              content={
                <>
                  <p className="mb-4">We collect personal information you voluntarily provide when:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Creating an account</li>
                    <li>Applying for jobs</li>
                    <li>Submitting resumes/CVs</li>
                    <li>Contacting employers</li>
                  </ul>
                </>
              }
            />

            <Section 
              id="data-usage"
              title="How We Use Your Data"
              content={
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Matching you with relevant job opportunities</li>
                  <li>Personalizing your job search experience</li>
                  <li>Improving our platform services</li>
                  <li>Communicating important updates</li>
                  <li>Preventing fraudulent activity</li>
                </ul>
              }
            />

            <Section 
              id="data-protection"
              title="Data Security"
              content="We implement industry-standard security measures including encryption, 
              access controls, and regular security audits to protect your personal information."
            />

            <Section 
              id="your-rights"
              title="Your Rights"
              content={
                <div className="space-y-4">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Access your personal data</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Delete your account and personal data</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </div>
              }
            />

            <Section 
              id="cookies"
              title="Cookie Policy"
              content="We use cookies to enhance user experience, analyze site usage, and assist in 
              our marketing efforts. You can control cookies through your browser settings."
            />

            <Section 
              id="third-parties"
              title="Third-Party Services"
              content="We may share information with trusted third-party service providers for 
              purposes such as payment processing, analytics, and email delivery. These parties 
              are contractually prohibited from using your data for other purposes."
            />

            <Section 
              id="policy-changes"
              title="Policy Updates"
              content="We may update this policy periodically. Significant changes will be 
              communicated through email or prominent site notices. Continued use of our 
              services constitutes acceptance of the updated policy."
            />
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
          <p className="text-gray-600">
            For privacy-related inquiries, please contact our Data Protection Officer at<br />
            <a href="mailto:privacy@jobportal.com" className="text-blue-600 hover:underline">
              privacy@jobportal.com
            </a>
          </p>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Effective Date: January 1, 2024</p>
          <p className="mt-2">© 2024 JobPortal. All rights reserved.</p>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  );
};

const Section = ({ id, title, content }) => (
  <section id={id} className="bg-white rounded-xl shadow-md p-8">
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
    <div className="text-gray-600 leading-relaxed">
      {content}
    </div>
  </section>
 
);


export default PrivacyPolicy;
>>>>>>> Nik
