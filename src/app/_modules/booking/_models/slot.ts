export interface SelectedDoctor {
  fid: string;
  did: string;
}

export interface BookingSlotResponse {
  readonly id: string;
  readonly facilityId: string;
  readonly facilityName: string;
  readonly doctorId: string;
  readonly doctorName: string;
  readonly startTime: Date;
  readonly endTime: Date;
  readonly bookingEnabled: boolean;
  readonly status: string;
  readonly charge: number;
  readonly autoApproveEnabled: boolean;
}
