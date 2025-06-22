export default function StorefrontHeader() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">Your App</h1>
          </div>
          <nav className="flex space-x-8">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Home
            </a>
            <div className="relative flex">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Activities
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
