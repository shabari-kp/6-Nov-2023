import { Directive,Renderer2,ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeColorDirective]'
})
export class ChangeColorDirectiveDirective {

  //DI in Angular
  constructor(private e1:ElementRef,private ren:Renderer2)
   {
      // this.changeTextColor("red");
   }
 

   @HostListener ('mouseenter')mouseHovered() {
     this.changeTextColor('red');
   }


   @HostListener('mouseleave')mouseAway() {
    this.changeTextColor('cyan');
   }



    changeTextColor(mycolor:string)
    {
 this.ren.setStyle(this.e1.nativeElement,'color',mycolor)
    }


}
