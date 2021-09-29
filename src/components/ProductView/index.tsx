import "./index.css";
import Product from "../../types/Product";
import { Grid, Paper, Typography } from "@material-ui/core";

interface ProductViewProps {
  product: Product;
}

const ProductView: React.FC<ProductViewProps> = (props) => {
  var listPrice = 0.0;
  if (
    props.product !== undefined &&
    props.product.childSkus !== undefined &&
    props.product.childSkus[0] !== undefined
  ) {
    listPrice = props.product.childSkus[0].listPrice;
  }

  var salePrice = 0.0;
  if (
    props.product !== undefined &&
    props.product.childSkus !== undefined &&
    props.product.childSkus[0] !== undefined
  ) {
    salePrice = props.product.childSkus[0].salePrice;
  }

  var mediumImageUrl = "";
  if (
    props.product !== undefined &&
    props.product.childSkus !== undefined &&
    props.product.childSkus[0] !== undefined
  ) {
    mediumImageUrl = props.product.childSkus[0].mediumImageUrl;
  }

  return (
    <div className="productView">
      <Grid container className="productGrid" spacing={2}>
        <Grid item lg={2}>
          <Paper className="largeImage">
            <img src={mediumImageUrl} alt={props.product.name} />
          </Paper>
        </Grid>
        <Grid item lg={10} container>
          <Grid item lg={12}>
            <Typography className="productName" variant="h1">
              {props.product.name}
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography className="description">
              {props.product.description}
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars crossedout">{listPrice}</Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars">{salePrice}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductView;