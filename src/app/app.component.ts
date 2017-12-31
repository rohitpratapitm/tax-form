import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private name: string;

  setName(name: string) {
    this.name = name;
  }

  pdf(): void {
    const doc = new jsPDF();
    const options = {
        pagesplit: true
    };
    doc.setProperties({
      title: 'Tax Form',
      subject: 'Tax form',
      author: 'NICOLE KENNEDY',
      keywords: 'generated, javascript, web 2.0, ajax',
      creator: 'NICOLE KENNEDY'
     });

    doc.addHTML(document.getElementById('myForm'), 0, 0, options, () => {
      doc.save(this.name + '.pdf');
    });
}
}
