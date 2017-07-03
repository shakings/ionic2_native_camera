import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
 
@Component({
    templateUrl: './home.html'
})
export class HomePage {
 
    public base64Image: string;
 
    constructor(public navCtrl: NavController, private camera: Camera) {
        this.base64Image = "https://placehold.it/150x150";
    } 
   
    public takePicture() {
     this.camera.getPicture({
        quality : 75,
        destinationType : this.camera.DestinationType.DATA_URL,
        sourceType : this.camera.PictureSourceType.CAMERA,
        allowEdit : true,
        encodingType: this.camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        saveToPhotoAlbum: false
        }).then(imageData => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        }, error => {
        console.log("ERROR -> " + JSON.stringify(error));
        });
    }
}