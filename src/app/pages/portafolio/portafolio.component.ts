import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent {

  show: Boolean [] = [false,false];
  msgLink: string = 'Leer más';

  showMsg(opcion : string) {
    switch (opcion) {
      case 'uno':
        if(this.show[0]){
          this.show[0] = false;
          this.msgLink = 'Leer más';
        }else {
          this.show [0] = true;
          this.msgLink = 'Leer menos';
        }
        break;
      case 'dos':
        if(this.show[1]){
          this.show[1] = false;
          this.msgLink = 'Leer más';
        }else {
          this.show [1] = true;
          this.msgLink = 'Leer menos';
        }
    }
  }
}
