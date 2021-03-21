export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    //Do a switch statement, default being the regular
    const dailyBenefitIncrease = 1;
    for (var i = 0; i < this.drugs.length; i++) { //goes through all the drugs list
      this.drugs[i].expiresIn--; // if it doesn't exist, the expiry date doesn't change
      switch (this.drugs[i].name) {
        case "Herbal Tea":
          if (this.drugs[i].expiresIn >= 0) {
            this.drugs[i].benefit += dailyBenefitIncrease;
          } else {
            this.drugs[i].benefit += 2 * dailyBenefitIncrease;
          }
          if (this.drugs[i].benefit > 50) {
            this.drugs[i].benefit = 50;
          }
          break;
        case "Fervex":
          if (this.drugs[i].expiresIn < 0) {
            this.drugs[i].benefit = 0;
          } else if (this.drugs[i].expiresIn <= 5) {
            this.drugs[i].benefit += 3 * dailyBenefitIncrease;
          } else if (this.drugs[i].expiresIn <= 10) {
            this.drugs[i].benefit += 2 * dailyBenefitIncrease;
          } else {
            this.drugs[i].benefit += dailyBenefitIncrease;
          }
          if (this.drugs[i].benefit > 50) {
            this.drugs[i].benefit = 50;
          }
          break;
        case "Magic Pill":
          this.drugs[i].expiresIn++;
          break;
        case "Dafalgan":
          if (this.drugs[i].expiresIn >= 0) {
            this.drugs[i].benefit -= 2 * dailyBenefitIncrease;
          } else {
            this.drugs[i].benefit -= 4 * dailyBenefitIncrease;
          }
          if (this.drugs[i].benefit < 0) {
            this.drugs[i].benefit = 0;
          }
          break;
        default:
          if (this.drugs[i].expiresIn >= 0) {
            this.drugs[i].benefit -= dailyBenefitIncrease;
          } else {
            this.drugs[i].benefit -= 2 * dailyBenefitIncrease;
          }
          if (this.drugs[i].benefit < 0) {
            this.drugs[i].benefit = 0;
          }
      }
      // if (
      //   this.drugs[i].name != "Herbal Tea" &&
      //   this.drugs[i].name != "Fervex"
      // ) {
      //   // eslint-disable-next-line prettier/prettier
      //   if (this.drugs[i].benefit > 0) { //Magic pill never expires nor decreases in Benefit
      //     if (this.drugs[i].name != "Magic Pill") {
      //       this.drugs[i].benefit = this.drugs[i].benefit - 1; // name a const decreaseDaily for benefit loss so that you can change this value easier
      //     }
      //   }
      // } else {
      //   if (this.drugs[i].benefit < 50) {
      //     this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //     if (this.drugs[i].name == "Fervex") {
      //       if (this.drugs[i].expiresIn < 11) {
      //         if (this.drugs[i].benefit < 50) {
      //           this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //         }
      //       }
      //       if (this.drugs[i].expiresIn < 6) {
      //         if (this.drugs[i].benefit < 50) {
      //           this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //         }
      //       }
      //     }
      //   }
      // }
      // if (this.drugs[i].name != "Magic Pill") {
      //   this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      // }
      // if (this.drugs[i].expiresIn < 0) {
      //   if (this.drugs[i].name != "Herbal Tea") {
      //     if (this.drugs[i].name != "Fervex") {
      //       if (this.drugs[i].benefit > 0) {
      //         if (this.drugs[i].name != "Magic Pill") {
      //           this.drugs[i].benefit = this.drugs[i].benefit - 1; //should degrade twice as fast (-2 * decreaseDaily instead of -1 * decreaseDaily)
      //         }
      //       }
      //     } else {
      //       this.drugs[i].benefit =
      //         this.drugs[i].benefit - this.drugs[i].benefit;
      //     }
      //   } else {
      //     if (this.drugs[i].benefit < 50) {
      //       this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //     }
      //   }
      // }
    }

    return this.drugs;
  }
}
