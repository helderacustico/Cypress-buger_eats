const {faker} = require('@faker-js/faker')

export default {

    deliver: function() {

        var firtName = faker.name.firstName()
        var lastName = faker.name.lastName()
        
        var data = {
            name: `${firtName} ${lastName}`,
            cpf: '45698712321',
            email: faker.internet.email(firtName),
            whatsapp: '77991364331',
            address: {
                postalcode: '45994033',
                street: 'Rua Egberto Rabelo Pina',
                number: '428',
                details: 'Ap 100',
                district: 'Redenção',
                city_state: 'Teixeira de Freitas/BA'
        },
        delivery_method: 'Moto',
        cnh: 'cnh-digital.jpg'
        }
        return data
    }
}