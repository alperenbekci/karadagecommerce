import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Basarılı</AlertTitle>
        Siparişiniz alındı — <strong>alışverişe devam edin</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;
