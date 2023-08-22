export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    //console.log(error);
    //console.log(error.errors.map(error => error.path[0]));
    return res.status(400).send(error.errors);
  }
}; 