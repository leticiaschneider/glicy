import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {

  constructor() { }

  @Input() max: any;
  @Input() min: any;
  @Input() minValue: any;
  @Input() maxValue: any;
  @Input() step: any;
  @Input() typeGlucose: any;
  @Input() showSign = false;

  @Output() getNewValues = new EventEmitter();

  percentMinValue: any;
  percentMaxValue: any;
  inversePercentMaxValue: any;
  inversePercentMinValue: any;

  ngOnChanges() {
    this.setValues();
  }

  ngOnInit() {
    this.setValues();
  }

  setValues() {
    switch (this.typeGlucose) {
      case 'Desired range':
        this.actionMinValue(this.minValue);
        this.actionMaxValue(this.maxValue);
        break;

      case 'Hyperglycemia':
        this.actionMaxValue(this.maxValue);
        this.percentMinValue = 0;
        break;

      case 'Hypoglycemia':
        this.actionMinValue(this.minValue);
        break;
    }
  }

  actionMinValue(valueInput: any) {
    valueInput = valueInput.target && valueInput.target.value ? valueInput.target.value : valueInput;
    this.minValue = parseInt(valueInput);
    if (this.minValue > this.maxValue && this.maxValue != 0) {
      this.actionMaxValue(this.minValue++);
    }
    this.percentMinValue = this.getPercent(this.minValue);

    if (this.typeGlucose == 'Hypoglycemia') {
      this.inversePercentMinValue = 100 - this.minValue;
    }
    this.getValues();
  }

  actionMaxValue(valueInput: any) {
    valueInput = valueInput.target && valueInput.target.value ? valueInput.target.value : valueInput;
    this.maxValue = parseInt(valueInput);
    if (this.maxValue <= this.minValue && this.maxValue != 0) {
      this.actionMinValue(this.maxValue++);
    }
    this.inversePercentMaxValue = 100 - this.getPercent(this.maxValue);
    this.percentMaxValue = this.getPercent(this.maxValue);
    this.getValues();
  }

  getValues() {
    this.getNewValues.emit({
      minValue: this.minValue,
      maxValue: this.maxValue
    });
  }

  getPercent(value: any) {
    return (100 / (this.max - this.min)) * value - (100 / (this.max - this.min)) * this.min;
  }

}