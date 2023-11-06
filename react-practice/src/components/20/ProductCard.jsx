import { useState } from "react";
import Button from "./Button";
import RoundButton from "./RoundButton";
import Select from "./Select";

import Text from "./Text";
import Rating from "./rating";

const ProductCard = (props) => {
  const [img, setImg] = useState(props.data.imgs.white);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src={img} alt="" width={400} height={400} />
      </div>
      <div>
        <Text type="t1" text="BRAND NAME" />
        <Text type="t2" text={props.data.brandTitle} />
        <div>
          <Rating value={props.data.reviews} />
          <Text type="t3" text={props.data.reviewsCount + " Reviews"} />

          {/* <SocialIcon type="fb" />
          <SocialIcon type="twitter" />
          <SocialIcon type="intagram" /> */}
        </div>
        <Text type="t3" text={props.data.description} />

        <div>
          <Text type="t3" text="Color" />
          <RoundButton
            color="blue"
            onClick={() => setImg(props.data.imgs.blue)}
          />
          <RoundButton
            color="black"
            onClick={() => setImg(props.data.imgs.black)}
          />
          <RoundButton
            color="white"
            onClick={() => setImg(props.data.imgs.white)}
          />
          <Text type="t3" text="Size" />
          <Select list={props.data.sizes} />
        </div>
        {/* <Divider /> */}

        <div>
          <Text type="t4" text={props.data.price + " $"} />
          <Button title="Button" />
          <Button />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
