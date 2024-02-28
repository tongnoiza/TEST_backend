import Express from "express";
import cors from "cors";
import User from "./Entity/UserEntity.js";
import bodyparser from "body-parser";
const app = Express();
const port = 3002;
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
app.use(Express.json());

app.post("/", async (req, res) => {
  const { criteria, page } = req.body;
  const itemperpage = 100;
  let resp = await User.findAll({
    where: criteria ,
    limit: itemperpage,
    offset: (page - 1) * itemperpage,
  });
  res.send(resp);
});

app.listen(port, () => {
  console.log(`server run at port ${port}`);
});
