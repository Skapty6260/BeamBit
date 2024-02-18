import { useEffect, useState } from "react";
import config from "../../../../../backend/config/default";

const Author = () => {
  const au = window.location.href.split("/").slice(4).toString();

  const [Audata, setAuData] = useState([{}]);

  const fetchData = async () => {
    try {
      await fetch(`${config.SERVERPATHS.authors}${au}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.status);
          setAuData(data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();

    if (Audata.ok) {
      console.log("fetched");
    } else {
      // show error page
      console.log("error");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-white">
      {
        Audata.length > 0 && console.log(JSON.stringify(Audata[0]))
        // <ul>
        //   {Audata.map((user) => (
        //     <li key={user.id}>{user.name}</li>
        //   ))}
        // </ul>
      }
    </div>
  );
};

export default Author;
