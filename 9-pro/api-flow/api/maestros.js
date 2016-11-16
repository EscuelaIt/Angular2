/** Módulo para lecturas de objetos maestros en memoria */
module.exports = (app, ruta) => {

    // Podemos responder emitiendo JSON

    const tipos = [
        { id: 1, text: 'Ingreso' },
        { id: 2, text: 'Gasto' }
    ];

    const categorias = [
        { id: 1, text: 'Nómina', type: 1 },
        { id: 2, text: 'Ventas', type: 1 },
        { id: 3, text: 'Intereses', type: 1 },
        { id: 4, text: 'Hipoteca', type: 2 },
        { id: 5, text: 'Compras', type: 2 },
        { id: 6, text: 'Domiciliaciones', type: 2 },
        { id: 7, text: 'Impuestos', type: 2 }
    ];

    /** Al recibir un GET ene sta ruta, respondemos con esta funcioón */
    app.get(`${ruta}/tipos`, (req, res) =>  res.json(tipos));

    app.get(`${ruta}/categorias`, (req, res) => res.json(categorias));
}

