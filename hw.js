// grab the ID with output
const output = document.getElementById('output');

// create the object
const hw = {
    name: "Rollin' Solo",
    company: "Mattel",
    companyMission: "Empowering the next generation though play",
    ageLimit: "3+",
    productId: "HKK41-N7C5",
    color: "red and blue",
    wheelCount: 4,
    quantity: 1,
    origin: "Malaysia",
    market: "US and Canada",
    importBy: "Mississauga, ON",
    showInfo() {
        let showInfo = `${this.company} with the mission of "${this.companyMission}" released a new product called ${this.name} which has ${this.color} in color with ID of ${this.productId} for children with age limit: ${this.ageLimit}. The product has ${this.quantity} car included with ${this.wheelCount} wheels made in ${this.origin} for the markets of ${this.market} and it is imported by ${this.importBy}.`;
        return showInfo;
    }
}

// show the output onto the screen
output.textContent = hw.showInfo();