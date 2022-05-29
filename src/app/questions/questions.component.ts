import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {

  @Output() showDash = new EventEmitter<void>();

  questionsAndAnswers: any = [
    {
      next: true,
      answersAndQuestions: [
        {
          question: "What is your type of diabetes?",
          answersSecond: [
            {
              type: "typeDiabetes",
              value: "type1",
              description: "Type 1"
            },
            {
              type: "typeDiabetes",
              value: "type2",
              description: "Type 2"
            },
            {
              type: "typeDiabetes",
              value: "lada",
              description: "LADA"
            },
            {
              type: "typeDiabetes",
              value: "mody",
              description: "MODY"
            },
            {
              type: "typeDiabetes",
              value: "gestational",
              description: "Gestational"
            },
            {
              type: "typeDiabetes",
              value: "prediabetes",
              description: "Prediabetes"
            },
            {
              type: "typeDiabetes",
              value: "other",
              description: "Other"
            }
          ]
        }
      ]
    },
    {
      next: false,
      question: "What is your diabetes therapy?",
      answersAndQuestions: [
        {
          question: "Insulin Therapy",
          answersSecond: [
            {
              type: "insulinTherapy",
              value: "devices",
              description: "Pen injectors/Syringes"
            },
            {
              type: "insulinTherapy",
              value: "insulinPumps",
              description: "Insulin pumps"
            },
            {
              type: "insulinTherapy",
              value: "noInsulin",
              description: "No insulin"
            },
          ]
        },
        {
          question: "Pills",
          answersSecond: [
            {
              type: "medicine",
              value: "yes",
              description: "Yes"
            },
            {
              type: "medicine",
              value: "no",
              description: "No"
            }
          ]
        }
      ]
    },
    {
      next: false,
      question: "What units do you use?",
      answersAndQuestions: [
        {
          question: "Glucose",
          answersSecond:
            [
              {
                type: "bloodGlucose",
                value: "mgdL",
                description: "mg/dL"
              },
              {
                type: "bloodGlucose",
                value: "mmolL",
                description: "mmol/L"
              }
            ]
        },
        {
          question: "Carbohydrates",
          answersSecond: [
            {
              type: "carbohydrates",
              value: "g",
              description: "g"
            },
            {
              type: "carbohydrates",
              value: "ex",
              description: "Ex."
            }],
        }
      ]
    },
    {
      next: false,
      last: false,
      answersSecond: null,
      question: "What are your desired values?",
    },

  ]

  answers: any = {
    typeDiabetes: null,
    insulinTherapy: null,
    medicine: null,
    bloodGlucose: null,
    carbohydrates: null,
    finished: false,
    hypoglycemia: 79,
    desiredRangeMin: 80,
    desiredRangeMax: 120,
    hyperglycemia: 190,
  }

  lastArrived: boolean = false;

  constructor(private router: Router, private configService: ConfigService) { }

  ngOnInit() {
  }

  checkIfHasErrors(itemToCheck: any, button?: any) {

    let check = 0;
    itemToCheck.error = false;

    itemToCheck.answersAndQuestions.find((element: any) => {
      if (this.answers[element.answersSecond[0].type] === null) {
        check++;
        itemToCheck.error = true;
      }
    });


    if (itemToCheck.answersAndQuestions.length > 1 && check > 0) {
      itemToCheck.error = !button ? false : true;;
    }

  }

  nextQuestion() {
    const found = this.questionsAndAnswers.findIndex((element: { next: boolean; }) => element.next == true);

    this.checkIfHasErrors(this.questionsAndAnswers[found], true);

    if (!this.questionsAndAnswers[found].error) {
      this.questionsAndAnswers[found].next = false;
      this.questionsAndAnswers[found].last = false;
      if ((this.questionsAndAnswers.length - 1) === (found + 1)) {
        this.lastArrived = true;
        this.questionsAndAnswers[found + 1].last = true;
        return;
      }
      this.questionsAndAnswers[found + 1].next = true;
    }

  }

  changeValue(event: any, type: string) {

    if (event.maxValue && event.minValue
      && ( this.answers.desiredRangeMax != event.maxValue
      || this.answers.desiredRangeMin != event.minValue)) {
      this.answers.desiredRangeMax = event.maxValue;
      this.answers.desiredRangeMin = event.minValue;
    }
    else if (type != 'desiredRange') {
      this.answers[type] = event.maxValue ? event.maxValue : event.minValue;
    }
  }

  previousQuestion() {
    const found = this.questionsAndAnswers.findIndex((element: { next: boolean; last: boolean }) => element.next == true || element.last == true);

    this.questionsAndAnswers[found].next = false;
    this.questionsAndAnswers[found - 1].next = true;
    this.lastArrived = false;
    this.questionsAndAnswers[found].last = false;
  }

  finishQuestion() {
    this.answers.finished = true;
    this.configService.setConfig(this.answers);
    this.showDash.emit();
    this.router.navigate(['/dashboard']);
  }

}