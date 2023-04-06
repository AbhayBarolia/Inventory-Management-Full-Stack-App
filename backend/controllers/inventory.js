const express = require('express');
const Inventory = require('../models/inventory');

exports.getInventoryDetails= (req,res,next)=>{
    Inventory.findAll()
    .then((inventoryData)=>{
        res.status(201).json(inventoryData);
    })
    .catch((err)=>{console.log(err);});
}

exports.addInventoryItem= async (req,res,next)=>{
    try{
    const id= req.body.id;
    const name= req.body.name;
    const quantity= req.body.quantity;
    const price= req.body.price;
    const res1 = await Inventory.create({
        name:name,
        price:price,
        quantity:quantity
        })
        if(res1)
        {
            res.status(201).json({create:true});
        }
        else{
            res.status(500).json({create:false});
        }
}
catch(err)  {console.log(err);}
}

exports.updateInventoryItem= async (req,res,next)=>{
    try{
        console.log(req.params.id);
        const id = req.params.id;
        const qty = req.params.qty;
        const item= await Inventory.findByPk(id);
        const quantity= item.quantity;
        const newQuantity= quantity-qty;
        await item.update({quantity:newQuantity});
        res.status(201).json({update:true});
    }
    catch(err)  {console.log(err);}
}