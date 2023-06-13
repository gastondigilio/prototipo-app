const { ListPrice } = require("../../db");
const { Op } = require('sequelize');

async function postListPrice(req, res, next) {

    try {

        const { name, porcenList } = req.body;

        if (name && porcenList) {

            const listPrice = await ListPrice.findOrCreate({

                where: {

                    name: {

                        [Op.eq]: name

                    }

                },

                defaults: {

                    name,

                    porcenList
                    
                }

            });

            res.status(201).send({ listPrice });

        } else {

            res.status(400).send({ Error: "El Nombre es requerido" });
        }

    } catch (error) {

        console.log(error)

    }

}

module.exports = { postListPrice };