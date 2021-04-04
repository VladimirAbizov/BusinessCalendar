(() => {
    "use strict"
    module.exports = () => {

        let users = [
            { id: "5da244774a56ac93e61ae42a", name: "TestUser", phoneNumber: "89370002707", notify: true }
        ]

        let services = [
            { id: "5da240aa6ed927a1e9c86f8f", name: "service1", leadTime: 51, price: 20, difficulty: 3, user: users[0] },
            { id: "5da240aa8945de18eb13af34", name: "service2", leadTime: 57, price: 27, difficulty: 0, user: users[0] },
            { id: "5da240aa9793a6c41ecd02b4", name: "service3", leadTime: 34, price: 40, difficulty: 1, user: users[0] },
            { id: "5da240aa5f375be7e335fd1c", name: "service4", leadTime: 39, price: 22, difficulty: 0, user: users[0] },
            { id: "5da240aa1e3d29d0a5ff046f", name: "service5", leadTime: 58, price: 31, difficulty: 3, user: users[0] },
            { id: "5da240aa914325fda2f2d3f5", name: "service6", leadTime: 20, price: 40, difficulty: 2, user: users[0] },
            { id: "5da240aa1669a3c92ac6f408", name: "service7", leadTime: 39, price: 33, difficulty: 3, user: users[0] }
        ];

        let tasks = [
            { id: "5da24490f7677fcc9afe956f", date: new Date(), clientName: "Jylia", service: services[0], user: users[0] },
            { id: "5da24490c92b1e1d56186599", date: new Date(), clientName: "Natasha", service: services[1], user: users[0] }
        ];

        return {
            users: users,
            services: services,
            tasks: tasks
        }
    };
})();