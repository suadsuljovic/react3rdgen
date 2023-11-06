import Button from "./Button";
import RoundButton from "./RoundButton";
import Select from "./Select";

import Text from "./Text";
import Rating from "./rating";

const ProductCard = (props) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <Text type="t1" text="BRAND NAME" />
        <Text type="t2" text="The Catcher in the Rye" />
        <div>
          <Rating value={4} />
          <Text type="t3" text="4 Reviews" />

          {/* <SocialIcon type="fb" />
          <SocialIcon type="twitter" />
          <SocialIcon type="intagram" /> */}
        </div>
        <Text type="t3" text="..." />

        <div>
          <Text type="t3" text="Color" />
          <RoundButton color="blue" />
          <RoundButton color="black" />
          <RoundButton color="white" />
          <Text type="t3" text="Size" />
          <Select list={["s", "m", "l", "xl"]} />
        </div>
        {/* <Divider /> */}

        <div>
          <Text type="t4" text="48 $" />
          <Button title="Button" />
          <Button />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
