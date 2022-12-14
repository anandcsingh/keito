import db from '../../../utils/db';

export default async (req, res) => {
  try {
    console.log("request made");
    console.log(req.body);
    const { address } = req.body;
    const users = await db.collection('users').get();
    const usersData = users.docs.map(user => user.id);

    if (usersData.some(user => user === address)) {
      res.status(400).end();
    console.log("for");

    } else {
      console.log("adding user");

      const { id } = db.collection("users").doc(address).set({
        ...req.body,
        created: new Date().toISOString(),
      });

      res.status(200).json({ id });
    }
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}