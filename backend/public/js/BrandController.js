import Asszinkron from "./asszinkron.js"
class BrandController{
    constructor(){
        let vegpont = "brands"

        const a = new Asszinkron()
        a.adatBe(vegpont,this.megjelenit)

    }

    megjelenit(adat){
        console.log(adat)
      
    }
    
}

export default BrandController;