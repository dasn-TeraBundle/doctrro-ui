import {Component, OnDestroy, OnInit} from '@angular/core';
import {DoctorSearchResponse, SearchFilters} from "../../_models";
import {SearchService} from "../../_services/search.service";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {getSearchCriteria, updateSearchCriteria} from "../../store/search/filters/search-filter.action";
import {selectDoctors, selectSearchFilters} from "../../store/booking.state";
import {fetchDoctors, updateDoctors} from "../../store/search/doctors/doctors.action";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  criteria: SearchFilters;
  doctors$: Observable<DoctorSearchResponse[]>;

  private criteriaSub: any;
  private isCriteriaUpdated = true;

  constructor(private searchService: SearchService,
              private store: Store) {
  }

  ngOnInit(): void {
    this.criteriaSub = this.store.select(selectSearchFilters).subscribe(criteria => {
      console.log(criteria);
      if (criteria === undefined) {
        const cr = new SearchFilters();
        cr.loc.lat = -73.9667;
        cr.loc.lon = 40.78;
        cr.radius = 5;

        this.store.dispatch(updateSearchCriteria({criteria: cr}));
      } else {
        this.criteria = {...criteria};
      }
    });

    this.doctors$ = this.store.select(selectDoctors);
  }

  onChangeSearchParams(): void {
    this.isCriteriaUpdated = true;
    this.store.dispatch(updateSearchCriteria({criteria: this.criteria}));
  }

  searchDoctor(): void {
    if (this.isCriteriaUpdated) {
      this.store.dispatch(fetchDoctors({criteria: this.criteria}));
    }

    this.isCriteriaUpdated = false;
  }

  ngOnDestroy(): void {
    this.criteriaSub.unsubscribe();
  }
}
