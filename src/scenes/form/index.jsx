import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Шинэ хэрэглэгч бүртгэх" subtitle="Шинэ хэрэглэгч бүртгэх" />

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
                label="Овог"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Овог}
                name="Овог"
                error={!!touched.Овог && !!errors.Овог}
                helperText={touched.Овог && errors.Овог}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Нэр"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Нэр}
                name="Нэр"
                error={!!touched.Нэр && !!errors.Нэр}
                helperText={touched.Нэр && errors.Нэр}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="gmail"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.gmail}
                name="gmail"
                error={!!touched.gmail && !!errors.gmail}
                helperText={touched.gmail && errors.gmail}
                sx={{ gridColumn: "span 4" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Утасныдугаар"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Утасныдугаар}
                name="Утасныдугаар"
                error={!!touched.Утасныдугаар && !!errors.Утасныдугаар}
                helperText={touched.Утасныдугаар && errors.Утасныдугаар}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Албантушаал"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Албантушаал}
                name="Албантушаал"
                error={!!touched.Албантушаал && !!errors.Албантушаал}
                helperText={touched.Албантушаал && errors.Албантушаал}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button href="/team/index.js" type="submit" color="secondary" variant="contained">
                Шинэ хэрэглэгч бүртгэх
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
  Овог: yup.string().required("required"),
  Нэр: yup.string().required("required"),
  gmail: yup.string().required("required"),
  Утасныдугаар: yup.string().required("required"),
  Албантушаал: yup.string().required("required"),
});
const initialValues = {
  Овог: "",
  Нэр: "",
  gmail: "",
  Утасныдугаар: "",
  Албантушаал: "",
};

export default Form;
