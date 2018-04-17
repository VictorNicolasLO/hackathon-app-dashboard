import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  @Output("selectPhoto")
  selectPhoto = new EventEmitter()

  @Output("imageFound")
  imageFound = new EventEmitter()
  
  constructor() { }

  ngOnInit() {
  }
  setImage(event) {
    if (event.target.files && event.target.files[0]) {
      this.imageFound.emit(event.target.files[0])
      var reader = new FileReader();
      reader.onload = (e: any) => {
        /*$('#blah')
          .attr('src', e.target.result)
          .width(150)
          .height(200);
      };*/
   
        this.selectPhoto.emit(e.target.result)
      }
      reader.readAsDataURL(event.target.files[0]);

    }
  }

}
