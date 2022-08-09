//defino mi array de obtejos   
const servicios = [ {
      "nombre": "Perez Juan",
      "tipo": "carpa",
      "periodo": "quincena",
      "importe": 80000,
    }, 
    {
        "nombre": "Gonzalez Maria",
        "tipo": "sombrilla",
        "periodo": "mes",
        "importe": 50000,
      }, 
      {
        "nombre": "Cruz Jose",
        "tipo": "carpa",
        "periodo": "mes",
        "importe": 150000,
      }, 
      {
        "nombre": "Gomez Julia",
        "tipo": "carpa",
        "periodo": "temporada",
        "importe": 300000,
      }, 
      {
        "nombre": "Fernandez Jorge",
        "tipo": "sombrilla",
        "periodo": "dia",
        "importe": 2000,
      },  
      {
        "nombre": "Pierri Mario",
        "tipo": "carpa",
        "periodo": "dia",
        "importe": 10000,
      }, 
      {
        "nombre": "Martinez Natalia",
        "tipo": "carpa",
        "periodo": "mes",
        "importe": 150000,
      }, 
      {
        "nombre": "Pereyra Osvaldo",
        "tipo": "sombrilla",
        "periodo": "quincena",
        "importe": 25000,
      },  
] 


let myArr = [
    {
      id: 1,
      price: 20,
      amount: 3
    },
    {
      id: 2,
      price: 10,
      amount: 1,
    },
    {
      id: 3,
      price: 5,
      amount: 16,
    },
  ];
  
  let myObj = myArr.find(el => el.id=1);
  
  myObj.amount = 25;
  
  console.log(myArr);
     