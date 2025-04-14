export interface Company {
    id: string;
    name: string;
    logo?: string;
    industry: string;
    jobBoardUrl: string;
    remote: boolean;
    parameterMap: ParameterMap;
  }
  
  // FilterOptions interface stays the same for compatibility
  // with existing components, but we'll primarily use jobType
  // for the search term and remote flag
  export interface FilterOptions {
    jobType: string;       // We'll use this for the search term
    employmentType: string;
    location: string;
    remote: boolean;       // Keep this for remote filtering
    department: string;
    experienceLevel: string;
  }
  
  // Parameter mapping for standard filters to company-specific URL parameters
  export interface ParameterMap {
    jobType?: ValueMapMapping;
    employmentType?: ValueMapMapping;
    location?: ValueMapMapping;
    remote?: RemoteMapping;
    department?: ValueMapMapping;
    experienceLevel?: ValueMapMapping;
  }
  
  // For filters that map to specific values
  interface ValueMapMapping {
    paramName: string;
    valueMap: Record<string, string>;
  }
  
  // For remote filter which uses a static value
  interface RemoteMapping {
    paramName: string;
    value: string;
  }