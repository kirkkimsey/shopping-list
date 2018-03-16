import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";

import { AddNewPage } from "../add-new/add-new";
import { ProductPage } from "../product/product";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  items = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {
    this.storage.get("data").then(data => {
      this.items = data;
    });
  }
  itemSelected(item) {
    this.navCtrl.push("ProductPage", { item: item });
  }
  addNew() {
    this.navCtrl.push("AddNewPage");
  }
}
