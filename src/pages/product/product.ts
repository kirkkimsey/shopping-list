import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-product",
  templateUrl: "product.html"
})
export class ProductPage {
  item = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductPage");
  }
  remove() {
    //remove item from data
    this.navCtrl.pop();
  }
  bought() {
    //set item to bought
    this.navCtrl.pop();
  }
}
