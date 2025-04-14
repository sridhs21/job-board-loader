import { Company, FilterOptions } from '../types';

export function constructJobBoardUrl(company: Company, filters: FilterOptions): string {
  // Start with the base job board URL
  let url = company.jobBoardUrl;
  const params = new URLSearchParams();
  
  // Get the search parameter name for the company
  const searchParamName = getSearchParamName(company.id);
  
  // If there's a search term (from jobType field), add it to the URL
  if (filters.jobType) {
    params.append(searchParamName, filters.jobType);
  }
  
  // Handle remote filter if company supports it and filter is active
  if (filters.remote && company.remote && company.parameterMap.remote) {
    const remoteMapping = company.parameterMap.remote;
    params.append(remoteMapping.paramName, remoteMapping.value);
  }
  
  // Add parameters to URL if there are any
  const paramsString = params.toString();
  if (paramsString) {
    url += url.includes('?') ? '&' : '?';
    url += paramsString;
  }
  
  // For debugging
  console.log('Constructed URL:', url);
  
  return url;
}

// Helper function to get the appropriate search parameter name for each company
function getSearchParamName(companyId: string): string {
  const paramMap: Record<string, string> = {
    'google': 'q',
    'microsoft': 'q',
    'amazon': 'keywords',
    'apple': 'keyword',
    'meta': 'q',
    'netflix': 'q',
    'ibm': 'keywords',
    'salesforce': 'keyword',
    'adobe': 'keyword',
    'twitter': 'q'
  };
  
  return paramMap[companyId] || 'q'; // Default to 'q' if company not found
}