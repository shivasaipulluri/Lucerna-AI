import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">Last Updated: April 13, 2025</p>

          <p className="mb-6">
            At Lucerna AI ("we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you use our website and
            services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">Information We Collect</h2>

          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3 font-serif">Personal Information</h3>
          <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
            <li>Create an account</li>
            <li>Upload resumes and job descriptions</li>
            <li>Use our AI-powered services</li>
            <li>Contact our support team</li>
            <li>Subscribe to our newsletter</li>
            <li>Participate in surveys or promotions</li>
          </ul>
          <p className="mb-4">
            This information may include your name, email address, phone number, employment history, education, and
            other information contained in your resume.
          </p>

          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3 font-serif">Usage Information</h3>
          <p className="mb-4">
            We automatically collect certain information when you visit, use, or navigate our platform. This information
            does not reveal your specific identity but may include:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
            <li>Device and browser information</li>
            <li>IP address</li>
            <li>Operating system</li>
            <li>Usage patterns and preferences</li>
            <li>Referring URLs</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect for various business purposes, including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
            <li>Providing and improving our services</li>
            <li>Processing your transactions</li>
            <li>Communicating with you about our services</li>
            <li>Responding to your inquiries and support requests</li>
            <li>Analyzing usage patterns to enhance user experience</li>
            <li>Training and improving our AI models</li>
            <li>Preventing fraudulent activities</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">AI Training and Data Usage</h2>
          <p className="mb-6">
            To improve our AI services, we may use anonymized and aggregated data from user interactions. This data is
            stripped of personally identifiable information before being used for training purposes. We implement strict
            safeguards to ensure your personal information remains protected during this process.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">Information Sharing</h2>
          <p className="mb-4">We may share your information in the following situations:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
            <li>
              <strong>Service Providers:</strong> We may share your information with third-party vendors, service
              providers, and contractors who perform services for us.
            </li>
            <li>
              <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a
              portion of our assets, your information may be transferred as part of that transaction.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information where required by law or to protect
              our rights.
            </li>
          </ul>
          <p className="mb-6">We do not sell your personal information to third parties.</p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">Data Security</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational measures to protect your personal information.
            However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot
            guarantee absolute security.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">Your Privacy Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
            <li>Right to access your personal information</li>
            <li>Right to correct inaccurate information</li>
            <li>Right to request deletion of your information</li>
            <li>Right to restrict or object to processing</li>
            <li>Right to data portability</li>
            <li>Right to withdraw consent</li>
          </ul>
          <p className="mb-6">
            To exercise these rights, please contact us at{" "}
            <a href="mailto:privacy@lucernai.co" className="text-primary hover:underline">
              privacy@lucernai.co
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">
            Cookies and Tracking Technologies
          </h2>
          <p className="mb-6">
            We use cookies and similar tracking technologies to collect and store information about your interactions
            with our platform. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">Children's Privacy</h2>
          <p className="mb-6">
            Our services are not intended for individuals under the age of 16. We do not knowingly collect personal
            information from children. If you believe we have collected information from a child, please contact us
            immediately.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">Changes to This Privacy Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
            "Last Updated" date. We encourage you to review this Privacy Policy periodically.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">Contact Us</h2>
          <p className="mb-6">If you have questions or concerns about this Privacy Policy, please contact us at:</p>
          <p className="mb-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:privacy@lucernai.co" className="text-primary hover:underline">
              privacy@lucernai.co
            </a>
          </p>
          <p className="mb-6">
            <strong>Address:</strong> Lucerna AI, 123 Innovation Way, San Francisco, CA 94107
          </p>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <p className="text-sm text-gray-500">
              By using our services, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
