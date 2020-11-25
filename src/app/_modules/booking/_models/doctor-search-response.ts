export interface DoctorSearchResponse {
  readonly regId: string;
  readonly name: string;
  readonly sex: string;
  readonly experience: number;
  readonly degree: string;
  readonly speciality: string;
  readonly about: string;
  readonly rating: number;
  readonly clinics: Clinic[];
}

export interface Clinic {
  readonly id: string;
  readonly name: string;
  readonly type: string;
}
