export default function ({ name, price ,soldout }) {
  return (
    <>
      {/* {name} {price} */}

      {
        <li>
          {" "}
          {name} {price} {soldout ? "Soldout" : ""}
        </li>
      }


    </>
  
  );
}
