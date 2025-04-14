import React, { useState } from 'react';
import { Company, FilterOptions } from '../types';
import { constructJobBoardUrl } from '../utils/urlBuilder';

interface CompanyListProps {
  companies: Company[];
  filters: FilterOptions;
  searchTerm?: string;
}

const CompanyList: React.FC<CompanyListProps> = ({ companies, filters, searchTerm = '' }) => {
  const [lastClickedUrl, setLastClickedUrl] = useState<string | null>(null);
  
  const handleCompanyClick = (company: Company) => {
    const jobBoardUrl = constructJobBoardUrl(company, filters);
    
    // Store the URL for debugging
    setLastClickedUrl(jobBoardUrl);
    
    // Open the URL in a new tab
    window.open(jobBoardUrl, '_blank');
  };

  const filteredCompanies = companies.filter(company => {
    // Filter by remote if that filter is active
    if (filters.remote && !company.remote) {
      return false;
    }
    
    return true;
  });

  if (filteredCompanies.length === 0) {
    return (
      <div className="bg-gray-800 overflow-hidden shadow rounded-lg border border-gray-700">
        <div className="p-8 text-center">
          <svg 
            className="mx-auto h-12 w-12 text-gray-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-200">No companies found</h3>
          <p className="mt-1 text-sm text-gray-400">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      </div>
    );
  }

  // Get search term for display
  const displaySearchTerm = filters.jobType || 'All Jobs';

  return (
    <div className="bg-gray-800 overflow-hidden shadow rounded-lg border border-gray-700">
      <div className="border-b border-gray-700 px-6 py-5 bg-gray-750">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between flex-wrap sm:flex-nowrap">
            <h3 className="text-lg leading-6 font-medium text-gray-100">
              Available Companies ({filteredCompanies.length})
            </h3>
            {filters.remote && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-900 text-blue-200">
                Remote Only
              </span>
            )}
          </div>
          
          <p className="text-sm text-gray-400">
            Click on a company to search for: <span className="font-medium text-blue-300">{displaySearchTerm}</span>
          </p>
        </div>
      </div>
      
      {/* Debug info - only shown if a URL was clicked */}
      {lastClickedUrl && (
        <div className="px-6 py-3 bg-gray-750 border-b border-gray-700">
          <details className="text-xs">
            <summary className="text-gray-400 cursor-pointer font-medium">Last clicked URL (debug info)</summary>
            <p className="mt-1 text-gray-400 break-all font-mono">{lastClickedUrl}</p>
          </details>
        </div>
      )}
      
      <ul className="divide-y divide-gray-700">
        {filteredCompanies.map((company) => (
          <li key={company.id} className="hover:bg-gray-750 transition-colors duration-150">
            <button
              onClick={() => handleCompanyClick(company)}
              className="w-full px-6 py-6 flex items-center focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-md bg-gray-700 flex items-center justify-center shadow-sm border border-gray-600 overflow-hidden">
                  {company.logo ? (
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`} 
                      className="h-12 w-12 object-contain" 
                    />
                  ) : (
                    <span className="text-gray-300 text-xl font-bold">
                      {company.name.charAt(0)}
                    </span>
                  )}
                </div>
              </div>
              <div className="ml-5 flex-1">
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                    {company.name}
                  </h4>
                  <div className="mt-1 flex items-center">
                    <p className="text-sm text-gray-400">
                      {company.industry}
                    </p>
                    {company.remote && (
                      <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-200">
                        Remote-Friendly
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <span className="truncate">
                    Search for {displaySearchTerm} on {company.name}'s job board
                  </span>
                </div>
              </div>
              <div className="ml-5 flex-shrink-0">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-900 text-blue-200 hover:bg-blue-800 transition-colors">
                  <svg 
                    className="h-6 w-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;