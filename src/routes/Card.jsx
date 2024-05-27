// import { Button } from "./Button";
// import { useState } from "react";
// import { Card2 } from "./routes/Card2";

export const Card = () => {
  // const [clickApp, setclickApp] = useState(false);

  // const handleClick =(e)=>{
  //   setClick(console.log(e))
  // }

  return (
    <>
      <section className="container-card">
        <div>
          <h1>ESTA ES UNA BUENA CARD</h1>
        </div>
        <div>
          <h3>Definicion de card</h3>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            voluptatem aspernatur laboriosam deleniti hic blanditiis aliquid
            delectus a error dolorem! Mollitia soluta assumenda vero debitis
            corrupti iusto repellat quo obcaecati!
          </p>
        </div>
        <div>
          {/* <Button handleClick={() => setclickApp(true)} /> */}
          {/* {clickApp && <Card2 />} */}
        </div>
      </section>
    </>
  );
};
