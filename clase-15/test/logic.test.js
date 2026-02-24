import { mapUserNames } from "../js/logic.js";

describe("mapUserNames", () => {
  it("devuelve solo los nombres de los usuarios", () => {
    const users = [
      { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
      { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
      { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" },
    ];

    const usernames = ["Leanne Graham", "Ervin Howell", "Clementine Bauch"];

    assert.deepEqual(mapUserNames(users), usernames);

    
  });
});
