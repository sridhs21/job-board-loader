import React, { useState, useEffect } from 'react';
import CompanyList from './components/CompanyList';
import JobFilter from './components/JobFilter';
import Pagination from './components/Pagination';
import { companies } from './data/companies';
import { FilterOptions } from './types';
import logo from "/jbl-logo.png";

const App: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    jobType: '',
    employmentType: '',
    location: '',
    remote: false,
    department: '',
    experienceLevel: '',
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 6;
  
  // Filter companies based on search term
  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Calculate pagination
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = filteredCompanies.slice(indexOfFirstCompany, indexOfLastCompany);
  
  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header with glowing effect */}
      <header
        style={{ backgroundColor: '#051A33' }}
        className="border-b border-blue-600 shadow-lg relative"
      >
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="JBL Logo" 
                className="h-12 w-12 mr-3"
              />
              <div>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  JBL
                </h1>
              </div>
            </div>

            
            {/* Search bar */}
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search companies..."
                  className="block w-full pl-10 pr-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Glowing bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 shadow-glow"></div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-100">Find Your Next Opportunity</h2>
          <p className="mt-2 text-gray-400">
            Search tech jobs across top companies with one click.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="bg-gray-800 shadow rounded-lg overflow-hidden border border-gray-700">
              <JobFilter filters={filters} onFilterChange={setFilters} />
            </div>
          </div>
          <div className="md:col-span-3">
            <CompanyList 
              companies={currentCompanies} 
              filters={filters} 
              searchTerm={searchTerm}
            />
            
            {/* Pagination */}
            <div className="mt-6">
              <Pagination 
                companiesPerPage={companiesPerPage}
                totalCompanies={filteredCompanies.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} JBL. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;