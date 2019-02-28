import { Directive, ElementRef, OnInit, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appTimesLeft]'
})
export class TimesLeftDirective implements OnInit, OnDestroy {
  @Input('appTimesLeft') challengeEndDat: string;

  /** Таймер для остчета оставшегося до события времени */
  private timer;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {

    this.timer = setInterval(() => {
      const secondsLeft = (Date.parse(this.challengeEndDat) - Date.now()) / 1000;

      if (secondsLeft <= 1) {
        return clearInterval(this.timer);
      }

      const result = this.convertDate(secondsLeft);
      this.changeElementValue(result);


    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  /**
   * Присвоить элементу новое значение
   * @param value - значение, которое необходимо вывести в элемент
   */
  private changeElementValue(value: string) {
    this.el.nativeElement.innerText = value;
  }

  /**
   * Конвертировать секунды в время оставшегося до начала события
   * @param seconds - к=во секунд
   */
  private convertDate(seconds: number): string {
    if (seconds <= 0) {
      return '0h 0m 0s';
    }

    // Выделить из "seconds" дни, часы, минуты и секунды
    const days = Math.floor(seconds / 86400);
    seconds -= days * 86400;
    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    return days ? days.toLocaleString() : `${hours}h ${minutes}m ${seconds}s` ;
  }
}

