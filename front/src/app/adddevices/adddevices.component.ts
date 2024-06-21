import { Component } from '@angular/core';

interface Device {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-adddevices',
  templateUrl: './adddevices.component.html',
  styleUrls: ['./adddevices.component.css']
})
export class AdddevicesComponent {
  devices: Device[] = [
    { value: '0', viewValue: 'Smart Agriculture' },
    { value: '1', viewValue: 'AquaOptim' },
    { value: '2', viewValue: 'Healthcare' },
    { value: '3', viewValue: 'Industriel' },
    { value: '4', viewValue: 'Others' }
  ];

  seclevel: string = '';  // Initialisation de la propriété
  levels: string[] = ['High', 'Low', 'None'];

  perlevel: string = '';
  periorities: string[] = ['High', 'Low', 'None'];
}
