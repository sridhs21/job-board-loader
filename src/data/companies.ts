import { Company } from '../types';

export const companies: Company[] = [
  {
    id: 'google',
    name: 'Google',
    logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    industry: 'Technology',
    jobBoardUrl: 'https://careers.google.com/jobs/results/',
    remote: true,
    parameterMap: {
      jobType: {
        paramName: 'category',
        valueMap: {
          'technical': 'ENGINEERING_AND_TECHNOLOGY',
          'software': 'SOFTWARE_ENGINEERING',
          'design': 'USER_EXPERIENCE_AND_DESIGN',
          'product': 'PRODUCT_MANAGEMENT',
          'marketing': 'MARKETING_AND_COMMUNICATIONS',
          'sales': 'SALES_SERVICE_AND_SUPPORT',
          'finance': 'FINANCE',
          'hr': 'PEOPLE',
          'operations': 'TECHNICAL_INFRASTRUCTURE_ENGINEERING',
          'entry-level': 'STUDENT_DEVELOPMENT_PROGRAMS',
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Europe',
          'ca': 'Canada',
          'asia': 'Asia',
          'au': 'Australia'
        }
      },
      remote: {
        paramName: 'remote',
        value: 'true'
      }
    }
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
    industry: 'Technology',
    jobBoardUrl: 'https://jobs.careers.microsoft.com/global/en/search',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'rt',
        valueMap: {
          'software': 'Engineering',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product Management',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'Human Resources',
          'operations': 'IT and Operations'
        }
      },
      experienceLevel: {
        paramName: 'exp',
        valueMap: {
          'entry': 'Student',
          'mid': 'Professional',
          'senior': 'Professional',
          'lead': 'Professional',
          'executive': 'Professional'
        }
      },
      location: {
        paramName: 'l',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Europe',
          'ca': 'Canada',
          'asia': 'Asia Pacific',
          'au': 'Australia'
        }
      },
      remote: {
        paramName: 'yw',
        value: 'true'
      }
    }
  },
  {
    id: 'amazon',
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png',
    industry: 'Technology & E-commerce',
    jobBoardUrl: 'https://www.amazon.jobs/en/search',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'job_category',
        valueMap: {
          'software': 'Software Development',
          'engineering': 'Operations, IT, & Support Engineering',
          'design': 'Design',
          'product': 'Product Management',
          'marketing': 'Marketing & PR',
          'sales': 'Sales, Advertising, & Account Management',
          'finance': 'Finance & Accounting',
          'hr': 'Human Resources',
          'operations': 'Operations, IT, & Support Engineering'
        }
      },
      employmentType: {
         paramName: 'schedule_type_id',
         valueMap: {
           'full-time': 'Full-Time',
           'part-time': 'Part-Time',
           'internship': 'Internship'
         }
      },
      location: {
        paramName: 'normalized_country_code',
        valueMap: {
          'us': 'USA',
          'uk': 'GBR',
          'eu': 'DEU',
          'ca': 'CAN',
          'asia': 'IND',
          'au': 'AUS'
        }
      },
      remote: {
        paramName: 'cmpn',
        value: 'Virtual Locations'
      }
    }
  },
  {
    id: 'apple',
    name: 'Apple',
    logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png',
    industry: 'Technology',
    jobBoardUrl: 'https://jobs.apple.com/en-us/search',
    remote: false,
    parameterMap: {
      department: {
        paramName: 'team',
        valueMap: {
          'software': 'Software and Services',
          'engineering': 'Hardware',
          'design': 'Design',
          'product': 'Marketing',
          'marketing': 'Marketing',
          'sales': 'Retail',
          'finance': 'Corporate Functions',
          'hr': 'Corporate Functions',
          'operations': 'Operations and Supply Chain'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Germany',
          'ca': 'Canada',
          'asia': 'China - Mainland',
          'au': 'Australia'
        }
      }
    }
  },
  {
    id: 'meta',
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png',
    industry: 'Technology',
    jobBoardUrl: 'https://www.metacareers.com/jobs/',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'categories',
        valueMap: {
          'software': 'Engineering, Tech & Design',
          'engineering': 'Engineering, Tech & Design',
          'design': 'Design',
          'product': 'Product Management',
          'marketing': 'Sales, Marketing & GTM',
          'sales': 'Sales, Marketing & GTM',
          'finance': 'Finance, Facilities & Admin',
          'hr': 'People & Recruiting',
          'operations': 'Infrastructure',
        }
      },
      experienceLevel: {
        paramName: 'job_type',
        valueMap: {
          'entry': 'Internship/Co-Op',
          'mid': 'Experienced',
          'senior': 'Experienced',
          'lead': 'Experienced',
          'executive': 'Experienced'
        }
      },
      location: {
        paramName: 'locations',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Germany',
          'ca': 'Canada',
          'asia': 'Singapore',
          'au': 'Australia'
        }
      },
      remote: {
        paramName: 'remote',
        value: 'true'
      }
    }
  },
  {
    id: 'netflix',
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png',
    industry: 'Entertainment & Technology',
    jobBoardUrl: 'https://jobs.netflix.com/search',
    remote: true,
    parameterMap: {
       department: {
           paramName: 'q',
           valueMap: {
               'software': 'Software Engineering',
               'engineering': 'Engineering',
               'design': 'Design',
               'product': 'Product Management',
               'marketing': 'Marketing',
               'finance': 'Finance',
               'hr': 'Talent'
           }
       },
       location: {
           paramName: 'q',
           valueMap: {
               'us': 'United States',
               'uk': 'United Kingdom',
               'eu': 'Europe',
               'ca': 'Canada',
               'asia': 'Asia',
               'au': 'Australia'
           }
       }
    }
  },
  {
    id: 'ibm',
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png',
    industry: 'Technology & Consulting',
    jobBoardUrl: 'https://careers.ibm.com/job/search',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'cn',
        valueMap: {
          'software': 'Software Development & Support',
          'engineering': 'Hardware Development & Support',
          'design': 'Design & UX',
          'product': 'Offering Management',
          'marketing': 'Marketing & Communications',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'Human Resources',
          'operations': 'Project Management',
        }
      },
      employmentType: {
        paramName: 'et',
        valueMap: {
          'full-time': 'FULL_TIME',
          'part-time': 'PART_TIME',
          'contract': 'CONTRACTOR',
          'internship': 'INTERN'
        }
      },
      location: {
        paramName: 'cc',
        valueMap: {
          'us': 'US',
          'uk': 'GB',
          'eu': 'DE',
          'ca': 'CA',
          'asia': 'IN',
          'au': 'AU'
        }
      },
      remote: {
        paramName: 'rw',
        value: '1'
      }
    }
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png',
    industry: 'Technology & Cloud Services',
    jobBoardUrl: 'https://salesforce.wd1.myworkdayjobs.com/External_Career_Site',
    remote: true,
    parameterMap: {
       department: {
           paramName: 'jobFamilyGroup',
           valueMap: {
               'software': 'Technology',
               'engineering': 'Technology',
               'design': 'Technology',
               'product': 'Technology',
               'marketing': 'Marketing',
               'sales': 'Sales',
               'finance': 'Finance',
               'hr': 'Employee Success',
               'operations': 'Business Operations'
           }
       },
       location: {
           paramName: 'locationCountry',
           valueMap: {
               'us': 'USA',
               'uk': 'GBR',
               'eu': 'DEU',
               'ca': 'CAN',
               'asia': 'IND',
               'au': 'AUS'
           }
       },
       remote: {
           paramName: 'workplaceType',
           value: 'Remote'
       }
    }
  },
  {
    id: 'adobe',
    name: 'Adobe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/1280px-Adobe_Systems_logo_and_wordmark.svg.png',
    industry: 'Technology & Software',
    jobBoardUrl: 'https://careers.adobe.com/us/en/search-results',
    remote: true,
    parameterMap: {
       department: {
           paramName: 'cf',
           valueMap: {
               'software': 'Engineering',
               'engineering': 'Engineering',
               'design': 'Design',
               'product': 'Product Management',
               'marketing': 'Marketing',
               'sales': 'Sales',
               'finance': 'Finance',
               'hr': 'Employee Experience',
               'operations': 'Operations'
           }
       },
       experienceLevel: {
           paramName: 'ex',
           valueMap: {
               'entry': 'University',
               'mid': 'Professional',
               'senior': 'Professional',
               'lead': 'Professional',
               'executive': 'Professional'
           }
       },
       location: {
           paramName: 'ct',
           valueMap: {
               'us': 'United States',
               'uk': 'United Kingdom',
               'eu': 'Germany',
               'ca': 'Canada',
               'asia': 'India',
               'au': 'Australia'
           }
       },
       remote: {
           paramName: 'attr',
           value: 'Remote'
       }
    }
  },
  {
    id: 'oracle',
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png',
    industry: 'Technology & Cloud Services',
    jobBoardUrl: 'https://eeho.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/requisitions',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'keyword',
        valueMap: {
          'software': 'Developer',
          'engineering': 'Engineer',
          'design': 'Designer',
          'product': 'Product Manager',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'Human Resources',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'European Union',
          'ca': 'Canada',
          'asia': 'India',
          'au': 'Australia'
        }
      }
    }
  },
  {
    id: 'intel',
    name: 'Intel',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1005px-Intel_logo_%282006-2020%29.svg.png',
    industry: 'Technology & Semiconductor',
    jobBoardUrl: 'https://jobs.intel.com/en/search-jobs',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'category',
        valueMap: {
          'software': 'Software',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product Development',
          'marketing': 'Marketing',
          'sales': 'Sales and Marketing',
          'finance': 'Finance',
          'hr': 'Human Resources',
          'operations': 'Manufacturing and Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Germany',
          'ca': 'Canada',
          'asia': 'India',
          'au': 'Australia'
        }
      }
    }
  },
  {
    id: 'nvidia',
    name: 'NVIDIA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png',
    industry: 'Technology & Semiconductor',
    jobBoardUrl: 'https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'jobFamilyGroup',
        valueMap: {
          'software': 'Software Engineering',
          'engineering': 'Hardware Engineering',
          'design': 'Design',
          'product': 'Product Management',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'Human Resources',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'locationCountry',
        valueMap: {
          'us': 'USA',
          'uk': 'GBR',
          'eu': 'DEU',
          'ca': 'CAN',
          'asia': 'IND',
          'au': 'AUS'
        }
      },
      remote: {
        paramName: 'Remote',
        value: 'Yes'
      }
    }
  },
  {
    id: 'airbnb',
    name: 'Airbnb',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png',
    industry: 'Technology & Hospitality',
    jobBoardUrl: 'https://careers.airbnb.com/positions/',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'team',
        valueMap: {
          'software': 'Engineering',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'People',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Europe',
          'ca': 'Canada',
          'asia': 'Asia',
          'au': 'Australia'
        }
      }
    }
  },
  {
    id: 'uber',
    name: 'Uber',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png',
    industry: 'Technology & Transportation',
    jobBoardUrl: 'https://www.uber.com/global/en/careers/list/',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'team',
        valueMap: {
          'software': 'Engineering',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'People',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Germany',
          'ca': 'Canada',
          'asia': 'India',
          'au': 'Australia'
        }
      },
      remote: {
        paramName: 'remote',
        value: 'true'
      }
    }
  },
  {
    id: 'spotify',
    name: 'Spotify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png',
    industry: 'Technology & Music Streaming',
    jobBoardUrl: 'https://www.lifeatspotify.com/jobs',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'department',
        valueMap: {
          'software': 'Engineering',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'HR',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'USA',
          'uk': 'UK',
          'eu': 'Sweden',
          'ca': 'Canada',
          'asia': 'Singapore',
          'au': 'Australia'
        }
      },
      remote: {
        paramName: 'remote',
        value: 'true'
      }
    }
  },
  {
    id: 'slack',
    name: 'Slack',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png',
    industry: 'Technology & Communication',
    jobBoardUrl: 'https://slack.com/careers/jobs',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'team',
        valueMap: {
          'software': 'Engineering',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product Management',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'People',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Europe',
          'ca': 'Canada',
          'asia': 'Asia',
          'au': 'Australia'
        }
      }
    }
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_logo_2023.svg/512px-X_logo_2023.svg.png',
    industry: 'Technology & Social Media',
    jobBoardUrl: 'https://careers.twitter.com/en/jobs.html',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'q',
        valueMap: {
          'software': 'Engineering',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'People',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Europe',
          'ca': 'Canada',
          'asia': 'Asia',
          'au': 'Australia'
        }
      }
    }
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png',
    industry: 'Technology & Professional Networking',
    jobBoardUrl: 'https://careers.linkedin.com/jobs',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'function',
        valueMap: {
          'software': 'Engineering',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'Human Resources',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Dublin, Ireland',
          'ca': 'Canada',
          'asia': 'Bangalore, India',
          'au': 'Australia'
        }
      },
      remote: {
        paramName: 'remote',
        value: 'true'
      }
    }
  },
  {
    id: 'paypal',
    name: 'PayPal',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png',
    industry: 'Technology & Financial Services',
    jobBoardUrl: 'https://jobsearch.paypal-corp.com/en-US/search',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'category',
        valueMap: {
          'software': 'Software Development',
          'engineering': 'Engineering',
          'design': 'Product Design',
          'product': 'Product Management',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'Human Resources',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Europe',
          'ca': 'Canada',
          'asia': 'India',
          'au': 'Australia'
        }
      },
      remote: {
        paramName: 'remote',
        value: '1'
      }
    }
  },
  {
    id: 'square',
    name: 'Block (Square)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Block%2C_Inc._logo.svg/2560px-Block%2C_Inc._logo.svg.png',
    industry: 'Technology & Financial Services',
    jobBoardUrl: 'https://careers.block.xyz/',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'department',
        valueMap: {
          'software': 'Engineering',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'People',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Europe',
          'ca': 'Canada',
          'asia': 'Asia',
          'au': 'Australia'
        }
      },
      remote: {
        paramName: 'remote',
        value: 'Remote'
      }
    }
  },
  {
    id: 'atlassian',
    name: 'Atlassian',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Atlassian-logo.svg/1280px-Atlassian-logo.svg.png',
    industry: 'Technology & Software',
    jobBoardUrl: 'https://www.atlassian.com/company/careers/all-jobs',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'team',
        valueMap: {
          'software': 'Engineering',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product Management',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'People',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Poland',
          'ca': 'Canada',
          'asia': 'India',
          'au': 'Australia'
        }
      },
      remote: {
        paramName: 'remote',
        value: 'true'
      }
    }
  },
  {
    id: 'shopify',
    name: 'Shopify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png',
    industry: 'Technology & E-commerce',
    jobBoardUrl: 'https://www.shopify.com/careers/search',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'teams',
        valueMap: {
          'software': 'Engineering',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'Talent',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'locations',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Europe',
          'ca': 'Canada',
          'asia': 'Asia',
          'au': 'Australia'
        }
      },
      remote: {
        paramName: 'remote',
        value: 'true'
      }
    }
  },
  {
    id: 'twilio',
    name: 'Twilio',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twilio-logo-red.svg/2560px-Twilio-logo-red.svg.png',
    industry: 'Technology & Communications',
    jobBoardUrl: 'https://www.twilio.com/company/jobs',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'department',
        valueMap: {
          'software': 'Engineering',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'Talent',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Europe',
          'ca': 'Canada',
          'asia': 'Asia',
          'au': 'Australia'
        }
      },
      remote: {
        paramName: 'remote',
        value: 'true'
      }
    }
  },
  {
    id: 'stripe',
    name: 'Stripe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png',
    industry: 'Technology & Financial Services',
    jobBoardUrl: 'https://stripe.com/jobs/search',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'team',
        valueMap: {
          'software': 'Engineering',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'People',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Ireland',
          'ca': 'Canada',
          'asia': 'Singapore',
          'au': 'Australia'
        }
      },
      remote: {
        paramName: 'remote',
        value: 'true'
      }
    }
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dropbox_logo.svg/2560px-Dropbox_logo.svg.png',
    industry: 'Technology & Cloud Storage',
    jobBoardUrl: 'https://jobs.dropbox.com/all-jobs',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'department',
        valueMap: {
          'software': 'Engineering',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'People',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Europe',
          'ca': 'Canada',
          'asia': 'Asia',
          'au': 'Australia'
        }
      },
      remote: {
        paramName: 'remote',
        value: 'true'
      }
    }
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png',
    industry: 'Technology & Social Media',
    jobBoardUrl: 'https://www.pinterestcareers.com/jobs/search',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'department',
        valueMap: {
          'software': 'Engineering',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'People',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Europe',
          'ca': 'Canada',
          'asia': 'Asia',
          'au': 'Australia'
        }
      },
      remote: {
        paramName: 'remote',
        value: 'true'
      }
    }
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Coinbase.svg/1200px-Coinbase.svg.png',
    industry: 'Technology & Cryptocurrency',
    jobBoardUrl: 'https://www.coinbase.com/careers/positions',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'department',
        valueMap: {
          'software': 'Engineering',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'People',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Europe',
          'ca': 'Canada',
          'asia': 'Asia',
          'au': 'Australia'
        }
      },
      remote: {
        paramName: 'remote',
        value: 'true'
      }
    }
  },
  {
    id: 'roblox',
    name: 'Roblox',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roblox_Logo_2022.svg/2560px-Roblox_Logo_2022.svg.png',
    industry: 'Technology & Gaming',
    jobBoardUrl: 'https://jobs.roblox.com/careers',
    remote: true,
    parameterMap: {
      department: {
        paramName: 'category',
        valueMap: {
          'software': 'Engineering',
          'engineering': 'Engineering',
          'design': 'Design',
          'product': 'Product',
          'marketing': 'Marketing',
          'sales': 'Sales',
          'finance': 'Finance',
          'hr': 'People',
          'operations': 'Operations'
        }
      },
      location: {
        paramName: 'location',
        valueMap: {
          'us': 'United States',
          'uk': 'United Kingdom',
          'eu': 'Europe',
          'ca': 'Canada',
          'asia': 'Asia',
          'au': 'Australia'
        }
      },
      remote: {
        paramName: 'remote',
        value: 'true'
      }
    }
  }
];