/** Copyright 2023 Infosys Ltd. */
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'ngx-custom-pipe';
  public aggrPipes = false;
  public boolPipes = false;
  public collPipes = false;
  public numPipes = false;
  public objPipes = false;
  public strPipes = false;

  /** ----------------------------------------------------------------------- */
  /** BELOW FUNCTIONS ARE SAMPLE FUNCTIONS USED TO DEMONSTRATE PIPE'S FEATURE */
  /** ----------------------------------------------------------------------- */

  public pluckArr = [
    {name: 'Alex', details: {official: {designation: 'Coder', organization: 'AB CORP.'}, personal: {aadhar: '111122223333', pan: 'ABCDE1234F'}}},
    {name: 'Ben', details: {official: {designation: 'Coder', organization: 'AB CORP.'}, personal: {aadhar: '222233334444', pan: 'GHIJ1234K'}}},
    {name: 'Ceth', details: {official: {designation: 'Coder', organization: 'AB CORP.'}, personal: {aadhar: '333344445555', pan: 'LMNO1234P'}}}
  ];

  public filterArr = [
    {name: 'Alex', details: {official: {designation: 'Coder', organization: 'AB CORP.'}, personal: {aadhar: '111122223333', pan: 'ABCDE1234F'}}},
    {name: 'Ben', details: {official: {designation: 'Coder', organization: 'AB CORP.'}, personal: {aadhar: '222233334444', pan: 'GHIJ1234K'}}},
    {name: 'Ceth', details: {official: {designation: 'Tester', organization: 'AB CORP.'}, personal: {aadhar: '333344445555', pan: 'LMNO1234P'}}}
  ]

  public mapFunction(input: any) {
    return input + input;
  }

  public filterFunction(arr: any[]): any[] {
    return arr.filter(el => {return el['name']==='Alex'});
  }

  /** ------------------------------------------------------------------- */
  /** END OF SAMPLE FUNCTIONS, STARTING DEMO UI FUNCTIONS FOR PAGE RENDER */
  /** ------------------------------------------------------------------- */

  public scroll(el: HTMLElement): void {
    el.scrollIntoView({behavior: 'smooth'});
  }

  public topFunction() {
    document.body.scrollTo({top: 0, behavior: 'smooth'});
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
  }

  public expandClicked(pipeType: string): void {
    this.aggrPipes = pipeType==='aggrPipes';
    this.boolPipes = pipeType==='boolPipes';
    this.collPipes = pipeType==='collPipes';
    this.numPipes = pipeType==='numPipes';
    this.objPipes = pipeType==='objPipes';
    this.strPipes = pipeType==='strPipes';
  }

  @HostListener('window:scroll', ['$event'])
  public displayScrToTop() {
    let mybutton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      // @ts-ignore
      mybutton.style.display = "block";
    } else {
      // @ts-ignore
      mybutton.style.display = "none";
    }
  }
}
