const express = require('express');
const router = express.Router();
const MenuItem = require("./../modals/menu");

router.post("/", async (req, res) => {
  try {
    const Menudata = req.body;
    const newMenu = new MenuItem(Menudata);
    const response = await newMenu.save();
    res.json(response);
    console.log("menu add sucessfully");
  } catch (error) {
    res.json(error);
  }
});


router.get("/", async (req, res) => {
  try {
    const getMenuData = await MenuItem.find();
 res.json(getMenuData);
    console.log("sucessfully fetched menu data");
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;