import { useState } from "react";
import FormSplit from "./components/FormSplit";
import FriendsList from "./components/FriendsList";
import FriendAddForm from "./components/friendAddForm/FriendAddForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevClick) => !prevClick);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    console.log(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
    setClicked(false);
  };

  // function handleAddFriend(friend)

  const formProps = {
    handleSubmit,
    name,
    setName,
    image,
    setImage,
    clicked,
    handleClick,
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FriendAddForm formProps={formProps} />
      </div>
      <FormSplit />
    </div>
  );
}

export default App;
