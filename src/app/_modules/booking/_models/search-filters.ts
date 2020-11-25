import {Location} from "./location";

export class SearchFilters {
  loc: Location;
  radius: number;
  speciality: string;

  constructor() {
    this.loc = new Location();
  }

}
