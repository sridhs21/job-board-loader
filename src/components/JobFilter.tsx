import React, { useState } from 'react';
import { FilterOptions } from '../types';

interface JobFilterProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const JobFilter: React.FC<JobFilterProps> = ({ filters, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isRemote, setIsRemote] = useState(filters.remote);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update all filters with the single search term
    onFilterChange({
      jobType: searchTerm,      // Use the same search term for all filter fields
      employmentType: '',       // We'll rely on the simple search term approach
      location: '',             // Location will come from the remote checkbox
      remote: isRemote,         // Only keep the remote filter separate
      department: '',           // Let search term handle department
      experienceLevel: '',      // Let search term handle experience level
    });
  };

  const handleReset = () => {
    setSearchTerm('');
    setIsRemote(false);
    
    onFilterChange({
      jobType: '',
      employmentType: '',
      location: '',
      remote: false,
      department: '',
      experienceLevel: '',
    });
  };

  return (
    <div className="bg-gray-800 p-6">
      <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-6">
        <h2 className="text-lg font-medium text-gray-100">Job Search</h2>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          {/* Single search input */}
          <div>
            <label htmlFor="searchTerm" className="block text-sm font-medium text-gray-300 mb-1">
              Search Term
            </label>
            <div className="mt-1">
              <input
                id="searchTerm"
                name="searchTerm"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="shadow-sm bg-gray-700 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-600 rounded-md p-2 text-gray-200"
                placeholder="Enter job title, keywords, or skills"
              />
            </div>
          </div>

          {/* Remote filter */}
          <div className="flex items-center mt-4">
            <input
              id="remote"
              name="remote"
              type="checkbox"
              checked={isRemote}
              onChange={(e) => setIsRemote(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 bg-gray-700 rounded"
            />
            <label htmlFor="remote" className="ml-2 block text-sm text-gray-300">
              Remote Only
            </label>
          </div>
        </div>
        
        <div className="pt-5 mt-6 flex space-x-3">
          <button
            type="submit"
            className="flex-1 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-800 transition-colors"
          >
            Search
          </button>
          
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-800 transition-colors"
          >
            Clear
          </button>
        </div>
      </form>
      
      <div className="mt-6">
        <div className="rounded-md bg-gray-750 p-4 border border-gray-700">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg 
                className="h-5 w-5 text-blue-400" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm text-blue-300">
                Enter a job title, skills, or keywords to search across multiple company job boards at once.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilter;