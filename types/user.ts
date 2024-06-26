export interface User {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
  genderName: string;
  nearestLandmark: string | null;
  residentDistrictId: string | null;
  residentDistrict: residentDistrict;
  residentSectorId: string | null;
  residentSector: residentSector;
  cohortId: number | null;
  cohort: cohort;
  gender: gender;
  track: string | null;
  organizationFoundedId: number | null;
  organizationFounded: organization;
  positionInFounded: string | null;
  organizationEmployedId: number | null;
  organizationEmployed: organization;
  positionInEmployed: string | null;
  password: string | null;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

export interface organization {
  id: string;
  name: string;
  workingSector: string;
  districtId: string;
  district: residentDistrict;
  sectorId: string;
  sector: residentSector;
  website: string;
}

export interface cohort {
  id: string;
  name: string;
}

export interface Role {
  id: string;
  name: string;
}

export interface gender {
  id: string;
  name: string;
}

export interface residentDistrict {
  id: string;
  name: string;
}

export interface residentSector {
  id: string;
  name: string;
}
