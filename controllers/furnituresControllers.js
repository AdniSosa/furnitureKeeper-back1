const Furniture = require('../models/Furniture')

const FurnituresControllers = {
    //* Controlador para traer todos los muebles
    async getAllFurnitures(req, res) {

        try {
            const findFurnitures = await Furniture.find();
            res.json(findFurnitures)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Error getting all the furnitures` })
        }
    },
    //*Controlador para buscar por estancia
    async getFurnitures(req, res) {
        const roomToFind = req.params.room

        try {
            const findFurnitures = await Furniture.find({ room: roomToFind });
            res.json(findFurnitures)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Error getting all the furnitures in ${roomToFind}` })
        }
    },
    //*Controlador para buscar por tienda
    async getStoreFurnitures(req, res) {
        const storeToFind = req.params.store
        //console.log(storeToFind)

        try {
            const findFurnitures = await Furniture.find({ store: storeToFind });
            res.json(findFurnitures)

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Error getting all the furnitures in ${roomToFind}` })
        }
    },
    //*Controlador para buscar por nombre
    async getFurnitureByName(req, res) {
        const furnitureToFind = req.body.searchInput;
        const removeAccents = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        const normalizedSearch = removeAccents(furnitureToFind);
        try {
            const findFurniture = await Furniture.find({
                $or: [
                    { name: { $regex: normalizedSearch, $options: "i" } },
                    { store: { $regex: normalizedSearch, $options: "i" } },
                    { room: { $regex: normalizedSearch, $options: "i" } },
                ],
            });
            res.json(findFurniture);

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Error finding the furniture: ${furnitureToFind}` })
        }
    },

    //*Controlador para buscar por id
    async getFurnitureById(req, res) {
        const furnitureToFind = req.params._id;

        try {
            const findFurniture = await Furniture.findById( furnitureToFind );
            res.json(findFurniture);

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Error finding the furniture: ${furnitureToFind}` })
        }
    },
    //*Controlador para favoritos
    async getFavorites(req, res) {

        try {
            const favorites = await Furniture.find({ favorite: true });
            res.json(favorites)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error getting the articles' })
        }
    },
    //*Controlador para subir nuevo artículo
    async createFurniture(req, res) {
        try {
            const newFurniture = await Furniture.create({ ...req.body });
            res.status(201).json(newFurniture)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error creating the article' })
        }
    },
    //*Controlador para editar un artículo
    async updateFurniture(req, res) {
        const furnitureToEdit = req.params._id,
            name = req.body.name,
            price = req.body.price,
            room = req.body.room,
            size = req.body.size,
            store = req.body.store,
            url = req.body.url,
            image = req.body.image,
            favorite = req.body.favorite;

        try {
            const editFurniture = await Furniture.findByIdAndUpdate(
                furnitureToEdit, {
                name,
                price,
                room,
                size,
                store,
                url,
                image,
                favorite
            }, { new: true }
            )
            res.json(editFurniture)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error editing the product' })
        }
    },
    //*Controlador para borrar un artículo
    async deleteFurniture(req, res) {
        const furnitureToDelete = req.params._id;
        try {
            const deletedFurniture = await Furniture.findByIdAndDelete(furnitureToDelete);
            res.json(deletedFurniture);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting the product' })
        }
    }
}

module.exports = FurnituresControllers;