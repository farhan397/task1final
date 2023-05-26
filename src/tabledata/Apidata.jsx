import React from 'react'

const Apidata = () => {
    const baseURL = "https://jsonplaceholder.typicode.com/users";
    const [mydata, setdata] = useState([]);
    const getdata = () => {
        Axios.get(baseURL)
          .then((Response) => {
            setdata(Response.data);
            console.log(mydata);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      const axiospostdata = () => {
        let address = {
          street: "line3",
          suite: "sector2",
          city: "rawalpindi",
          zipcode: "46000",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        };
        let company = {
          name: "belmedex",
          catchPhrase: "billing company",
          bs: "medical billing market",
        };
        Axios.post(baseURL, {
          id: "1",
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address,
          phone: "03128705955",
          website: "www.belmedex.com",
          company,
        })
          .then((Response) => {
            console.log(Response);
          })
          .catch((error) => {
            console.log(error);
          });
      };
  return (
    <div>
       <button class="buttonp" onClick={axiospostdata}>
          post
        </button>
        <button class="buttonn" onClick={getdata}>
          get
        </button>
    </div>
  )
}

export default Apidata
