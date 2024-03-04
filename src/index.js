// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import data from "./data.js";

// function App() {
//   return (
//     <div className="container">
//       <h1>Hello World</h1>
//       <p>I am learning React</p>
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   const style = {
//     color: "red",
//     fontSize: 30,
//     textTransform: "uppercase",
//   };
//   return <h1 style={style}>Warteg Mang Opal</h1>;
// }

// function Menu() {
//   const foods = data;
//   const numFoods = foods.length;

//   return (
//     <main className="menu">
//       <h2>Menu Kita</h2>
//       {numFoods > 0 ? (
//         <ul className="foods">
//           {data.map((food) => (
//             <Food foodObj={food} key={food.nama} />
//           ))}
//         </ul>
//       ) : (
//         <p>Kosong Gan</p>
//       )}
//     </main>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();
//   const jamBuka = 5;
//   const jamTutup = 22;
//   const isOpen = hour > jamBuka && hour <= jamTutup;

//   if (isOpen) {
//     return (
//       <footer className="footer">
//         <div>
//           <p>
//             {new Date().getFullYear()} Warung Mang Udin | Jam Buka {jamBuka} -
//             Jam Tutup {jamTutup}
//           </p>
//           <button className="btn">Order</button>
//         </div>
//       </footer>
//     );
//   } else {
//     return (
//       <footer className="footer">
//         <div>
//           <p>Maaf Warung Sudah Tutup</p>
//           <button className="btn" disabled>
//             Order
//           </button>
//         </div>
//       </footer>
//     );
//   }
// }

// function Food(props) {
//   const { nama, deskripsi, harga, foto, stok } = props.foodObj;
//   return (
//     <li className="food">
//       <img src={foto} width={100} height={70} alt={nama} />
//       <div>
//         <h3>{nama}</h3>
//         <p>{deskripsi}</p>
//         <span>{harga}</span>
//       </div>
//     </li>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<App />);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import data from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const style = {
    color: "red",
    fontSize: 30,
    textTransform: "uppercase",
  };
  return <h1 style={style}>Warteg Mang Opal </h1>;
}

function Food(props) {
  const { nama, deskripsi, harga, foto, stok } = props.foodObj;
  return (
    <li className={`food ${stok ? "" : "sold-out"}`}>
      <img src={foto} width={100} height={70} alt={nama} />
      <div>
        <h3>{nama}</h3>
        <p>{deskripsi}</p>
        <span>{stok ? harga : "Habis"}</span>
        <button className="btn">Order</button>
      </div>
    </li>
  );
}
function Menu() {
  const foods = data;
  const numFoods = foods.length;

  return (
    <main className="menu">
      <h2>Menu Warteg Opal 🍚</h2>
      {numFoods > 0 ? (
        <>
          <p>
            Aneka Makanan Indonesia Dan Eropa yang Keren dan Nyaman. Tersedia
            Makanan Segar, Makanan Segar, Makanan Segar, Makanan Segar,
          </p>
          <ul className="foods">
            {data.map((food) => (
              <Food foodObj={food} key={food.nama} />
            ))}
          </ul>
        </>
      ) : (
        <p>Kosong Gan</p>
      )}
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 5;
  const jamTutup = 24;

  const isOpen = hour > jamBuka && hour < jamTutup;
  if (isOpen) {
    return FooterOpenHour({ jamBuka, jamTutup });
  } else {
    return FooterClosedHour();
  }
}

function FooterOpenHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <div>
        <p>
          {new Date().getFullYear()} Warung Mang Opal | Jam Buka {jamBuka} - Jam
          Tutup {jamTutup}
        </p>
      </div>
    </footer>
  );
}

function FooterClosedHour() {
  return (
    <footer className="footer">
      <div>
        <p> ©️{new Date().getFullYear()} Maaf Warung Sudah Tutup</p>
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
