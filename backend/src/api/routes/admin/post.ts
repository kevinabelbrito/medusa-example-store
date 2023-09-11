import express, { Router } from "express"

const router = Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.post("/admin/posts", async (req, res) => {
    const postService = req.scope.resolve("postService");
    const newPost = await postService.create(req.body);
    res.status(201).json(newPost);
})

router.put("/admin/posts/:id", async (req, res) => {
    try {
        const postService = req.scope.resolve("postService");
        const updatedPost = await postService.update(req.params.id, req.body);
        res.status(201).json(updatedPost);
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error
        });
    }
})

router.delete("/admin/posts/:id", async (req, res) => {
    try {
        const postService = req.scope.resolve("postService");
        await postService.delete(req.params.id);
        res.status(204).json({
            message: 'The post has been deleted'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error
        });
    }
})

export default router