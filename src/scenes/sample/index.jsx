import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Sample = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Шинэ дээж бүртгэх" subtitle="Шинэ дээж бүртгэх" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Овог}
                name="ID"
                error={!!touched.ID && !!errors.ID}
                helperText={touched.ID && errors.ID}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Passport_ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Passport_ID}
                name="Passport_ID"
                error={!!touched.Passport_ID && !!errors.Passport_ID}
                helperText={touched.Passport_ID && errors.Passport_ID}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Sample_name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Sample_name}
                name="Sample_name"
                error={!!touched.Sample_name && !!errors.Sample_name}
                helperText={touched.Sample_name && errors.Sample_name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Created_date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Created_date}
                name="Created_date"
                error={!!touched.Created_date && !!errors.Created_date}
                helperText={touched.Created_date && errors.Created_date}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Created_date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Created_date}
                name="Created_date"
                error={!!touched.Created_date && !!errors.Created_date}
                helperText={touched.Created_date && errors.Created_date}
                sx={{ gridColumn: "span 2" }}
              />
             <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Analysis_type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Analysis_type}
                name="Analysis_type"
                error={!!touched.Analysis_type   && !!errors.Analysis_type}
                helperText={touched.Analysis_type && errors.Analysis_type}
                sx={{ gridColumn: "span 2" }}
              />
             
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button href="/invoices/infex.js" type="submit" color="secondary" variant="contained" >
                Шинэ дээж бүртгэх
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  ID: yup.string().required("required"),
  Passport_ID: yup.string().required("required"),
  Sample_number: yup.string().required("required"),
  Sample_name: yup.string().required("required"),
  Created_date: yup.string().required("required"),
  Created_user: yup.string().required("required"),
});
const initialValues = {
  ID: "",
  Passport_ID: "",
  Sample_number: "",
  Sample_name: "",
  Created_date: "",
  Created_user: "",
};

export default Sample;
