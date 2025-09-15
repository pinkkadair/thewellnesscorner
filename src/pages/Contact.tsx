export function Contact() {

  return (
    <div className="min-h-screen bg-brand-light/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-brand-dark">Contact Us</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/Kiy9m46CWKMBzjNPISMtq"
              width="100%"
              style={{ height: '700px' }}
              frameBorder="0"
            ></iframe>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-brand-dark">Address</h3>
              <p className="text-gray-600">
                15182 N. 75th Ave<br />
                Suite 180<br />
                Peoria, AZ 85381
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-brand-dark">Phone</h3>
              <p className="text-gray-600">623-257-3350</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-brand-dark">Email</h3>
              <p className="text-gray-600">support@azwellnesscorner.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}