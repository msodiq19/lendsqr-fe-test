export interface MenuData {
    customers: string[];
    businesses: string[];
    settings: string[];
  }
  
  export interface UserProfile {
    fullName: string;
    userId: string;
    tier: number;
    balance: string;
    bankInfo: string;
    email: string;
    phone: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    residenceType: string;
    education: {
      level: string;
      employmentStatus: string;
      sector: string;
      duration: string;
    };
    income: {
      officeEmail: string;
      monthlyRange: string;
      loanRepayment: string;
    };
    socials: {
      twitter: string;
      facebook: string;
      instagram: string;
    };
    guarantor: {
      fullName: string;
      phone: string;
      email: string;
      relationship: string;
    };
  }