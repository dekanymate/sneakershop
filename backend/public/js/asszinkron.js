class Asszinkron {
   
    constructor() {

    }

    adatModosit(data) {
        
    }
    adatTorol(i) {
       
        
    }



    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                
                
                myCallBack(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default Asszinkron;