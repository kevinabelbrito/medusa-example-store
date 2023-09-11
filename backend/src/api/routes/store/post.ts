import express, { Router } from "express"

  const router = Router()

  router.use(express.json())
  router.use(express.urlencoded({ extended: true }))

  router.get("/store/posts", async (req, res) => {
    const postService = req.scope.resolve("postService");
    
    res.json(await postService.list())
  })

  router.get("/store/posts/:id", async (req, res) => {
    const { id } = req.params;
    const postService = req.scope.resolve("postService");
    const data = await postService.retrieve(id);
    res.json(data);
  })

  export default router