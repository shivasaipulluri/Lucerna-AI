import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Terms of Service</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">Last Updated: April 13, 2025</p>

          <p className="mb-6">
            Please read these Terms of Service ("Terms") carefully before using the Lucerna AI website and services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">1. Agreement to Terms</h2>
          <p className="mb-6">
            By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of
            the Terms, you may not access our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">2. Description of Services</h2>
          <p className="mb-6">
            Lucerna AI provides AI-powered resume tailoring, cover letter generation, LinkedIn profile optimization, and
            interview coaching services. Our platform uses artificial intelligence to help users improve their job
            application materials and interview skills.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">3. User Accounts</h2>
          <p className="mb-4">
            When you create an account with us, you must provide accurate and complete information. You are responsible
            for:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>Restricting access to your account</li>
            <li>All activities that occur under your account</li>
          </ul>
          <p className="mb-6">
            You must notify us immediately of any unauthorized use of your account or any other security breach.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">4. User Content</h2>
          <p className="mb-4">
            Our services allow you to upload, submit, and share content, including resumes, job descriptions, and other
            materials ("User Content"). By providing User Content, you:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
            <li>
              Grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display your User
              Content for the purpose of providing our services
            </li>
            <li>Represent that you own or have the necessary rights to your User Content</li>
            <li>Agree that your User Content does not violate the rights of any third party</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">5. Subscription and Payments</h2>
          <p className="mb-4">We offer both free and premium subscription plans. By subscribing to a premium plan:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
            <li>You agree to pay all fees associated with your subscription</li>
            <li>Subscription fees are billed in advance on a recurring basis</li>
            <li>You authorize us to charge your chosen payment method</li>
            <li>Subscriptions automatically renew unless canceled before the renewal date</li>
          </ul>
          <p className="mb-6">
            We reserve the right to change our subscription fees upon reasonable notice. Such notice may be provided by
            email or by posting on our website.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">6. Free Trial</h2>
          <p className="mb-6">
            We may offer a free trial of our premium services. At the end of the trial period, you will be automatically
            charged for a subscription unless you cancel before the trial ends.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">7. Refund Policy</h2>
          <p className="mb-6">
            Refunds are provided at our discretion. Please contact{" "}
            <a href="mailto:support@lucernai.co" className="text-primary hover:underline">
              support@lucernai.co
            </a>{" "}
            with any refund requests.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">8. Intellectual Property</h2>
          <p className="mb-6">
            The Lucerna AI platform, including its content, features, and functionality, is owned by Lucerna AI and is
            protected by copyright, trademark, and other intellectual property laws. Our name, logo, and all related
            names, logos, product and service names, designs, and slogans are trademarks of Lucerna AI or its
            affiliates.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">9. AI-Generated Content</h2>
          <p className="mb-6">
            Our services use AI to generate content based on your inputs. While we strive for accuracy and quality, we
            do not guarantee that AI-generated content will be error-free or suitable for all purposes. You are
            responsible for reviewing and editing AI-generated content before using it for job applications or other
            purposes.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">10. Limitation of Liability</h2>
          <p className="mb-6">
            To the maximum extent permitted by law, Lucerna AI shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, including loss of profits, data, or business opportunities,
            resulting from your use of our services, even if we have been advised of the possibility of such damages.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">11. Disclaimer of Warranties</h2>
          <p className="mb-6">
            Our services are provided "as is" and "as available" without warranties of any kind, either express or
            implied, including, but not limited to, implied warranties of merchantability, fitness for a particular
            purpose, or non-infringement.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">12. Indemnification</h2>
          <p className="mb-6">
            You agree to indemnify and hold harmless Lucerna AI and its officers, directors, employees, and agents from
            any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of
            or in any way connected with your access to or use of our services or your violation of these Terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">13. Termination</h2>
          <p className="mb-6">
            We may terminate or suspend your account and access to our services immediately, without prior notice or
            liability, for any reason, including if you breach these Terms. Upon termination, your right to use our
            services will immediately cease.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">14. Governing Law</h2>
          <p className="mb-6">
            These Terms shall be governed by and construed in accordance with the laws of the State of California,
            without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating
            to these Terms shall be brought exclusively in the federal or state courts located in San Francisco,
            California.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">15. Changes to Terms</h2>
          <p className="mb-6">
            We reserve the right to modify these Terms at any time. We will provide notice of significant changes by
            updating the "Last Updated" date at the top of these Terms and/or by sending you an email. Your continued
            use of our services after such modifications constitutes your acceptance of the revised Terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">16. Severability</h2>
          <p className="mb-6">
            If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and
            the remaining provisions shall be enforced.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">17. Entire Agreement</h2>
          <p className="mb-6">
            These Terms constitute the entire agreement between you and Lucerna AI regarding our services and supersede
            all prior agreements and understandings.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 font-serif">18. Contact Information</h2>
          <p className="mb-6">
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:legal@lucernai.co" className="text-primary hover:underline">
              legal@lucernai.co
            </a>
            .
          </p>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <p className="text-sm text-gray-500">
              By using our services, you acknowledge that you have read and understood these Terms of Service.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
