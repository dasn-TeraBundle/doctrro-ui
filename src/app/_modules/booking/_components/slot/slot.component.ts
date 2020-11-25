import {Component, Input, OnInit} from '@angular/core';
import {BookingSlotResponse} from "../../_models";

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {

  @Input() bookingSlot: BookingSlotResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
