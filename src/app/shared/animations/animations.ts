import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeOutAnimation = trigger('fadeOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s ease-in', style({ opacity: 1 })),
  ]),
]);

export const bounceAnimation = trigger('bounce', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)'}),
    animate('0.5s ease-out', style({ transform: 'translateY(0)' })),
    animate('0.2s ease-in', style({ transform: 'translateY(-10%)' })),
    animate('0.1s ease-out', style({ transform: 'translateY(0)' })),
  ]),
]);
