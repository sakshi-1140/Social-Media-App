import { useEffect } from "react";
import { useState } from "react";
import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalDataContext = createContext({
  storyData: [],
  addStory: () => {},
  removeStory: () => {},
  handleLogout: () => {},
});

const dummyValue = [
  {
    id: 1,
    title: "Going for vacation",
    body: "going to enjoy my trip in Goa, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia doloremque provident eius aspernatur corporis ea iure porro! Earum, laborum. Sint, quaerat dignissimos quidem obcaecati iusto nisi excepturi vitae, suscipit et laudantium fugit consequatur eaque quos, ipsam officiis delectus aut voluptas!",

    tags: ["vacation", "trips", "friends", "enjoy"],
  },
  {
    id: 2,
    title: "Going for sky diving",
    body: "going to enjoy my trip in Manali, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia doloremque provident eius aspernatur corporis ea iure porro! Earum, laborum. Sint, quaerat dignissimos quidem obcaecati iusto nisi excepturi vitae, suscipit et laudantium fugit consequatur eaque quos, ipsam officiis delectus aut voluptas!",

    tags: ["vacation", "trips", "friends", "thrill"],
  },
];

const reducer = (state, action) => {
  let newState = state;
  switch (action.type) {
    case "delete":
      return (newState = state.filter((item) => item.id !== action.payload.id));
    case "add":
      return (newState = [action.payload.post, ...state]);
    case "set":
      return action.payload.value;
    default:
      return newState;
  }
};

const DataProvider = ({ children }) => {
  const [storyData, dispatch] = useReducer(reducer, dummyValue);
  const navi = useNavigate();

  useEffect(() => {
    dataFetch();
  }, []);

  const [loading, setLoading] = useState(false);

  const dataFetch = async () => {
    setLoading(true);
    const api = "https://dummyjson.com/posts";
    try {
      const response = await fetch(api);
      const DummyData = await response.json();
      setLoading(false);
      dispatch({
        type: "set",
        payload: { value: DummyData.posts },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addStory = (post) => {
    dispatch({
      type: "add",
      payload: {
        post,
      },
    });
  };

  const removeStory = (id) => {
    dispatch({
      type: "delete",
      payload: { id },
    });
  };

  const handleLogout = () => {
    navi("/");
  };

  return (
    <GlobalDataContext.Provider
      value={{ addStory, storyData, removeStory, loading, handleLogout }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};

export default DataProvider;
