import mongoose from "mongoose";
import Product from "../models/product";
import Joi from "joi";

export const getAll = async function (req, res) {
    try {
        const data = await Product.find()
        if (data.length === 0) {
            return res.status(400).json({ message: "Khong co san pham nao" })
        }
        return res.json(data)
    } catch (error) {
        return res.json({
            message: error
        })
    }
}
export const get = async function (req, res) {
    try {
        const data = await Product.findOne({ _id: req.params.id })
        if (!data) {
            return res.status(400).json({ message: "ko co san pham" })
        }
        return res.json(data)
    } catch (error) {
        return res.json({
            message: error
        })
    }
}
export const create = async (req, res) => {
    try {
        const body = req.body
        const data = await Product.create(body)



        return res.json({
            message: "Them thanh cong",
            data,
        })
    } catch (error) {
        message: error
    }
}
export const remove = async (req, res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id)
        return res.json({ message: "xoa thanh cong", data })
    } catch (error) {
        return res.json({
            message: error
        })
    }
}
export const update = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const data = await Product.findOneAndUpdate({ _id: id }, body, { new: true })
        if (!data) {
            return res.status(400).json({ message: "cap nhat that bai" })

        }
        return res.json({
            message: "Cap nhat thanh cong",
            data,
        })
    } catch (error) {
        return res.json({
            message: error
        })
    }
} 