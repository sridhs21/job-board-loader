import React from 'react';

interface PaginationProps {
  companiesPerPage: number;
  totalCompanies: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  companiesPerPage,
  totalCompanies,
  currentPage,
  setCurrentPage
}) => {
  const pageNumbers = [];
  
  // Calculate total pages
  const totalPages = Math.ceil(totalCompanies / companiesPerPage);
  
  // Generate page numbers
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  // Handle page change
  const paginate = (pageNumber: number) => {
    // Ensure page is within range
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > totalPages) pageNumber = totalPages;
    
    setCurrentPage(pageNumber);
    
    // Scroll to top when page changes
    window.scrollTo(0, 0);
  };
  
  // Show limited page numbers for better UI
  const getPageNumbers = () => {
    const displayedPages = [];
    
    // Always show first page
    if (totalPages > 0) {
      displayedPages.push(1);
    }
    
    // Show current page and surrounding pages
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (!displayedPages.includes(i)) {
        displayedPages.push(i);
      }
    }
    
    // Always show last page if there's more than one page
    if (totalPages > 1) {
      displayedPages.push(totalPages);
    }
    
    // Sort pages numerically
    displayedPages.sort((a, b) => a - b);
    
    return displayedPages;
  };
  
  const displayedPageNumbers = getPageNumbers();
  
  if (totalPages <= 1) return null;
  
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-1">
        {/* Previous button */}
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`relative inline-flex items-center px-3 py-2 rounded-md border ${
              currentPage === 1 
              ? 'bg-gray-700 border-gray-600 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <span className="sr-only">Previous</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </li>
        
        {/* Page numbers */}
        {displayedPageNumbers.map((number, index) => {
          // Add ellipsis if there's a gap
          const showEllipsisBefore = index > 0 && displayedPageNumbers[index - 1] !== number - 1;
          
          return (
            <React.Fragment key={number}>
              {showEllipsisBefore && (
                <li className="relative inline-flex items-center px-3 py-2 text-gray-400">
                  ...
                </li>
              )}
              <li>
                <button
                  onClick={() => paginate(number)}
                  className={`relative inline-flex items-center px-3 py-2 rounded-md border ${
                    currentPage === number
                    ? 'bg-blue-600 border-blue-500 text-white z-10'
                    : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {number}
                </button>
              </li>
            </React.Fragment>
          );
        })}
        
        {/* Next button */}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`relative inline-flex items-center px-3 py-2 rounded-md border ${
              currentPage === totalPages 
              ? 'bg-gray-700 border-gray-600 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <span className="sr-only">Next</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;