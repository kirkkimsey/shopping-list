import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";

import { HomePage } from "../home/home";

/**
 * Generated class for the AddNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-add-new",
  templateUrl: "add-new.html"
})
export class AddNewPage {
  item: {};
  items = [];
  itemName: string;
  itemQuantity: string;
  itemPrice: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {}

  addItem() {
    this.storage.get("data").then(data => {
      data = [
        (this.item = {
          name: this.itemName,
          price: this.itemPrice,
          quantity: this.itemQuantity
        })
      ];
      this.items = data;
      this.items.push(this.item);
      this.storage.set("data", this.items);
      this.navCtrl.push(HomePage);
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddNewPage");
  }
}
