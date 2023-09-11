import express, { Router } from "express"
import PostRoutes from "./routes/store/post"
import AdminPostRoutes from './routes/admin/post'

export default (rootDirectory, options) => {
    const router = Router()

    router.use(PostRoutes)
    router.use(AdminPostRoutes)

    return router
}